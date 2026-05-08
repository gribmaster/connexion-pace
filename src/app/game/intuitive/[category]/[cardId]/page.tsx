import Image from 'next/image'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Category } from '@prisma/client'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { GameTimer } from '@/components/GameTimer'

type Props = {
  params: Promise<{ category: string; cardId: string }>
}

export default async function CardPage({ params }: Props) {
  const { category, cardId } = await params
  const upperCategory = category.toUpperCase() as Category

  const [card, otherCards] = await Promise.all([
    prisma.card.findUnique({ where: { id: cardId } }),
    prisma.card.findMany({
      where: { category: upperCategory, id: { not: cardId } },
      select: { id: true },
    }),
  ])

  if (!card) notFound()

  const otherCardIds = otherCards.map((c) => c.id)

  return (
    <div className="min-h-screen bg-[#1a0a0e] py-10">
      <Container className="flex flex-col gap-6">
        <Card className="flex flex-col gap-5">
          <h1 className="text-xl font-semibold text-[#1a0a0e]">{card.title}</h1>

          {card.imageUrl && (
            <div className="relative h-52 w-full overflow-hidden rounded-2xl">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <p className="text-sm text-[#5a3a3a]">{card.description}</p>
        </Card>

        <GameTimer category={category} otherCardIds={otherCardIds} />
      </Container>
    </div>
  )
}
