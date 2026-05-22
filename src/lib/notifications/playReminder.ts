export interface PlayReminder {
  scheduledAt: string
  title: string
  body: string
  createdAt: string
}

export const REMINDER_KEY = 'connexion_play_reminder'

const NOTIF_TITLE = 'Connexion Space'
const NOTIF_BODY = 'Your play time is here. Take a moment to reconnect.'

export function canUseNotifications(): boolean {
  return (
    typeof window !== 'undefined' &&
    'Notification' in window &&
    'serviceWorker' in navigator
  )
}

export async function requestNotificationPermission(): Promise<NotificationPermission | null> {
  if (!canUseNotifications()) return null
  if (Notification.permission === 'granted') return 'granted'
  if (Notification.permission === 'denied') return 'denied'
  return await Notification.requestPermission()
}

export function savePlayReminder(scheduledAt: Date): PlayReminder {
  const reminder: PlayReminder = {
    scheduledAt: scheduledAt.toISOString(),
    title: NOTIF_TITLE,
    body: NOTIF_BODY,
    createdAt: new Date().toISOString(),
  }
  localStorage.setItem(REMINDER_KEY, JSON.stringify(reminder))
  return reminder
}

// Returns one of: 'trigger' | 'timeout' | 'saved-only'
export async function schedulePlayReminder(reminder: PlayReminder): Promise<'trigger' | 'timeout' | 'saved-only'> {
  if (!canUseNotifications()) return 'saved-only'
  if (Notification.permission !== 'granted') return 'saved-only'

  const scheduledAt = new Date(reminder.scheduledAt)
  const now = new Date()
  const delayMs = scheduledAt.getTime() - now.getTime()
  if (delayMs <= 0) return 'saved-only'

  // Try Notification Triggers API (Chrome 80+, requires installed PWA)
  try {
    const swReg = await navigator.serviceWorker.ready
    // @ts-expect-error — Notification Triggers is not yet in TS lib
    if ('showTrigger' in Notification.prototype && typeof TimestampTrigger !== 'undefined') {
      await swReg.showNotification(reminder.title, {
        body: reminder.body,
        icon: '/icons/icon-192.png',
        badge: '/icons/icon-192.png',
        data: { url: '/welcome' },
        // @ts-expect-error — Notification Triggers API
        showTrigger: new TimestampTrigger(scheduledAt.getTime()),
      })
      return 'trigger'
    }
  } catch {
    // Triggers not supported or permission revoked — fall through
  }

  // Fallback: setTimeout only if reminder is within 24 hours (active-page only)
  // TODO: implement backend Web Push scheduling for reliable reminders.
  if (delayMs < 24 * 60 * 60 * 1000) {
    setTimeout(async () => {
      try {
        const swReg = await navigator.serviceWorker.ready
        await swReg.showNotification(reminder.title, {
          body: reminder.body,
          icon: '/icons/icon-192.png',
          data: { url: '/welcome' },
        })
      } catch {
        if (Notification.permission === 'granted') {
          new Notification(reminder.title, { body: reminder.body })
        }
      }
    }, delayMs)
    return 'timeout'
  }

  return 'saved-only'
}
