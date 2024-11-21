import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue'),
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: () => import('@/views/MyInfoView.vue'),
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('@/views/FavoriteView.vue'),
    },
    {
      path: '/didimdol',
      name: 'didimdol',
      component: () => import('@/views/DidimdolView.vue'),
    },
  ],
})

export default router
