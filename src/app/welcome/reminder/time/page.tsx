'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { WheelPicker } from '@/components/reminder/WheelPicker'
import {
  savePlayReminder,
  requestNotificationPermission,
  schedulePlayReminder,
} from '@/lib/notifications/playReminder'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
const MINUTES = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
const AMPM = ['AM', 'PM']

type SaveStatus = 'idle' | 'saving' | 'trigger' | 'timeout' | 'saved-only' | 'denied' | 'past-error'

// Returns { hour, minute, ampm } defaulting to the current local time with
// minutes rounded UP to the next 5-minute step. If rounding overflows into
// the next hour, hour and AM/PM are adjusted accordingly.
function getDefaultTime(): { hour: string; minute: string; ampm: string } {
  const now = new Date()
  let h24 = now.getHours()
  let rawMin = now.getMinutes()

  // Round minutes up to next multiple of 5
  const roundedMin = Math.ceil(rawMin / 5) * 5

  if (roundedMin >= 60) {
    // Overflow into the next hour
    h24 = (h24 + 1) % 24
    rawMin = 0
  } else {
    rawMin = roundedMin
  }

  const ampm = h24 >= 12 ? 'PM' : 'AM'
  const h12 = h24 % 12 || 12   // 0 → 12, 13 → 1, etc.

  return {
    hour: String(h12).padStart(2, '0'),
    minute: String(rawMin).padStart(2, '0'),
    ampm,
  }
}

function TimePickerInner() {
  const router = useRouter()
  const params = useSearchParams()

  const monthName = params.get('month') ?? 'January'
  const day = params.get('day') ?? '01'
  const year = params.get('year') ?? String(new Date().getFullYear())

  const defaults = getDefaultTime()

  const [hour, setHour] = useState(defaults.hour)
  const [minute, setMinute] = useState(defaults.minute)
  const [ampm, setAmPm] = useState(defaults.ampm)
  const [status, setStatus] = useState<SaveStatus>('idle')

  // Any picker change after a terminal state resets to idle so Save reappears.
  const TERMINAL: SaveStatus[] = ['trigger', 'timeout', 'saved-only', 'denied', 'past-error']
  function onPickerChange(setter: (v: string) => void) {
    return (v: string) => {
      setter(v)
      if (TERMINAL.includes(status)) setStatus('idle')
    }
  }

  function buildScheduledDate(): Date {
    const monthIndex = MONTH_NAMES.indexOf(monthName)
    const d = new Date()
    d.setFullYear(parseInt(year, 10), monthIndex, parseInt(day, 10))

    let h = parseInt(hour, 10)
    if (ampm === 'PM' && h !== 12) h += 12
    if (ampm === 'AM' && h === 12) h = 0

    d.setHours(h, parseInt(minute, 10), 0, 0)
    return d
  }

  async function handleSave() {
    const scheduledDate = buildScheduledDate()

    if (scheduledDate <= new Date()) {
      setStatus('past-error')
      return
    }

    setStatus('saving')

    const reminder = savePlayReminder(scheduledDate)

    const permission = await requestNotificationPermission()

    if (permission === 'denied') {
      setStatus('denied')
      return
    }

    if (permission === 'granted') {
      const result = await schedulePlayReminder(reminder)
      setStatus(result)
    } else {
      // null means Notifications API not available
      setStatus('saved-only')
    }
  }

  function handleBack() {
    const p = new URLSearchParams({ month: monthName, day, year })
    router.push(`/welcome/reminder/date?${p.toString()}`)
  }

  const dateLabel = `${monthName} ${parseInt(day, 10)}, ${year}`

  return (
    <main className="flex flex-col items-center max-w-[525px] mx-auto min-h-screen">
      <Container>
        <div className="flex flex-col gap-8 pt-16">

          <button
            onClick={handleBack}
            className="self-start text-[14px] opacity-60 hover:opacity-100 transition-opacity"
          >
            ← Back
          </button>

          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-[24px] leading-[130%]">Choose play time</h1>
            <p className="font-normal text-[14px] leading-[150%] opacity-60">
              Select when you want to play and we&apos;ll remind you.
            </p>
            <p className="font-medium text-[13px] opacity-40 mt-1">{dateLabel}</p>
          </div>

          {/* Wheel picker row */}
          <div className="flex items-center justify-center gap-2 py-4">
            <WheelPicker options={HOURS} value={hour} onChange={onPickerChange(setHour)} />

            <span className="text-[20px] font-semibold opacity-40 pb-1">:</span>

            <WheelPicker options={MINUTES} value={minute} onChange={onPickerChange(setMinute)} />

            <div className="w-2" />

            <WheelPicker options={AMPM} value={ampm} onChange={onPickerChange(setAmPm)} />
          </div>

          {/* Validation / status messages */}
          {status === 'past-error' && (
            <p className="text-center text-[13px] text-red-400">
              Please choose a future time.
            </p>
          )}
          {status === 'trigger' && (
            <p className="text-center text-[13px] opacity-70">
              Reminder saved. We&apos;ll remind you when it&apos;s time to play.
            </p>
          )}
          {status === 'timeout' && (
            <p className="text-center text-[13px] opacity-70">
              Reminder saved. Notifications may only work while the app is open until push reminders are enabled.
            </p>
          )}
          {status === 'saved-only' && (
            <p className="text-center text-[13px] opacity-70">
              Reminder saved. Notifications may only work while the app is open until push reminders are enabled.
            </p>
          )}
          {status === 'denied' && (
            <p className="text-center text-[13px] opacity-70">
              Reminder saved, but notifications are blocked in your browser settings.
            </p>
          )}

          {/* Action buttons */}
          {(status === 'idle' || status === 'past-error') && (
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          )}

          {(status === 'trigger' || status === 'timeout' || status === 'saved-only' || status === 'denied') && (
            <Button variant="primary" onClick={() => router.push('/welcome')}>
              Back to Connexion Space
            </Button>
          )}

          {status === 'saving' && (
            <Button variant="primary" disabled>
              Saving…
            </Button>
          )}
        </div>
      </Container>
    </main>
  )
}

export default function ReminderTimePage() {
  return (
    <Suspense>
      <TimePickerInner />
    </Suspense>
  )
}
