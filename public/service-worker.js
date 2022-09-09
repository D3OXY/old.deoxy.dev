importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );


workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    //checks for Saved cache First
    new workbox.strategies.CacheFirst()
    //checks On Network First
    // new workbox.strategies.NetworkFirst()
)  