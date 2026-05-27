import { notFound, redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Category } from '@prisma/client'
import { IntuitiveGameplay } from '@/components/IntuitiveGameplay'
import { getUserPremiumStatus } from '@/lib/premium/getUserPremiumStatus'
import { canAccessCard } from '@/lib/premium/cardAccess'

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
  const [card, allCategoryCards, isPremium] = await Promise.all([
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
        isFree: true,
        translations: { select: { locale: true, title: true, description: true, additional: true } },
      },
    }),
    getUserPremiumStatus(),
  ])

  if (!card || card.category !== typedCategory) notFound()

  if (!canAccessCard({ category: card.category, isFree: card.isFree }, isPremium)) {
    redirect('/profile')
  }

  return (
    <IntuitiveGameplay
      category={upperCategory}
      initialCardId={cardId}
      allCards={allCategoryCards}
    />
  )
}
