'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="self-end text-xs text-[#D2AF9C]/40 hover:text-[#D2AF9C]/70 transition-colors"
    >
      Logout
    </button>
  )
}
