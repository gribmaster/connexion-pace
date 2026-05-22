'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { WheelPicker } from '@/components/reminder/WheelPicker'

const MONTH_NAMES = [
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

function getDefaultDate() {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return {
    month: MONTH_NAMES[tomorrow.getMonth()],
    day: String(tomorrow.getDate()).padStart(2, '0'),
    year: String(tomorrow.getFullYear()),
  }
}

export default function ReminderDatePage() {
  const router = useRouter()
  const defaults = getDefaultDate()

  const [month, setMonth] = useState(defaults.month)
  const [year, setYear] = useState(defaults.year)

  const monthIndex = MONTH_NAMES.indexOf(month)
  const yearNum = parseInt(year, 10)
  const dayOptions = buildDayOptions(monthIndex, yearNum)

  // Clamp day when month/year changes (e.g. Feb 31 → Feb 28)
  const [day, setDay] = useState(() => {
    const count = daysInMonth(monthIndex, yearNum)
    const d = parseInt(defaults.day, 10)
    return String(Math.min(d, count)).padStart(2, '0')
  })

  function handleMonthChange(m: string) {
    setMonth(m)
    const mi = MONTH_NAMES.indexOf(m)
    const count = daysInMonth(mi, yearNum)
    const d = parseInt(day, 10)
    if (d > count) setDay(String(count).padStart(2, '0'))
  }

  function handleYearChange(y: string) {
    setYear(y)
    const yi = parseInt(y, 10)
    const count = daysInMonth(monthIndex, yi)
    const d = parseInt(day, 10)
    if (d > count) setDay(String(count).padStart(2, '0'))
  }

  function handleNext() {
    const params = new URLSearchParams({ month, day, year })
    router.push(`/welcome/reminder/time?${params.toString()}`)
  }

  return (
    <main className="flex flex-col items-center max-w-[525px] mx-auto min-h-screen">
      <Container>
        <div className="flex flex-col gap-8 pt-16">

          <button
            onClick={() => router.push('/welcome')}
            className="self-start text-[14px] opacity-60 hover:opacity-100 transition-opacity"
          >
            ← Back
          </button>

          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-[24px] leading-[130%]">Choose play date</h1>
            <p className="font-normal text-[14px] leading-[150%] opacity-60">
              Select when you want to play and we&apos;ll remind you.
            </p>
          </div>

          {/* Wheel picker row */}
          <div className="flex items-center justify-center gap-3 py-4">
            <WheelPicker
              options={MONTH_NAMES}
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
            Next
          </Button>
        </div>
      </Container>
    </main>
  )
}
