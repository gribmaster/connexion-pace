// Temporary debug endpoint — remove before production hardening.
// Returns card counts and timing only. No auth, no user data.
import { NextResponse } from 'next/server'
import { getAllCardsMinimalCached } from '@/lib/cards/cachedCards'
import { prisma } from '@/lib/prisma'
import { isDevAuthBypassEnabled } from '@/lib/devAuth'

export const dynamic = 'force-dynamic'

export async function GET() {
  const t0 = Date.now()

  // Phase 1: card counts (same helper as /game)
  const t1 = Date.now()
  const cards = await getAllCardsMinimalCached()
  const t2 = Date.now()

  // Phase 2: subscription query for dev@local.test (same query shape as getUserPremiumStatus)
  // Only runs when dev bypass is active so we can measure the DB round-trip cost
  let subscriptionMs: number | null = null
  let subscriptionFound: boolean | null = null
  if (isDevAuthBypassEnabled()) {
    const t3 = Date.now()
    const row = await prisma.user.findUnique({
      where: { email: 'dev@local.test' },
      select: {
        subscription: {
          select: {
            status: true,
            currentPeriodEnd: true,
            cancelAt: true,
            cancelAtPeriodEnd: true,
            endedAt: true,
            stripePriceId: true,
          },
        },
      },
    })
    const t4 = Date.now()
    subscriptionMs = t4 - t3
    subscriptionFound = !!row?.subscription
  }

  const counts = { CONNECTION: 0, INTIMACY: 0, LOVEMAKING: 0 }
  for (const c of cards) {
    if (c.category === 'CONNECTION') counts.CONNECTION++
    else if (c.category === 'INTIMACY') counts.INTIMACY++
    else if (c.category === 'LOVEMAKING') counts.LOVEMAKING++
  }

  return NextResponse.json({
    ok: true,
    timings: {
      cardCountsMs: t2 - t1,
      subscriptionMs,
      totalMs: Date.now() - t0,
    },
    counts,
    debug: {
      devBypass: isDevAuthBypassEnabled(),
      subscriptionFound,
    },
  })
}
