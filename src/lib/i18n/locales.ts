export type AppLocale = 'et' | 'en'

export const DEFAULT_LOCALE: AppLocale = 'et'

export const SUPPORTED_LOCALES = ['et', 'en'] as const

export function normalizeLocale(locale: string | null | undefined): AppLocale {
  if (locale === 'en') return 'en'
  return 'et'
}

export function toPrismaLocale(locale: AppLocale): 'ET' | 'EN' {
  return locale === 'en' ? 'EN' : 'ET'
}
