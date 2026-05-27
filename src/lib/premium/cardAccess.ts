type Subscription = {
  status: string
  currentPeriodEnd: Date | null
  endedAt: Date | null
} | null

type CardAccessInput = {
  category: string
  isFree: boolean
}

export function hasPremiumAccess(subscription: Subscription): boolean {
  if (!subscription) return false
  if (subscription.status !== 'active' && subscription.status !== 'trialing') return false
  if (subscription.endedAt) return false
  if (subscription.currentPeriodEnd && subscription.currentPeriodEnd < new Date()) return false
  return true
}

export function canAccessCard(card: CardAccessInput, isPremium: boolean): boolean {
  if (isPremium) return true
  if (card.category === 'CONNECTION') return true
  return card.isFree === true
}
