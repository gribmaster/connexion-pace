import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'
import { hasPremiumAccess } from './cardAccess'

export async function getUserPremiumStatus(): Promise<boolean> {
  const devUser = getDevUser()

  let email: string | null = null

  if (devUser) {
    email = devUser.email
  } else {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    email = user?.email ?? null
  }

  if (!email) return false

  const prismaUser = await prisma.user.findUnique({
    where: { email },
    select: {
      subscription: {
        select: {
          status: true,
          currentPeriodEnd: true,
          endedAt: true,
        },
      },
    },
  })

  return hasPremiumAccess(prismaUser?.subscription ?? null)
}
