<script setup>
import {ref} from 'vue'
import {RouterLink} from 'vue-router';
import LanguageSwitcher from '@/components/misc/LanguageSwitcher.vue';
import Icon from '@/components/common/Icon.vue'

let open = ref(false)
const navs = [
  {icon: "nav/home", to: "/", text_key: "nav.home"},
  {icon: "nav/about", to: "/about", text_key: "nav.about"},
  {icon: "nav/links", to: "/links", text_key: "nav.links"},
  {icon: "nav/projects", to: "/projects", text_key: "nav.projects"}
]
</script>

<template>
  <header class="header">
    <button class="header__burger" @click="open = !open">
      <Icon class="icon" name="menu" size="50px"/>
    </button>
    <nav class="nav" :class="{open: open}">
      <RouterLink v-for="nav in navs" class="nav__item" :to="nav.to" :key="nav.id" @click="open = !open">
        <Icon class="icon" :name="nav.icon" size="15px"/>
        <p class="nav__name">{{ $t(nav.text_key) }}</p>
      </RouterLink>
    </nav>
    <LanguageSwitcher/>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  margin: 0 auto 1rem;
  padding: 0 10px;
  width: 100%;
  line-height: 3rem;
  border: 2px solid var(--border-color-light1);
  border-radius: 15px;
  background: var(--background-transparent-color3);

  &__burger {
    display: none;
    text-align: left;
    margin: 0 10px;
    max-height: 44px;
  }
}

.nav {
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
  user-select: none;

  &__item {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    border-radius: 5px;
    padding: 0 10px;
    align-items: center;

    &:hover {
      background: var(--background-transparent-color2);
      transition: background .25s;
    }
  }

  &__name {
    font-size: 15px;
  }
}

.router-link-active::after {
  position: absolute;
  content: "";
  background: var(--link-active);
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  right: 0;
}

@media (max-width: 600px) {
  .nav {
    display: none;
    flex-direction: column;
  }
  .header__burger {
    display: block;
    background: none;
  }
  .open {
    display: flex;
  }
  .router-link-active::after {
    position: absolute;
    content: "";
    background: var(--link-active);
    height: 100%;
    width: 2px;
    top: 0;
    left: 0;
    bottom: 0;
  }
}
</style>