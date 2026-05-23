import 'dotenv/config'
import webpush from 'web-push'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  const privateKey = process.env.VAPID_PRIVATE_KEY
  const subject = process.env.VAPID_SUBJECT

  if (!publicKey) {
    throw new Error('Missing NEXT_PUBLIC_VAPID_PUBLIC_KEY')
  }

  if (!privateKey) {
    throw new Error('Missing VAPID_PRIVATE_KEY')
  }

  if (!subject) {
    throw new Error('Missing VAPID_SUBJECT')
  }

  webpush.setVapidDetails(subject, publicKey, privateKey)

  const subscription = await prisma.pushSubscription.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  })

  if (!subscription) {
    throw new Error('No push subscription found')
  }

  const pushSubscription = {
    endpoint: subscription.endpoint,
    keys: {
      p256dh: subscription.p256dh,
      auth: subscription.auth,
    },
  }

  const payload = JSON.stringify({
    title: 'Connexion Space',
    body: 'Your play time is here. Take a moment to reconnect.',
    url: '/welcome',
  })

  console.log('Sending test push to:', subscription.endpoint)

  await webpush.sendNotification(pushSubscription, payload)

  console.log('Push sent')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })