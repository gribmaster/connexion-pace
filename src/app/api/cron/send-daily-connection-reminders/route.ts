// Vercel Hobby only supports once-per-day cron jobs, so this endpoint is not
// registered in vercel.json. Use an external scheduler to call this route on
// your desired interval (e.g. every 1-5 min):
//   GET /api/cron/send-daily-connection-reminders
//   Authorization: Bearer CRON_SECRET
import { NextResponse } from 'next/server'
import { DailyConnectionStatus } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { sendWebPushNotification } from '@/lib/notifications/sendWebPush'
import { calculateNextDailyConnectionRun } from '@/lib/notifications/calculateNextDailyConnectionRun'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const BATCH_LIMIT = 50
const RETRY_DELAY_MS = 15 * 60 * 1000 // 15 minutes

export async function GET(request: Request) {
  // --- Authorization ---
  const cronSecret = process.env.CRON_SECRET

  if (cronSecret) {
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  } else if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Missing CRON_SECRET' }, { status: 500 })
  }
  // Development without CRON_SECRET: allow through for local testing.

  try {
    const now = new Date()

    // --- Fetch due ACTIVE reminders ---
    const dueReminders = await prisma.dailyConnectionReminder.findMany({
      where: {
        status: DailyConnectionStatus.ACTIVE,
        nextRunAt: { lte: now },
      },
      include: { pushSubscription: true },
      orderBy: { nextRunAt: 'asc' },
      take: BATCH_LIMIT,
    })

    let sent = 0
    let failed = 0
    let paused = 0

    for (const reminder of dueReminders) {
      // Re-check to guard against overlapping cron runs.
      // TODO: add PROCESSING status or locking if overlapping cron executions become a problem.
      const current = await prisma.dailyConnectionReminder.findUnique({
        where: { id: reminder.id },
        select: { status: true, nextRunAt: true },
      })
      if (!current || current.status !== DailyConnectionStatus.ACTIVE || current.nextRunAt > now) {
        continue
      }

      const result = await sendWebPushNotification({
        subscription: {
          endpoint: reminder.pushSubscription.endpoint,
          p256dh: reminder.pushSubscription.p256dh,
          auth: reminder.pushSubscription.auth,
        },
        payload: {
          title: reminder.title,
          body: reminder.body,
          url: '/welcome',
        },
      })

      if (result.ok) {
        // Advance nextRunAt by intervalDays, anchored to the scheduled time (not now)
        // so drift doesn't accumulate over repeated sends.
        // TODO: verify DST/timezone edge cases before final production release.
        const nextRunAt = calculateNextDailyConnectionRun({
          timeOfDay: reminder.timeOfDay,
          timezone: reminder.timezone ?? 'UTC',
          intervalDays: reminder.intervalDays,
          fromDate: reminder.nextRunAt,
        })

        await prisma.dailyConnectionReminder.update({
          where: { id: reminder.id },
          data: {
            lastSentAt: now,
            nextRunAt,
            // status stays ACTIVE
          },
        })
        sent++
      } else if (result.shouldDeleteSubscription) {
        // Subscription is expired/invalid — pause the rule.
        // TODO: implement expired push subscription cleanup.
        await prisma.dailyConnectionReminder.update({
          where: { id: reminder.id },
          data: { status: DailyConnectionStatus.PAUSED },
        })
        paused++
      } else {
        // Temporary failure — retry after 15 minutes instead of spinning on every cron tick.
        await prisma.dailyConnectionReminder.update({
          where: { id: reminder.id },
          data: { nextRunAt: new Date(now.getTime() + RETRY_DELAY_MS) },
        })
        failed++
      }
    }

    return NextResponse.json({
      ok: true,
      checked: dueReminders.length,
      sent,
      failed,
      paused,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to process Daily Connection reminders' }, { status: 500 })
  }
}
