import { RouterView, createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tr from '@/i18n/translation'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {title: 'FlamesCoder', index: 1},
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      meta: {title: 'About · FlamesCoder', index: 2},
      component: () => import('@/views/About.vue')
    },
    {
      path: '/links',
      name: 'Links',
      meta: {title: 'Links · FlamesCoder', index: 3},
      component: () => import('@/views/Links.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/views/Projects.vue'),
      meta: {title: 'Projects · FlamesCoder', index: 4},
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      meta: {title: '404 Page not found'},
      component: () => import('@/views/404.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  Tr.routeMiddleware(to, from, next)
  document.title = to.meta?.title ?? 'FlamesCoder'
  const toIndex = to.meta?.index
  const fromIndex = from.meta?.index
  to.meta.transition = toIndex < fromIndex ? 'slide-right' : 'slide-left'
})

export default router
