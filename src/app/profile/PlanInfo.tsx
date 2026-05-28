'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { ItmIcon } from '@/components/icons/ItmIcon'

type Tab = 'monthly' | 'quarterly' | 'yearly'

const TABS: { id: Tab; label: string }[] = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'quarterly', label: 'Quarterly' },
  { id: 'yearly', label: 'Yearly' },
]

// Update price text once actual Stripe prices are confirmed
const PLAN_CONFIG: Record<Tab, { priceText: string; intervalLabel: string }> = {
  monthly: { priceText: '$9.99', intervalLabel: 'per month' },
  quarterly: { priceText: '$24.99', intervalLabel: 'per 3 months' },
  yearly: { priceText: '$79.99', intervalLabel: 'per year' },
}

const FEATURES = ['Unlimited Cards', 'Extend Time', 'Flexible Game Duration']

interface Props {
  isPremium: boolean
  currentPlan: Tab | null
  cancelEndDate: string | null
  currentPeriodEnd: string | null
  isCancelling: boolean
}

function formatSubDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function PlanInfo({ isPremium, currentPlan, cancelEndDate, currentPeriodEnd, isCancelling }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('monthly')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [subDateLine, setSubDateLine] = useState<string | null>(null)

  const isCurrentTab = isPremium && activeTab === currentPlan

  useEffect(() => {
    if (!isPremium || !isCurrentTab) { setSubDateLine(null); return }
    if (isCancelling && cancelEndDate) {
      setSubDateLine(`Active until ${formatSubDate(cancelEndDate)}`)
    } else if (currentPeriodEnd) {
      setSubDateLine(`Renews on ${formatSubDate(currentPeriodEnd)}`)
    }
  }, [isPremium, isCurrentTab, isCancelling, cancelEndDate, currentPeriodEnd])

  const { priceText, intervalLabel } = PLAN_CONFIG[activeTab]

  async function handleSubscribe() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: activeTab }),
      })
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
    <div id="plan-info" className="flex flex-col gap-6">
      {/* Segmented tabs */}
      <div className="flex p-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={[
              'flex-1 py-2 text-[14px] font-semibold transition-all duration-200 border-b',
              activeTab === tab.id
                ? 'text-[#D2AF9C] border-[#D2AF9C]'
                : 'text-[#69584E] border-[#69584E]',
            ].join(' ')}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Plan card */}
      <div className="flex flex-col gap-2">
        {/* Title row */}
        <div className="flex items-center justify-between">
          <span className="text-[24px] text-[#D2AF9C] capitalize">
            {activeTab}
          </span>
          {isCurrentTab && (
            <span className="rounded-full bg-[#69584E4D] border border-[#69584E] px-3 py-[6px] text-[14px] font-semibold text-[#D2AF9C]">
              Current plan
            </span>
          )}
        </div>

        {/* Price */}
        <p className="text-[36px] font-bold leading-[48px] text-[#D2AF9C] mb-[2px]">
          {priceText}
        </p>
        <p className="text-[13px] text-[#D2AF9C]/60 -mt-2">{intervalLabel}</p>

        {/* Subscription date */}
        {isCurrentTab && subDateLine ? (
          <p className="text-[13px] text-[#D2AF9C]/60 mb-[7px]">{subDateLine}</p>
        ) : (
          <div className="mb-[7px]" />
        )}

        {/* Action button */}
        {isPremium ? (
          <Button variant="primary" onClick={handleManage} disabled={loading}>
            {loading ? 'Redirecting…' : 'Manage'}
          </Button>
        ) : (
          <Button variant="primary" onClick={handleSubscribe} disabled={loading}>
            {loading ? 'Redirecting…' : 'Subscribe'}
          </Button>
        )}

        {/* Feature list */}
        <ul className="flex flex-col gap-1 pt-2">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-[14px] text-[#D2AF9C]/80">
              <ItmIcon />
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
