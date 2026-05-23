/**
 * Web Push / VAPID configuration helpers.
 *
 * NEXT_PUBLIC_VAPID_PUBLIC_KEY — safe to expose to the browser.
 *   Used by the client to create a PushSubscription via
 *   serviceWorkerRegistration.pushManager.subscribe({ applicationServerKey }).
 *
 * VAPID_PRIVATE_KEY — SERVER ONLY. Never import this file into a Client
 *   Component or any module that ends up in the browser bundle.
 *   Used by the push-sending API route to sign Web Push requests.
 *
 * VAPID_SUBJECT — SERVER ONLY. A mailto: or https: contact address sent
 *   in the VAPID header so push services can reach you if something breaks.
 */

/** Returns the VAPID public key. Safe to call on client or server. */
export function getVapidPublicKey(): string {
  const key = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  if (!key) throw new Error('Missing NEXT_PUBLIC_VAPID_PUBLIC_KEY')
  return key
}

export interface ServerWebPushConfig {
  publicKey: string
  privateKey: string
  subject: string
}

/**
 * Returns all three VAPID values needed to send a push notification.
 * SERVER ONLY — never call this from a Client Component.
 */
export function getServerWebPushConfig(): ServerWebPushConfig {
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  if (!publicKey) throw new Error('Missing NEXT_PUBLIC_VAPID_PUBLIC_KEY')

  const privateKey = process.env.VAPID_PRIVATE_KEY
  if (!privateKey) throw new Error('Missing VAPID_PRIVATE_KEY')

  const subject = process.env.VAPID_SUBJECT
  if (!subject) throw new Error('Missing VAPID_SUBJECT')

  return { publicKey, privateKey, subject }
}
