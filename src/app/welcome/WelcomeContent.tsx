'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useLocale } from '@/lib/i18n/useLocale'

export function WelcomeContent() {
  const { dict } = useLocale()
  const d = dict.welcome

  return (
    <main className="flex flex-col items-center max-w-[525px] mx-auto h-[800px] main-container">
      <Container>
        <div className="flex flex-col gap-5 text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-center pt-[267px]">
              <p className="font-semibold text-[20px] leading-[130%] mb-1">{d.welcomeTo}</p>
              <p className="font-semibold text-[24px] leading-[130%]">{d.appName}</p>
            </h1>
            <p className="font-normal text-[16px] leading-[150%] text-center mt-3">
              {d.freeSessionText}
              <br/>
              {d.upgradeText}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <Link href="/game">
              <Button variant="primary">{d.startFreeSession}</Button>
            </Link>

            <Link href="/profile">
              <Button variant="secondary">
                {d.viewPremiumOptions}
              </Button>
            </Link>

            <Link href="/welcome/reminder/date" id="chooseNextPlayCall">
              <p className="font-medium text-[14px] leading-[20px] underline underline-offset-2">
                {d.chooseNextPlayTime}
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
}
