export const dynamic = 'force-dynamic'

import { notFound, redirect } from 'next/navigation'
import { Category } from '@prisma/client'
import { IntuitiveGameplay } from '@/components/IntuitiveGameplay'
import { getUserPremiumStatus } from '@/lib/premium/getUserPremiumStatus'
import { canAccessCard } from '@/lib/premium/cardAccess'
import { getCardByIdCached, getCardsByCategoryCached } from '@/lib/cards/cachedCards'

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
    getCardByIdCached(cardId),
    getCardsByCategoryCached(typedCategory),
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
