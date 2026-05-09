import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ProfileClient } from '@/components/ProfileClient'

const PLAN_BENEFITS = [
  'Unlimited Cards',
  'Extend Time',
  'Flexible Game Duration',
]

export default async function ProfilePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const name = user.user_metadata?.name ?? user.user_metadata?.full_name ?? 'User'
  const email = user.email ?? ''

  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-4 bg-[#1a0a0e] px-4 py-10">
      <Container className="flex flex-col gap-4">
        {/* User info */}
        <Card className="flex flex-col gap-1">
          <p className="text-sm font-medium text-[#1a0a0e]">Name: {name}</p>
          <p className="text-sm text-[#5a3a3a]">{email}</p>
          <p className="text-xs text-[#5a3a3a]/60">(logged in via email)</p>
        </Card>

        {/* Plan section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-[#D2AF9C] px-1">Your plan information</h2>

          {/* Plan tabs */}
          <div className="flex gap-2">
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
          <Card className="flex flex-col gap-4">
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
        </div>

        {/* Settings / options — client component handles modals + logout */}
        <ProfileClient />
      </Container>
    </div>
  )
}
