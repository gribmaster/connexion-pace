'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

type CategoryBlock = {
  label: string
  value: string
  count: number
}

type Props = {
  categories: CategoryBlock[]
}

export function SurpriseMeSelector({ categories }: Props) {
  const [selected, setSelected] = useState<Record<string, number>>(
    Object.fromEntries(categories.map((c) => [c.value, 0]))
  )
  const [introOpen, setIntroOpen] = useState(false)
  const [moreSuggestionsOpen, setMoreSuggestionsOpen] = useState(false)

  const total = Object.values(selected).reduce((a, b) => a + b, 0)

  function increment(value: string, max: number) {
    setSelected((prev) => ({ ...prev, [value]: Math.min(prev[value] + 1, max) }))
  }

  function decrement(value: string) {
    setSelected((prev) => ({ ...prev, [value]: Math.max(prev[value] - 1, 0) }))
  }

  function handleStart() {
    setIntroOpen(true)
  }

  function handleOK() {
    console.log('Surprise me selected counts:', selected)
    setIntroOpen(false)
  }

  return (
    <>
      <div className="flex flex-col gap-3 pb-4">
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

        <Button
          onClick={handleStart}
          disabled={total === 0}
          className="mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Start game
        </Button>
      </div>

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
