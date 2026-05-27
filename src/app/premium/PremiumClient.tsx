'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

type Tab = 'monthly' | 'quarterly' | 'yearly'

const TABS: { id: Tab; label: string }[] = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'quarterly', label: 'Quarterly' },
  { id: 'yearly', label: 'Yearly' },
]

const PLAN_PRICE: Record<Tab, string> = {
  monthly: '$9.99',
  quarterly: 'Coming soon',
  yearly: 'Coming soon',
}

const FEATURES = ['Unlimited Cards', 'Extend Time', 'Flexible Game Duration']

interface Props {
  isActive: boolean
}

export function PremiumClient({ isActive }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('monthly')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isMonthly = activeTab === 'monthly'
  const canSubscribe = isMonthly
  const price = PLAN_PRICE[activeTab]

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
    <div className="flex flex-col gap-5">
      {/* Segmented tab control */}
      <div className="flex rounded-[12px] bg-[#D2AF9C1A] p-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={[
              'flex-1 rounded-[9px] py-2 text-[14px] font-medium transition-all duration-200',
              activeTab === tab.id
                ? 'bg-[#860119] text-[#D2AF9C]'
                : 'text-[#D2AF9C]/60',
            ].join(' ')}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Plan card */}
      <div className="rounded-2xl border border-[#69584E]/40 bg-[#69584E]/10 px-5 py-5 flex flex-col gap-4">
        {/* Title row */}
        <div className="flex items-center justify-between">
          <span className="text-[18px] font-semibold text-[#D2AF9C] capitalize">
            {activeTab}
          </span>
          {isActive && isMonthly && (
            <span className="rounded-full bg-[#860119]/80 px-3 py-[2px] text-[12px] font-medium text-[#D2AF9C]">
              Current plan
            </span>
          )}
        </div>

        {/* Price */}
        <p className="text-[36px] font-bold leading-none text-[#D2AF9C]">
          {price}
        </p>

        {/* Action button */}
        {isMonthly ? (
          isActive ? (
            <Button variant="secondary" onClick={handleManage} disabled={loading}>
              {loading ? 'Redirecting…' : 'Manage'}
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSubscribe} disabled={loading}>
              {loading ? 'Redirecting…' : 'Subscribe'}
            </Button>
          )
        ) : (
          <Button variant="secondary" disabled>
            Coming soon
          </Button>
        )}

        {/* Feature list */}
        <ul className="flex flex-col gap-2 pt-1">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-[14px] text-[#D2AF9C]/80">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8L6.5 11.5L13 4.5" stroke="#D2AF9C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {error && (
        <p className="text-center text-[13px] text-red-400">{error}</p>
      )}
    </div>
  )
}
