'use client'

import { useEffect, useRef, useState } from 'react'
import { HtmlContent } from '@/components/HtmlContent'
import { getAbcEmotionsContent } from '@/lib/abcEmotionsContent'
import type { AppLocale } from '@/lib/i18n/locales'

type Props = {
  isOpen: boolean
  onClose: () => void
  locale: AppLocale
}

export function AbcEmotionsModal({ isOpen, onClose, locale }: Props) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [openTabs, setOpenTabs] = useState<Set<number>>(new Set())

  const { title, html } = getAbcEmotionsContent(locale)

  useEffect(() => {
    const items = contentRef.current?.querySelectorAll('.tab-item')
    items?.forEach((item, index) => {
      item.classList.toggle('is-open', openTabs.has(index))
    })
  })

  useEffect(() => {
    if (!isOpen) setOpenTabs(new Set())
  }, [isOpen])

  if (!isOpen) return null

  function handleContentClick(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement
    const head = target.closest('.tab-head')
    if (!head) return

    const item = head.closest('.tab-item')
    if (!item || !contentRef.current) return

    const items = Array.from(contentRef.current.querySelectorAll('.tab-item'))
    const index = items.indexOf(item)
    if (index === -1) return

    setOpenTabs((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 pb-4 sm:items-center sm:pb-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-sm max-h-[80vh] flex-col rounded-3xl border border-[#69584E] bg-black p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <h2 className="pr-6 text-[20px] font-semibold text-[#D2AF9C]">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 flex-none items-center justify-center text-[#D2AF9C]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>
        <div ref={contentRef} className="overflow-auto" onClick={handleContentClick}>
          <HtmlContent
            html={html}
            className="text-[14px] leading-[160%] text-[#D2AF9C]/80 abc-emotions-content"
          />
        </div>
      </div>
    </div>
  )
}
