'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

const INITIAL_SECONDS = 5 * 60

export function GameTimer() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const add = () => setSeconds((s) => s + 30)
  const subtract = () => setSeconds((s) => Math.max(0, s - 30))

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')

  return (
    <div className="flex items-center justify-center gap-4">
      <Button variant="secondary" className="w-10 px-0" onClick={subtract}>
        -
      </Button>
      <span className="min-w-[64px] text-center text-2xl font-mono font-semibold text-[#D2AF9C]">
        {mm}:{ss}
      </span>
      <Button variant="secondary" className="w-10 px-0" onClick={add}>
        +
      </Button>
    </div>
  )
}
