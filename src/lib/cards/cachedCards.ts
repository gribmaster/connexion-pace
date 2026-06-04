import { unstable_cache } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { Category } from '@prisma/client'

const CARD_REVALIDATE = 600 // 10 minutes
const CACHE_TAG = 'cards'

// Full card shape used on category/gameplay pages
export type CardWithTranslations = {
  id: string
  title: string
  description: string
  additional: string | null
  imageUrl: string | null
  category: Category
  isFree: boolean
  translations: { locale: string; title: string; description: string; additional: string | null }[]
}

// Minimal shape used only for counts / queue building
export type CardMinimal = {
  id: string
  category: Category
  isFree: boolean
}

export const getCardsByCategoryCached = unstable_cache(
  async (category: Category): Promise<CardWithTranslations[]> => {
    return prisma.card.findMany({
      where: { category },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        title: true,
        description: true,
        additional: true,
        imageUrl: true,
        category: true,
        isFree: true,
        translations: {
          select: { locale: true, title: true, description: true, additional: true },
        },
      },
    })
  },
  ['cards-by-category'],
  { revalidate: CARD_REVALIDATE, tags: [CACHE_TAG] }
)

export const getAllCardsCached = unstable_cache(
  async (): Promise<CardWithTranslations[]> => {
    return prisma.card.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        additional: true,
        imageUrl: true,
        category: true,
        isFree: true,
        translations: {
          select: { locale: true, title: true, description: true, additional: true },
        },
      },
    })
  },
  ['all-cards'],
  { revalidate: CARD_REVALIDATE, tags: [CACHE_TAG] }
)

// Minimal cards — only id/category/isFree — used for counts and queue building
export const getAllCardsMinimalCached = unstable_cache(
  async (): Promise<CardMinimal[]> => {
    return prisma.card.findMany({
      select: { id: true, category: true, isFree: true },
    })
  },
  ['all-cards-minimal'],
  { revalidate: CARD_REVALIDATE, tags: [CACHE_TAG] }
)

export const getCardByIdCached = unstable_cache(
  async (id: string) => {
    return prisma.card.findUnique({
      where: { id },
      include: { translations: true },
    })
  },
  ['card-by-id'],
  { revalidate: CARD_REVALIDATE, tags: [CACHE_TAG] }
)
