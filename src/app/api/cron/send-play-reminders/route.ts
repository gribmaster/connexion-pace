// Vercel Hobby only supports once-per-day cron jobs, so this endpoint is not
// registered in vercel.json. Use an external scheduler to call this route on
// your desired interval (e.g. every 1-5 min):
//   GET /api/cron/send-play-reminders
//   Authorization: Bearer CRON_SECRET
import { NextResponse } from 'next/server'
import { NotificationStatus } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { sendWebPushNotification } from '@/lib/notifications/sendWebPush'

export const runtime = 'nodejs'

const BATCH_LIMIT = 50

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

    // --- Fetch due reminders ---
    const dueReminders = await prisma.playReminder.findMany({
      where: {
        status: NotificationStatus.SCHEDULED,
        scheduledAt: { lte: now },
      },
      include: { pushSubscription: true },
      orderBy: { scheduledAt: 'asc' },
      take: BATCH_LIMIT,
    })

    let sent = 0
    let failed = 0

    for (const reminder of dueReminders) {
      // Re-check status to guard against overlapping cron runs.
      // TODO: add PROCESSING status or DB-level locking if overlapping runs become a problem.
      const current = await prisma.playReminder.findUnique({
        where: { id: reminder.id },
        select: { status: true },
      })
      if (!current || current.status !== NotificationStatus.SCHEDULED) continue

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
        await prisma.playReminder.update({
          where: { id: reminder.id },
          data: {
            status: NotificationStatus.SENT,
            sentAt: new Date(),
            failureReason: null,
          },
        })
        sent++
      } else {
        await prisma.playReminder.update({
          where: { id: reminder.id },
          data: {
            status: NotificationStatus.FAILED,
            failedAt: new Date(),
            failureReason: result.error ?? 'Failed to send push notification',
          },
        })
        failed++

        if (result.shouldDeleteSubscription) {
          // TODO: cleanup expired push subscriptions after reviewing cascade behavior.
          // Deleting PushSubscription with onDelete: Cascade would also delete this reminder,
          // so we only mark the reminder FAILED here and leave subscription cleanup for a
          // dedicated maintenance task.
        }
      }
    }

    return NextResponse.json({
      ok: true,
      checked: dueReminders.length,
      sent,
      failed,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to process play reminders' }, { status: 500 })
  }
}
