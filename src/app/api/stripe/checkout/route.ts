import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'

export const runtime = 'nodejs'

export async function POST() {
  // Resolve Prisma user
  let prismaUser: { id: string; email: string | null; stripeCustomerId: string | null } | null = null

  const devUser = getDevUser()
  if (devUser) {
    prismaUser = await prisma.user.findUnique({
      where: { email: devUser.email },
      select: { id: true, email: true, stripeCustomerId: true },
    })
  } else {
    try {
      const supabase = await createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user?.email) {
        prismaUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: { id: true, email: true, stripeCustomerId: true },
        })
      }
    } catch {
      // session unavailable
    }
  }

  if (!prismaUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get or create Stripe customer
  let customerId = prismaUser.stripeCustomerId
  if (!customerId) {
    const customer = await getStripe().customers.create({
      email: prismaUser.email ?? undefined,
      metadata: { prismaUserId: prismaUser.id },
    })
    customerId = customer.id
    await prisma.user.update({
      where: { id: prismaUser.id },
      data: { stripeCustomerId: customerId },
    })
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

  const session = await getStripe().checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    line_items: [{ price: process.env.STRIPE_PREMIUM_PRICE_ID!, quantity: 1 }],
    success_url: `${siteUrl}/profile?checkout=success`,
    cancel_url: `${siteUrl}/profile?checkout=cancelled`,
    subscription_data: {
      metadata: { prismaUserId: prismaUser.id },
    },
  })

  return NextResponse.json({ url: session.url })
}
