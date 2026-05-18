import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'

export default async function Home() {
  const devUser = getDevUser()
  if (devUser) redirect('/welcome')

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/welcome')
  } else {
    redirect('/login')
  }
}
