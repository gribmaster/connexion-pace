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
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-125 bg-black p-6 bottom-modal-body relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-6 mt-3 text-[20px] leading-[120%] font-semibold text-[#D2AF9C]">
          Want more? Go Premium.
        </h2>
        <p className="mb-6 text-[14px] leading-[150%] text-[#D2AF9C]/70">
          This is a premium card. Upgrade to premium to get access to every card, including advanced insights, detailed breakdowns, and exclusive content you won't find anywhere else.
        </p>
        <Button className="mb-1" onClick={handleViewPlans}>
          Upgrade to Premium
        </Button>
        <Button variant="link" onClick={onClose}>
          Maybe later
        </Button>
      </div>
    </div>
  )
}
