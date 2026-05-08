'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

type TimerOption = '5' | '10' | 'no_limit'

const STORAGE_KEY = 'intuitive_timer'

const OPTIONS: { value: TimerOption; label: string }[] = [
  { value: '5', label: '5 minutes' },
  { value: '10', label: '10 minutes' },
  { value: 'no_limit', label: 'No limit' },
]

function displayValue(opt: TimerOption): string {
  if (opt === '5') return '05:00'
  if (opt === '10') return '10:00'
  return 'No limit'
}

export function TimerSettings() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<TimerOption>('5')
  const [pending, setPending] = useState<TimerOption>('5')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as TimerOption | null
    if (stored) {
      setCurrent(stored)
      setPending(stored)
    }
  }, [])

  const handleOpen = () => {
    setPending(current)
    setOpen(true)
  }

  const handleOk = () => {
    setCurrent(pending)
    localStorage.setItem(STORAGE_KEY, pending)
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex w-full items-center justify-between rounded-xl border border-[#D2AF9C]/30 px-4 py-3 text-[#D2AF9C]"
      >
        <div className="flex items-center gap-2 text-sm">
          <span>Set timer</span>
          <span className="text-xs opacity-50">ⓘ</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-mono">
          <span>{displayValue(current)}</span>
          <span className="text-base">⏱</span>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60">
          <div className="flex w-full max-w-md flex-col gap-5 rounded-t-3xl bg-white px-6 py-8">
            <h2 className="text-lg font-semibold text-[#1a0a0e]">Set timer</h2>
            <div className="flex flex-col gap-3">
              {OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setPending(opt.value)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                    pending === opt.value
                      ? 'border-[#860119] bg-[#860119]/10 text-[#860119]'
                      : 'border-[#D2AF9C]/40 text-[#5a3a3a]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <Button variant="primary" onClick={handleOk}>
              OK
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
