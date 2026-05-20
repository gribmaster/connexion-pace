import { prisma } from '@/lib/prisma'
import { SurpriseMePlay } from '@/components/SurpriseMePlay'

export default async function SurpriseMePlayPage() {
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

  return <SurpriseMePlay cards={cards} />
}
