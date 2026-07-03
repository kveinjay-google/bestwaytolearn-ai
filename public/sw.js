/* BestWayToLearn.AI — Service Worker (PWA offline shell) */
const CACHE_NAME = 'bwtl-pwa-v3';
const OFFLINE_URL = '/index.html';

const PRECACHE_URLS = [
  OFFLINE_URL,
  '/',
  '/manifest.webmanifest',
  '/css/styles.css',
  '/css/themes.css',
  '/js/pwa.js',
  '/assets/icons/bwtl-mark.png',
  '/assets/icons/pwa-icon-192.png',
  '/assets/icons/pwa-icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function isSameOrigin(request) {
  try {
    return new URL(request.url).origin === self.location.origin;
  } catch {
    return false;
  }
}

async function cachePut(request, response) {
  if (!response || !response.ok) return;
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response);
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || !isSameOrigin(request)) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          cachePut(OFFLINE_URL, response.clone());
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(OFFLINE_URL);
          return cached || caches.match('/');
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          cachePut(request, response.clone());
          return response;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});