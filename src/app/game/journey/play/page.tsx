export const dynamic = 'force-dynamic'

import { prisma } from '@/lib/prisma'
import { JourneyPlay } from '@/components/JourneyPlay'

export default async function JourneyPlayPage() {
  // TODO: pass selected locale to server card queries (currently defaulting to ET).
  const cards = await prisma.card.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      category: true,
      translations: { select: { locale: true, title: true, description: true, additional: true } },
    },
  })

  return <JourneyPlay cards={cards} />
}
