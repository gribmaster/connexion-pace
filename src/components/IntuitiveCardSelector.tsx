'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PremiumCardModal } from '@/components/PremiumCardModal'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ExpandIcon } from '@/components/icons/ExpandIcon'
import type { CategoryTheme } from '@/lib/categoryThemes'
import {InfoCircleIcon} from "@/components/icons/InfoCircleIcon";
import {CollapseIcon} from "@/components/icons/CollapseIcon";
import { HtmlContent } from '@/components/HtmlContent'
import { useLocale } from '@/lib/i18n/useLocale'
import { resolveCardTranslation } from '@/lib/i18n/resolveCardTranslation'
import { canAccessCard } from '@/lib/premium/cardAccess'

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
  categoryInfo: string
  theme: CategoryTheme
  isPremium: boolean
}

export function IntuitiveCardSelector({ cards, category, categoryInfo, theme, isPremium }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [previewCard, setPreviewCard] = useState<CardItem | null>(null)
  const [learnMoreCard, setLearnMoreCard] = useState<CardItem | null>(null)
  const [infoOpen, setInfoOpen] = useState(false)
  const [introOpen, setIntroOpen] = useState(false)
  const [moreSuggestionsOpen, setMoreSuggestionsOpen] = useState(false)
  const [premiumOpen, setPremiumOpen] = useState(false)
  const { locale, dict } = useLocale()
  const dc = dict.common
  const dm = dict.modal
  const router = useRouter()

  const translatedCards = cards.map((card) => ({
    ...card,
    ...resolveCardTranslation(card, locale),
  }))

  function handleStart() {
    if (!selectedId) return
    setIntroOpen(true)
  }

  function handleConfirmStart() {
    setIntroOpen(false)
    router.push(`/game/intuitive/${category}/${selectedId}`)
  }

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <Link href="/game">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_64_2414)">
              <path d="M20.25 12L3.75 12" stroke="#D2AF9C" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="#D2AF9C" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_64_2414">
                <rect width="24" height="24" fill="white" transform="translate(24 1.04907e-06) rotate(90)"/>
              </clipPath>
            </defs>
          </svg>
        </Link>
        <div
          className="hidden"
          //onClick={() => setInfoOpen(true)}
          aria-label="Category info"
        >
          <InfoCircleIcon/>
        </div>
      </div>
      <h1 className="font-semibold text-[20px] leading-[30px] text-center mb-4">
        {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
      </h1>

      <div className="flex flex-wrap pb-28 mx-[-3px]">
        {translatedCards.map((card) => {
          const accessible = canAccessCard({ category: category.toUpperCase(), isFree: card.isFree }, isPremium)
          const selected = card.id === selectedId && accessible
          return (
            <div
              key={card.id}
              className="w-[33.3%] p-[3px]"
            >
              <div
                onClick={() => {
                  if (!accessible) {
                    setPremiumOpen(true)
                    return
                  }
                  setSelectedId(card.id)
                }}
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
                      <ExpandIcon className="h-4 w-4"/>
                    </button>
                  </div>
                  {card.imageUrl && (
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="h-[136px] w-full rounded-[5px] object-cover"
                    />
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
        <Button onClick={handleStart} disabled={!selectedId}>
          {dict.journey.startPlaying}
        </Button>
      </div>

      {infoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setInfoOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-lg font-semibold capitalize text-[#1a0a0e]">
              {category.toLowerCase()}
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-[#5a3a3a]">{categoryInfo}</p>
            <Button onClick={() => setInfoOpen(false)}>Close</Button>
          </div>
        </div>
      )}

      {previewCard && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center p-5 bg-black/60 card-full-description"
          onClick={() => setPreviewCard(null)}
        >
          <div
            className={`w-full max-h-[80vh] max-w-lg overflow-auto rounded-[24px] bg-white p-5 pb-10 border border-[#69584E]  ${theme.descriptionModalClassName}`}
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
              <HtmlContent html={previewCard.description} className="mb-6 text-[14px] leading-[140%] text-[#D2AF9C]" />
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

      {introOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black px-4"
          onClick={() => setIntroOpen(false)}
        >
          <div
            className="w-full max-w-sm h-[100vh] py-6 overflow-auto bg-black text-[#D2AF9C]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="my-4 text-[20px] font-semibold">
              {dm.tuneIntoPlay}
            </h2>
            <div className="mb-8 text-[16px] leading-[150%] modal-html-content">
              <p>When starting the game, guidelines are presented before start of play:</p>
              <h5>Consent</h5>
              <p>Make sure that you both want to play. Respect each other’s boundaries and desires.</p>
              <h5>Get in the mood</h5>
              <p>Arrange the room the way you want it, choose romantic lighting and mood music, make sure that you won’t be disturbed, put your phones on silent or switch them off.</p>
              <h5>Use oil</h5>
              <p>Some cards require use of oil. Make sure you have a high-quality intimacy oil on hand.</p>
              <h5>Cleanliness</h5>
              <p>Wash your whole body, including brushing teeth, so ensure that there aren’t any little turnoffs.</p>
              <h5>Get attuned</h5>
              <p>Before beginning play, tell yourselves:</p>
              <ul>
                <li>“Neither of us have any expectations or preconceived notions about what might happen.”</li>
                <li>“I now devote myself to enjoying the moment. I’ll come back to everyday thoughts later.”</li>
                <li>“I’m ready to discover and experience something new.”</li>
                <li>“I’m going to let my body relax, become aroused and experience pleasure.”</li>
              </ul>
            </div>
            <div>
              <Button className="flex-1 mb-1" onClick={handleConfirmStart}>
                {dc.ok}
              </Button>
              <Button variant="link" className="flex-1" onClick={() => setMoreSuggestionsOpen(true)}>
                {dc.moreSuggestions}
              </Button>
            </div>
          </div>
        </div>
      )}

      {moreSuggestionsOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setMoreSuggestionsOpen(false)}
        >
          <div
            className="relative w-full max-w-sm max-h-[85vh] overflow-auto rounded-3xl bg-black p-6 border border-[#69584E]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMoreSuggestionsOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-6 flex h-8 w-8 items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/>
              </svg>
            </button>
            <h2 className="mb-4 text-[20px] font-semibold">
              {dm.moreSuggestions}
            </h2>
            <div className="text-sm leading-relaxed modal-html-content">
              <h5>Spontaneity</h5>
              <p>Creating a shared pleasure space is what is important, not necessarily following all rules and guidelines for their own sake. If you lose track of time, trust your instincts and continue in a spontaneous manner.</p>
              <h5>Perfectionism</h5>
              <p>Don’t sweat it if it doesn’t come out exactly the way you intended. Taking sexuality to deeper levels is a journey. Don’t be hard or too demanding on yourselves.</p>
              <h5>Feedback</h5>
              <p>After playing cards, talk to each other in the first person about what you liked, what could be different, and what could be repeated.</p>
              <p>Time out for the male partner: if arousal exceeds 70%, try the following techniques:</p>
              <ul>
                <li>pause the activity and wait until the arousal level subsides, then resume from exactly where you left off</li>
                <li>clench all the muscles in your body at once, hold your breath for 30 seconds and then release the tension. Repeat; bring your attention from the sex organs to your heart or your third eye</li>
                <li>if you begin intercourse while extremely aroused, that can make premature ejaculation more likely. Go back to the intimacy cards to let the arousal level subside a little</li>
              </ul>
              <h5>Responsibility</h5>
              <p>Each partner is responsible for their own physical, mental and emotional well-being. If you experience strong feelings, see “ABCs of Emotions”.</p>
            </div>
          </div>
        </div>
      )}

      {premiumOpen && (
        <PremiumCardModal onClose={() => setPremiumOpen(false)} />
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
              {learnMoreCard.title}
            </h2>
            <HtmlContent html={learnMoreCard.additional} className="text-[16px] leading-[150%] text-[#D2AF9C]/70 learnMoreCardDescription" />
            <div
              onClick={() => setLearnMoreCard(null)}
              className="absolute right-[24px] top-[24px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
