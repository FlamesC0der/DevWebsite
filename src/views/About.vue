<script setup>
import List from '@/components/common/List.vue';
import { ref, onBeforeMount } from 'vue'

let age = ref(300)

const AboutList = {
  About1: {
    items: [
      {icon: 'info', text: {text: 'about.about_me1', type: 'translation'}},
      {icon: 'calendar', text: {text: age, type: 'text'}},
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
      {icon: 'stack/html5', text: {text: 'Html/css', type: 'text'}},
      {icon: 'stack/javascript', text: {text: 'Javascript', type: 'text'}},
      {icon: 'stack/jquery', text: {text: 'Jquery', type: 'text'}},
      {icon: 'stack/vuejs', text: {text: 'Vue 3', type: 'text'}},
      {icon: 'stack/webpack', text: {text: 'Webpack', type: 'text'}},
      {icon: 'stack/sass', text: {text: 'Sass/Scss', type: 'text'}},
      {icon: 'stack/nodejs', text: {text: 'Node.js', type: 'text'}}
    ]
  },
  Other: {
    title: 'Other',
    items: [
      {icon: 'stack/python', text: {text: 'Python', type: 'text'}},
      {icon: 'stack/lua', text: {text: 'Lua', type: 'text'}},
      {icon: 'stack/git', text: {text: 'Git', type: 'text'}}
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
      <img class="about__logo" src="@/assets/avatar.gif" />
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