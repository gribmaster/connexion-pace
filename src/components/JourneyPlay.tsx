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

const QUEUE_KEY = 'connexion_journey_queue'

type Category = 'CONNECTION' | 'INTIMACY' | 'LOVEMAKING'

type QueueEntry = {
  id: string
  category: Category
}

type Queue = {
  cards: QueueEntry[]
  currentIndex: number
  randomOrder: boolean
}

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

type Props = {
  cards: CardData[]
}

type InitResult =
  | { status: 'ok'; queue: Queue }
  | { status: 'redirect'; to: string }

function loadQueue(cardIds: Set<string>): InitResult {
  if (typeof window === 'undefined') return { status: 'redirect', to: '/game?mode=journey' }
  try {
    const raw = localStorage.getItem(QUEUE_KEY)
    if (!raw) return { status: 'redirect', to: '/game?mode=journey' }
    const parsed = JSON.parse(raw) as Queue
    if (!Array.isArray(parsed?.cards) || parsed.cards.length === 0) {
      return { status: 'redirect', to: '/game?mode=journey' }
    }
    const idx = parsed.currentIndex
    if (typeof idx !== 'number' || !isFinite(idx) || idx < 0 || Math.floor(idx) !== idx) {
      parsed.currentIndex = 0
    }
    if (parsed.currentIndex >= parsed.cards.length) {
      return { status: 'redirect', to: '/game/journey/result' }
    }
    // advance past any deleted card IDs
    let validIndex = parsed.currentIndex
    while (validIndex < parsed.cards.length && !cardIds.has(parsed.cards[validIndex].id)) {
      validIndex++
    }
    if (validIndex >= parsed.cards.length) {
      return { status: 'redirect', to: '/game/journey/result' }
    }
    if (validIndex !== parsed.currentIndex) {
      parsed.currentIndex = validIndex
      localStorage.setItem(QUEUE_KEY, JSON.stringify(parsed))
    }
    return { status: 'ok', queue: parsed }
  } catch {
    localStorage.removeItem(QUEUE_KEY)
    return { status: 'redirect', to: '/game?mode=journey' }
  }
}

export function JourneyPlay({ cards }: Props) {
  const router = useRouter()
  const cardIds = new Set(cards.map((c) => c.id))
  const initResult = useState<InitResult>(() => loadQueue(cardIds))[0]
  const [queue, setQueue] = useState<Queue | null>(
    initResult.status === 'ok' ? initResult.queue : null
  )
  const stopSoundRef = useRef<() => void>(() => {})
  const { locale, dict } = useLocale()
  const dg = dict.gameplay

  useEffect(() => {
    if (initResult.status === 'redirect') {
      router.replace(initResult.to)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleNext() {
    if (!queue) return
    stopSoundRef.current()

    const nextIndex = queue.currentIndex + 1

    // find next valid index (skip deleted cards)
    let validIndex = nextIndex
    while (validIndex < queue.cards.length && !cardIds.has(queue.cards[validIndex].id)) {
      validIndex++
    }

    if (validIndex >= queue.cards.length) {
      router.push('/game/journey/result')
      return
    }

    const updated: Queue = { ...queue, currentIndex: validIndex }
    localStorage.setItem(QUEUE_KEY, JSON.stringify(updated))
    setQueue(updated)
  }

  function handleFinish() {
    stopSoundRef.current()
    router.push('/game/journey/result')
  }

  function handleChangeCards() {
    stopSoundRef.current()
    router.push('/game?mode=journey')
  }

  if (!queue) return null

  const entry = queue.cards[queue.currentIndex]
  const rawCard = cards.find((c) => c.id === entry?.id)
  if (!rawCard) return null
  const card = { ...rawCard, ...resolveCardTranslation(rawCard, locale) }

  const isLast = (() => {
    for (let i = queue.currentIndex + 1; i < queue.cards.length; i++) {
      if (cardIds.has(queue.cards[i].id)) return false
    }
    return true
  })()

  const theme = getCategoryTheme(card.category)
  const progress = `${queue.currentIndex + 1} / ${queue.cards.length}`

  return (
    <div className={`min-h-screen py-10 ${theme.screenClassName}`}>
      <Container>
        <div className="text-[#D2AF9C] mb-3">
          <div className="flex items-center justify-between mb-2 hidden">
            <span className="text-sm text-[#D2AF9C80]">Journey</span>
            <span className="text-sm text-[#D2AF9C80]">{progress}</span>
          </div>
          <div
            className={`h-[582px] overflow-auto border border-[#69584E] p-4 ${theme.cardContainerClassName} rounded-[24px]`}
          >
            <div className="flex justify-between items-start">
              <h1 className="text-[20px] leading-[26px] mb-4 font-semibold">{card.title}</h1>
              <img src="/img/x-plhldr.svg" width="48" alt="" />
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
          <TimerBlock
            resetKey={entry.id}
            storageKey="connexion_timer_journey"
            stopSoundRef={stopSoundRef}
          />
          <div className="flex gap-3">
            <Button variant="secondary" onClick={handleChangeCards} className="border-none">
              {dg.changeCards}
            </Button>
            {isLast ? (
              <Button variant="secondary" onClick={handleFinish} className="border-none">
                {dg.finish}
              </Button>
            ) : (
              <Button variant="secondary" onClick={handleNext} className="border-none">
                {dg.nextCard}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
