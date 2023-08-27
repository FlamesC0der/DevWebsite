import './assets/main.scss'
import 'highlight.js/styles/monokai-sublime.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import i18n from './i18n'

import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('json', json);

console.image = function(src) {
    return new Promise(p => {
        const reader = new FileReader();
        reader.addEventListener("load", function() {
            const img = new Image;
            img.onload = function() {
                const canvas = document.createElement("canvas"),
                 context = canvas.getContext("2d"),
                 devtoolswidth = (window.screen.width - document.body.clientWidth) - 60,
                 width = Math.floor(img.width > devtoolswidth ? devtoolswidth : img.width),
                 height = Math.floor(img.height * (width / img.width));
                canvas.height = height;
                canvas.width = width;
                context.drawImage(img, 0, 0, width, height);
                const styles = [
                    `font-size: 0px;`,
                    `border-radius: 15px;`,
                    `border: 4px solid #9d0a89;`,
                    `padding: ${Math.floor(height * .5)}px ${Math.floor(width * .5)}px;`,
                    `background-repeat: no-repeat;`,
                    `background-size: ${width}px ${height}px;`,
                    `background-image: url(${reader.result});`
                ].join(" ");
                console.log("%c ", styles)
                p(null)
            };
            img.src = reader.result;
        }, !1), fetch(src).then(src=>src.blob()).then(src=>reader.readAsDataURL(src))
    })
}

const app = createApp(App)

app
    .use(hljsVuePlugin)
    .use(i18n)
    .use(router)
    .mount('#app')
