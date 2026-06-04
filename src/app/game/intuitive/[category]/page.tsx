export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Category } from '@prisma/client'
import { Container } from '@/components/ui/Container'
import { IntuitiveCardSelector } from '@/components/IntuitiveCardSelector'
import { getCategoryTheme } from '@/lib/categoryThemes'
import { getUserPremiumStatus } from '@/lib/premium/getUserPremiumStatus'
import { canAccessCard } from '@/lib/premium/cardAccess'
import { getCardsByCategoryCached } from '@/lib/cards/cachedCards'

const VALID_CATEGORIES = ['CONNECTION', 'INTIMACY', 'LOVEMAKING']


type Props = {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const upperCategory = category.toUpperCase()

  if (!VALID_CATEGORIES.includes(upperCategory)) notFound()

  // TODO: pass selected locale to server card queries (currently defaulting to ET).
  const [cards, isPremium] = await Promise.all([
    getCardsByCategoryCached(upperCategory as Category),
    getUserPremiumStatus(),
  ])

  const theme = getCategoryTheme(upperCategory)

  const sortedCards = isPremium || upperCategory === 'CONNECTION'
    ? cards
    : [...cards].sort((a, b) =>
        Number(canAccessCard(b, isPremium)) - Number(canAccessCard(a, isPremium))
      )

  if (cards.length === 0) {
    return (
      <div className={`min-h-screen py-10 ${theme.screenClassName}`}>
        <Container className="flex flex-col gap-6">
          <Link href="/game/intuitive" className="text-sm text-[#D2AF9C] hover:underline">
            ← Back
          </Link>
          <p className="text-[#D2AF9C] text-center">No cards available yet</p>
        </Container>
      </div>
    )
  }

  return (
    <div className={`min-h-screen py-10 ${theme.screenClassName}`}>
      <Container className="flex flex-col">
        <IntuitiveCardSelector
          cards={sortedCards}
          category={category}
          theme={theme}
          isPremium={isPremium}
        />
      </Container>
    </div>
  )
}
