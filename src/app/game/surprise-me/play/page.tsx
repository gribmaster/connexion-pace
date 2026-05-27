import { prisma } from '@/lib/prisma'
import { SurpriseMePlay } from '@/components/SurpriseMePlay'
import { getUserPremiumStatus } from '@/lib/premium/getUserPremiumStatus'
import { canAccessCard } from '@/lib/premium/cardAccess'

export default async function SurpriseMePlayPage() {
  // TODO: pass selected locale to server card queries (currently defaulting to ET).
  const [allCards, isPremium] = await Promise.all([
    prisma.card.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        imageUrl: true,
        category: true,
        isFree: true,
        translations: { select: { locale: true, title: true, description: true, additional: true } },
      },
    }),
    getUserPremiumStatus(),
  ])

  const cards = allCards.filter((c) =>
    canAccessCard({ category: c.category, isFree: c.isFree }, isPremium)
  )

  return <SurpriseMePlay cards={cards} />
}
