import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'
import { prisma } from '@/lib/prisma'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ProfileClient } from '@/components/ProfileClient'
import { PlanInfo } from './PlanInfo'
import Link from "next/link";


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
    <div className="flex min-h-screen flex-col items-center justify-start gap-5 bg-[#000000] py-5">
      <Container className="flex flex-col gap-5">
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
        <div className="flex flex-col gap-5">
          <h2 className="text-sm font-semibold text-[#D2AF9C]">Your plan information</h2>

          <div className="p-5 border border-[#69584E] rounded-[24px] info-plan-bg">
            <PlanInfo
              isPremium={isPremium}
              cancelEndDate={cancelEndDate?.toISOString() ?? null}
              currentPeriodEnd={sub?.currentPeriodEnd?.toISOString() ?? null}
              isCancelling={isCancelling}
            />
          </div>
        </div>

        {/* Settings / options — client component handles modals + logout */}
        <ProfileClient />
      </Container>
    </div>
  )
}
