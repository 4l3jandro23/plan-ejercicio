/* Al cambiar el contenido de la app, sube este número:
   es lo que hace saltar el aviso de "hay una versión nueva". */
const CACHE_VERSION = 'plan-ejercicio-v7';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './fonts/fraunces-600.woff2',
  './fonts/jetbrains-mono-400.woff',
  './fonts/jetbrains-mono-700.woff',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-192-maskable.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Las llamadas a Supabase nunca se cachean: si no hay red, que fallen y
  // la app siga con los datos locales.
  if (event.request.url.indexOf('supabase.co') !== -1) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      const network = fetch(event.request).then(response => {
        if (response && response.ok) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
