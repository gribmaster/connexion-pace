'use client'

import { useEffect, useState } from 'react'
import { normalizeLocale, DEFAULT_LOCALE, type AppLocale } from './locales'
import { dictionary } from './dictionary'

const LOCALE_KEY = 'connexion_locale'

export function useLocale() {
  const [locale, setLocaleState] = useState<AppLocale>(DEFAULT_LOCALE)

  useEffect(() => {
    setLocaleState(normalizeLocale(localStorage.getItem(LOCALE_KEY)))
  }, [])

  function setLocale(next: AppLocale) {
    localStorage.setItem(LOCALE_KEY, next)
    setLocaleState(next)
  }

  return {
    locale,
    setLocale,
    dict: dictionary[locale],
  }
}
