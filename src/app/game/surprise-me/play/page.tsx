export const dynamic = 'force-dynamic'

import { SurpriseMePlay } from '@/components/SurpriseMePlay'
import { getUserPremiumStatus } from '@/lib/premium/getUserPremiumStatus'
import { canAccessCard } from '@/lib/premium/cardAccess'
import { getAllCardsCached } from '@/lib/cards/cachedCards'

export default async function SurpriseMePlayPage() {
  // TODO: pass selected locale to server card queries (currently defaulting to ET).
  const [allCards, isPremium] = await Promise.all([
    getAllCardsCached(),
    getUserPremiumStatus(),
  ])

  const cards = allCards.filter((c) =>
    canAccessCard({ category: c.category, isFree: c.isFree }, isPremium)
  )

  return <SurpriseMePlay cards={cards} />
}
