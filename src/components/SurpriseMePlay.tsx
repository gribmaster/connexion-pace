'use client'

import { useEffect, useState } from 'react'
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

export function SurpriseMePlay({ cards }: Props) {
  const router = useRouter()
  const [queue, setQueue] = useState<Queue | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('connexion_surprise_queue')
      if (!raw) {
        router.replace('/game')
        return
      }
      const parsed: Queue = JSON.parse(raw)
      if (!parsed.cards || parsed.cards.length === 0) {
        router.replace('/game')
        return
      }
      setQueue(parsed)
    } catch {
      router.replace('/game')
    }
    setReady(true)
  }, [router])

  function handleNext() {
    if (!queue) return
    const nextIndex = queue.currentIndex + 1

    if (nextIndex >= queue.cards.length) {
      router.push('/game/surprise-me/result')
      return
    }

    const updated: Queue = { ...queue, currentIndex: nextIndex }
    localStorage.setItem('connexion_surprise_queue', JSON.stringify(updated))
    setQueue(updated)
  }

  function handleChangeCards() {
    router.push('/game')
  }

  if (!ready || !queue) return null

  const entry = queue.cards[queue.currentIndex]
  const card = cards.find((c) => c.id === entry?.id)

  if (!card) {
    router.replace('/game')
    return null
  }

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
          <TimerBlock resetKey={entry.id} />
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
