import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import type Stripe from 'stripe'
import type { SubscriptionStatus } from '@prisma/client'

export const runtime = 'nodejs'

// Stripe sends raw body — Next.js must not parse it before we read it
export const dynamic = 'force-dynamic'

function toSubscriptionStatus(status: string): SubscriptionStatus {
  const map: Record<string, SubscriptionStatus> = {
    active: 'active',
    trialing: 'trialing',
    past_due: 'past_due',
    canceled: 'canceled',
    unpaid: 'unpaid',
    incomplete: 'incomplete',
    incomplete_expired: 'incomplete_expired',
    paused: 'paused',
  }
  return map[status] ?? 'incomplete'
}

// Safe accessor for the Stripe subscription object.
// The webhook payload is raw JSON from Stripe's servers and may use a different
// API version than the SDK, so we never trust the TypeScript types blindly.
function readSubscriptionFields(sub: unknown): {
  id: string
  status: string
  cancel_at_period_end: boolean
  cancel_at: number | null
  canceled_at: number | null
  ended_at: number | null
  current_period_end: number | null
  priceId: string | null
  customerId: string | null
  metadataPrismaUserId: string | null
} {
  const s = sub as Record<string, unknown>

  const id = typeof s['id'] === 'string' ? s['id'] : ''
  const status = typeof s['status'] === 'string' ? s['status'] : 'incomplete'
  const cancel_at_period_end = s['cancel_at_period_end'] === true
  const cancel_at = typeof s['cancel_at'] === 'number' ? s['cancel_at'] : null
  const canceled_at = typeof s['canceled_at'] === 'number' ? s['canceled_at'] : null
  const ended_at = typeof s['ended_at'] === 'number' ? s['ended_at'] : null

  // current_period_end: on SubscriptionItem in 2026 API, on Subscription in older API
  const itemsData = Array.isArray((s['items'] as Record<string, unknown>)?.['data'])
    ? ((s['items'] as Record<string, unknown>)['data'] as unknown[])
    : []
  const firstItem = itemsData[0] as Record<string, unknown> | undefined
  const itemPeriodEnd = typeof firstItem?.['current_period_end'] === 'number'
    ? (firstItem['current_period_end'] as number)
    : null
  const topLevelPeriodEnd = typeof s['current_period_end'] === 'number'
    ? (s['current_period_end'] as number)
    : null
  const current_period_end = itemPeriodEnd ?? topLevelPeriodEnd

  // price id: .price.id or .plan.id for older API
  const priceObj = firstItem?.['price'] as Record<string, unknown> | undefined
  const planObj = firstItem?.['plan'] as Record<string, unknown> | undefined
  const priceId = typeof priceObj?.['id'] === 'string'
    ? priceObj['id']
    : typeof planObj?.['id'] === 'string'
      ? planObj['id']
      : null

  // customer: string id or expanded object
  const customerRaw = s['customer']
  const customerId = typeof customerRaw === 'string'
    ? customerRaw
    : typeof (customerRaw as Record<string, unknown>)?.['id'] === 'string'
      ? (customerRaw as Record<string, unknown>)['id'] as string
      : null

  const metadata = s['metadata'] as Record<string, unknown> | null | undefined
  const metadataPrismaUserId = typeof metadata?.['prismaUserId'] === 'string'
    ? metadata['prismaUserId']
    : null

  return {
    id, status, cancel_at_period_end, cancel_at, canceled_at, ended_at,
    current_period_end, priceId, customerId, metadataPrismaUserId,
  }
}

async function resolveUserIdFromCustomer(customerId: string): Promise<string | undefined> {
  if (!customerId) return undefined
  const user = await prisma.user.findUnique({
    where: { stripeCustomerId: customerId },
    select: { id: true },
  })
  return user?.id
}

async function upsertSubscription(rawSub: unknown): Promise<void> {
  const fields = readSubscriptionFields(rawSub)

  console.log('[stripe webhook] upsertSubscription fields', {
    id: fields.id,
    status: fields.status,
    cancel_at_period_end: fields.cancel_at_period_end,
    cancel_at: fields.cancel_at,
    canceled_at: fields.canceled_at,
    ended_at: fields.ended_at,
    current_period_end: fields.current_period_end,
    customerId: fields.customerId,
    metadataPrismaUserId: fields.metadataPrismaUserId,
  })

  if (!fields.id) {
    console.error('[stripe webhook] upsertSubscription: missing subscription.id — skipping')
    return
  }

  const prismaUserId = fields.metadataPrismaUserId
    ?? await resolveUserIdFromCustomer(fields.customerId ?? '')

  if (!prismaUserId) {
    console.error('[stripe webhook] upsertSubscription: could not resolve prismaUserId', {
      customerId: fields.customerId,
      metadataPrismaUserId: fields.metadataPrismaUserId,
    })
    return
  }

  const currentPeriodEnd = fields.current_period_end
    ? new Date(fields.current_period_end * 1000)
    : null
  const cancelAt = fields.cancel_at ? new Date(fields.cancel_at * 1000) : null
  const canceledAt = fields.canceled_at ? new Date(fields.canceled_at * 1000) : null
  const endedAt = fields.ended_at ? new Date(fields.ended_at * 1000) : null

  await prisma.userSubscription.upsert({
    where: { stripeSubscriptionId: fields.id },
    create: {
      userId: prismaUserId,
      stripeSubscriptionId: fields.id,
      stripePriceId: fields.priceId ?? '',
      status: toSubscriptionStatus(fields.status),
      currentPeriodEnd,
      cancelAtPeriodEnd: fields.cancel_at_period_end,
      cancelAt,
      canceledAt,
      endedAt,
    },
    update: {
      stripePriceId: fields.priceId ?? '',
      status: toSubscriptionStatus(fields.status),
      currentPeriodEnd,
      cancelAtPeriodEnd: fields.cancel_at_period_end,
      cancelAt,
      canceledAt,
      endedAt,
    },
  })

  console.log('[stripe webhook] upsertSubscription wrote', {
    stripeSubscriptionId: fields.id,
    prismaUserId,
    status: fields.status,
    cancelAtPeriodEnd: fields.cancel_at_period_end,
    cancelAt,
    canceledAt,
    endedAt,
    currentPeriodEnd,
  })
}

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Webhook signature error'
    console.error('[stripe webhook] signature verification failed:', message)
    return NextResponse.json({ error: message }, { status: 400 })
  }

  console.log('[stripe webhook] received event', { type: event.type })

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        if (session.mode === 'subscription' && session.subscription) {
          const subId = typeof session.subscription === 'string'
            ? session.subscription
            : (session.subscription as unknown as Record<string, unknown>)['id'] as string
          const subscription = await getStripe().subscriptions.retrieve(subId)
          await upsertSubscription(subscription)
          // Persist stripeCustomerId on User via subscription metadata
          // (session.metadata is separate and not set by us — subscription_data.metadata is)
          const fields = readSubscriptionFields(subscription)
          const customerId = typeof session.customer === 'string'
            ? session.customer
            : (session.customer as unknown as Record<string, unknown>)?.['id'] as string | undefined
          if (fields.metadataPrismaUserId && customerId) {
            await prisma.user.update({
              where: { id: fields.metadataPrismaUserId },
              data: { stripeCustomerId: customerId },
            })
          }
        }
        break
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const rawSub = event.data.object
        if (event.type === 'customer.subscription.updated') {
          const s = rawSub as unknown as Record<string, unknown>
          console.log('[stripe webhook] customer.subscription.updated raw fields', {
            id: s['id'],
            status: s['status'],
            cancel_at_period_end: s['cancel_at_period_end'],
            cancel_at: s['cancel_at'],
            canceled_at: s['canceled_at'],
            current_period_end: s['current_period_end'],
            customer: typeof s['customer'] === 'string' ? s['customer'] : (s['customer'] as Record<string, unknown>)?.['id'],
          })
        }
        await upsertSubscription(rawSub)
        break
      }

      case 'invoice.payment_succeeded': {
        const inv = event.data.object as unknown as Record<string, unknown>
        // 2026 API: parent.subscription_details.subscription
        // older API: top-level subscription field
        const subRef =
          (inv['parent'] as Record<string, unknown>)?.['subscription_details']
            ? ((inv['parent'] as Record<string, unknown>)['subscription_details'] as Record<string, unknown>)['subscription']
            : inv['subscription']
        if (subRef) {
          const subId = typeof subRef === 'string' ? subRef : (subRef as Record<string, unknown>)['id'] as string
          if (subId) {
            const subscription = await getStripe().subscriptions.retrieve(subId)
            await upsertSubscription(subscription)
          }
        }
        break
      }

      case 'invoice.payment_failed': {
        const inv = event.data.object as unknown as Record<string, unknown>
        const subRef =
          (inv['parent'] as Record<string, unknown>)?.['subscription_details']
            ? ((inv['parent'] as Record<string, unknown>)['subscription_details'] as Record<string, unknown>)['subscription']
            : inv['subscription']
        if (subRef) {
          const subId = typeof subRef === 'string' ? subRef : (subRef as Record<string, unknown>)['id'] as string
          if (subId) {
            await prisma.userSubscription.updateMany({
              where: { stripeSubscriptionId: subId },
              data: { status: 'past_due' },
            })
          }
        }
        break
      }

      default:
        break
    }
  } catch (err) {
    console.error('[stripe webhook] handler error for event', event.type, err)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
