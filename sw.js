const CACHE_NAME = 'pwa-cache-v1';
const ASSETS_TO_CACHE = [
  './pwa.html',
  './pwa.css',
  './pwa.js',
  './images/icon-192x192.png',
  './images/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return the cached response if found, otherwise fetch from the network.
      return cachedResponse || fetch(event.request);
    })
  );
});