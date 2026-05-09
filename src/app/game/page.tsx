import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { TimerSettings } from '@/components/TimerSettings'
import { LogoutButton } from '@/components/LogoutButton'
import { UserCircleIcon } from '@/components/icons/UserCircleIcon'

const categories = [
  { label: 'Connection', value: 'CONNECTION' },
  { label: 'Intimacy', value: 'INTIMACY' },
  { label: 'Lovemaking', value: 'LOVEMAKING' },
] as const

export default async function GamePage() {
  const counts = await Promise.all(
    categories.map(({ value }) =>
      prisma.card.count({ where: { category: value } })
    )
  )

  const categoriesWithCounts = categories.map((cat, i) => ({
    ...cat,
    count: counts[i],
  }))

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#1a0a0e] px-4 py-10">
      <Container className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-sm font-medium text-[#D2AF9C]">Choose your cards</h1>
          <div className="flex items-center gap-2">
            <Link href="/profile" aria-label="Profile">
              <UserCircleIcon className="h-6 w-6 text-[#D2AF9C]/60 hover:text-[#D2AF9C] transition-colors" />
            </Link>
            <LogoutButton />
          </div>
        </div>
        {/* Mode tabs */}
        <div className="flex gap-2">
          <button className="rounded-full border border-[#860119] bg-[#860119] px-4 py-2 text-sm font-medium text-[#D2AF9C]">
            Intuitive
          </button>
          <button
            disabled
            className="rounded-full border border-[#D2AF9C]/20 px-4 py-2 text-sm font-medium text-[#D2AF9C]/30 cursor-not-allowed"
          >
            Journey
          </button>
          <button
            disabled
            className="rounded-full border border-[#D2AF9C]/20 px-4 py-2 text-sm font-medium text-[#D2AF9C]/30 cursor-not-allowed"
          >
            Surprise me
          </button>
        </div>

        {/* Category cards */}
        <Card className="flex flex-col gap-3">
          {categoriesWithCounts.map(({ label, value, count }) => (
            <div
              key={value}
              className="flex items-center justify-between gap-4 rounded-xl border border-[#D2AF9C]/20 px-4 py-3"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[#1a0a0e]">{label}</span>
                <span className="text-xs text-[#5a3a3a]">{count} cards</span>
              </div>
              <Link href={`/game/intuitive/${value}`}>
                <Button variant="primary" className="w-auto px-5 py-2">
                  Choose
                </Button>
              </Link>
            </div>
          ))}
        </Card>

        {/* Timer settings */}
        <TimerSettings />
      </Container>
    </div>
  )
}
