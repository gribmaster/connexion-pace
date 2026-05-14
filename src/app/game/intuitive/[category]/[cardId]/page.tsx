import Image from 'next/image'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Category } from '@prisma/client'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { GameTimer } from '@/components/GameTimer'
import { getCategoryTheme } from '@/lib/categoryThemes'

const VALID_CATEGORIES = ['CONNECTION', 'INTIMACY', 'LOVEMAKING']

type Props = {
  params: Promise<{ category: string; cardId: string }>
}

export default async function CardPage({ params }: Props) {
  const { category, cardId } = await params
  const upperCategory = category.toUpperCase()

  if (!VALID_CATEGORIES.includes(upperCategory)) notFound()

  const typedCategory = upperCategory as Category

  const [card, otherCards] = await Promise.all([
    prisma.card.findUnique({ where: { id: cardId } }),
    prisma.card.findMany({
      where: { category: typedCategory, id: { not: cardId } },
      select: { id: true },
    }),
  ])

  if (!card || card.category !== typedCategory) notFound()

  const otherCardIds = otherCards.map((c) => c.id)
  const theme = getCategoryTheme(upperCategory)

  return (
    <div className={`min-h-screen py-10 ${theme.screenClassName}`}>
      <Container className="flex flex-col gap-6">
        <Card className={`flex flex-col gap-5 ${theme.cardContainerClassName}`}>
          <h1 className="text-xl font-semibold text-[#D2AF9C]">{card.title}</h1>

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

        <GameTimer category={category} cardId={cardId} otherCardIds={otherCardIds} />
      </Container>
    </div>
  )
}
