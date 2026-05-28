'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

type Props = {
  onClose: () => void
}

export function PremiumCardModal({ onClose }: Props) {
  const router = useRouter()

  function handleViewPlans() {
    onClose()
    router.push('/profile')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-3xl bg-[#1a0e0e] border border-[#69584E] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-3 text-[20px] font-semibold text-[#D2AF9C]">
          Premium card
        </h2>
        <p className="mb-8 text-[14px] leading-[150%] text-[#D2AF9C]/70">
          Subscribe to unlock this card and get access to all Intimacy and Lovemaking cards.
        </p>
        <Button className="mb-3" onClick={handleViewPlans}>
          View plans
        </Button>
        <Button variant="link" onClick={onClose}>
          Not now
        </Button>
      </div>
    </div>
  )
}
