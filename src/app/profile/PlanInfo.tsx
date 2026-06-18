'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { ItmIcon } from '@/components/icons/ItmIcon'
import { useLocale } from '@/lib/i18n/useLocale'

type Tab = 'monthly' | 'quarterly' | 'yearly'

// Update price text once actual Stripe prices are confirmed
const PLAN_CONFIG: Record<Tab, { priceText: string; intervalLabel: string }> = {
  monthly: { priceText: '$9.99', intervalLabel: 'per month' },
  quarterly: { priceText: '$24.99', intervalLabel: 'per 3 months' },
  yearly: { priceText: '$79.99', intervalLabel: 'per year' },
}

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
  const { dict } = useLocale()
  const dp = dict.profile
  const TABS: { id: Tab; label: string }[] = [
    { id: 'monthly', label: dp.monthly },
    { id: 'quarterly', label: dp.quarterly },
    { id: 'yearly', label: dp.yearly },
  ]
  const FEATURES = [dp.unlimitedCards, dp.extendTime]

  const [activeTab, setActiveTab] = useState<Tab>('monthly')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [subDateLine, setSubDateLine] = useState<string | null>(null)
  const [withdrawalAcknowledged, setWithdrawalAcknowledged] = useState(false)
  const [withdrawalError, setWithdrawalError] = useState(false)

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
    if (!withdrawalAcknowledged) {
      setWithdrawalError(true)
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: activeTab, withdrawalAcknowledged: true }),
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

  const planLabel = currentPlan
    ? currentPlan.charAt(0).toUpperCase() + currentPlan.slice(1)
    : null

  const summaryDateLine = isPremium
    ? isCancelling && cancelEndDate
      ? `Active until ${formatSubDate(cancelEndDate)}`
      : currentPeriodEnd
      ? `Renews on ${formatSubDate(currentPeriodEnd)}`
      : null
    : null

  return (
    <div id="plan-info" className="flex flex-col gap-6">
      {/* Current plan summary */}
      {isPremium && planLabel ? (
        <div className="flex flex-col gap-1 pb-2 border-b border-[#69584E40]">
          <p className="text-[12px] text-[#69584E] uppercase tracking-wide">{dp.currentPlan}</p>
          <p className="text-[20px] font-semibold text-[#D2AF9C]">{planLabel}</p>
          {summaryDateLine && (
            <p className="text-[13px] text-[#D2AF9C]/60">{summaryDateLine}</p>
          )}
        </div>
      ) : !isPremium ? (
        <div className="flex flex-col gap-1 pb-2 border-b border-[#69584E40]">
          <p className="text-[12px] text-[#69584E] uppercase tracking-wide">{dp.currentPlan}</p>
          <p className="text-[20px] font-semibold text-[#D2AF9C]">{dp.free}</p>
          <p className="text-[13px] text-[#D2AF9C]/60">{dp.subscribeToUnlock}</p>
        </div>
      ) : null}

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
              {dp.currentPlan}
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
            {loading ? dict.common.redirecting : 'Manage'}
          </Button>
        ) : (
          <>
            <label className="flex items-start gap-2 text-[13px] text-[#D2AF9C]/80 cursor-pointer mb-2">
              <span className="checkbox-item">
                <input
                  type="checkbox"
                  checked={withdrawalAcknowledged}
                  onChange={(e) => {
                    setWithdrawalAcknowledged(e.target.checked)
                    if (e.target.checked) setWithdrawalError(false)
                  }}
                  className="hidden"
                />
                <span className="w-4 h-4 block border border-[#d2af9c] mt-1 rounded"></span>
              </span>
              <span>{dp.withdrawalAcknowledgement}</span>
            </label>
            {withdrawalError && (
              <p className="text-[13px] text-red-400">{dp.withdrawalRequired}</p>
            )}
            <Button variant="primary" onClick={handleSubscribe} disabled={loading}>
              {loading ? dict.common.redirecting : dp.subscribe}
            </Button>
          </>
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
