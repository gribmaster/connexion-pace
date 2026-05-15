export type CategoryTheme = {
  screenClassName: string
  cardContainerClassName: string
  singleCardClassName: string
  badgeClassName: string
  accentClassName: string
  descriptionModalClassName: string
}

const themes: Record<string, CategoryTheme> = {
  CONNECTION: {
    screenClassName: 'bg-CONNECTION',
    cardContainerClassName: 'cat-CONNECTION',
    singleCardClassName: 'single-card-connection',
    badgeClassName: 'bg-[#2d5a3d] text-[#a8d5b5]',
    accentClassName: 'text-[#a8d5b5]',
    descriptionModalClassName: 'cat-description-CONNECTION',
  },
  INTIMACY: {
    screenClassName: 'bg-INTIMACY',
    cardContainerClassName: 'cat-INTIMACY',
    singleCardClassName: 'single-card-intimacy',
    badgeClassName: 'bg-[#6b2d4a] text-[#f4b8d0]',
    accentClassName: 'text-[#f4b8d0]',
    descriptionModalClassName: 'cat-description-INTIMACY',
  },
  LOVEMAKING: {
    screenClassName: 'bg-LOVEMAKING',
    cardContainerClassName: 'cat-LOVEMAKING',
    singleCardClassName: 'single-card-lovemaking',
    badgeClassName: 'bg-[#4a1a3a] text-[#d4a0c0]',
    accentClassName: 'text-[#d4a0c0]',
    descriptionModalClassName: 'cat-description-LOVEMAKING',
  },
}

const fallback: CategoryTheme = {
  screenClassName: 'bg-[#1a0a0e]',
  cardContainerClassName: '',
  singleCardClassName: 'single-card-connection',
  badgeClassName: 'bg-[#3a2a2a] text-[#D2AF9C]',
  accentClassName: 'text-[#D2AF9C]',
  descriptionModalClassName: '',
}

export function getCategoryTheme(category: string): CategoryTheme {
  return themes[category.toUpperCase()] ?? fallback
}
