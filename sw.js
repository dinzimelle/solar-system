const CACHE_NAME = 'solar-system-cache-v3.0.1';

const urlsToCache = [
  '/',
  '/index.html',
  '/app.html',
  '/manifest.json',
  '/textures/sun.jpg',
  '/textures/mercury.jpg',
  '/textures/venus.jpg',
  '/textures/earth.jpg',
  '/textures/mars.jpg',
  '/textures/jupiter.jpg',
  '/textures/saturn.jpg',
  '/textures/uranus.jpg',
  '/textures/neptune.jpg',
  '/textures/pluto.jpg',
  '/textures/milkyway.jpg',
  '/textures/andromeda.jpg'
];

// 1. INSTALL: Save the new V3.0.1 files to the device
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache v3.0.1');
        return cache.addAll(urlsToCache);
      })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// 2. ACTIVATE: Delete any old caches (like V2.6.0) to free up storage
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Ensure the Service Worker takes control immediately
  self.clients.claim();
});

// 3. FETCH: Intercept network requests and return cached files if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the fast local file
        if (response) {
          return response;
        }
        // Cache miss - fetch from the internet
        return fetch(event.request);
      })
  );
});
