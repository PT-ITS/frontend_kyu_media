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
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/syarat',
      name: 'syarat',
      component: () => import('../views/SyaratView.vue')
    },
    {
      path: '/paket',
      name: 'paket',
      component: () => import('../views/PaketView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/blog/:id',
      name: 'detailBlog',
      component: () => import('../views/DetailBlogView.vue'),
      props: true, // Allows route params to be passed as props to the component
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
      component: () => import('../views/backup/BerandaView.vue'),
    },
    {
      path: '/foto',
      name: 'foto',
      component: () => import('../views/FotoView.vue'),
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/InfoView.vue'),
    },
    {
      path: '/manfaat',
      name: 'manfaat',
      component: () => import('../views/ManfaatView.vue'),
    },
    {
      path: '/keunggulan',
      name: 'keunggulan',
      component: () => import('../views/KeunggulanView.vue'),
    },
    {
      path: '/tentang-kami',
      name: 'tentang-kami',
      component: () => import('../views/TentangKamiView.vue'),
    },
    {
      path: '/harga',
      name: 'harga',
      component: () => import('../views/HargaView.vue'),
    },
    {
      path: '/syarat-ketentuan',
      name: 'syarat-ketentuan',
      component: () => import('../views/SyaratKetentuanView.vue'),
    },
    {
      path: '/syarat-ketentuan-dua',
      name: 'syarat-ketentuan-dua',
      component: () => import('../views/SyaratKetentuan2View.vue'),
    },
    {
      path: '/media-partner',
      name: 'media-partner',
      component: () => import('../views/MediaPartnerView.vue'),
    },
    {
      path: '/cara-order',
      name: 'cara-order',
      component: () => import('../views/CaraOrderView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqView.vue'),
    },
    {
      path: '/layanan',
      name: 'layanan',
      component: () => import('../views/LayananView.vue'),
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: () => import('../views/KontakView.vue'),
    },
    {
      path: '/crud-blog',
      name: 'crud-blog',
      component: () => import('../views/CrudBlogView.vue'),
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
  } else if (to.path === '/about-us') {
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
  } else if (to.path === '/paket') {
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
  } else if (to.path === '/syarat') {
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
  } else if (to.path === '/blog') {
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
  } else if (to.name === 'detailBlog') {
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
