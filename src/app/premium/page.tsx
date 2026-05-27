import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'
import { prisma } from '@/lib/prisma'
import { Container } from '@/components/ui/Container'
import { PremiumClient } from './PremiumClient'

async function getUserSubscription() {
  const devUser = getDevUser()

  let prismaUser: {
    id: string
    stripeCustomerId: string | null
    subscription: {
      status: string
      currentPeriodEnd: Date | null
      cancelAtPeriodEnd: boolean
      cancelAt: Date | null
      canceledAt: Date | null
      endedAt: Date | null
    } | null
  } | null = null

  if (devUser) {
    prismaUser = await prisma.user.findUnique({
      where: { email: devUser.email },
      select: {
        id: true,
        stripeCustomerId: true,
        subscription: {
          select: {
            status: true,
            currentPeriodEnd: true,
            cancelAtPeriodEnd: true,
            cancelAt: true,
            canceledAt: true,
            endedAt: true,
          },
        },
      },
    })
  } else {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    prismaUser = await prisma.user.findUnique({
      where: { email: user.email! },
      select: {
        id: true,
        stripeCustomerId: true,
        subscription: {
          select: {
            status: true,
            currentPeriodEnd: true,
            cancelAtPeriodEnd: true,
            cancelAt: true,
            canceledAt: true,
            endedAt: true,
          },
        },
      },
    })
  }

  return prismaUser
}

function isPremiumActive(sub: {
  status: string
  currentPeriodEnd: Date | null
  endedAt: Date | null
} | null): boolean {
  if (!sub) return false
  if (sub.status !== 'active' && sub.status !== 'trialing') return false
  if (sub.endedAt) return false
  // If currentPeriodEnd is known and already passed, not active
  if (sub.currentPeriodEnd && sub.currentPeriodEnd < new Date()) return false
  return true
}

// The effective end date for a cancelling subscription:
// Stripe uses cancel_at (not cancel_at_period_end) for portal cancellations.
function getCancelEndDate(sub: {
  cancelAt: Date | null
  currentPeriodEnd: Date | null
  cancelAtPeriodEnd: boolean
}): Date | null {
  return sub.cancelAt ?? (sub.cancelAtPeriodEnd ? sub.currentPeriodEnd : null)
}

export default async function PremiumPage() {
  const devUser = getDevUser()

  if (!devUser) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) redirect('/login')
  }

  const userData = await getUserSubscription()
  const subscription = userData?.subscription ?? null
  const hasCustomer = !!userData?.stripeCustomerId

  const isActive = isPremiumActive(subscription)
  const cancelEndDate = subscription ? getCancelEndDate(subscription) : null
  const isCancelling = isActive && cancelEndDate !== null

  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-4 bg-[#000000] py-5">
      <Container className="flex flex-col gap-4">
        <Link href="/profile" className="flex items-center">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0.5L0.5 8L8 15.5" stroke="#69584E" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="ml-4 text-[20px] leading-[30px]">Premium</span>
        </Link>

        <div className="flex flex-col gap-6 pt-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] leading-[36px] font-semibold text-[#D2AF9C]">
              Connexion Space Premium
            </h1>
            <p className="text-[16px] leading-[26px] text-[#D2AF9C]/70">
              Unlock the full experience — unlimited cards, extended timer, and all future features.
            </p>
          </div>

          {isActive && subscription && (
            <div className="rounded-2xl border border-[#69584E]/40 bg-[#69584E]/10 px-5 py-4">
              <p className="text-[14px] font-semibold text-[#D2AF9C] mb-1">
                {isCancelling ? 'Cancellation scheduled' : 'Premium active'}
              </p>
              <p className="text-[12px] text-[#D2AF9C]/50">
                {isCancelling && cancelEndDate
                  ? `Active until ${cancelEndDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}`
                  : subscription.currentPeriodEnd
                    ? `Renews ${subscription.currentPeriodEnd.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}`
                    : 'Active'
                }
              </p>
            </div>
          )}

          <PremiumClient isActive={isActive} hasCustomer={hasCustomer} />
        </div>
      </Container>
    </div>
  )
}
