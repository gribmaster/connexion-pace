import { toPrismaLocale, type AppLocale } from './locales'

type Translation = {
  locale: string
  title: string
  description: string | null
  additional: string | null
}

type CardWithTranslations = {
  title: string
  description: string | null
  additional?: string | null
  translations: Translation[]
}

type ResolvedCard = {
  title: string
  description: string | null
  additional: string | null
}

export function resolveCardTranslation(
  card: CardWithTranslations,
  locale: AppLocale
): ResolvedCard {
  const prismaLocale = toPrismaLocale(locale)
  const selected = card.translations.find((t) => t.locale === prismaLocale)
  const fallbackEt = card.translations.find((t) => t.locale === 'ET')
  const source = selected ?? fallbackEt

  return {
    title: source?.title ?? card.title,
    description: source?.description ?? card.description,
    additional: source?.additional ?? card.additional ?? null,
  }
}
