import Image from 'next/image'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Category } from '@prisma/client'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { GameTimer } from '@/components/GameTimer'
import { getCategoryTheme } from '@/lib/categoryThemes'
import { HtmlContent } from '@/components/HtmlContent'

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
      <Container className="">
        <div className="text-[#D2AF9C] mb-3">
          <div className={`h-[582px] overflow-auto border border-[#69584E] p-4 ${theme.cardContainerClassName} rounded-[24px]`}>
            <h1 className="text-[20px] leading-[26px] mb-4 font-semibold">{card.title}</h1>

            {card.imageUrl && (
              <div className="relative h-[140px] w-full mb-4">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover rounded-[12px]"
                />
              </div>
            )}
            <HtmlContent html={card.description} className="game-card-content" />
          </div>
        </div>
        <GameTimer category={category} cardId={cardId} otherCardIds={otherCardIds} />
      </Container>
    </div>
  )
}
