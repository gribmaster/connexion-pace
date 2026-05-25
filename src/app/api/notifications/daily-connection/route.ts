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

  // Shared update payload for reuse across branches below.
  const updateData = {
    userId,
    timeOfDay,
    timezone,
    intervalDays,
    nextRunAt,
    title: NOTIF_TITLE,
    body: NOTIF_BODY,
    status: DailyConnectionStatus.ACTIVE,
  }

  // Matching priority for same subscription:
  //   1. Existing ACTIVE reminder  — update in place
  //   2. Existing PAUSED reminder  — reactivate in place (normal switch off→on flow)
  //   3. No match                  — create new row
  // CANCELLED is reserved for explicit deletion/removal, not the normal switch off/on cycle.
  // TODO: cleanup duplicate DailyConnectionReminder rows if needed.
  try {
    const baseWhere = { pushSubscriptionId: subscriptionId }

    const activeReminder = await prisma.dailyConnectionReminder.findFirst({
      where: { ...baseWhere, status: DailyConnectionStatus.ACTIVE },
      orderBy: { updatedAt: 'desc' },
    })

    let reminder
    if (activeReminder) {
      reminder = await prisma.dailyConnectionReminder.update({
        where: { id: activeReminder.id },
        data: updateData,
      })
    } else {
      const pausedReminder = await prisma.dailyConnectionReminder.findFirst({
        where: { ...baseWhere, status: DailyConnectionStatus.PAUSED },
        orderBy: { updatedAt: 'desc' },
      })

      if (pausedReminder) {
        reminder = await prisma.dailyConnectionReminder.update({
          where: { id: pausedReminder.id },
          data: updateData,
        })
      } else {
        reminder = await prisma.dailyConnectionReminder.create({
          data: { pushSubscriptionId: subscriptionId, ...updateData },
        })
      }
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

export async function PATCH(request: Request) {
  // --- Parse body ---
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid Daily Connection update' }, { status: 400 })
  }

  const b = body as Record<string, unknown>

  // --- Validate shape ---
  if (
    !body ||
    typeof body !== 'object' ||
    typeof b.dailyConnectionReminderId !== 'string' ||
    b.enabled !== false
  ) {
    return NextResponse.json({ error: 'Invalid Daily Connection update' }, { status: 400 })
  }

  const { dailyConnectionReminderId } = b as { dailyConnectionReminderId: string }

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

  try {
    // --- Find reminder ---
    const reminder = await prisma.dailyConnectionReminder.findUnique({
      where: { id: dailyConnectionReminderId },
    })

    if (!reminder) {
      return NextResponse.json({ error: 'Daily Connection reminder not found' }, { status: 404 })
    }

    // --- Ownership check ---
    if (reminder.userId && userId && reminder.userId !== userId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // --- Pause ---
    const updated = await prisma.dailyConnectionReminder.update({
      where: { id: dailyConnectionReminderId },
      data: { status: DailyConnectionStatus.PAUSED },
    })

    return NextResponse.json({
      ok: true,
      dailyConnectionReminderId: updated.id,
      status: 'PAUSED',
    })
  } catch {
    return NextResponse.json({ error: 'Failed to update Daily Connection reminder' }, { status: 500 })
  }
}
