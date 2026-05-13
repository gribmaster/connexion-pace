'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

const STORAGE_KEY = 'intuitive_timer'

function playBeep() {
  try {
    const file = localStorage.getItem('connexion_timer_sound') ?? 'beep1.wav'
    const vol = localStorage.getItem('connexion_timer_volume')
    const volume = vol !== null ? Number(vol) / 100 : 0.7
    const audio = new Audio(`/sound/${file}`)
    audio.volume = volume
    audio.play()
  } catch {}
}

type Props = {
  resetKey: string
}

export function TimerBlock({ resetKey }: Props) {
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
  }, [resetKey])

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

  return (
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
  )
}
