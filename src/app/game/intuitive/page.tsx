import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { TimerSettings } from '@/components/TimerSettings'

const categories = [
  { label: 'Connection', value: 'CONNECTION' },
  { label: 'Intimacy', value: 'INTIMACY' },
  { label: 'Lovemaking', value: 'LOVEMAKING' },
] as const

export default function IntuitiveGamePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#1a0a0e] px-4">
      <Container>
        <Card className="flex flex-col gap-6">
          <h1 className="text-center text-xl font-semibold text-[#1a0a0e]">
            Choose your category
          </h1>
          <div className="flex flex-col gap-3">
            {categories.map(({ label, value }) => (
              <Link key={value} href={`/game/intuitive/${value}`}>
                <Button variant="primary">{label}</Button>
              </Link>
            ))}
          </div>
        </Card>
        <div className="mt-4">
          <TimerSettings />
        </div>
      </Container>
    </div>
  )
}
