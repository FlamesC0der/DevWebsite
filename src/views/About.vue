<script setup>
import List from '@/components/common/List.vue'
import { ref, onBeforeMount, h } from 'vue'

let age = ref(300)
const code = `{
  "name": "dev-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@highlightjs/vue-plugin": "^2.1.0",
    "@intlify/unplugin-vue-i18n": "^0.12.3",
    "bootstrap-icons": "^1.10.5",
    "vue": "^3.3.4",
    "vue-country-flag-next": "^2.3.2",
    "vue-i18n": "^9.2.2",
    "vue-router": "^4.2.4"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.2.3",
    "sass": "^1.66.1",
    "vite": "^4.4.6"
  }
}`

const about = [
    "about.about_me2",
    "about.about_me3",
    "about.about_me4"
]

const stack = [
    {name: 'Frontend', items: [
        {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', text: 'Html/css'},
        {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', text: 'Javascript'},
        {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg', text: 'Jquery'},
        {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg', text: 'Vue 3'},
        {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg', text: 'Webpack'},
        {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg', text: 'Sass/Scss'},
        {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', text: 'Node.js'}
    ]},
    {name: 'Other', items: [
        {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', text: 'Python'},
        {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/lua/lua-original.svg', text: 'Lua'},
        {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', text: 'Git'}
    ]}
]

function calculateAge() {
    var ageDifMs = Date.now() - new Date('04/04/2008');
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

onBeforeMount(() => {
    age.value = calculateAge()
})
</script>

<template>
    <section class="about">
        <div class="about__profile">
            <img class="about__logo" src="@/assets/avatar.jpg" />
            <h2 class="about__name">FlamesCoder</h2>
        </div>
        <h3 class="title">{{ $t("about.about_me") }}</h3>
        <div class="line"></div>
        <List>
            <ul class="list">
                <li class="list__item"><i class="icon bi-person-circle"></i> {{ $t("about.about_me1") }}</li>
                <li class="list__item"><i class="icon bi-calendar"></i>  {{ age }} y.o</li>
            </ul>
        </List>
        <div class="line"></div>
        <List>
            <ul v-for="item in about" class="list">
                <li class="list__item">{{ $t(item) }}</li>
            </ul>
        </List>
        <div class="line"></div>
        <List>
            <ul v-for="stack_item in stack" class="list">
                <li class="list__item">{{ stack_item['name'] }}</li>
                <ul class="list">
                    <li v-for="item in stack_item['items']" class="list__item"><img :src="item['icon']"> {{ item['text'] }}</li>
                </ul>
            </ul>
        </List>
        <div class="line"></div>
        <h3 class="title">{{ $t("about.about_web1") }}</h3>
        <p class="about__text">{{ $t("about.about_web2") }} <img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"></p>
        <p class="about__text">{{ $t("about.about_web3") }}</p>
        <highlightjs language="json" :code="code"/>
    </section>
</template>

<style lang="scss" scoped>
.about {
    margin-bottom: 1rem;
    color: var(--font-color-blue);
    background: var(--background-transparent-color1);
    border-radius: 15px;
    padding: 10px;
    backdrop-filter: blur(5px);
    &__profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &__logo {
        width: 200px;
        height: 200px;
        border-radius: 100%;
    }
    &__name {
        font-size: 30px;
        color: var(--font-color-orange);
    }
    &__text {
        margin: 16px 0;
    }
}
.title {
    margin: 10px 0;
}
</style>