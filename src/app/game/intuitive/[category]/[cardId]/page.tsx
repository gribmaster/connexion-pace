import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Category } from '@prisma/client'
import { IntuitiveGameplay } from '@/components/IntuitiveGameplay'

const VALID_CATEGORIES = ['CONNECTION', 'INTIMACY', 'LOVEMAKING']

type Props = {
  params: Promise<{ category: string; cardId: string }>
}

export default async function CardPage({ params }: Props) {
  const { category, cardId } = await params
  const upperCategory = category.toUpperCase()

  if (!VALID_CATEGORIES.includes(upperCategory)) notFound()

  const typedCategory = upperCategory as Category

  // TODO: pass selected locale to server card queries (currently defaulting to ET).
  const [card, allCategoryCards] = await Promise.all([
    prisma.card.findUnique({
      where: { id: cardId },
      include: { translations: true },
    }),
    prisma.card.findMany({
      where: { category: typedCategory },
      select: {
        id: true,
        title: true,
        description: true,
        imageUrl: true,
        translations: { select: { locale: true, title: true, description: true, additional: true } },
      },
    }),
  ])

  if (!card || card.category !== typedCategory) notFound()

  return (
    <IntuitiveGameplay
      category={upperCategory}
      initialCardId={cardId}
      allCards={allCategoryCards}
    />
  )
}
