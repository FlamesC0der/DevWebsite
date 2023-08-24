import './assets/main.scss'
import 'highlight.js/styles/monokai-sublime.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueHighlightJS from 'vue3-highlightjs'
import i18n from './i18n'

const app = createApp(App)

app
    .use(VueHighlightJS)
    .use(i18n)
    .use(router)
    .mount('#app')
