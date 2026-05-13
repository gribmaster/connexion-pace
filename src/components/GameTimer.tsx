'use client'

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

  const handleNext = () => {
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

  return (
    <div className="flex flex-col gap-4">
      <TimerBlock resetKey={cardId} />

      <div className="flex gap-3">
        <Button variant="secondary" onClick={() => router.push('/game/intuitive/result')}>
          Finish game
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Next card
        </Button>
      </div>
    </div>
  )
}
