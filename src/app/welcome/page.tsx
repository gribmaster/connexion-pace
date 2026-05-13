import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function WelcomePage() {
  return (
    <main className="flex flex-col items-center w-[375px] mx-auto h-[800px] main-container">
      <Container>
        <div className="flex flex-col gap-5 text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-center pt-[267px]">
              <p className="font-semibold text-[20px] leading-[130%] mb-1">Welcome to</p>
              <p className="font-semibold text-[24px] leading-[130%]">Connexion Space</p>
            </h1>
            <p className="font-normal text-[16px] leading-[150%] text-center mt-3">
              You can play the full game once for free.
              <br/>
              After your free session ends, you&apos;ll need to upgrade to continue playing.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <Link href="/game">
              <Button variant="primary">Start Free Session</Button>
            </Link>

            <Button variant="secondary" disabled>
              View Premium Options
            </Button>

            <p className="font-medium text-[14px] leading-[20px] opacity-50">Choose next play time</p>
          </div>
        </div>
      </Container>
    </main>
  )
}
