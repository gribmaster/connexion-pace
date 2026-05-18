const CACHE_NAME = 'connexion-static-v3';

// Only these specific paths are safe to cache
const CACHEABLE_PATHS = [
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/apple-touch-icon.png',
  '/manifest.json',
];

function isHttpUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://');
}

function isCacheable(url) {
  if (!isHttpUrl(url)) return false;
  try {
    const { pathname } = new URL(url);
    return (
      CACHEABLE_PATHS.includes(pathname) ||
      pathname.startsWith('/_next/static/')
    );
  } catch {
    return false;
  }
}

self.addEventListener('install', (event) => {
  // Pre-cache only the icon/manifest — skip on failure so install always succeeds
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.allSettled(
          CACHEABLE_PATHS.map((p) => cache.add(p).catch(() => {}))
        )
      )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
        )
      )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Ignore non-GET and non-http(s) schemes (chrome-extension://, etc.)
  if (request.method !== 'GET') return;
  if (!isHttpUrl(request.url)) return;

  // Navigation (HTML pages) — always network, never cache
  // This keeps /game, /auth/callback, /login, etc. fully dynamic
  if (request.mode === 'navigate') return;

  // Only intercept requests for known cacheable static assets
  if (!isCacheable(request.url)) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request).then((response) => {
        // Only cache valid, same-origin, successful responses
        if (
          !response ||
          !response.ok ||
          response.type !== 'basic'
        ) {
          return response;
        }

        const clone = response.clone();
        caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(request, clone))
          .catch(() => {});

        return response;
      }).catch(() => {
        // Network failure for a static asset — return nothing rather than reject
        return new Response('', { status: 503 });
      });
    })
  );
});
