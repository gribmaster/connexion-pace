const CACHE_NAME = 'connexion-static-v1';

const STATIC_ASSETS = [
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/manifest.json',
];

// Never cache these — auth flow must always hit the network
const NEVER_CACHE = [
  '/auth/callback',
  '/api/',
  'supabase.co',
];

function shouldSkipCache(url) {
  return NEVER_CACHE.some((pattern) => url.includes(pattern));
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = request.url;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Skip auth, API, and Supabase requests — always network
  if (shouldSkipCache(url)) return;

  // For HTML navigation requests — network first, no caching
  if (request.mode === 'navigate') return;

  // For static assets — cache first
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        return response;
      });
    })
  );
});
