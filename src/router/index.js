import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/components/pages/Users.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/components/pages/Posts.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/components/pages/Settings.vue'),
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/components/pages/Categories.vue'),
    },
    {
      path: '/subcategories',
      name: 'subcategories',
      component: () => import('@/components/pages/Subcategories.vue'),
    },
  ]
})

export default router
