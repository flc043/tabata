const CACHE_NAME = 'tabata-v1';
const ASSETS = [
  'index.html',
  'style.css', // 如果你有獨立的 CSS 檔
  'script.js', // 如果你有獨立的 JS 檔
  'manifest.json',
  'icon.png'
];

// 安裝並快取資源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 攔截請求，讓離線也能跑
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
