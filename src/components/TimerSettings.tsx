'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import {InfoCircleIcon} from "@/components/icons/InfoCircleIcon";
import {CaretDownIcon} from "@/components/icons/CaretDownIcon";

type TimerOption = '5' | '10' | '30' | '60' | 'no_limit'
type TimerMode = 'intuitive' | 'surprise' | 'journey'

const MODE_KEYS: Record<TimerMode, string> = {
  intuitive: 'connexion_timer_intuitive',
  surprise: 'connexion_timer_surprise',
  journey: 'connexion_timer_journey',
}

const LEGACY_KEY = 'intuitive_timer'

const DEFAULT_TIMER_OPTION: TimerOption = '5'

const OPTIONS: { value: TimerOption; label: string }[] = [
  { value: '5', label: '5 minutes' },
  { value: '10', label: '10 minutes' },
  { value: '30', label: '30 minutes' },
  { value: '60', label: '60 minutes' },
  { value: 'no_limit', label: 'No limit' },
]

function displayValue(opt: TimerOption): string {
  if (opt === '5') return '05:00'
  if (opt === '10') return '10:00'
  if (opt === '30') return '30:00'
  if (opt === '60') return '60:00'
  return 'No limit'
}

function isValidOption(v: string | null): v is TimerOption {
  return v === '5' || v === '10' || v === '30' || v === '60' || v === 'no_limit'
}

function readStoredOption(storageKey: string): TimerOption {
  const stored = window.localStorage.getItem(storageKey)
  if (isValidOption(stored)) return stored
  // one-time migration from legacy key for intuitive mode
  if (storageKey === MODE_KEYS.intuitive) {
    const legacy = window.localStorage.getItem(LEGACY_KEY)
    if (isValidOption(legacy)) {
      window.localStorage.setItem(storageKey, legacy)
      return legacy
    }
  }
  return DEFAULT_TIMER_OPTION
}

type Props = {
  mode: TimerMode
}

export function TimerSettings({ mode }: Props) {
  const storageKey = MODE_KEYS[mode]
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<TimerOption>(DEFAULT_TIMER_OPTION)
  const [pending, setPending] = useState<TimerOption>(DEFAULT_TIMER_OPTION)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    queueMicrotask(() => {
      const opt = readStoredOption(storageKey)
      setCurrent(opt)
      setPending(opt)
      setIsMounted(true)
    })
  }, [storageKey])

  const handleOpen = () => {
    setPending(current)
    setOpen(true)
  }

  const handleOk = () => {
    setCurrent(pending)
    localStorage.setItem(storageKey, pending)
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex w-full items-center justify-between py-5"
      >
        <div className="flex items-center font-normal text-[16px] leading-[100%]">
          <span>Set timer</span>
          <span className="ml-1">
            <InfoCircleIcon />
          </span>
        </div>
        <div className="flex items-center font-semibold text-[16px] leading-[100%]">
          <span>{isMounted ? displayValue(current) : displayValue(DEFAULT_TIMER_OPTION)}</span>
          <span className="ml-1">
            <CaretDownIcon />
          </span>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60">
          <div className="flex w-full max-w-md flex-col gap-6 rounded-t-3xl bg-black p-6 pt-9 timer-settings-badge">
            <h2 className="text-lg font-semibold">Set timer</h2>
            <div className="flex flex-col gap-2">
              {OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setPending(opt.value)}
                  className={`rounded-[8px] px-3 py-[7px] font-normal text-[16px] leading-[24px] text-left ${
                    pending === opt.value
                      ? 'bg-[#69584E33]'
                      : ''
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
