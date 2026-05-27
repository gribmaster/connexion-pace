'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface Props {
  isActive: boolean
  hasCustomer: boolean
}

export function PremiumClient({ isActive, hasCustomer }: Props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubscribe() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/stripe/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Could not start checkout. Please try again.')
        setLoading(false)
      }
    } catch {
      setError('Could not start checkout. Please try again.')
      setLoading(false)
    }
  }

  async function handleManage() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Could not open customer portal. Please try again.')
        setLoading(false)
      }
    } catch {
      setError('Could not open customer portal. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {!isActive && (
        <Button variant="primary" onClick={handleSubscribe} disabled={loading}>
          {loading ? 'Redirecting…' : 'Subscribe to Premium'}
        </Button>
      )}

      {(isActive || hasCustomer) && (
        <Button variant="secondary" onClick={handleManage} disabled={loading}>
          {loading ? 'Redirecting…' : 'Manage subscription'}
        </Button>
      )}

      {error && (
        <p className="text-center text-[13px] text-red-400">{error}</p>
      )}
    </div>
  )
}
