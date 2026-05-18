import { prisma } from '@/lib/prisma'
import { Container } from '@/components/ui/Container'
import { SurpriseMeSelector } from '@/components/SurpriseMeSelector'

const categories = [
  { label: 'Connection', value: 'CONNECTION' },
  { label: 'Intimacy', value: 'INTIMACY' },
  { label: 'Lovemaking', value: 'LOVEMAKING' },
] as const

export default async function SurpriseMePage() {
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
    <div className="flex flex-col items-center max-w-[525px] mx-auto min-h-[800px] bg-[#000000]">
      <Container className="flex flex-col pt-10">
        <div className="flex items-center justify-between mb-[10px]">
          <h1 className="font-semibold text-[20px] leading-[100%]">Surprise me</h1>
        </div>
        <div className="font-normal text-[16px] leading-[150%] opacity-70 mb-5">
          Choose how many cards from each category to include in your session.
        </div>
        <SurpriseMeSelector categories={categoriesWithCounts} />
      </Container>
    </div>
  )
}
