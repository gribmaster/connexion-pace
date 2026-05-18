import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { LoginForm } from './LoginForm'
import { getDevUser } from '@/lib/devAuth'

export default async function LoginPage() {
  const devUser = getDevUser()
  if (devUser) redirect('/welcome')

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/welcome')
  }

  return <LoginForm />
}
