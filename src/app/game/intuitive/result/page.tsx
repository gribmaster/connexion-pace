import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function IntuitiveResultPage() {
  return (
    <main className="flex flex-col items-center w-[375px] mx-auto h-[800px] main-container">
      <Container>
        <div className="flex flex-col gap-5 text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-center pt-[220px]">
              <p className="font-semibold text-[24px] leading-[130%]">Journey Complete ✨</p>
            </h1>
            <p className="font-normal text-[16px] leading-[150%] text-center mt-3">
              You&apos;ve explored, felt, and connected.
              <br />
              Pause for a moment. Look at each other.
              <br />
              This is where the real magic continues.
            </p>
            <p className="font-normal text-[16px] leading-[150%] text-center mt-4">
              Would you like to explore again?
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-2">
            <Button variant="secondary" disabled>
              Choose next play time
            </Button>

            <Link href="/game">
              <Button variant="primary">Back to &ldquo;Connexion space&rdquo;</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
}
