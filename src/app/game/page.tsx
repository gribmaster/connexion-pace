import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Container } from '@/components/ui/Container'
import { TimerSettings } from '@/components/TimerSettings'
import { UserCircleIcon } from '@/components/icons/UserCircleIcon'
import { InfoCircleIcon } from "@/components/icons/InfoCircleIcon"
import { GameModeTabs } from '@/components/GameModeTabs'

const categories = [
  { label: 'Connection', value: 'CONNECTION' },
  { label: 'Intimacy', value: 'INTIMACY' },
  { label: 'Lovemaking', value: 'LOVEMAKING' },
] as const

export default async function GamePage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>
}) {
  const { mode } = await searchParams
  const initialTab = mode === 'surprise' ? 'surprise' : 'intuitive'

  const cardsRaw = await prisma.card.findMany({
    select: { id: true, category: true },
  })

  const categoriesWithCounts = categories.map((cat) => ({
    ...cat,
    count: cardsRaw.filter((c) => c.category === cat.value).length,
  }))

  return (
    <div className="flex flex-col items-center w-[375px] mx-auto h-[800px] bg-[#000000]">
      <Container className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center font-semibold text-[20px] leading-[100%]">
            <span>Choose your cards</span>
            <div className="ml-1">
              <InfoCircleIcon />
            </div>
          </h1>
          <div className="flex items-center">
            <Link href="/profile" aria-label="Profile">
              <UserCircleIcon className="h-6 w-6 text-[#D2AF9C]/60 hover:text-[#D2AF9C] transition-colors" />
            </Link>
            {/*<LogoutButton />*/}
          </div>
        </div>
        <div className="font-normal text-[16px] leading-[150%] mt-[10px] opacity-70">Choose the number of cards and set the time for each category before starting your session.</div>
        <GameModeTabs categories={categoriesWithCounts} cards={cardsRaw} initialTab={initialTab} />

        {/* Timer settings */}
        <TimerSettings />
      </Container>
    </div>
  )
}
