'use client'

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { normalizeLocale, LOCALE_COOKIE, type AppLocale } from './locales'
import { dictionary } from './dictionary'

const STORAGE_KEY = LOCALE_COOKIE
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

type LocaleContextValue = {
  locale: AppLocale
  setLocale: (next: AppLocale) => void
  dict: (typeof dictionary)[AppLocale]
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function writeLocaleCookie(next: AppLocale) {
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
}

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: AppLocale
  children: ReactNode
}) {
  const router = useRouter()
  const [locale, setLocaleState] = useState<AppLocale>(initialLocale)
  const migrated = useRef(false)

  // One-time legacy migration: if a browser has a localStorage locale from
  // before the cookie existed, adopt it and persist it to the cookie so
  // every future request is server-rendered correctly.
  useEffect(() => {
    if (migrated.current) return
    migrated.current = true

    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return

    const legacyLocale = normalizeLocale(stored)
    const hasCookie = document.cookie
      .split('; ')
      .some((row) => row.startsWith(`${LOCALE_COOKIE}=`))

    if (!hasCookie) {
      writeLocaleCookie(legacyLocale)
      if (legacyLocale !== initialLocale) {
        setLocaleState(legacyLocale)
        router.refresh()
      }
    }
  }, [initialLocale, router])

  function setLocale(next: AppLocale) {
    writeLocaleCookie(next)
    localStorage.setItem(STORAGE_KEY, next)
    setLocaleState(next)
    router.refresh()
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, dict: dictionary[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}
