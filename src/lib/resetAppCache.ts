export async function resetAppCache(): Promise<void> {
  if (typeof window === 'undefined') return

  // Clear localStorage and sessionStorage
  window.localStorage.clear()
  window.sessionStorage.clear()

  // Clear Cache Storage (service worker caches)
  if ('caches' in window) {
    const keys = await caches.keys()
    await Promise.all(keys.map((key) => caches.delete(key)))
  }

  // Clear IndexedDB databases where the API is available
  // (indexedDB.databases() is not supported in all browsers)
  if ('indexedDB' in window && typeof indexedDB.databases === 'function') {
    try {
      const databases = await indexedDB.databases()
      await Promise.all(
        databases
          .filter((db) => db.name)
          .map((db) => indexedDB.deleteDatabase(db.name!)),
      )
    } catch {
      // Non-fatal: some browsers do not support indexedDB.databases()
    }
  }

  // Clear JS-readable cookies.
  // HttpOnly cookies cannot be deleted from client-side JavaScript.
  document.cookie.split(';').forEach((cookie) => {
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim()
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
  })

  // Service worker is intentionally kept registered so the PWA shell still
  // works after reload. Caches were already cleared above.

  window.location.href = '/'
}
