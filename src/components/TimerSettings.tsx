'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import {InfoCircleIcon} from "@/components/icons/InfoCircleIcon";
import {CaretDownIcon} from "@/components/icons/CaretDownIcon";
import { useLocale } from '@/lib/i18n/useLocale'

type TimerOption = '5' | '10' | '30' | '60' | 'no_limit'
type TimerMode = 'intuitive' | 'surprise' | 'journey'

const MODE_KEYS: Record<TimerMode, string> = {
  intuitive: 'connexion_timer_intuitive',
  surprise: 'connexion_timer_surprise',
  journey: 'connexion_timer_journey',
}

const LEGACY_KEY = 'intuitive_timer'

const DEFAULT_TIMER_OPTION: TimerOption = '5'

const TIMER_MINUTES = ['5', '10', '30', '60'] as const

function displayValue(opt: TimerOption, noLimitLabel: string): string {
  if (opt === '5') return '05:00'
  if (opt === '10') return '10:00'
  if (opt === '30') return '30:00'
  if (opt === '60') return '60:00'
  return noLimitLabel
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
  const { dict } = useLocale()
  const dt = dict.timer
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<TimerOption>(DEFAULT_TIMER_OPTION)
  const [pending, setPending] = useState<TimerOption>(DEFAULT_TIMER_OPTION)
  const [isMounted, setIsMounted] = useState(false)

  const options: { value: TimerOption; label: string }[] = [
    ...TIMER_MINUTES.map((m) => ({ value: m as TimerOption, label: `${m} ${dt.minutes}` })),
    { value: 'no_limit', label: dt.noLimit },
  ]

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
        className="flex w-full items-center justify-between pt-5"
      >
        <div className="flex items-center font-normal text-[16px] leading-[100%]">
          <span>{dt.setTimer}</span>
          <span className="ml-1">
            <InfoCircleIcon />
          </span>
        </div>
        <div className="flex items-center font-semibold text-[16px] leading-[100%]">
          <span>{isMounted ? displayValue(current, dt.noLimit) : displayValue(DEFAULT_TIMER_OPTION, dt.noLimit)}</span>
          <span className="ml-1">
            <CaretDownIcon />
          </span>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60">
          <div className="flex w-full max-w-md flex-col gap-6 rounded-t-3xl bg-black p-6 pt-9 timer-settings-badge">
            <h2 className="text-lg font-semibold">{dt.setTimer}</h2>
            <div className="flex flex-col gap-2">
              {options.map((opt) => (
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
              {dict.common.ok}
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
