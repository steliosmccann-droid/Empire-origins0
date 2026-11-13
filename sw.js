/* EMPIRE ORIGINS V88 service worker. Generated at build time. */
const CACHE = 'eo-v88';
const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./sw.js",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-16.png",
  "./icons/favicon-32.png",
  "./icons/favicon.ico",
  "./icons/icon-192.png",
  "./icons/icon-512-maskable.png",
  "./icons/icon-512.png",
  "./art/archer_idle.webp",
  "./art/archer_w0.webp",
  "./art/archer_w1.webp",
  "./art/archer_w2.webp",
  "./art/archer_w3.webp",
  "./art/barracks_t1.webp",
  "./art/barracks_t2.webp",
  "./art/barracks_t3.webp",
  "./art/barracks_t4.webp",
  "./art/bush.webp",
  "./art/citizen_a.webp",
  "./art/citizen_a_w0.webp",
  "./art/citizen_a_w1.webp",
  "./art/citizen_a_w2.webp",
  "./art/citizen_a_w3.webp",
  "./art/citizen_b.webp",
  "./art/citizen_b_w0.webp",
  "./art/citizen_b_w1.webp",
  "./art/citizen_b_w2.webp",
  "./art/citizen_b_w3.webp",
  "./art/enemy_camp.webp",
  "./art/farm_t1.webp",
  "./art/farm_t2.webp",
  "./art/farm_t3.webp",
  "./art/farm_t4.webp",
  "./art/flowers_blue.webp",
  "./art/flowers_pink.webp",
  "./art/forge_t1.webp",
  "./art/forge_t2.webp",
  "./art/forge_t3.webp",
  "./art/forge_t4.webp",
  "./art/gold_pile.webp",
  "./art/house_t1.webp",
  "./art/house_t2.webp",
  "./art/house_t3.webp",
  "./art/house_t4.webp",
  "./art/manifest.json",
  "./art/mine_t1.webp",
  "./art/mine_t2.webp",
  "./art/mine_t3.webp",
  "./art/mine_t4.webp",
  "./art/orc_archer_idle.webp",
  "./art/orc_archer_w0.webp",
  "./art/orc_archer_w1.webp",
  "./art/orc_archer_w2.webp",
  "./art/orc_archer_w3.webp",
  "./art/orc_boss.webp",
  "./art/orc_boss_w0.webp",
  "./art/orc_boss_w1.webp",
  "./art/orc_boss_w2.webp",
  "./art/orc_boss_w3.webp",
  "./art/orc_brute_idle.webp",
  "./art/orc_brute_w0.webp",
  "./art/orc_brute_w1.webp",
  "./art/orc_brute_w2.webp",
  "./art/orc_brute_w3.webp",
  "./art/orc_camp.webp",
  "./art/orc_idle.webp",
  "./art/orc_w0.webp",
  "./art/orc_w1.webp",
  "./art/orc_w2.webp",
  "./art/orc_w3.webp",
  "./art/orc_walk1.webp",
  "./art/quarry_t1.webp",
  "./art/quarry_t2.webp",
  "./art/quarry_t3.webp",
  "./art/quarry_t4.webp",
  "./art/rocks.webp",
  "./art/sawmill_t1.webp",
  "./art/sawmill_t2.webp",
  "./art/sawmill_t3.webp",
  "./art/sawmill_t4.webp",
  "./art/soldier_idle.webp",
  "./art/soldier_w0.webp",
  "./art/soldier_w1.webp",
  "./art/soldier_w2.webp",
  "./art/soldier_w3.webp",
  "./art/storage_t1.webp",
  "./art/storage_t2.webp",
  "./art/storage_t3.webp",
  "./art/storage_t4.webp",
  "./art/tower_t1.webp",
  "./art/tower_t2.webp",
  "./art/tower_t3.webp",
  "./art/tower_t4.webp",
  "./art/town_t1.webp",
  "./art/town_t2.webp",
  "./art/town_t3.webp",
  "./art/town_t4.webp",
  "./art/tree_autumn.webp",
  "./art/tree_blossom.webp",
  "./art/tree_oak.webp",
  "./art/tree_pine.webp",
  "./art/windmill_t1.webp",
  "./art/windmill_t2.webp",
  "./art/windmill_t3.webp",
  "./art/windmill_t4.webp",
  "./art/worker_idle.webp",
  "./art/worker_w0.webp",
  "./art/worker_w1.webp",
  "./art/worker_w2.webp",
  "./art/worker_w3.webp",
  "./art/worker_walk1.webp",
  "./art/worker_walk2.webp",
  "./art/world_manifest.json",
  "./ui/fonts/comfortaa.woff",
  "./ui/fonts/delachi.woff",
  "./ui/fonts/delagothic.woff",
  "./ui/icons/army.webp",
  "./ui/icons/boost.webp",
  "./ui/icons/bricks.webp",
  "./ui/icons/castle.webp",
  "./ui/icons/check.webp",
  "./ui/icons/chest.webp",
  "./ui/icons/close.webp",
  "./ui/icons/collect.webp",
  "./ui/icons/crown.webp",
  "./ui/icons/decor.webp",
  "./ui/icons/flag.webp",
  "./ui/icons/food.webp",
  "./ui/icons/gear.webp",
  "./ui/icons/gift.webp",
  "./ui/icons/gold.webp",
  "./ui/icons/heart.webp",
  "./ui/icons/homes.webp",
  "./ui/icons/info.webp",
  "./ui/icons/list.webp",
  "./ui/icons/lock.webp",
  "./ui/icons/map.webp",
  "./ui/icons/market.webp",
  "./ui/icons/moon.webp",
  "./ui/icons/move.webp",
  "./ui/icons/next.webp",
  "./ui/icons/orc.webp",
  "./ui/icons/party.webp",
  "./ui/icons/plus.webp",
  "./ui/icons/pop.webp",
  "./ui/icons/production.webp",
  "./ui/icons/quests.webp",
  "./ui/icons/refresh.webp",
  "./ui/icons/select.webp",
  "./ui/icons/shield.webp",
  "./ui/icons/sound.webp",
  "./ui/icons/stone.webp",
  "./ui/icons/storage.webp",
  "./ui/icons/sun.webp",
  "./ui/icons/target.webp",
  "./ui/icons/temple.webp",
  "./ui/icons/time.webp",
  "./ui/icons/trade.webp",
  "./ui/icons/trophy.webp",
  "./ui/icons/unlock.webp",
  "./ui/icons/up.webp",
  "./ui/icons/wood.webp",
  "./ui/icons/worker.webp",
  "./ui/icons/xp.webp"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isHTMLRequest(request, url) {
  if (request.mode === 'navigate') return true;
  if (request.destination === 'document') return true;
  const path = url.pathname;
  return path.endsWith('/') || path.endsWith('/index.html');
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (isHTMLRequest(req, url)) {
    event.respondWith(
      fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(cache => {
            cache.put(req, copy);
            cache.put('./index.html', copy.clone()).catch(() => {});
          });
        }
        return res;
      }).catch(() =>
        caches.match(req).then(hit => hit || caches.match('./index.html') || caches.match('./'))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, copy));
        }
        return res;
      });
    })
  );
});
