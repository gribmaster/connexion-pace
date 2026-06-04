'use client'

import { useLocale } from '@/lib/i18n/useLocale'

export function ProfilePageTitle() {
  const { dict } = useLocale()
  return <>{dict.profile.profilePage}</>
}

export function ProfilePlanHeading() {
  const { dict } = useLocale()
  return <>{dict.profile.yourPlanInformation}</>
}
