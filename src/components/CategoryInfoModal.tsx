'use client'

import { HtmlContent } from '@/components/HtmlContent'
import { getCategoryInfo } from '@/lib/categoryInfoContent'
import type { AppLocale } from '@/lib/i18n/locales'

type Props = {
  category: string
  isOpen: boolean
  onClose: () => void
  locale: AppLocale
}

export function CategoryInfoModal({ category, isOpen, onClose, locale }: Props) {
  if (!isOpen) return null

  const { title, html } = getCategoryInfo(category, locale)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 sm:items-center px-4 pb-4 sm:pb-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm max-h-[80vh] overflow-auto rounded-3xl bg-black border border-[#69584E] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-[20px] font-semibold text-[#D2AF9C] pr-6">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex-none flex items-center justify-center h-8 w-8 text-[#D2AF9C]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>
        <HtmlContent
          html={html}
          className="text-[14px] leading-[160%] text-[#D2AF9C]/80 category-info-content"
        />
      </div>
    </div>
  )
}
