import './assets/styles/main.scss'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

console.log("%cMade with ♡ by @FlamesCoder\n%cThanks for the help in the development of the website:\n%c@LehaRybkoha", "color: #cc5ae8;", "color: #fa8cbc;", "color: #e609a3;")

console.image = function (src) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            const img = new Image;
            img.onload = function () {
                let devtoolswidth = (window.screen.width - document.body.clientWidth) - 60
                devtoolswidth = (devtoolswidth > 0) ? devtoolswidth : 310
                const canvas = document.createElement("canvas"),
                    context = canvas.getContext("2d"),
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
                resolve(null)
            };
            img.src = reader.result;
        }, !1),
            fetch(src).then(src => src.blob()).then(src => reader.readAsDataURL(src)).catch(err => console.warn(`%cFailed to send image.\n\n${err}`, "color:yellow;"))
    })
}

const images = [
    'https://i.imgur.com/awNMIK7.gif',
    'https://i.imgur.com/FbUzebQ.jpeg',
    'https://i.imgur.com/O82LpEc.jpeg',
    'https://i.imgur.com/IzYAkYX.jpeg',
    'https://i.imgur.com/00jIHPr.jpeg',
    'https://i.imgur.com/jHpOXpc.jpeg',
    'https://i.imgur.com/Bz4zagt.jpeg',
    'https://media.tenor.com/p1UCkxeGATgAAAAC/kaguya-shinomiya-kaguya.gif',
    'https://media.tenor.com/7UsfS4_MbGYAAAAd/random-gif.gif',
    'https://media.tenor.com/fXGeFxrSmuoAAAAC/kaguya-breathing.gif',
    'https://media.tenor.com/BBWRRzO6Kq4AAAAC/iki-kaguya.gif',
]

async function consoleEaster() {
    await console.image(images[Math.floor(Math.random() * images.length)])
    console.log(`%c👆ページを更新すると、%cかわいい♡%cランダム画像${images.length}枚が表示されます`, 'font-size: 14px; color:  #b80dde;', 'font-size: 14px; color: #fe47dc;', 'font-size: 14px; color:  #b80dde;')
    // console.log(`%c👆Refresh page to see another one of ${images.length} %c可愛い♡ %crandom  images`, 'font-size: 14px; color:  #b80dde;', 'font-size: 14px; color: #fe47dc;', 'font-size: 14px; color:  #b80dde;')
}

consoleEaster().catch(console.error)

const app = createApp(App)

app
    .use(i18n)
    .use(router)
    .mount('#app')
