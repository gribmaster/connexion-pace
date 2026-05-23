import { NextResponse } from 'next/server'
import { NotificationStatus } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'

export const runtime = 'nodejs'

const NOTIF_TITLE = 'Connexion Space'
const NOTIF_BODY = 'Your play time is here. Take a moment to reconnect.'

export async function POST(request: Request) {
  // --- Parse body ---
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid reminder data' }, { status: 400 })
  }

  const b = body as Record<string, unknown>

  // --- Validate shape ---
  if (!body || typeof body !== 'object' || typeof b.subscriptionId !== 'string' || typeof b.scheduledAt !== 'string') {
    return NextResponse.json({ error: 'Invalid reminder data' }, { status: 400 })
  }

  const subscriptionId = b.subscriptionId
  const timezone = typeof b.timezone === 'string' ? b.timezone : null

  // --- Validate scheduledAt is a future datetime ---
  const scheduledAt = new Date(b.scheduledAt)
  if (isNaN(scheduledAt.getTime()) || scheduledAt <= new Date()) {
    return NextResponse.json({ error: 'Invalid reminder data' }, { status: 400 })
  }

  // --- Verify PushSubscription exists ---
  const pushSubscription = await prisma.pushSubscription.findUnique({
    where: { id: subscriptionId },
  })
  if (!pushSubscription) {
    return NextResponse.json({ error: 'Push subscription not found' }, { status: 404 })
  }

  // --- Resolve userId from session (same pattern as subscriptions route) ---
  // TODO: attach reminder to authenticated user when auth helper is centralized.
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
    // --- Cancel any existing future SCHEDULED reminder for this subscription ---
    // Prevents stacking multiple "choose next game" reminders from repeated edits.
    await prisma.playReminder.updateMany({
      where: {
        pushSubscriptionId: subscriptionId,
        status: NotificationStatus.SCHEDULED,
        scheduledAt: { gt: new Date() },
      },
      data: { status: NotificationStatus.CANCELLED },
    })

    // --- Create new PlayReminder ---
    const reminder = await prisma.playReminder.create({
      data: {
        userId,
        pushSubscriptionId: subscriptionId,
        scheduledAt,
        timezone,
        title: NOTIF_TITLE,
        body: NOTIF_BODY,
        status: NotificationStatus.SCHEDULED,
      },
    })

    return NextResponse.json({ ok: true, reminderId: reminder.id })
  } catch {
    return NextResponse.json({ error: 'Failed to create reminder' }, { status: 500 })
  }
}
