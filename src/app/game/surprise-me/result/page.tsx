import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function SurpriseMeResultPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1a0a0e]">
      <Container>
        <Card className="bg-white flex flex-col items-center gap-6 p-6 text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-[#1a0a0e]">All cards done</h1>
            <p className="text-sm text-[#7a5c52]">Ready for another round?</p>
          </div>

          <div className="flex w-full flex-col gap-3">
            <Link href="/game" className="w-full">
              <Button variant="primary">Play again</Button>
            </Link>
            <Link href="/game" className="w-full">
              <Button variant="secondary">Back to menu</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </main>
  )
}
