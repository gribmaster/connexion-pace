'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { WheelPicker } from '@/components/reminder/WheelPicker'
import { subscribeToPushNotifications } from '@/lib/notifications/subscribeToPush'
import { REMINDER_KEY } from '@/lib/notifications/playReminder'
import { useLocale } from '@/lib/i18n/useLocale'

// Month names used only for date parsing — always English from query params
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
const MINUTES = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
const AMPM = ['AM', 'PM']

type SaveStatus = 'idle' | 'saving' | 'saved' | 'past-error' | 'sub-error' | 'api-error'

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
  const { dict } = useLocale()

  const monthName = params.get('month') ?? 'January'
  const day = params.get('day') ?? '01'
  const year = params.get('year') ?? String(new Date().getFullYear())

  const defaults = getDefaultTime()

  const [hour, setHour] = useState(defaults.hour)
  const [minute, setMinute] = useState(defaults.minute)
  const [ampm, setAmPm] = useState(defaults.ampm)
  const [status, setStatus] = useState<SaveStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [savedLocalTime, setSavedLocalTime] = useState<string | null>(null)

  // Any picker change after a terminal state resets to idle so Save reappears.
  const TERMINAL: SaveStatus[] = ['saved', 'past-error', 'sub-error', 'api-error']
  function onPickerChange(setter: (v: string) => void) {
    return (v: string) => {
      setter(v)
      if (TERMINAL.includes(status)) {
        setStatus('idle')
        setErrorMessage(null)
        setSavedLocalTime(null)
      }
    }
  }

  function buildScheduledDate(): Date {
    const monthIndex = MONTH_NAMES.indexOf(monthName)

    let h24 = parseInt(hour, 10)
    if (ampm === 'PM' && h24 !== 12) h24 += 12
    if (ampm === 'AM' && h24 === 12) h24 = 0

    // new Date(y, m, d, h, min, s, ms) always uses local browser time.
    return new Date(parseInt(year, 10), monthIndex, parseInt(day, 10), h24, parseInt(minute, 10), 0, 0)
  }

  async function handleSave() {
    const localDate = buildScheduledDate()

    if (localDate.getTime() <= Date.now()) {
      setStatus('past-error')
      return
    }

    setStatus('saving')
    setErrorMessage(null)

    const subResult = await subscribeToPushNotifications()

    if (!subResult.ok) {
      setStatus('sub-error')
      setErrorMessage(subResult.error ?? 'Could not enable notifications. Please try again.')
      return
    }

    if (!subResult.subscriptionId) {
      setStatus('sub-error')
      setErrorMessage('Could not create notification subscription. Please try again.')
      return
    }

    const scheduledAt = localDate.toISOString()
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || undefined

    if (process.env.NODE_ENV === 'development') {
      console.log('[Reminder]', {
        localSelected: localDate.toString(),
        scheduledAt,
        timezone,
      })
    }

    let reminderId: string
    try {
      const res = await fetch('/api/notifications/play-reminders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscriptionId: subResult.subscriptionId, scheduledAt, timezone }),
      })
      const data = (await res.json()) as { ok?: boolean; reminderId?: string; error?: string }
      if (!res.ok || !data.ok || !data.reminderId) {
        setStatus('api-error')
        setErrorMessage('Could not save reminder. Please try again.')
        return
      }
      reminderId = data.reminderId
    } catch {
      setStatus('api-error')
      setErrorMessage('Could not save reminder. Please try again.')
      return
    }

    localStorage.setItem(
      REMINDER_KEY,
      JSON.stringify({ reminderId, scheduledAt, timezone: timezone ?? null, createdAt: new Date().toISOString() }),
    )

    setSavedLocalTime(
      localDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    )
    setStatus('saved')
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
            ← {dict.common.back}
          </button>

          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-[24px] leading-[130%]">{dict.reminder.choosePlayDate}</h1>
            <p className="font-normal text-[14px] leading-[150%] opacity-60">
              {dict.reminder.choosePlayDateSubtitle}
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
          {(status === 'sub-error' || status === 'api-error') && errorMessage && (
            <p className="text-center text-[13px] text-red-400">
              {errorMessage}
            </p>
          )}
          {status === 'saved' && (
            <p className="text-center text-[13px] opacity-70">
              {savedLocalTime
                ? `Reminder saved for ${savedLocalTime}. We'll remind you when it's time to play.`
                : "Reminder saved. We'll remind you when it's time to play."}
            </p>
          )}

          {/* Action buttons */}
          {(status === 'idle' || status === 'past-error' || status === 'sub-error' || status === 'api-error') && (
            <Button variant="primary" onClick={handleSave}>
              {dict.common.save}
            </Button>
          )}

          {status === 'saved' && (
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
