import { createRouter, createWebHistory } from 'vue-router'
import { loadCSS, unloadCSS, loadScript, unloadScript } from '../utils/assetLoader';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/beranda',
      name: 'beranda',
      component: () => import('../views/BerandaView.vue'),
    },

    // Error Handling ===========================================
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('../views/Unauthorized.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    }
  ]
});
// Define the assets
const assetsToLoadOnHome = [
  { css: '/assets/css/template.css', js: '/assets/js/template.js' }
];

const assetsToUnloadOnHome = [
  { css: '/assets/css/sb-admin-2.min.css', js: '/assets/js/sb-admin-2.min.js' }
];

// Handle route changes and load/unload assets
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    // Load home-specific assets
    assetsToLoadOnHome.forEach(asset => {
      if (asset.css) loadCSS(asset.css);
      if (asset.js) loadScript(asset.js);
    });

    // Unload non-home assets
    assetsToUnloadOnHome.forEach(asset => {
      if (asset.css) unloadCSS(asset.css);
      if (asset.js) unloadScript(asset.js);
    });
  } else {
    // Unload home-specific assets when navigating away from home
    assetsToLoadOnHome.forEach(asset => {
      if (asset.css) unloadCSS(asset.css);
      if (asset.js) unloadScript(asset.js);
    });

    // Optionally, load assets specific to other routes
    // Example:
    // if (to.path === '/dashboard-pusat') {
    //   loadCSS('/assets/css/dashboard.css');
    //   loadScript('/assets/js/dashboard.js');
    // }
  }

  next();
});

export default router
