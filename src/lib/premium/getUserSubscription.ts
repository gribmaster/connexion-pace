import { prisma } from '@/lib/prisma'

export type UserSubscriptionData = {
  status: string
  stripePriceId: string
  currentPeriodEnd: Date | null
  cancelAtPeriodEnd: boolean
  cancelAt: Date | null
  endedAt: Date | null
} | null

export async function getUserSubscription(email: string): Promise<UserSubscriptionData> {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      subscription: {
        select: {
          status: true,
          stripePriceId: true,
          currentPeriodEnd: true,
          cancelAtPeriodEnd: true,
          cancelAt: true,
          endedAt: true,
        },
      },
    },
  })
  return user?.subscription ?? null
}
