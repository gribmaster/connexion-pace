import { prisma } from '@/lib/prisma'
import { Category } from '@prisma/client'
import { Container } from '@/components/ui/Container'
import { IntuitiveCardSelector } from '@/components/IntuitiveCardSelector'

const categoryInfo: Record<string, string> = {
  CONNECTION: 'Connection cards are focused on emotional closeness and communication.',
  INTIMACY: 'Intimacy cards are focused on vulnerability, trust, and emotional bonding.',
  LOVEMAKING: 'Lovemaking cards are focused on physical connection and romantic energy.',
}

type Props = {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const upperCategory = category.toUpperCase() as Category

  const cards = await prisma.card.findMany({
    where: { category: upperCategory },
    orderBy: { createdAt: 'asc' },
    select: { id: true, title: true, description: true, imageUrl: true },
  })

  return (
    <div className="min-h-screen bg-[#1a0a0e] py-10">
      <Container className="flex flex-col gap-6">
        <IntuitiveCardSelector
          cards={cards}
          category={category}
          categoryInfo={categoryInfo[upperCategory] ?? ''}
        />
      </Container>
    </div>
  )
}
