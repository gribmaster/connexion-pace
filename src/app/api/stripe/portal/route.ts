import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'
import { getDevUser } from '@/lib/devAuth'

export const runtime = 'nodejs'

export async function POST() {
  // Resolve Prisma user
  let stripeCustomerId: string | null = null

  const devUser = getDevUser()
  if (devUser) {
    const user = await prisma.user.findUnique({
      where: { email: devUser.email },
      select: { stripeCustomerId: true },
    })
    stripeCustomerId = user?.stripeCustomerId ?? null
  } else {
    try {
      const supabase = await createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: { stripeCustomerId: true },
        })
        stripeCustomerId = dbUser?.stripeCustomerId ?? null
      }
    } catch {
      // session unavailable
    }
  }

  if (!stripeCustomerId) {
    return NextResponse.json({ error: 'No Stripe customer found' }, { status: 400 })
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

  const session = await getStripe().billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: `${siteUrl}/premium`,
  })

  return NextResponse.json({ url: session.url })
}
