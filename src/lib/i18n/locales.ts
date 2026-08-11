export type AppLocale = 'et' | 'en'

export const DEFAULT_LOCALE: AppLocale = 'en'

export const SUPPORTED_LOCALES = ['et', 'en'] as const

export const LOCALE_COOKIE = 'connexion_locale'

export function normalizeLocale(locale: string | null | undefined): AppLocale {
  if (locale === 'et') return 'et'
  if (locale === 'en') return 'en'
  return DEFAULT_LOCALE
}

export function toPrismaLocale(locale: AppLocale): 'ET' | 'EN' {
  return locale === 'en' ? 'EN' : 'ET'
}
