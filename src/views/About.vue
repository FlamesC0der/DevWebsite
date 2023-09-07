<script setup>
import List from '../components/common/List.vue';
import { ref, onBeforeMount } from 'vue'

let age = ref(300)

const AboutList = {
  About1: {
    items: [
      {icon: 'https://img.icons8.com/FFFFFF/info', text: {text: 'about.about_me1', type: 'translation'}},
      {icon: 'https://img.icons8.com/FFFFFF/calendar-4', text: {text: age, type: 'text'}},
    ]
  },
  About2: {
    items: [
      {text: {text: 'about.about_me2', type: 'translation'}},
      {text: {text: 'about.about_me3', type: 'translation'}},
      {text: {text: 'about.about_me4', type: 'translation'}}
    ]
  },
  Frontend: {
    title: 'Frontend',
    items: [
      {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', text: {text: 'Html/css', type: 'text'}},
      {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', text: {text: 'Javascript', type: 'text'}},
      {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg', text: {text: 'Jquery', type: 'text'}},
      {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg', text: {text: 'Vue 3', type: 'text'}},
      {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg', text: {text: 'Webpack', type: 'text'}},
      {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg', text: {text: 'Sass/Scss', type: 'text'}},
      {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', text: {text: 'Node.js', type: 'text'}}
    ]
  },
  Other: {
    title: 'Other',
    items: [
      {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', text: {text: 'Python', type: 'text'}},
      {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/lua/lua-original.svg', text: {text: 'Lua', type: 'text'}},
      {icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', text: {text: 'Git', type: 'text'}}
    ]
  }
}

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
    <List :items="AboutList.About1.items"/>

    <div class="line"></div>

    <List :items="AboutList.About2.items"/>
    <List :items="AboutList.Frontend.items" :title="AboutList.Frontend.title"/>

    <div class="line"></div>

    <List :items="AboutList.Other.items" :title="AboutList.Other.title"/>
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