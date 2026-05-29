import { redirect } from 'next/navigation'
import { getUserPremiumStatus } from '@/lib/premium/getUserPremiumStatus'
import { getDevUser } from '@/lib/devAuth'
import { WelcomeContent } from './WelcomeContent'

export default async function WelcomePage() {
  const devUser = getDevUser()
  if (!devUser) {
    const isPremium = await getUserPremiumStatus()
    if (isPremium) redirect('/game')
  }

  return <WelcomeContent />
}
