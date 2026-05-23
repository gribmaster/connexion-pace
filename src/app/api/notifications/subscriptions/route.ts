import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  // --- Parse and validate body ---
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid push subscription' }, { status: 400 })
  }

  if (
    !body ||
    typeof body !== 'object' ||
    typeof (body as Record<string, unknown>).endpoint !== 'string' ||
    typeof (body as Record<string, unknown>).keys !== 'object' ||
    !(body as Record<string, unknown>).keys ||
    typeof ((body as Record<string, Record<string, unknown>>).keys).p256dh !== 'string' ||
    typeof ((body as Record<string, Record<string, unknown>>).keys).auth !== 'string'
  ) {
    return NextResponse.json({ error: 'Invalid push subscription' }, { status: 400 })
  }

  const { endpoint, keys } = body as { endpoint: string; keys: { p256dh: string; auth: string } }
  const { p256dh, auth } = keys
  const userAgent = request.headers.get('user-agent')

  // --- Resolve userId from session ---
  // TODO: attach subscription to authenticated user when auth helper is centralized.
  let userId: string | null = null

  const devUser = getDevUser()
  if (devUser) {
    // Dev bypass: look up the dev Prisma user by email
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

  // --- Upsert subscription ---
  try {
    const subscription = await prisma.pushSubscription.upsert({
      where: { endpoint },
      update: { p256dh, auth, userAgent, userId },
      create: { endpoint, p256dh, auth, userAgent, userId },
    })

    return NextResponse.json({ ok: true, subscriptionId: subscription.id })
  } catch {
    return NextResponse.json({ error: 'Failed to save push subscription' }, { status: 500 })
  }
}
