export const dynamic = 'force-dynamic'

import { Container } from '@/components/ui/Container'
import { JourneyPreview } from '@/components/JourneyPreview'
import { getAllCardsCached } from '@/lib/cards/cachedCards'

export default async function JourneyPreviewPage() {
  // TODO: pass selected locale to server card queries (currently defaulting to ET).
  const cards = await getAllCardsCached()

  return (
    <div className="min-h-screen bg-[#000000]">
      <Container className="flex flex-col">
        <JourneyPreview cards={cards} />
      </Container>
    </div>
  )
}
