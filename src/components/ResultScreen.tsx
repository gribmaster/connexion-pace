'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useLocale } from '@/lib/i18n/useLocale'

export function ResultScreen() {
  const { dict } = useLocale()
  const d = dict.result

  return (
    <main className="flex flex-col items-center max-w-[525px] mx-auto h-screen main-container">
      <Container>
        <div className="flex flex-col gap-5 text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-center pt-[220px]">
              <p className="font-semibold text-[24px] leading-[130%]">{d.title}</p>
            </h1>
            <p className="font-normal text-[16px] leading-[150%] text-center mt-3">
              {d.line1}
              <br />
              {d.line2}
              <br />
              {d.line3}
            </p>
            <p className="font-normal text-[16px] leading-[150%] text-center mt-4">
              {d.question}
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-2">
            <Link href="/welcome/reminder/date" id="chooseNextPlayCallResult">
              <Button variant="primary">{d.chooseNextPlayTime}</Button>
            </Link>

            <Link href="/welcome">
              <Button variant="secondary">{d.backToConnexion}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
}
