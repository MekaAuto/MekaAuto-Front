/* eslint-disable @typescript-eslint/no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router';
import useAuthStore from '@/store/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requireAuth: false,
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
      component: () => import('../views/Pruebas/productVue.vue')
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
      path: '/prueba/filtro',
      name: 'pruebaFiltro',
      component: () => import('../views/Pruebas/filtroPrueba.vue')
    },
    {
      path: '/prueba/toast',
      name: 'pruebaToast',
      component: () => import('@/views/Pruebas/toastPrueba.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  // to = a donde el usuario quiere ir // from = de donde viene // next = a donde va a ir
  const storeAuth = useAuthStore();
  const isAuth = storeAuth.jwt;
  const needAuth = to.meta.requireAuth;
  const role = to.meta.role;

  if (needAuth && (isAuth === null || role !== 'admin')) {
    next('auth');
  } else {
    next();
  }
});

export default router;
