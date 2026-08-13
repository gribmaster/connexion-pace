import { getUserPremiumStatus } from '@/lib/premium/getUserPremiumStatus'
import { getDevUser } from '@/lib/devAuth'
import { WelcomeContent } from './WelcomeContent'

export default async function WelcomePage() {
  const devUser = getDevUser()
  const isPremium = devUser ? false : await getUserPremiumStatus()

  return <WelcomeContent isPremium={isPremium} />
}
