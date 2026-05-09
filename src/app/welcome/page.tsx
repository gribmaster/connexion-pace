import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function WelcomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1a0a0e] px-4">
      <Container>
        <Card className="flex flex-col gap-8 text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-[#1a0a0e]">
              Welcome to<br />Connexion Space
            </h1>
            <p className="text-sm text-[#6b4c57]">
              You can play the full game once for free.
              <br />
              After your free session ends, you&apos;ll need to upgrade to continue playing.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/game">
              <Button variant="primary">Start Free Session</Button>
            </Link>

            <Button variant="secondary" disabled>
              View Premium Options
            </Button>

            <Button variant="secondary" disabled>
              Choose next play time
            </Button>
          </div>
        </Card>
      </Container>
    </main>
  )
}
