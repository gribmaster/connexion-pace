'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ExpandIcon } from '@/components/icons/ExpandIcon'
import { CollapseIcon } from '@/components/icons/CollapseIcon'
import { HtmlContent } from '@/components/HtmlContent'
import type { CategoryTheme } from '@/lib/categoryThemes'
import { useLocale } from '@/lib/i18n/useLocale'
import { resolveCardTranslation } from '@/lib/i18n/resolveCardTranslation'
import { canAccessCard } from '@/lib/premium/cardAccess'

// TODO: enforce free/premium Journey card selection limits here.
const JOURNEY_FREE_CARD_LIMIT = 5
const JOURNEY_PREMIUM_CARD_LIMIT = null // null = unlimited

const JOURNEY_STORAGE_KEY = 'connexion_journey_selection'

type JourneySelection = {
  CONNECTION: string[]
  INTIMACY: string[]
  LOVEMAKING: string[]
}

type Translation = {
  locale: string
  title: string
  description: string | null
  additional: string | null
}

type CardItem = {
  id: string
  title: string
  description: string | null
  imageUrl: string | null
  additional: string | null
  isFree: boolean
  translations: Translation[]
}

type Props = {
  cards: CardItem[]
  category: string
  theme: CategoryTheme
  isPremium: boolean
}

function readJourneySelection(): JourneySelection {
  try {
    const raw = localStorage.getItem(JOURNEY_STORAGE_KEY)
    if (!raw) return { CONNECTION: [], INTIMACY: [], LOVEMAKING: [] }
    const parsed = JSON.parse(raw)
    return {
      CONNECTION: Array.isArray(parsed.CONNECTION) ? parsed.CONNECTION : [],
      INTIMACY: Array.isArray(parsed.INTIMACY) ? parsed.INTIMACY : [],
      LOVEMAKING: Array.isArray(parsed.LOVEMAKING) ? parsed.LOVEMAKING : [],
    }
  } catch {
    return { CONNECTION: [], INTIMACY: [], LOVEMAKING: [] }
  }
}

export function JourneyCardSelector({ cards, category, theme, isPremium }: Props) {
  const router = useRouter()
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)
  const [previewCard, setPreviewCard] = useState<CardItem | null>(null)
  const [learnMoreCard, setLearnMoreCard] = useState<CardItem | null>(null)
  const { locale, dict } = useLocale()
  const dj = dict.journey
  const dc = dict.common

  useEffect(() => {
    const stored = readJourneySelection()
    const cat = category as keyof JourneySelection
    const accessibleIds = new Set(
      cards
        .filter((c) => canAccessCard({ category, isFree: c.isFree }, isPremium))
        .map((c) => c.id)
    )
    const filtered = (stored[cat] ?? []).filter((id) => accessibleIds.has(id))
    setSelectedIds(filtered)
    setMounted(true)
  }, [category, isPremium, cards])

  const translatedCards = cards.map((card) => ({
    ...card,
    ...resolveCardTranslation(card, locale),
  }))

  function toggleCard(id: string, accessible: boolean) {
    if (!accessible) {
      window.location.href = '/premium'
      return
    }
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  function handleConfirm() {
    const existing = readJourneySelection()
    const updated: JourneySelection = {
      ...existing,
      [category as keyof JourneySelection]: selectedIds,
    }
    localStorage.setItem(JOURNEY_STORAGE_KEY, JSON.stringify(updated))
    router.push('/game?mode=journey')
  }

  const count = selectedIds.length
  const buttonLabel =
    count === 0
      ? dj.selectCards
      : count === 1
      ? dj.cardSelectedSingle
      : dj.cardsSelectedMultiple.replace('{n}', String(count))

  const categoryLabel =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => router.push('/game?mode=journey')}
          aria-label="Back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_journey_back)">
              <path d="M20.25 12L3.75 12" stroke="#D2AF9C" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="#D2AF9C" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_journey_back">
                <rect width="24" height="24" fill="white" transform="translate(24 1.04907e-06) rotate(90)"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <h1 className="font-semibold text-[20px] leading-[30px] text-center mb-4">
        {categoryLabel}
      </h1>

      <div className="flex flex-wrap pb-28 mx-[-3px]">
        {translatedCards.map((card) => {
          const accessible = canAccessCard({ category, isFree: card.isFree }, isPremium)
          const selected = mounted && accessible && selectedIds.includes(card.id)
          return (
            <div key={card.id} className="w-[33.3%] p-[3px]">
              <div
                onClick={() => toggleCard(card.id, accessible)}
                className={`relative h-[100%] ${accessible ? 'cursor-pointer' : 'cursor-not-allowed buy-premium-card'}`}
              >
                <Card
                  className={`${theme.singleCardClassName} ${
                    selected
                      ? 'border-1 border-[#D2AF9C]'
                      : 'border-1 border-[#69584E]'
                  }`}
                >
                  <div className="cat-card-head flex flex-grow-1 items-start justify-between mb-[10px]">
                    <h2 className="text-[8px] text-[#D2AF9C] pr-[3px] pt-[3px]">
                      {card.title}
                    </h2>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setPreviewCard(card)
                      }}
                      aria-label="Card details"
                      className="flex flex-none basis-[16px] items-center justify-center"
                    >
                      <ExpandIcon className="h-4 w-4" />
                    </button>
                  </div>
                  {card.imageUrl && (
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="h-[136px] w-full rounded-[5px] object-cover"
                    />
                  )}
                  {selected && (
                    <div className="absolute inset-0 rounded-[10px] border-2 border-[#D2AF9C] pointer-events-none" />
                  )}
                  {!accessible && (
                    <div className="absolute bottom-[6px] left-0 right-0 flex justify-center">
                      <span className="text-[8px] text-[#D2AF9C80] bg-black/60 rounded px-1">Premium</span>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          )
        })}
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-4 py-6">
        <Button onClick={handleConfirm} disabled={count === 0}>
          {buttonLabel}
        </Button>
      </div>

      {previewCard && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center p-5 bg-black/60 card-full-description"
          onClick={() => setPreviewCard(null)}
        >
          <div
            className={`w-full max-h-[80vh] max-w-lg overflow-auto rounded-[24px] bg-white p-5 pb-10 border border-[#69584E] ${theme.descriptionModalClassName}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-[20px] text-[#D2AF9C] pr-2">
                {previewCard.title}
              </h2>
              <div
                className="h-6 w-6 flex-none basis-[24px]"
                onClick={() => setPreviewCard(null)}
              >
                <CollapseIcon />
              </div>
            </div>
            {previewCard.imageUrl && (
              <img
                src={previewCard.imageUrl}
                alt={previewCard.title}
                className="mb-4 h-48 w-full rounded-2xl object-cover"
              />
            )}
            {previewCard.description && (
              <HtmlContent
                html={previewCard.description}
                className="mb-6 text-[14px] leading-[140%] text-[#D2AF9C]"
              />
            )}
            <Button
              disabled={!previewCard.additional}
              variant="brown-transparent"
              className={!previewCard.additional ? 'opacity-40 bg-[#D2AF9C1A]' : ''}
              onClick={() => setLearnMoreCard(previewCard)}
            >
              {dc.learnMore}
            </Button>
          </div>
        </div>
      )}

      {learnMoreCard && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setLearnMoreCard(null)}
        >
          <div
            className="w-full overflow-auto max-h-[80vh] max-w-lg rounded-[16px] bg-black p-6 border border-[#69584E] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 font-semibold text-[20px] leading-[120%] text-[#D2AF9C]">
              Appreciative Words
            </h2>
            <HtmlContent
              html={learnMoreCard.additional}
              className="text-[16px] leading-[150%] text-[#D2AF9C]/70"
            />
            <div
              onClick={() => setLearnMoreCard(null)}
              className="absolute right-[24px] top-[24px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
