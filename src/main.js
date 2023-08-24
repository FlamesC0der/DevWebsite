import './assets/main.scss'
import 'highlight.js/styles/qtcreator_dark.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueHighlightJS from 'vue3-highlightjs'
import i18n from './i18n'
import Markdown from 'vue3-markdown-it';

const app = createApp(App)

app
    .use(VueHighlightJS)
    .use(i18n)
    .use(Markdown)
    .use(router)
    .use(store)
    .mount('#app')
