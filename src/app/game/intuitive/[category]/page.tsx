import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Category } from '@prisma/client'
import { Container } from '@/components/ui/Container'
import { IntuitiveCardSelector } from '@/components/IntuitiveCardSelector'
import { getCategoryTheme } from '@/lib/categoryThemes'

const VALID_CATEGORIES = ['CONNECTION', 'INTIMACY', 'LOVEMAKING']

const categoryInfo: Record<string, string> = {
  CONNECTION: 'Connection cards are focused on emotional closeness and communication.',
  INTIMACY: 'Intimacy cards are focused on vulnerability, trust, and emotional bonding.',
  LOVEMAKING: 'Lovemaking cards are focused on physical connection and romantic energy.',
}

type Props = {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: Props) {
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
          <Link href="/game/intuitive" className="text-sm text-[#D2AF9C] hover:underline">
            ← Back
          </Link>
          <p className="text-[#D2AF9C] text-center">No cards available yet</p>
        </Container>
      </div>
    )
  }

  return (
    <div className={`min-h-screen py-10 ${theme.screenClassName}`}>
      <Container className="flex flex-col">
        <IntuitiveCardSelector
          cards={cards}
          category={category}
          categoryInfo={categoryInfo[upperCategory] ?? ''}
          theme={theme}
        />
      </Container>
    </div>
  )
}
