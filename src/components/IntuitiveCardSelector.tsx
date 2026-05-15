'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ExpandIcon } from '@/components/icons/ExpandIcon'
import type { CategoryTheme } from '@/lib/categoryThemes'
import {InfoCircleIcon} from "@/components/icons/InfoCircleIcon";
import {CollapseIcon} from "@/components/icons/CollapseIcon";

type CardItem = {
  id: string
  title: string
  description: string | null
  imageUrl: string | null
  additional: string | null
}

type Props = {
  cards: CardItem[]
  category: string
  categoryInfo: string
  theme: CategoryTheme
}

export function IntuitiveCardSelector({ cards, category, categoryInfo, theme }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [previewCard, setPreviewCard] = useState<CardItem | null>(null)
  const [learnMoreCard, setLearnMoreCard] = useState<CardItem | null>(null)
  const [infoOpen, setInfoOpen] = useState(false)
  const [introOpen, setIntroOpen] = useState(false)
  const [moreSuggestionsOpen, setMoreSuggestionsOpen] = useState(false)
  const router = useRouter()

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
        {cards.map((card) => {
          const selected = card.id === selectedId
          return (
            <div
              key={card.id}
              className="w-[33.3%] p-[3px]"
            >
              <div
                onClick={() => setSelectedId(card.id)}
                className="relative cursor-pointer h-[100%]"
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
                </Card>
              </div>
            </div>
          )
        })}
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-4 py-6">
        <Button onClick={handleStart} disabled={!selectedId}>
          Start playing
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
            className={`w-full max-h-[80vh] max-w-lg rounded-[24px] bg-white p-5 pb-10 border border-[#69584E]  ${theme.descriptionModalClassName}`}
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
              <p className="mb-6 text-[14px] leading-[140%] text-[#D2AF9C]">{previewCard.description}</p>
            )}
            <Button
              disabled={!previewCard.additional}
              variant="brown-transparent"
              className={!previewCard.additional ? 'opacity-40 bg-[#D2AF9C1A]' : ''}
              onClick={() => setLearnMoreCard(previewCard)}
            >
              Learn more
            </Button>
          </div>
        </div>
      )}

      {introOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setIntroOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-lg font-semibold text-[#1a0a0e]">
              Tune into the play
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-[#5a3a3a]">
              Intro text placeholder.
            </p>
            <div className="flex gap-3">
              <Button variant="secondary" className="flex-1" onClick={() => setMoreSuggestionsOpen(true)}>
                More suggestions
              </Button>
              <Button className="flex-1" onClick={handleConfirmStart}>
                OK
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
            className="relative w-full max-w-sm rounded-3xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMoreSuggestionsOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#1a0a0e] hover:bg-black/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/>
              </svg>
            </button>
            <h2 className="mb-4 text-lg font-semibold text-[#1a0a0e]">
              More suggestions
            </h2>
            <p className="text-sm leading-relaxed text-[#5a3a3a]">
              Detailed suggestions placeholder.
            </p>
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
            <p className="text-[16px] leading-[150%] text-[#D2AF9C]/70">
              {learnMoreCard.additional}
            </p>
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
