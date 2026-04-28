const CACHE_NAME = 'tabata-v4';
const ASSETS = ['./', './index.html', './manifest.json']; 
// 暫時拿掉 icon.png，除非你確定 GitHub 上真的有那個檔案

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
