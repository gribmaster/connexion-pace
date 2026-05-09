'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'

export async function acceptPrivacy() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user?.email) redirect('/login')

  await prisma.user.update({
    where: { email: user.email },
    data: { privacyAcceptedAt: new Date() },
  })

  redirect('/welcome')
}
