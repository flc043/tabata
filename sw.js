const CACHE_NAME = 'tabata-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg' // 確保你有這個檔案，或改名為你的圖示檔名
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // 使用 map 逐一加入，避免其中一個失敗導致全部失敗
      return Promise.all(
        ASSETS.map(url => {
          return cache.add(url).catch(err => console.log('抓不到檔案:', url));
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
