export const dynamic = 'force-dynamic'

import { prisma } from '@/lib/prisma'
import { Container } from '@/components/ui/Container'
import { GameModeTabs } from '@/components/GameModeTabs'
import { getUserPremiumStatus } from '@/lib/premium/getUserPremiumStatus'

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
  const initialTab = mode === 'surprise' ? 'surprise' : mode === 'journey' ? 'journey' : 'intuitive'

  const [cardsRaw, isPremium] = await Promise.all([
    prisma.card.findMany({
      select: { id: true, category: true, isFree: true },
    }),
    getUserPremiumStatus(),
  ])

  const categoriesWithCounts = categories.map((cat) => ({
    ...cat,
    count: cardsRaw.filter((c) => c.category === cat.value).length,
  }))

  return (
    <div className="max-w-[525px] mx-auto h-screen overflow-y-auto bg-[#000000]">
      <Container className="flex flex-col">
        <GameModeTabs
          categories={categoriesWithCounts}
          cards={cardsRaw}
          initialTab={initialTab}
          isPremium={isPremium}
        />
      </Container>
    </div>
  )
}
