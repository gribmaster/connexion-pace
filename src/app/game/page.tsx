import { prisma } from '@/lib/prisma'
import { Container } from '@/components/ui/Container'
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
  const initialTab = mode === 'surprise' ? 'surprise' : mode === 'journey' ? 'journey' : 'intuitive'

  const cardsRaw = await prisma.card.findMany({
    select: { id: true, category: true },
  })

  const categoriesWithCounts = categories.map((cat) => ({
    ...cat,
    count: cardsRaw.filter((c) => c.category === cat.value).length,
  }))

  return (
    <div className="max-w-[525px] mx-auto h-[800px] overflow-y-auto bg-[#000000]">
      <Container className="flex flex-col">
        <GameModeTabs categories={categoriesWithCounts} cards={cardsRaw} initialTab={initialTab} />
      </Container>
    </div>
  )
}
