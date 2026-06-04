export const dynamic = 'force-dynamic'

import { JourneyPlay } from '@/components/JourneyPlay'
import { getAllCardsCached } from '@/lib/cards/cachedCards'

export default async function JourneyPlayPage() {
  // TODO: pass selected locale to server card queries (currently defaulting to ET).
  const cards = await getAllCardsCached()

  return <JourneyPlay cards={cards} />
}
