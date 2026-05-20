import { prisma } from '@/lib/prisma'
import { Container } from '@/components/ui/Container'
import { JourneyPreview } from '@/components/JourneyPreview'

export default async function JourneyPreviewPage() {
  const cards = await prisma.card.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      additional: true,
      category: true,
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
