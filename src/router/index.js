import {RouterView, createRouter, createWebHistory} from 'vue-router'
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
            meta: {title: 'Links · FlamesCoder', index: 3},
            children: [
                {
                    path: '',
                    name: 'Links',
                    component: () => import('@/views/Links.vue'),
                },
                {
                    path: 'github',
                    name: 'Github',
                    component: () => import('@/views/Links.vue'),
                    beforeEnter(to, from, next) {
                        window.location.href = "https://github.com/FlamesC0der";
                    }
                },
                {
                    path: 'discord',
                    name: 'Discord',
                    component: () => import('@/views/Links.vue'),
                    beforeEnter(to, from, next) {
                        window.location.href = "https://discord.gg/3wt8QRndjm";
                    }
                },
                {
                    path: 'telegram',
                    name: 'Telegram',
                    component: () => import('@/views/Links.vue'),
                    beforeEnter(to, from, next) {
                        window.location.href = "https://t.me/FlameCoder0_0";
                    }
                }
            ]
        },
        {
            path: '/projects',
            meta: {title: 'Projects · FlamesCoder', index: 4},
            children: [
                {
                    path: '',
                    name: 'Projects',
                    component: () => import('@/views/Projects.vue'),
                },
                {
                    path: 'discord-bot-template',
                    name: 'discord-bot-template',
                    component: () => import('@/views/Projects.vue'),
                    beforeEnter(to, from, next) {
                        window.location.href = "https://github.com/FlamesC0der/discord-bot-template";
                    }
                },
                {
                    path: 'webpack-simple',
                    name: 'webpack-simple',
                    component: () => import('@/views/Projects.vue'),
                    beforeEnter(to, from, next) {
                        window.location.href = "https://github.com/FlamesC0der/Webpack-simple";
                    }
                },
                {
                    path: 'powercode-scanner',
                    name: 'powercode-scanner',
                    component: () => import('@/views/Projects.vue'),
                    beforeEnter(to, from, next) {
                        window.location.href = "https://github.com/FlamesC0der/PowerCode-Scanner"
                    }
                },
                {
                    path: 'yandexlmstools',
                    name: 'yandexlmstools',
                    component: () => import('@/views/Projects.vue'),
                    beforeEnter(to, from, next) {
                        window.location.href = "https://github.com/FlamesC0der/YandexLMSTools"
                    }
                },
                {
                    path: 'pyrenju',
                    name: 'pyrenju',
                    component: () => import('@/views/Projects.vue'),
                    beforeEnter(to, from, next) {
                        window.location.href = "https://github.com/FlamesC0der/PyRenju"
                    }
                },
                {
                    path: 'pyosu',
                    name: 'pyosu',
                    component: () => import('@/views/Projects.vue'),
                    beforeEnter(to, from, next) {
                        window.location.href = "https://github.com/FlamesC0der/PyOSU"
                    }
                }
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
    const toIndex = to.meta?.index
    const fromIndex = from.meta?.index
    to.meta.transition = toIndex < fromIndex ? 'slide-right' : 'slide-left'
})

export default router
