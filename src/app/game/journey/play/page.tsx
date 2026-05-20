import Link from 'next/link'
import { Container } from '@/components/ui/Container'

// TODO: implement full Journey gameplay in next task
export default function JourneyPlayPage() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Container className="flex flex-col items-center justify-center min-h-screen gap-6 text-center">
        <h1 className="font-semibold text-[20px] leading-[30px] text-[#D2AF9C]">
          Journey gameplay coming next
        </h1>
        <p className="text-[16px] leading-[150%] text-[#D2AF9C] opacity-70">
          Your queue is saved and ready. Gameplay screen is coming soon.
        </p>
        <Link
          href="/game/journey/preview"
          className="text-[#D2AF9C] underline text-[14px]"
        >
          ← Back to preview
        </Link>
      </Container>
    </div>
  )
}
