'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { TimerSettings } from '@/components/TimerSettings'
import { InfoCircleIcon } from '@/components/icons/InfoCircleIcon'
import { UserCircleIcon } from '@/components/icons/UserCircleIcon'
import { IntuitiveInstruction } from '@/components/game/instructions/IntuitiveInstruction'
import { SurpriseInstruction } from '@/components/game/instructions/SurpriseInstruction'
import { JourneyInstruction } from '@/components/game/instructions/JourneyInstruction'
import { useLocale } from '@/lib/i18n/useLocale'
import { canAccessCard } from '@/lib/premium/cardAccess'
import { getGameGuidanceContent } from '@/lib/gameGuidanceContent'
import { HtmlContent } from '@/components/HtmlContent'
import type { AppLocale } from '@/lib/i18n/locales'

const JOURNEY_STORAGE_KEY = 'connexion_journey_selection'

type JourneySelection = {
  CONNECTION: string[]
  INTIMACY: string[]
  LOVEMAKING: string[]
}

const DEFAULT_JOURNEY_SELECTION: JourneySelection = {
  CONNECTION: [],
  INTIMACY: [],
  LOVEMAKING: [],
}

function readJourneySelection(): JourneySelection {
  try {
    const raw = localStorage.getItem(JOURNEY_STORAGE_KEY)
    if (!raw) return DEFAULT_JOURNEY_SELECTION
    const parsed = JSON.parse(raw)
    return {
      CONNECTION: Array.isArray(parsed.CONNECTION) ? parsed.CONNECTION : [],
      INTIMACY: Array.isArray(parsed.INTIMACY) ? parsed.INTIMACY : [],
      LOVEMAKING: Array.isArray(parsed.LOVEMAKING) ? parsed.LOVEMAKING : [],
    }
  } catch {
    return DEFAULT_JOURNEY_SELECTION
  }
}

type CategoryBlock = {
  label: string
  value: string
  count: number
}

type CardData = {
  id: string
  category: string
  isFree: boolean
}

type Props = {
  categories: CategoryBlock[]
  cards?: CardData[]
  initialTab?: Tab
  isPremium?: boolean
}

const CATEGORY_ORDER = ['CONNECTION', 'INTIMACY', 'LOVEMAKING'] as const

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildSurpriseQueue(
  cards: CardData[],
  selected: Record<string, number>,
  isPremium: boolean
): { id: string; category: string }[] {
  const queue: { id: string; category: string }[] = []
  for (const cat of CATEGORY_ORDER) {
    const amount = selected[cat] ?? 0
    if (amount === 0) continue
    const pool = cards.filter(
      (c) => c.category === cat && canAccessCard({ category: cat, isFree: c.isFree }, isPremium)
    )
    const shuffled = shuffleArray(pool)
    const slice = shuffled.slice(0, amount)
    for (const c of slice) {
      queue.push({ id: c.id, category: cat })
    }
  }
  return queue
}

type Tab = 'intuitive' | 'surprise' | 'journey'

const modeInstructions: Record<Tab, { Content: (props: { locale: AppLocale }) => React.ReactElement }> = {
  intuitive: { Content: IntuitiveInstruction },
  surprise: { Content: SurpriseInstruction },
  journey: { Content: JourneyInstruction },
}

export function GameModeTabs({ categories, cards = [], initialTab = 'intuitive', isPremium = false }: Props) {
  const router = useRouter()
  const { dict, locale } = useLocale()
  const dg = dict.game
  const dm = dict.modal
  const { tuneIntoPlayHtml, moreSuggestionsHtml } = getGameGuidanceContent(locale)
  const [tab, setTab] = useState<Tab>(initialTab)
  const [selected, setSelected] = useState<Record<string, number>>(
    Object.fromEntries(categories.map((c) => [c.value, 0]))
  )
  const [introOpen, setIntroOpen] = useState(false)
  const [moreSuggestionsOpen, setMoreSuggestionsOpen] = useState(false)
  const [instructionOpen, setInstructionOpen] = useState(false)
  const [journeySelection, setJourneySelection] = useState<JourneySelection>(DEFAULT_JOURNEY_SELECTION)

  useEffect(() => {
    setJourneySelection(readJourneySelection())
  }, [])

  // Re-read Journey selection when switching to journey tab
  useEffect(() => {
    if (tab === 'journey') {
      setJourneySelection(readJourneySelection())
    }
  }, [tab])

  const total = Object.values(selected).reduce((a, b) => a + b, 0)
  const journeyTotal =
    journeySelection.CONNECTION.length +
    journeySelection.INTIMACY.length +
    journeySelection.LOVEMAKING.length
  const { Content: ActiveInstruction } = modeInstructions[tab]

  function increment(value: string, max: number) {
    setSelected((prev) => ({ ...prev, [value]: Math.min(prev[value] + 1, max) }))
  }

  function decrement(value: string) {
    setSelected((prev) => ({ ...prev, [value]: Math.max(prev[value] - 1, 0) }))
  }

  function handleStartSurprise() {
    setIntroOpen(true)
  }

  function handleOK() {
    const queue = buildSurpriseQueue(cards, selected, isPremium)
    localStorage.setItem(
      'connexion_surprise_queue',
      JSON.stringify({ cards: queue, currentIndex: 0 })
    )
    router.push('/game/surprise-me/play')
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="flex items-center font-semibold text-[20px] leading-[100%]">
          <span>{dg.chooseYourCards}</span>
          <button
            id="game-main-instruction"
            onClick={() => setInstructionOpen(true)}
            aria-label="Mode instructions"
            className="ml-1 flex items-center"
          >
            <InfoCircleIcon />
          </button>
        </h1>
        <div className="flex items-center">
          <Link href="/profile" aria-label="Profile">
            <UserCircleIcon className="h-6 w-6 text-[#D2AF9C]/60 hover:text-[#D2AF9C] transition-colors" />
          </Link>
        </div>
      </div>
      <div className="font-normal text-[16px] leading-[150%] mt-[10px] opacity-70">{dg.chooseCardsSubtitle}</div>

      {/* Subtle reminder shortcut */}
      <div className="flex justify-end mt-1">
        <Link
          href="/welcome/reminder/date"
          className="text-[12px] text-[#D2AF9C]/50 hover:text-[#D2AF9C]/80 underline underline-offset-2 transition-colors"
        >
          {dg.chooseNextPlayTime}
        </Link>
      </div>

      {/* Mode tabs */}
      <div className="flex mt-2">
        <button
          onClick={() => setTab('intuitive')}
          className={`font-semibold text-[14px] leading-[20px] p-2 border-b flex-1 transition-colors ${
            tab === 'intuitive'
              ? 'border-[#69584E] text-[#D2AF9C]'
              : 'border-[#69584E80] text-[#D2AF9C80]'
          }`}
        >
          {dg.intuitive}
        </button>
        <button
          onClick={() => setTab('journey')}
          className={`font-semibold text-[14px] leading-[20px] p-2 border-b flex-1 transition-colors ${
            tab === 'journey'
              ? 'border-[#69584E] text-[#D2AF9C]'
              : 'border-[#69584E80] text-[#D2AF9C80]'
          }`}
        >
          {dg.journey}
        </button>
        <button
          onClick={() => setTab('surprise')}
          className={`font-semibold text-[14px] leading-[20px] p-2 border-b flex-1 transition-colors ${
            tab === 'surprise'
              ? 'border-[#69584E] text-[#D2AF9C]'
              : 'border-[#69584E80] text-[#D2AF9C80]'
          }`}
        >
          {dg.surpriseMe}
        </button>
      </div>

      {/* Intuitive tab content */}
      {tab === 'intuitive' && (
        <>
          <div className="flex flex-col mt-5 gap-3 flex-1 basis-0">
            {categories.map(({ label, value, count }) => (

              <Link href={`/game/intuitive/${value}`} key={value} className="block">
                <div
                  className={`flex items-center justify-between p-3 bg-${value} rounded-[24px] border border-[#69584E] shadow-[0px_0px_20px_0px_#000000] cat-card-intuitive`}
                >
                  <div className="flex flex-col self-start p-2">
                    <span className="font-['Baskervville'] font-normal text-[24px] leading-[31px]">{label}</span>
                    <span className="font-normal text-[16px] leading-[24px]">{count} {dg.cards}</span>
                  </div>
                  <div className={`cat-card-${value} cat-img`}>
                    <img src={`/img/card-container-${value}.svg`} alt=""/>
                    <div className="font-semibold text-[12px] leading-[100%] absolute cat-label">{dg.choose}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <TimerSettings mode={tab} />
        </>
      )}

      {/* Surprise me tab content */}
      {tab === 'surprise' && (
        <div className="flex flex-col mt-5 flex-1 basis-0">
          <div className="flex flex-col gap-3 p-0 flex-1 basis-0">
            {categories.map(({ label, value, count }) => {
              const accessibleCount = cards.filter(
                (c) => c.category === value && canAccessCard({ category: value, isFree: c.isFree }, isPremium)
              ).length
              return (
              <div
                key={value}
                className={`flex flex-col justify-between p-3 bg-surprised-${value} rounded-[24px] card-cat-surprise border border-[#69584E] shadow-[0px_0px_20px_0px_#000000]`}
              >
                <div className="flex flex-col self-start p-2">
                  <span className="font-['Baskervville'] font-normal text-[24px] leading-[31px]">{label}</span>
                  <span className="font-normal text-[16px] leading-[24px]">
                    {accessibleCount} {dg.cards}
                    {!isPremium && accessibleCount < count && (
                      <span className="ml-1 text-[12px] opacity-50">({count - accessibleCount} Premium)</span>
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-3 pr-2">
                  <button
                    type="button"
                    onClick={() => decrement(value)}
                    disabled={selected[value] === 0}
                    className="w-10 h-10"
                  >
                    <img src="/img/timer-minus.svg" width="40" alt=""/>
                  </button>
                  <span className="w-5 text-center font-semibold text-[#D2AF9C] text-[20px]">
                    {selected[value]}
                  </span>
                  <button
                    type="button"
                    onClick={() => increment(value, accessibleCount)}
                    disabled={selected[value] === accessibleCount}
                    className="w-10 h-10"
                  >
                    <img src="/img/timer-plus.svg" width="40" alt=""/>
                  </button>
                </div>
              </div>
              )
            })}
          </div>

          <TimerSettings mode={tab} />
          <Button
            onClick={handleStartSurprise}
            disabled={total === 0}
            className="disabled:opacity-40 disabled:cursor-not-allowed mt-3"
          >
            {dg.startGame}
          </Button>
        </div>
      )}

      {/* Journey tab content */}
      {tab === 'journey' && (
          <div className="flex flex-col mt-5 flex-1 basis-0">
          <div className="flex flex-col gap-3 flex-1 basis-0">
            {categories.map(({ label, value, count }) => {
              const selectedCount = journeySelection[value as keyof JourneySelection]?.length ?? 0
              const selectedLabel =
                selectedCount === 0
                  ? dg.cardsSelectedZero
                  : selectedCount === 1
                  ? `1 ${dg.cardSelectedOne}`
                  : `${selectedCount} ${dg.cardsSelectedMany}`
              return (

                <Link href={`/game/journey/${value}`} key={value} className="block">
                  <div
                    className={`flex justify-between p-3 bg-${value} rounded-[24px] border border-[#69584E] shadow-[0px_0px_20px_0px_#000000] cat-card-journey`}
                  >
                    <div className="flex flex-col p-2">
                      <span className="font-['Baskervville'] font-normal text-[24px] leading-[31px]">{label}</span>
                      <span className="font-normal flex-grow-1 text-[16px] leading-[24px]">{count} {dg.cards}</span>
                      <span className="font-normal text-[13px] leading-[20px] opacity-70 mt-[2px]">{selectedLabel}</span>
                    </div>
                    <div className={`-cat-card-${value} cat-card`}>
                      <img src={`/img/card-container-${value}.svg`} className="journey-card card-img" alt=""/>
                      <div className="font-semibold text-[12px] leading-[100%] cat-label">{dg.choose}</div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <TimerSettings mode="journey" />
          <Button
            onClick={() => router.push('/game/journey/preview')}
            disabled={journeyTotal === 0}
            className="disabled:opacity-40 disabled:cursor-not-allowed mt-3"
          >
            {dg.previewSelectedCards}
          </Button>
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
            <HtmlContent html={tuneIntoPlayHtml} className="mb-8 text-[16px] leading-[150%] modal-html-content" />
            <div>
              <Button className="flex-1 mb-1" onClick={handleOK}>
                {dict.common.ok}
              </Button>
              <Button variant="link" className="flex-1" onClick={() => setMoreSuggestionsOpen(true)}>
                {dict.common.moreSuggestions}
              </Button>
            </div>
          </div>
        </div>
      )}

      {instructionOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 "
          onClick={() => setInstructionOpen(false)}
        >
          <div
            className="relative w-full max-h-[85vh] overflow-auto max-w-sm rounded-[16px] bg-black p-6 border border-[#69584E]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setInstructionOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
            <h2 className="mb-6 text-lg font-semibold text-[#D2AF9C]">
              {dm.dynamicsOfGame}
            </h2>
            <ActiveInstruction locale={locale} />
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
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
            <h2 className="mb-4 text-[20px] font-semibold">
              {dm.moreSuggestions}
            </h2>
            <HtmlContent html={moreSuggestionsHtml} className="text-sm leading-relaxed modal-html-content" />
          </div>
        </div>
      )}
    </>
  )
}
