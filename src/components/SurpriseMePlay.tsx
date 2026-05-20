'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { TimerBlock } from '@/components/TimerBlock'
import { getCategoryTheme } from '@/lib/categoryThemes'
import { HtmlContent } from '@/components/HtmlContent'
import { useLocale } from '@/lib/i18n/useLocale'
import { resolveCardTranslation } from '@/lib/i18n/resolveCardTranslation'

type Translation = {
  locale: string
  title: string
  description: string | null
  additional: string | null
}

type CardData = {
  id: string
  title: string
  description: string | null
  imageUrl: string | null
  additional?: string | null
  category: string
  translations: Translation[]
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

type InitResult =
  | { status: 'ok'; queue: Queue }
  | { status: 'redirect'; to: string }

function initQueue(cardIds: Set<string>): InitResult {
  if (typeof window === 'undefined') return { status: 'redirect', to: '/game' }

  const raw = loadQueue()
  if (!raw) return { status: 'redirect', to: '/game' }

  const sanitized = sanitizeIndex(raw)

  if (sanitized.currentIndex >= sanitized.cards.length) {
    return { status: 'redirect', to: '/game/surprise-me/result' }
  }

  const validIndex = findNextValidIndex(sanitized, cardIds, sanitized.currentIndex)
  if (validIndex === null) {
    return { status: 'redirect', to: '/game/surprise-me/result' }
  }

  if (validIndex !== sanitized.currentIndex) {
    const advanced = { ...sanitized, currentIndex: validIndex }
    window.localStorage.setItem(QUEUE_KEY, JSON.stringify(advanced))
    return { status: 'ok', queue: advanced }
  }

  return { status: 'ok', queue: sanitized }
}

export function SurpriseMePlay({ cards }: Props) {
  const router = useRouter()
  const cardIds = new Set(cards.map((c) => c.id))
  const initResult = useState<InitResult>(() => initQueue(cardIds))[0]
  const [queue, setQueue] = useState<Queue | null>(
    initResult.status === 'ok' ? initResult.queue : null
  )
  const stopSoundRef = useRef<() => void>(() => {})
  const [isNextLoading, setIsNextLoading] = useState(false)
  const { locale, dict } = useLocale()
  const dg = dict.gameplay

  useEffect(() => {
    if (initResult.status === 'redirect') {
      router.replace(initResult.to)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleNext() {
    if (!queue || isNextLoading) return
    stopSoundRef.current()
    setIsNextLoading(true)

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
    setIsNextLoading(false)
  }

  function handleChangeCards() {
    stopSoundRef.current()
    router.push('/game?mode=surprise')
  }

  if (!queue) return null

  const entry = queue.cards[queue.currentIndex]
  const rawCard = cards.find((c) => c.id === entry?.id)

  if (!rawCard) return null

  const card = { ...rawCard, ...resolveCardTranslation(rawCard, locale) }

  const progress = `${queue.currentIndex + 1} / ${queue.cards.length}`
  const theme = getCategoryTheme(card.category)

  return (
    <div className={`min-h-screen py-10 ${theme.screenClassName}`}>
      <Container className="">
        <div className="text-[#D2AF9C] mb-3">
          <div className="flex items-center justify-between mb-2 hidden">
            <span className="text-sm text-[#D2AF9C80]">Surprise me</span>
            <span className="text-sm text-[#D2AF9C80]">{progress}</span>
          </div>
          <div className={`h-[582px] overflow-auto border border-[#69584E] p-4 ${theme.cardContainerClassName} rounded-[24px]`}>
            <div className="flex items-start justify-between gap-2 mb-4">
              <h1 className="text-[20px] leading-[26px] font-semibold">{card.title}</h1>
              <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${theme.badgeClassName} hidden`}>
                {CATEGORY_LABELS[card.category] ?? card.category}
              </span>
            </div>

            {card.imageUrl && (
              <div className="relative h-[140px] w-full mb-4">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover rounded-[12px]"
                />
              </div>
            )}

            <HtmlContent html={card.description} className="game-card-content" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <TimerBlock resetKey={entry.id} storageKey="connexion_timer_surprise" stopSoundRef={stopSoundRef} />
          <div className="flex gap-3">
            <Button variant="secondary" onClick={handleChangeCards} className="border-none">
              {dg.changeCards}
            </Button>
            <Button variant="secondary" onClick={handleNext} disabled={isNextLoading} className="border-none">
              {isNextLoading ? dict.common.loading : queue.currentIndex + 1 >= queue.cards.length ? dg.finish : dg.nextCard}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
