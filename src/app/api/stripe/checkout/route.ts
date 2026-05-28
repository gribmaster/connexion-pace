import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'

export const runtime = 'nodejs'

type Plan = 'monthly' | 'quarterly' | 'yearly'

const PLAN_PRICE_IDS: Record<Plan, string | undefined> = {
  monthly: process.env.STRIPE_MONTHLY_PRICE_ID ?? process.env.STRIPE_PREMIUM_PRICE_ID,
  quarterly: process.env.STRIPE_QUARTERLY_PRICE_ID,
  yearly: process.env.STRIPE_YEARLY_PRICE_ID,
}

export async function POST(request: Request) {
  let plan: Plan = 'monthly'
  try {
    const body = await request.json()
    if (body?.plan === 'quarterly' || body?.plan === 'yearly' || body?.plan === 'monthly') {
      plan = body.plan
    }
  } catch {
    // no body or invalid JSON — default to monthly
  }

  const priceId = PLAN_PRICE_IDS[plan]
  if (!priceId) {
    return NextResponse.json({ error: `Price not configured for plan: ${plan}` }, { status: 500 })
  }
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
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/profile?checkout=success`,
    cancel_url: `${siteUrl}/profile?checkout=cancelled`,
    subscription_data: {
      metadata: { prismaUserId: prismaUser.id },
    },
  })

  return NextResponse.json({ url: session.url })
}
