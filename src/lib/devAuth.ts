// Controlled solely by NEXT_PUBLIC_DISABLE_AUTH=true — works in any environment.
export function isDevAuthBypassEnabled(): boolean {
  return process.env.NEXT_PUBLIC_DISABLE_AUTH === 'true'
}

// Returns a fake authenticated user when bypass is enabled, null otherwise.
export function getDevUser() {
  if (!isDevAuthBypassEnabled()) return null

  return {
    id: 'dev-user-id',
    email: 'dev@local.test',
    user_metadata: { name: 'Dev User', full_name: 'Dev User' },
  }
}
