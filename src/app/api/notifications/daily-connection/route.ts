import { NextResponse } from 'next/server'
import { DailyConnectionStatus } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'
import { calculateNextDailyConnectionRun } from '@/lib/notifications/calculateNextDailyConnectionRun'

export const runtime = 'nodejs'

const VALID_INTERVAL_DAYS = [1, 2, 3, 7]
const TIME_OF_DAY_REGEX = /^([01]\d|2[0-3]):[0-5]\d$/

const NOTIF_TITLE = 'Connexion Space'
const NOTIF_BODY = 'Your Daily Connection is ready. Take a moment for each other.'

export async function POST(request: Request) {
  // --- Parse body ---
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid Daily Connection data' }, { status: 400 })
  }

  const b = body as Record<string, unknown>

  // --- Validate shape ---
  if (
    !body ||
    typeof body !== 'object' ||
    typeof b.subscriptionId !== 'string' ||
    typeof b.timeOfDay !== 'string' ||
    typeof b.intervalDays !== 'number' ||
    typeof b.timezone !== 'string'
  ) {
    return NextResponse.json({ error: 'Invalid Daily Connection data' }, { status: 400 })
  }

  const { subscriptionId, timeOfDay, intervalDays, timezone } = b as {
    subscriptionId: string
    timeOfDay: string
    intervalDays: number
    timezone: string
  }

  if (!TIME_OF_DAY_REGEX.test(timeOfDay)) {
    return NextResponse.json({ error: 'Invalid Daily Connection data' }, { status: 400 })
  }

  if (!VALID_INTERVAL_DAYS.includes(intervalDays)) {
    return NextResponse.json({ error: 'Invalid Daily Connection data' }, { status: 400 })
  }

  // --- Verify PushSubscription exists ---
  const pushSubscription = await prisma.pushSubscription.findUnique({
    where: { id: subscriptionId },
  })
  if (!pushSubscription) {
    return NextResponse.json({ error: 'Push subscription not found' }, { status: 404 })
  }

  // --- Resolve userId from session ---
  let userId: string | null = null

  const devUser = getDevUser()
  if (devUser) {
    const prismaUser = await prisma.user.findUnique({ where: { email: devUser.email } })
    userId = prismaUser?.id ?? null
  } else {
    try {
      const supabase = await createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user?.email) {
        const prismaUser = await prisma.user.findUnique({ where: { email: user.email } })
        userId = prismaUser?.id ?? null
      }
    } catch {
      // Could not resolve session — proceed with userId null
    }
  }

  // --- Calculate nextRunAt ---
  const nextRunAt = calculateNextDailyConnectionRun({ timeOfDay, timezone, intervalDays })

  try {
    // --- Upsert: update existing ACTIVE rule or create new one ---
    const existing = await prisma.dailyConnectionReminder.findFirst({
      where: {
        pushSubscriptionId: subscriptionId,
        status: DailyConnectionStatus.ACTIVE,
      },
      orderBy: { createdAt: 'desc' },
    })

    let reminder
    if (existing) {
      reminder = await prisma.dailyConnectionReminder.update({
        where: { id: existing.id },
        data: {
          userId,
          timeOfDay,
          timezone,
          intervalDays,
          nextRunAt,
          title: NOTIF_TITLE,
          body: NOTIF_BODY,
          status: DailyConnectionStatus.ACTIVE,
        },
      })
    } else {
      // Also deactivate any PAUSED/CANCELLED leftovers to keep things clean
      await prisma.dailyConnectionReminder.updateMany({
        where: {
          pushSubscriptionId: subscriptionId,
          status: { in: [DailyConnectionStatus.PAUSED, DailyConnectionStatus.CANCELLED] },
        },
        data: { status: DailyConnectionStatus.CANCELLED },
      })

      reminder = await prisma.dailyConnectionReminder.create({
        data: {
          userId,
          pushSubscriptionId: subscriptionId,
          timeOfDay,
          timezone,
          intervalDays,
          nextRunAt,
          title: NOTIF_TITLE,
          body: NOTIF_BODY,
          status: DailyConnectionStatus.ACTIVE,
        },
      })
    }

    return NextResponse.json({
      ok: true,
      dailyConnectionReminderId: reminder.id,
      nextRunAt: reminder.nextRunAt,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to save Daily Connection reminder' }, { status: 500 })
  }
}
