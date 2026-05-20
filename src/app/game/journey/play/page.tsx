import { prisma } from '@/lib/prisma'
import { JourneyPlay } from '@/components/JourneyPlay'

export default async function JourneyPlayPage() {
  const cards = await prisma.card.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      category: true,
    },
  })

  return <JourneyPlay cards={cards} />
}
