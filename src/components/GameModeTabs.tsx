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
}

type Props = {
  categories: CategoryBlock[]
  cards?: CardData[]
  initialTab?: Tab
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
  selected: Record<string, number>
): { id: string; category: string }[] {
  const queue: { id: string; category: string }[] = []
  for (const cat of CATEGORY_ORDER) {
    const amount = selected[cat] ?? 0
    if (amount === 0) continue
    const pool = cards.filter((c) => c.category === cat)
    const shuffled = shuffleArray(pool)
    const slice = shuffled.slice(0, amount)
    for (const c of slice) {
      queue.push({ id: c.id, category: cat })
    }
  }
  return queue
}

type Tab = 'intuitive' | 'surprise' | 'journey'

const modeInstructions: Record<Tab, { title: string; Content: () => React.ReactElement }> = {
  intuitive: {
    title: 'Dynamics of the game',
    Content: IntuitiveInstruction,
  },
  surprise: {
    title: 'Dynamics of the game',
    Content: SurpriseInstruction,
  },
  journey: {
    title: 'Dynamics of the game',
    Content: JourneyInstruction,
  },
}

export function GameModeTabs({ categories, cards = [], initialTab = 'intuitive' }: Props) {
  const router = useRouter()
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
  const ActiveInstruction = modeInstructions[tab].Content

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
    const queue = buildSurpriseQueue(cards, selected)
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
          <span>Choose your cards</span>
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
      <div className="font-normal text-[16px] leading-[150%] mt-[10px] opacity-70">Choose the number of cards and set the time for each category before starting your session.</div>

      {/* Mode tabs */}
      <div className="flex mt-5">
        <button
          onClick={() => setTab('intuitive')}
          className={`font-semibold text-[14px] leading-[20px] p-2 border-b flex-1 transition-colors ${
            tab === 'intuitive'
              ? 'border-[#69584E] text-[#D2AF9C]'
              : 'border-[#69584E80] text-[#D2AF9C80]'
          }`}
        >
          Intuitive
        </button>
        <button
          onClick={() => setTab('journey')}
          className={`font-semibold text-[14px] leading-[20px] p-2 border-b flex-1 transition-colors ${
            tab === 'journey'
              ? 'border-[#69584E] text-[#D2AF9C]'
              : 'border-[#69584E80] text-[#D2AF9C80]'
          }`}
        >
          Journey
        </button>
        <button
          onClick={() => setTab('surprise')}
          className={`font-semibold text-[14px] leading-[20px] p-2 border-b flex-1 transition-colors ${
            tab === 'surprise'
              ? 'border-[#69584E] text-[#D2AF9C]'
              : 'border-[#69584E80] text-[#D2AF9C80]'
          }`}
        >
          Surprise me
        </button>
      </div>

      {/* Intuitive tab content */}
      {tab === 'intuitive' && (
        <>
          <div className="flex flex-col mt-5 gap-3">
            {categories.map(({ label, value, count }) => (
              <div
                key={value}
                className={`flex items-center justify-between p-3 bg-${value} rounded-[24px] border border-[#69584E] shadow-[0px_0px_20px_0px_#000000]`}
              >
                <div className="flex flex-col self-start p-2">
                  <span className="font-['Baskervville'] font-normal text-[24px] leading-[31px]">{label}</span>
                  <span className="font-normal text-[16px] leading-[24px]">{count} cards</span>
                </div>
                <Link href={`/game/intuitive/${value}`} className={`h-[154px] w-[96px] cat-card-${value} cat-card`}>
                  <div className="font-semibold text-[12px] leading-[100%]">Choose</div>
                </Link>
              </div>
            ))}
          </div>
          <TimerSettings mode={tab} />
        </>
      )}

      {/* Surprise me tab content */}
      {tab === 'surprise' && (
        <div className="flex flex-col mt-5">
          <div className="flex flex-col gap-3 p-0">
            {categories.map(({ label, value, count }) => (
              <div
                key={value}
                className={`flex flex-col justify-between p-3 bg-surprised-${value} rounded-[24px] h-[180px] border border-[#69584E] shadow-[0px_0px_20px_0px_#000000]`}
              >
                <div className="flex flex-col self-start p-2">
                  <span className="font-['Baskervville'] font-normal text-[24px] leading-[31px]">{label}</span>
                  <span className="font-normal text-[16px] leading-[24px]">{count} cards</span>
                </div>
                <div className="flex items-center gap-3 pr-2">
                  <button
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
                    onClick={() => increment(value, count)}
                    disabled={selected[value] === count}
                    className="w-10 h-10"
                  >
                    <img src="/img/timer-plus.svg" width="40" alt=""/>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <TimerSettings mode={tab} />
          <Button
            onClick={handleStartSurprise}
            disabled={total === 0}
            className="disabled:opacity-40 disabled:cursor-not-allowed mb-[28px]"
          >
            Start game
          </Button>
        </div>
      )}

      {/* Journey tab content */}
      {tab === 'journey' && (
        <div className="flex flex-col mt-5">
          <div className="flex flex-col gap-3">
            {categories.map(({ label, value, count }) => {
              const selectedCount = journeySelection[value as keyof JourneySelection]?.length ?? 0
              const selectedLabel =
                selectedCount === 0
                  ? '0 cards selected'
                  : selectedCount === 1
                  ? '1 card selected'
                  : `${selectedCount} cards selected`
              return (
                <div
                  key={value}
                  className={`flex items-center justify-between p-3 bg-${value} rounded-[24px] border border-[#69584E] shadow-[0px_0px_20px_0px_#000000]`}
                >
                  <div className="flex flex-col self-start p-2">
                    <span className="font-['Baskervville'] font-normal text-[24px] leading-[31px]">{label}</span>
                    <span className="font-normal text-[16px] leading-[24px]">{count} cards</span>
                    <span className="font-normal text-[13px] leading-[20px] opacity-70 mt-[2px]">{selectedLabel}</span>
                  </div>
                  <Link href={`/game/journey/${value}`} className={`h-[154px] w-[96px] cat-card-${value} cat-card`}>
                    <div className="font-semibold text-[12px] leading-[100%]">Choose</div>
                  </Link>
                </div>
              )
            })}
          </div>
          <TimerSettings mode="journey" />
          <Button
            onClick={() => router.push('/game/journey/preview')}
            disabled={journeyTotal === 0}
            className="disabled:opacity-40 disabled:cursor-not-allowed mb-[28px]"
          >
            Preview selected cards
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
              Tune into the play
            </h2>
            <div className="mb-8 text-[16px] leading-[150%] modal-html-content">
              <p>When starting the game, guidelines are presented before start of play:</p>
              <h5>Consent</h5>
              <p>Make sure that you both want to play. Respect each other&apos;s boundaries and desires.</p>
              <h5>Get in the mood</h5>
              <p>Arrange the room the way you want it, choose romantic lighting and mood music, make sure that you won&apos;t be disturbed, put your phones on silent or switch them off.</p>
              <h5>Use oil</h5>
              <p>Some cards require use of oil. Make sure you have a high-quality intimacy oil on hand.</p>
              <h5>Cleanliness</h5>
              <p>Wash your whole body, including brushing teeth, so ensure that there aren&apos;t any little turnoffs.</p>
              <h5>Get attuned</h5>
              <p>Before beginning play, tell yourselves:</p>
              <ul>
                <li>&ldquo;Neither of us have any expectations or preconceived notions about what might happen.&rdquo;</li>
                <li>&ldquo;I now devote myself to enjoying the moment. I&apos;ll come back to everyday thoughts later.&rdquo;</li>
                <li>&ldquo;I&apos;m ready to discover and experience something new.&rdquo;</li>
                <li>&ldquo;I&apos;m going to let my body relax, become aroused and experience pleasure.&rdquo;</li>
              </ul>
            </div>
            <div>
              <Button className="flex-1 mb-1" onClick={handleOK}>
                OK
              </Button>
              <Button variant="link" className="flex-1" onClick={() => setMoreSuggestionsOpen(true)}>
                More suggestions
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
              {modeInstructions[tab].title}
            </h2>
            <ActiveInstruction />
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
              More suggestions
            </h2>
            <div className="text-sm leading-relaxed modal-html-content">
              <h5>Spontaneity</h5>
              <p>Creating a shared pleasure space is what is important, not necessarily following all rules and guidelines for their own sake. If you lose track of time, trust your instincts and continue in a spontaneous manner.</p>
              <h5>Perfectionism</h5>
              <p>Don&apos;t sweat it if it doesn&apos;t come out exactly the way you intended. Taking sexuality to deeper levels is a journey. Don&apos;t be hard or too demanding on yourselves.</p>
              <h5>Feedback</h5>
              <p>After playing cards, talk to each other in the first person about what you liked, what could be different, and what could be repeated.</p>
              <p>Time out for the male partner: if arousal exceeds 70%, try the following techniques:</p>
              <ul>
                <li>pause the activity and wait until the arousal level subsides, then resume from exactly where you left off</li>
                <li>clench all the muscles in your body at once, hold your breath for 30 seconds and then release the tension. Repeat; bring your attention from the sex organs to your heart or your third eye</li>
                <li>if you begin intercourse while extremely aroused, that can make premature ejaculation more likely. Go back to the intimacy cards to let the arousal level subside a little</li>
              </ul>
              <h5>Responsibility</h5>
              <p>Each partner is responsible for their own physical, mental and emotional well-being. If you experience strong feelings, see &ldquo;ABCs of Emotions&rdquo;.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
