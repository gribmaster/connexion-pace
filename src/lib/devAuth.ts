/**
 * True only when NODE_ENV=development AND NEXT_PUBLIC_DISABLE_AUTH=true.
 * Always false in production, so the check can never be satisfied by accident.
 */
export function isDevAuthBypassEnabled(): boolean {
  return (
    process.env.NODE_ENV === 'development' &&
    process.env.NEXT_PUBLIC_DISABLE_AUTH === 'true'
  )
}

/**
 * Returns a fake authenticated user when the dev bypass is enabled.
 * In production this always returns null so the real Supabase auth takes over.
 */
export function getDevUser() {
  if (!isDevAuthBypassEnabled()) return null

  return {
    id: 'dev-user-id',
    email: 'dev@local.test',
    user_metadata: { name: 'Dev User', full_name: 'Dev User' },
  }
}
