'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "a284a5c24aa28191f1456dd8ea8550e7",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/image.png": "f1b5418402927c6d0861f93f451b8c7f",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "cd5fcc3e6f39133dd30b2812d9833043",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "b04b16c9c77e06ceab2fd9d5544c27d8",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
