const CACHE_NAME = 'base64-tool-v1';
const ASSETS = [
  '/base64-tool/',
  '/base64-tool/index.html',
  '/base64-tool/styles.css',
  '/base64-tool/app.js',
  '/base64-tool/assets/icon-192.png',
  '/base64-tool/assets/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});
