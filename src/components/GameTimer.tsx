'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

type Props = {
  category: string
  cardId: string
  otherCardIds: string[]
}

const STORAGE_KEY = 'intuitive_timer'
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

function playBeep() {
  try {
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = 880
    gain.gain.setValueAtTime(0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4)
    osc.start()
    osc.stop(ctx.currentTime + 0.4)
    osc.onended = () => ctx.close()
  } catch {}
}

export function GameTimer({ category, cardId, otherCardIds }: Props) {
  const router = useRouter()
  const [noLimit, setNoLimit] = useState(false)
  const [seconds, setSeconds] = useState(300)
  const [running, setRunning] = useState(false)
  const [timeUp, setTimeUp] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) ?? '5'
    if (stored === 'no_limit') {
      setNoLimit(true)
      setSeconds(300)
    } else {
      setNoLimit(false)
      setSeconds(parseInt(stored, 10) * 60)
    }
    setTimeUp(false)
    setRunning(true)
  }, [cardId])

  useEffect(() => {
    if (noLimit || !running || seconds <= 0) return
    const id = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setRunning(false)
          setTimeUp(true)
          playBeep()
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [noLimit, running, seconds])

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')

  const handleNext = () => {
    if (otherCardIds.length === 0) {
      router.push('/game/result')
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
      <div className="flex flex-col items-center gap-3">
        {noLimit ? (
          <span className="text-3xl font-mono font-semibold text-[#D2AF9C]">No limit</span>
        ) : (
          <div className="flex items-center gap-4">
            <button
              className="text-2xl font-bold text-[#D2AF9C] px-2"
              onClick={() => setSeconds((s) => Math.max(0, s - 10))}
            >
              −
            </button>
            <span className="min-w-[80px] text-center text-3xl font-mono font-semibold text-[#D2AF9C]">
              {`${mm}:${ss}`}
            </span>
            <button
              className="text-2xl font-bold text-[#D2AF9C] px-2"
              onClick={() => {
                setSeconds((s) => s + 30)
                if (timeUp) {
                  setTimeUp(false)
                  setRunning(true)
                }
              }}
            >
              +
            </button>
          </div>
        )}
        {!noLimit && timeUp && (
          <span className="text-sm font-semibold text-red-400">Time is up</span>
        )}
        {!noLimit && (
          <Button
            variant="secondary"
            className="w-auto px-8"
            onClick={() => setRunning((r) => !r)}
          >
            {running ? 'Stop' : 'Play'}
          </Button>
        )}
      </div>

      <div className="flex gap-3">
        <Button variant="secondary" onClick={() => router.push('/game/result')}>
          Finish game
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Next card
        </Button>
      </div>
    </div>
  )
}
