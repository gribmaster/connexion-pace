import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'
import { prisma } from '@/lib/prisma'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ProfileClient } from '@/components/ProfileClient'
import Link from "next/link";

const PLAN_BENEFITS = [
  'Unlimited Cards',
  'Extend Time',
  'Flexible Game Duration',
]

export default async function ProfilePage() {
  const devUser = getDevUser()

  let name: string
  let email: string

  if (devUser) {
    name = devUser.user_metadata.full_name
    email = devUser.email
  } else {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      redirect('/login')
    }

    name = user.user_metadata?.name ?? user.user_metadata?.full_name ?? 'User'
    email = user.email ?? ''
  }

  // Resolve plan from DB
  const prismaUser = await prisma.user.findUnique({
    where: { email },
    select: {
      stripeCustomerId: true,
      subscription: {
        select: {
          status: true,
          currentPeriodEnd: true,
          cancelAtPeriodEnd: true,
          cancelAt: true,
          endedAt: true,
        },
      },
    },
  })

  const sub = prismaUser?.subscription
  const isActiveSub = (sub?.status === 'active' || sub?.status === 'trialing')
    && !sub?.endedAt
    && (!sub?.currentPeriodEnd || sub.currentPeriodEnd > new Date())
  const isPremium = isActiveSub
  // cancelAt is how Stripe signals a portal cancellation (cancel_at_period_end stays false)
  const cancelEndDate = sub?.cancelAt ?? (sub?.cancelAtPeriodEnd ? sub.currentPeriodEnd : null)
  const isCancelling = isPremium && cancelEndDate !== null

  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-4 bg-[#000000] py-5">
      <Container className="flex flex-col gap-4">
        <Link href="/game" className="flex items-center">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0.5L0.5 8L8 15.5" stroke="#69584E" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="ml-4 text-[20px] leading-[30px]">Profile page</span>
        </Link>
        {/* User info */}
        <Card className="flex flex-col border-b border-[#69584E80] rounded-none">
          <div className="mb-4">
            <p className="text-[10px] leading-[18px] text-[#69584E] mb-1">Name</p>
            <p className="text-[16px] leading-[24px] text-[#D2AF9C] font-medium">{name}</p>
          </div>
          <div className="mb-4">
            <p className="text-[16px] leading-[24px] text-[#D2AF9C] font-medium">{email}</p>
            <p className="text-[10px] leading-[18px] text-[#69584E] mt-1">(logged in via email)</p>
          </div>
        </Card>

        {/* Plan section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-[#D2AF9C]">Your plan information</h2>

          <div className="flex items-center justify-between rounded-2xl border border-[#69584E]/40 bg-[#69584E]/10 px-5 py-4">
            <div className="flex flex-col gap-0.5">
              <p className="text-[12px] text-[#D2AF9C]/50">Current plan</p>
              <p className="text-[18px] font-semibold text-[#D2AF9C]">
                {isPremium ? 'Premium' : 'Free'}
              </p>
              {isCancelling && cancelEndDate && (
                <p className="text-[11px] text-[#D2AF9C]/40 mt-0.5">
                  Active until{' '}
                  {cancelEndDate.toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              )}
            </div>
            <Link
              href="/premium"
              className="rounded-full border border-[#860119] bg-[#860119]/20 px-4 py-2 text-[13px] font-medium text-[#D2AF9C] transition-colors hover:bg-[#860119]/40"
            >
              {isPremium ? 'Manage' : 'Upgrade'}
            </Link>
          </div>
        </div>

        {/* Settings / options — client component handles modals + logout */}
        <ProfileClient />
      </Container>
    </div>
  )
}
