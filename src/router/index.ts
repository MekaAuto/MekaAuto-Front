/* eslint-disable @typescript-eslint/no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router';
import useDataUser from '@/store/dataUser';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requireAuth: true,
        role: 'admin'
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth/AuthVue.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../views/auth/registrarVue.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/recuperar',
      name: 'recuperar',
      component: () => import('../views/auth/recuperarPassword.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/products/productVue.vue')
    },
    {
      path: '/home/carroHome',
      name: 'carroHome',
      component: () => import('../views/home/categorias/carroHome.vue')
    },
    {
      path: '/home/motoHome',
      name: 'motoHome',
      component: () => import('../views/home/categorias/motoHome.vue')
    },
    {
      path: '/home/camionHome',
      name: 'camionHome',
      component: () => import('../views/home/categorias/camionHome.vue')
    },
    {
      path: '/user',
      name: 'userInfo',
      component: () => import('../views/user/userBase.vue')
    },
    {
      path: '/prueba/productBuscador',
      name: 'productBuscador',
      component: () => import('../views/products/productBuscador.vue')
    },
    {
      path: '/prueba/productHome',
      name: 'productHome',
      component: () => import('../views/products/productHome.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

router.beforeEach((to, from, next) => {
  // to = a donde el usuario quiere ir // from = de donde viene // next = a donde va a ir
  const store = useDataUser();
  const isAuth = store.AccessToken;
  const needAuth = to.meta.requireAuth;
  const role = to.meta.role;

  if (needAuth && (isAuth === undefined || role !== 'admin')) {
    next('auth');
  } else {
    next();
  }
});

export default router;
