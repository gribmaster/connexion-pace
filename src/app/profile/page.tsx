import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'
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
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold text-[#D2AF9C] mb-5">Your plan information</h2>

          {/* Plan tabs */}
          <div className="flex gap-2 hidden">
            <button className="rounded-full border border-[#860119] bg-[#860119] px-4 py-2 text-sm font-medium text-[#D2AF9C]">
              Monthly
            </button>
            <button
              disabled
              className="rounded-full border border-[#D2AF9C]/20 px-4 py-2 text-sm font-medium text-[#D2AF9C]/30 cursor-not-allowed"
            >
              Quarterly
            </button>
            <button
              disabled
              className="rounded-full border border-[#D2AF9C]/20 px-4 py-2 text-sm font-medium text-[#D2AF9C]/30 cursor-not-allowed"
            >
              Yearly
            </button>
          </div>

          {/* Monthly plan card */}
          <Card className="hidden">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-base font-semibold text-[#1a0a0e]">Monthly</span>
                <span className="text-2xl font-bold text-[#860119]">$9.99</span>
              </div>
              <Button disabled variant="primary" className="w-auto px-5 py-2 opacity-50 cursor-not-allowed">
                Try now
              </Button>
            </div>
            <ul className="flex flex-col gap-2">
              {PLAN_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-[#5a3a3a]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#860119]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </Card>
          <img src="/img/plan-placeholder.svg" alt=""/>
        </div>

        {/* Settings / options — client component handles modals + logout */}
        <ProfileClient />
      </Container>
    </div>
  )
}
