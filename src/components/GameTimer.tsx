'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { TimerBlock } from '@/components/TimerBlock'

type Props = {
  category: string
  cardId: string
  otherCardIds: string[]
}

const VISITED_KEY = (cat: string) => `intuitive_visited_${cat}`

function getVisited(category: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(VISITED_KEY(category)) ?? '[]')
  } catch {
    return []
  }
}

function saveVisited(category: string, ids: string[]) {
  localStorage.setItem(VISITED_KEY(category), JSON.stringify(ids))
}

export function GameTimer({ category, cardId, otherCardIds }: Props) {
  const router = useRouter()
  const stopSoundRef = useRef<() => void>(() => {})

  const handleNext = () => {
    stopSoundRef.current()

    if (otherCardIds.length === 0) {
      router.push('/game/intuitive/result')
      return
    }

    const visited = getVisited(category)
    let unvisited = otherCardIds.filter((id) => !visited.includes(id))

    if (unvisited.length === 0) {
      saveVisited(category, [])
      unvisited = otherCardIds
    }

    const randomId = unvisited[Math.floor(Math.random() * unvisited.length)]
    saveVisited(category, [...visited, randomId])
    router.push(`/game/intuitive/${category}/${randomId}`)
  }

  const handleFinish = () => {
    stopSoundRef.current()
    router.push('/game/intuitive/result')
  }

  return (
    <div className="flex flex-col gap-3">
      <TimerBlock resetKey={cardId} storageKey="connexion_timer_intuitive" stopSoundRef={stopSoundRef} />

      <div className="flex gap-3">
        <Button variant="secondary" onClick={handleFinish} className="border-none">
          Finish game
        </Button>
        <Button variant="secondary" onClick={handleNext} className="border-none">
          Next card
        </Button>
      </div>
    </div>
  )
}
