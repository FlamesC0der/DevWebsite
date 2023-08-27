<template>
    <section class="about">
        <div class="about__profile">
            <img class="about__logo" src="@/assets/avatar.jpg" />
            <h1 class="about__name">FlamesCoder</h1>
        </div>
        <h3 class="about_title title">{{ $t("about.about_me") }}</h3>
        <hr>
        <p><i class="bi-person-circle"></i> {{ $t("about.about_me1") }}</p>
        <p><i class="bi-calendar"></i>  {{ age }} y.o</p>
        <hr>
        <ul class="list">
            <li class="list__item">{{ $t("about.about_me2") }}</li>
            <li class="list__item">{{ $t("about.about_me3") }}</li>
            <li class="list__item">{{ $t("about.about_me4") }}</li>
        </ul>
        <hr>
        <ul class="list">
            <li class="list__item">Frontend</li>
            <ul class="list">
                <li class="list__item"><img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"><img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> Html/css</li>
                <li class="list__item"><img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"> Javascript</li>
                <li class="list__item"><img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg"> Jquery</li>
                <li class="list__item"><img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"> Vue 3</li>
                <li class="list__item"><img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg"> Webpack</li>
                <li class="list__item"><img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"> Sass/Scss</li>
                <li class="list__item"><img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"> Node.js</li>
            </ul>
            <li class="list__item">Other</li>
            <ul class="list">
                <li class="list__item"><img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"> Python</li>
                <li class="list__item"><img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/lua/lua-original.svg"> Lua</li>
                <li class="list__item"><img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"> Git</li>
            </ul>
        </ul>
        <hr>
        <h3 class="about_title title">{{ $t("about.about_web1") }}</h3>
        <p>{{ $t("about.about_web2") }} <img width="20px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"></p>
        <p>{{ $t("about.about_web3") }}</p>
        <highlightjs language="json" :code="code"/>
    </section>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'

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

function calculateAge() {
    var ageDifMs = Date.now() - new Date('04/04/2008');
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

onBeforeMount(() => {
    age.value = calculateAge()
})
</script>

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
    &_title {
        margin: 10px 0;
    }
}
p {
    margin: 16px 0;
}
.list {
    padding-left: 40px;
    margin: 14px 0;
    list-style: none;
    &__item {
        line-height: 24px;
        &::before {
            content: "\2022";
            font-weight: bold;
            display: inline-block; 
            width: 1em;
            margin-left: -1em;
        }
    }
}
</style>