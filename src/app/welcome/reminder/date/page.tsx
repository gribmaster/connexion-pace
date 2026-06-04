'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { WheelPicker } from '@/components/reminder/WheelPicker'
import { useLocale } from '@/lib/i18n/useLocale'

const EN_MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function daysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate()
}

function buildDayOptions(month: number, year: number): string[] {
  const count = daysInMonth(month, year)
  return Array.from({ length: count }, (_, i) => String(i + 1).padStart(2, '0'))
}

function buildYearOptions(): string[] {
  const current = new Date().getFullYear()
  return Array.from({ length: 4 }, (_, i) => String(current + i))
}

export default function ReminderDatePage() {
  const router = useRouter()
  const { dict } = useLocale()
  const monthNames: string[] = [...dict.reminder.monthsFull]

  const [initialized, setInitialized] = useState(false)
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [year, setYear] = useState('')

  // Initialize after mount to avoid hydration mismatch with locale-dependent month names
  useEffect(() => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const mi = tomorrow.getMonth()
    const yi = tomorrow.getFullYear()
    const di = tomorrow.getDate()
    const count = daysInMonth(mi, yi)
    setMonth(monthNames[mi])
    setDay(String(Math.min(di, count)).padStart(2, '0'))
    setYear(String(yi))
    setInitialized(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Keep month label in sync when locale changes after initialization
  useEffect(() => {
    if (!initialized) return
    // Find the current month's index by matching either the current locale label or the EN label
    const currentIndex = EN_MONTH_NAMES.findIndex(
      (enName, i) => monthNames[i] === month || enName === month
    )
    if (currentIndex !== -1) setMonth(monthNames[currentIndex])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthNames])

  const monthIndex = monthNames.indexOf(month)
  const yearNum = parseInt(year || '0', 10)
  const dayOptions = buildDayOptions(monthIndex === -1 ? 0 : monthIndex, yearNum)

  function handleMonthChange(m: string) {
    setMonth(m)
    const mi = monthNames.indexOf(m)
    const count = daysInMonth(mi === -1 ? 0 : mi, yearNum)
    const d = parseInt(day, 10)
    if (d > count) setDay(String(count).padStart(2, '0'))
  }

  function handleYearChange(y: string) {
    setYear(y)
    const yi = parseInt(y, 10)
    const count = daysInMonth(monthIndex === -1 ? 0 : monthIndex, yi)
    const d = parseInt(day, 10)
    if (d > count) setDay(String(count).padStart(2, '0'))
  }

  function handleNext() {
    // Pass the English month name so the time page can parse it locale-independently
    const englishMonth = EN_MONTH_NAMES[monthIndex === -1 ? 0 : monthIndex]
    const params = new URLSearchParams({ month: englishMonth, day, year })
    router.push(`/welcome/reminder/time?${params.toString()}`)
  }

  if (!initialized) return null

  return (
    <main className="flex flex-col items-center max-w-[525px] mx-auto min-h-screen">
      <Container>
        <div className="flex flex-col gap-8 pt-16">

          <button
            onClick={() => router.push('/welcome')}
            className="self-start text-[14px] opacity-60 hover:opacity-100 transition-opacity"
          >
            ← {dict.common.back}
          </button>

          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-[24px] leading-[130%]">{dict.reminder.choosePlayDate}</h1>
            <p className="font-normal text-[14px] leading-[150%] opacity-60">
              {dict.reminder.choosePlayDateSubtitle}
            </p>
          </div>

          {/* Wheel picker row */}
          <div className="flex items-center justify-center gap-3 py-4">
            <WheelPicker
              options={monthNames}
              value={month}
              onChange={handleMonthChange}
            />

            <span className="text-[18px] opacity-30 pb-1">/</span>

            <WheelPicker
              options={dayOptions}
              value={day}
              onChange={setDay}
            />

            <span className="text-[18px] opacity-30 pb-1">/</span>

            <WheelPicker
              options={buildYearOptions()}
              value={year}
              onChange={handleYearChange}
            />
          </div>

          <Button variant="primary" onClick={handleNext}>
            {dict.common.next}
          </Button>
        </div>
      </Container>
    </main>
  )
}
