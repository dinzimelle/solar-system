const CACHE_NAME = 'solar-system-cache-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Step 1: Install the Service Worker and Cache the files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('DevOps Engine: Caching app assets for offline use.');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Step 2: Intercept network requests and serve from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return the cached version if found, otherwise go to the internet
      return cachedResponse || fetch(event.request);
    })
  );
});