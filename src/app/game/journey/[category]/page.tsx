import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Category } from '@prisma/client'
import { Container } from '@/components/ui/Container'
import { getCategoryTheme } from '@/lib/categoryThemes'
import { JourneyCardSelector } from '@/components/JourneyCardSelector'

const VALID_CATEGORIES = ['CONNECTION', 'INTIMACY', 'LOVEMAKING']

type Props = {
  params: Promise<{ category: string }>
}

export default async function JourneyCategoryPage({ params }: Props) {
  const { category } = await params
  const upperCategory = category.toUpperCase()

  if (!VALID_CATEGORIES.includes(upperCategory)) notFound()

  // TODO: pass selected locale to server card queries (currently defaulting to ET).
  const cards = await prisma.card.findMany({
    where: { category: upperCategory as Category },
    orderBy: { createdAt: 'asc' },
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      additional: true,
      translations: { select: { locale: true, title: true, description: true, additional: true } },
    },
  })

  const theme = getCategoryTheme(upperCategory)

  if (cards.length === 0) {
    return (
      <div className={`min-h-screen py-10 ${theme.screenClassName}`}>
        <Container className="flex flex-col gap-6">
          <p className="text-[#D2AF9C] text-center">No cards available yet</p>
        </Container>
      </div>
    )
  }

  return (
    <div className={`min-h-screen py-10 ${theme.screenClassName}`}>
      <Container className="flex flex-col">
        <JourneyCardSelector
          cards={cards}
          category={upperCategory}
          theme={theme}
        />
      </Container>
    </div>
  )
}
