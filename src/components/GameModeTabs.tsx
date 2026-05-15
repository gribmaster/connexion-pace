'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { TimerSettings } from '@/components/TimerSettings'
import { InfoCircleIcon } from '@/components/icons/InfoCircleIcon'
import { UserCircleIcon } from '@/components/icons/UserCircleIcon'
import { IntuitiveInstruction } from '@/components/game/instructions/IntuitiveInstruction'
import { SurpriseInstruction } from '@/components/game/instructions/SurpriseInstruction'
import { JourneyInstruction } from '@/components/game/instructions/JourneyInstruction'

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

  const total = Object.values(selected).reduce((a, b) => a + b, 0)
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
          disabled
          className="font-semibold text-[14px] leading-[20px] p-2 border-b border-[#69584E80] text-[#D2AF9C40] flex-1 cursor-not-allowed"
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
          <Card className="flex flex-col mt-5 gap-3">
            {categories.map(({ label, value, count }) => (
              <div
                key={value}
                className={`flex items-center justify-between p-3 bg-${value} rounded-[24px] border border-[#69584E] shadow-[0px_0px_20px_0px_#000000]`}
              >
                <div className="flex flex-col self-start p-2">
                  <span className="font-['Baskervville'] font-normal text-[24px] leading-[31px]">{label}</span>
                  <span className="font-normal text-[16px] leading-[100%]">{count} cards</span>
                </div>
                <Link href={`/game/intuitive/${value}`} className={`h-[154px] w-[96px] cat-${value} cat-card`}>
                  <div className="font-semibold text-[12px] leading-[100%]">Choose</div>
                </Link>
              </div>
            ))}
          </Card>
          <TimerSettings mode={tab} />
        </>
      )}

      {/* Surprise me tab content */}
      {tab === 'surprise' && (
        <div className="flex flex-col mt-5 gap-3">
          <Card className="flex flex-col gap-3">
            {categories.map(({ label, value, count }) => (
              <div
                key={value}
                className={`flex items-center justify-between p-3 bg-${value} rounded-[24px] border border-[#69584E] shadow-[0px_0px_20px_0px_#000000]`}
              >
                <div className="flex flex-col self-start p-2">
                  <span className="font-['Baskervville'] font-normal text-[24px] leading-[31px]">{label}</span>
                  <span className="font-normal text-[16px] leading-[100%]">{count} cards</span>
                </div>
                <div className="flex items-center gap-3 pr-2">
                  <button
                    onClick={() => decrement(value)}
                    disabled={selected[value] === 0}
                    className="w-8 h-8 rounded-full border border-[#69584E] flex items-center justify-center text-[#D2AF9C] disabled:opacity-30 transition-opacity"
                  >
                    −
                  </button>
                  <span className="w-5 text-center font-semibold text-[#D2AF9C] text-[16px]">
                    {selected[value]}
                  </span>
                  <button
                    onClick={() => increment(value, count)}
                    disabled={selected[value] === count}
                    className="w-8 h-8 rounded-full border border-[#69584E] flex items-center justify-center text-[#D2AF9C] disabled:opacity-30 transition-opacity"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </Card>

          <TimerSettings mode={tab} />
          <Button
            onClick={handleStartSurprise}
            disabled={total === 0}
            className="mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Start game
          </Button>
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
              <Button className="flex-1" onClick={handleOK}>
                OK
              </Button>
            </div>
          </div>
        </div>
      )}

      {instructionOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setInstructionOpen(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setInstructionOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#1a0a0e] hover:bg-black/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
            <h2 className="mb-4 text-lg font-semibold text-[#1a0a0e]">
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
            className="relative w-full max-w-sm rounded-3xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMoreSuggestionsOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#1a0a0e] hover:bg-black/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
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
    </>
  )
}
