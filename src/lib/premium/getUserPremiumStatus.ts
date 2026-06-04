import { unstable_cache } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'
import { hasPremiumAccess } from './cardAccess'

// Cache subscription per email for 60s.
// Safe because Stripe webhook updates the DB directly; a 60s lag on activation is acceptable.
// This prevents every /game request from hitting the single Prisma connection.
const getSubscriptionCached = unstable_cache(
  async (email: string) => {
    const t0 = Date.now()
    const row = await prisma.user.findUnique({
      where: { email },
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
    console.log(`[getSubscriptionCached] CACHE MISS email=${email} db=${Date.now() - t0}ms hasSub=${!!row?.subscription}`)
    return row?.subscription ?? null
  },
  ['user-subscription'],
  { revalidate: 60 }
)

export async function getUserPremiumStatus(): Promise<boolean> {
  const t0 = Date.now()
  const devUser = getDevUser()

  let email: string | null = null

  if (devUser) {
    email = devUser.email
  } else {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    email = user?.email ?? null
  }
  const t1 = Date.now()

  if (!email) {
    console.log(`[getUserPremiumStatus] no email (unauthenticated) | auth=${t1 - t0}ms`)
    return false
  }

  const subscription = await getSubscriptionCached(email)
  const t2 = Date.now()

  console.log(
    `[getUserPremiumStatus] auth=${t1 - t0}ms sub=${t2 - t1}ms total=${t2 - t0}ms` +
    ` hasSub=${!!subscription}`
  )

  return hasPremiumAccess(subscription)
}
