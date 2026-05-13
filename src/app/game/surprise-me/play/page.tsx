import { prisma } from '@/lib/prisma'
import { SurpriseMePlay } from '@/components/SurpriseMePlay'

export default async function SurpriseMePlayPage() {
  const cards = await prisma.card.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      category: true,
    },
  })

  return <SurpriseMePlay cards={cards} />
}
