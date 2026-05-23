import 'server-only'
import webpush from 'web-push'
import { getServerWebPushConfig } from './webPushConfig'

type SendWebPushNotificationParams = {
  subscription: {
    endpoint: string
    p256dh: string
    auth: string
  }
  payload: {
    title: string
    body: string
    url?: string
  }
}

export async function sendWebPushNotification(params: SendWebPushNotificationParams): Promise<{
  ok: boolean
  statusCode?: number
  error?: string
  shouldDeleteSubscription?: boolean
}> {
  const { publicKey, privateKey, subject } = getServerWebPushConfig()
  webpush.setVapidDetails(subject, publicKey, privateKey)

  const pushSubscription = {
    endpoint: params.subscription.endpoint,
    keys: {
      p256dh: params.subscription.p256dh,
      auth: params.subscription.auth,
    },
  }

  const payloadJson = JSON.stringify({
    title: params.payload.title,
    body: params.payload.body,
    url: params.payload.url ?? '/welcome',
  })

  try {
    await webpush.sendNotification(pushSubscription, payloadJson)
    return { ok: true }
  } catch (err: unknown) {
    const statusCode = (err as { statusCode?: number }).statusCode
    const message = err instanceof Error ? err.message : String(err)
    const shouldDeleteSubscription = statusCode === 404 || statusCode === 410
    return {
      ok: false,
      statusCode,
      error: message,
      shouldDeleteSubscription,
    }
  }
}
