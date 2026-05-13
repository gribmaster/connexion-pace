'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { TimerBlock } from '@/components/TimerBlock'

type CardData = {
  id: string
  title: string
  description: string
  imageUrl: string | null
  category: string
}

type QueueEntry = {
  id: string
  category: string
}

type Queue = {
  cards: QueueEntry[]
  currentIndex: number
}

type Props = {
  cards: CardData[]
}

const CATEGORY_LABELS: Record<string, string> = {
  CONNECTION: 'Connection',
  INTIMACY: 'Intimacy',
  LOVEMAKING: 'Lovemaking',
}

const QUEUE_KEY = 'connexion_surprise_queue'

function loadQueue(): Queue | null {
  try {
    const raw = localStorage.getItem(QUEUE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Queue
    if (!Array.isArray(parsed?.cards) || parsed.cards.length === 0) return null
    return parsed
  } catch {
    localStorage.removeItem(QUEUE_KEY)
    return null
  }
}

function sanitizeIndex(queue: Queue): Queue {
  const idx = queue.currentIndex
  if (typeof idx !== 'number' || !isFinite(idx) || idx < 0 || Math.floor(idx) !== idx) {
    const fixed = { ...queue, currentIndex: 0 }
    localStorage.setItem(QUEUE_KEY, JSON.stringify(fixed))
    return fixed
  }
  return queue
}

function findNextValidIndex(queue: Queue, cardIds: Set<string>, fromIndex: number): number | null {
  for (let i = fromIndex; i < queue.cards.length; i++) {
    if (cardIds.has(queue.cards[i].id)) return i
  }
  return null
}

function initQueue(cardIds: Set<string>): Queue | null {
  if (typeof window === 'undefined') return null

  const raw = loadQueue()
  if (!raw) return null

  const sanitized = sanitizeIndex(raw)

  if (sanitized.currentIndex >= sanitized.cards.length) return null

  const validIndex = findNextValidIndex(sanitized, cardIds, sanitized.currentIndex)
  if (validIndex === null) return null

  if (validIndex !== sanitized.currentIndex) {
    const advanced = { ...sanitized, currentIndex: validIndex }
    window.localStorage.setItem(QUEUE_KEY, JSON.stringify(advanced))
    return advanced
  }

  return sanitized
}

export function SurpriseMePlay({ cards }: Props) {
  const router = useRouter()
  const cardIds = new Set(cards.map((c) => c.id))
  const [queue, setQueue] = useState<Queue | null>(() => initQueue(cardIds))
  const stopSoundRef = useRef<() => void>(() => {})

  useEffect(() => {
    if (queue === null) {
      router.replace('/game')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleNext() {
    if (!queue) return
    stopSoundRef.current()

    const nextIndex = queue.currentIndex + 1

    if (nextIndex >= queue.cards.length) {
      router.push('/game/surprise-me/result')
      return
    }

    const validIndex = findNextValidIndex(queue, cardIds, nextIndex)
    if (validIndex === null) {
      router.push('/game/surprise-me/result')
      return
    }

    const updated: Queue = { ...queue, currentIndex: validIndex }
    localStorage.setItem(QUEUE_KEY, JSON.stringify(updated))
    setQueue(updated)
  }

  function handleChangeCards() {
    stopSoundRef.current()
    router.push('/game?mode=surprise')
  }

  if (!queue) return null

  const entry = queue.cards[queue.currentIndex]
  const card = cards.find((c) => c.id === entry?.id)

  if (!card) return null

  const progress = `${queue.currentIndex + 1} / ${queue.cards.length}`

  return (
    <div className="min-h-screen bg-[#1a0a0e] py-10">
      <Container className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#D2AF9C80]">Surprise me</span>
          <span className="text-sm text-[#D2AF9C80]">{progress}</span>
        </div>

        <Card className="flex flex-col gap-5 bg-white p-5">
          <div className="flex items-start justify-between gap-2">
            <h1 className="text-xl font-semibold text-[#1a0a0e]">{card.title}</h1>
            <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium bg-${card.category} text-[#D2AF9C]`}>
              {CATEGORY_LABELS[card.category] ?? card.category}
            </span>
          </div>

          {card.imageUrl && (
            <div className="relative h-52 w-full overflow-hidden rounded-2xl">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <p className="text-sm text-[#5a3a3a]">{card.description}</p>
        </Card>

        <div className="flex flex-col gap-3">
          <TimerBlock resetKey={entry.id} stopSoundRef={stopSoundRef} />
          <Button onClick={handleNext}>
            {queue.currentIndex + 1 >= queue.cards.length ? 'Finish' : 'Next card'}
          </Button>
          <Button variant="secondary" onClick={handleChangeCards}>
            Change cards
          </Button>
        </div>
      </Container>
    </div>
  )
}
