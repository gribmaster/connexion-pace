/**
 * Client-side Web Push subscription helper.
 *
 * This module only handles subscribing the browser and persisting the
 * PushSubscription to the backend. Reminder creation and push scheduling
 * are implemented separately.
 */

// Converts a VAPID public key from base64url string to the Uint8Array that
// pushManager.subscribe() requires as applicationServerKey.
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const raw = atob(base64)
  return Uint8Array.from(raw, (c) => c.charCodeAt(0))
}

export interface SubscribeResult {
  ok: boolean
  error?: string
  subscriptionId?: string
}

/**
 * Subscribes the current browser to Web Push and saves the subscription to
 * the backend (POST /api/notifications/subscriptions).
 *
 * Must be called from a user gesture (e.g. button click) — never on page load.
 * Returns a result object so callers can show appropriate UI feedback.
 */
export async function subscribeToPushNotifications(): Promise<SubscribeResult> {
  // --- Browser support checks ---
  if (
    typeof window === 'undefined' ||
    !('serviceWorker' in navigator) ||
    !('PushManager' in window) ||
    !('Notification' in window)
  ) {
    return { ok: false, error: 'Push notifications are not supported in this browser.' }
  }

  // --- Notification permission ---
  let permission = Notification.permission
  if (permission === 'default') {
    permission = await Notification.requestPermission()
  }
  if (permission !== 'granted') {
    return { ok: false, error: 'Notifications are blocked in your browser settings.' }
  }

  // --- Service worker ---
  // PwaRegister already registers /sw.js globally; .ready resolves once it is active.
  let registration: ServiceWorkerRegistration
  try {
    registration = await navigator.serviceWorker.ready
  } catch {
    return { ok: false, error: 'Push notifications are not supported in this browser.' }
  }

  // --- Get or create PushSubscription ---
  let pushSub: PushSubscription | null
  try {
    // Reuse an existing subscription if the browser already has one for this SW.
    pushSub = await registration.pushManager.getSubscription()

    if (!pushSub) {
      const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      if (!publicKey) {
        return { ok: false, error: 'Push notifications are not configured.' }
      }
      pushSub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey) as unknown as ArrayBuffer,
      })
    }
  } catch {
    return { ok: false, error: 'Push notifications are not supported in this browser.' }
  }

  // --- Persist subscription to backend ---
  const json = pushSub.toJSON()
  const { endpoint, keys } = json as { endpoint: string; keys: { p256dh: string; auth: string } }

  try {
    const res = await fetch('/api/notifications/subscriptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ endpoint, keys }),
    })

    const data = (await res.json()) as { ok?: boolean; subscriptionId?: string; error?: string }

    if (!res.ok || !data.ok) {
      return { ok: false, error: 'Failed to save push subscription.' }
    }

    return { ok: true, subscriptionId: data.subscriptionId }
  } catch {
    return { ok: false, error: 'Failed to save push subscription.' }
  }
}
