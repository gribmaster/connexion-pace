export const dynamic = 'force-dynamic'

import { prisma } from '@/lib/prisma'
import { Container } from '@/components/ui/Container'
import { JourneyPreview } from '@/components/JourneyPreview'

export default async function JourneyPreviewPage() {
  // TODO: pass selected locale to server card queries (currently defaulting to ET).
  const cards = await prisma.card.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      additional: true,
      category: true,
      translations: { select: { locale: true, title: true, description: true, additional: true } },
    },
  })

  return (
    <div className="min-h-screen bg-[#000000]">
      <Container className="flex flex-col">
        <JourneyPreview cards={cards} />
      </Container>
    </div>
  )
}
