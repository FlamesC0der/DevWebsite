import { RouterView, createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tr from '@/i18n/translation'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {title: 'FlamesCoder'},
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      meta: {title: 'About · FlamesCoder'},
      component: () => import('@/views/About.vue')
    },
    {
      path: '/links',
      name: 'Links',
      meta: {title: 'Links · FlamesCoder'},
      component: () => import('@/views/Links.vue')
    },
    {
      path: '/projects',
      children: [
        {
          path: '',
          name: 'Projects',
          component: () => import('@/views/Projects.vue'),
          meta: {title: 'Projects · FlamesCoder'},
        },
        {
          path: ':name',
          component: () => import('@/views/ProjectDetail.vue'),
          name: 'ProjectDetail',
          meta: {title: 'Project · FlamesCoder'},
        },
      ]
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
})

export default router
