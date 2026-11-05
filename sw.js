const PREFIX = 'code-master-academy:';
const CACHE = PREFIX + 'v28';
const LEGACY = ["guided-audited-v23", "guided-release-v24", "guided-verified-v22", "learning-plus-v21", "qa-navigation-coherent-v26", "qa-navigation-fix-v25"];
const ASSETS = [
  './', './index.html', './curriculum.js', './fde-curriculum.js',
  './qa-curriculum.js', './qa-from-zero.js', './two-app-deep-labs.js', './study-style.css',
  './fde.html', './projects.html', './manifest.webmanifest', './icon.svg',
  './verified-code-lessons.js', './worked-code-examples.js', './product-demo.html', './product-demo.js',
  './travel-atlas.js', './learning-plus.js', './learning-plus.css', './lab.html',
  './lab-engine.js', './banking-qa-detail.js?v=28', './guided-flow.css?v=28', './guided-flow.js?v=28',
  './study-upgrade.js?v=28',
];

const scope = new URL(self.registration.scope);
const versioned = new Set(ASSETS.filter(asset => asset.includes('?v='))
  .map(asset => new URL(asset, scope).href));

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const requests = ASSETS.map(asset => new Request(new URL(asset, scope), { cache: 'reload' }));
    await cache.addAll(requests);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE &&
      (key.startsWith(PREFIX) || LEGACY.includes(key))).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (versioned.has(url.href)) {
      const saved = await cache.match(request);
      if (saved) return saved;
    }
    try {
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone()).catch(() => {});
      return response;
    } catch {
      return (await cache.match(request)) || Response.error();
    }
  })());
});
