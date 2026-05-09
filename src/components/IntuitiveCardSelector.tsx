'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

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
}

export function IntuitiveCardSelector({ cards, category, categoryInfo }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [previewCard, setPreviewCard] = useState<CardItem | null>(null)
  const [learnMoreCard, setLearnMoreCard] = useState<CardItem | null>(null)
  const [infoOpen, setInfoOpen] = useState(false)
  const router = useRouter()

  function handleStart() {
    if (!selectedId) return
    router.push(`/game/intuitive/${category}/${selectedId}`)
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <Link href="/game">
          <Button variant="secondary" className="w-auto px-5">
            ← Back
          </Button>
        </Link>
        <h1 className="flex-1 text-xl font-semibold capitalize text-[#D2AF9C]">
          {category.toLowerCase()}
        </h1>
        <button
          onClick={() => setInfoOpen(true)}
          aria-label="Category info"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#D2AF9C] hover:bg-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4 pb-28">
        {cards.map((card) => {
          const selected = card.id === selectedId
          return (
            <div
              key={card.id}
              onClick={() => setSelectedId(card.id)}
              className="relative cursor-pointer"
            >
              <Card
                className={
                  selected
                    ? 'border-2 border-[#860119] ring-2 ring-[#860119]/30'
                    : 'border-2 border-transparent'
                }
              >
                {card.imageUrl && (
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="mb-3 h-36 w-full rounded-xl object-cover"
                  />
                )}
                <h2 className="mb-1 text-base font-semibold text-[#1a0a0e]">
                  {card.title}
                </h2>
              </Card>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setPreviewCard(card)
                }}
                aria-label="Card details"
                className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#1a0a0e]/60 text-[#D2AF9C] hover:bg-[#1a0a0e]/80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )
        })}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#1a0a0e] px-4 py-4">
        <Button onClick={handleStart} disabled={!selectedId}>
          Start game
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
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60"
          onClick={() => setPreviewCard(null)}
        >
          <div
            className="w-full max-w-lg rounded-t-3xl bg-white p-6 pb-10"
            onClick={(e) => e.stopPropagation()}
          >
            {previewCard.imageUrl && (
              <img
                src={previewCard.imageUrl}
                alt={previewCard.title}
                className="mb-4 h-48 w-full rounded-2xl object-cover"
              />
            )}
            <h2 className="mb-3 text-lg font-semibold text-[#1a0a0e]">
              {previewCard.title}
            </h2>
            {previewCard.description && (
              <p className="mb-6 text-sm text-[#5a3a3a]">{previewCard.description}</p>
            )}
            <Button
              disabled={!previewCard.additional}
              className={!previewCard.additional ? 'opacity-40' : ''}
              onClick={() => setLearnMoreCard(previewCard)}
            >
              Learn more
            </Button>
          </div>
        </div>
      )}

      {learnMoreCard && (
        <div
          className="fixed inset-0 z-60 flex items-end justify-center bg-black/70"
          onClick={() => setLearnMoreCard(null)}
        >
          <div
            className="w-full max-w-lg rounded-t-3xl bg-white p-6 pb-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-lg font-semibold text-[#1a0a0e]">
              Appreciative Words
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-[#5a3a3a]">
              {learnMoreCard.additional}
            </p>
            <Button onClick={() => setLearnMoreCard(null)}>Back</Button>
          </div>
        </div>
      )}
    </>
  )
}
