<script setup>
import Button from '@/components/common/Button.vue'

const links = [
  {text: 'Github', link: 'links/github', logo: 'social/github'},
  {text: 'Discord', link: 'links/discord', logo: 'social/discord'},
  {text: 'Telegram', link: 'links/telegram', logo: 'social/telegram'}
]
</script>

<template>
  <section class="links">
    <h2 class="title">{{ $t("links.links_title") }}</h2>
    <div class="line"></div>
    <Button class="links__button" v-for="button in links" :text="button.text" :link="button.link" :logo="button.logo"
            :key="button.id"/>
  </section>
</template>

<style lang="scss" scoped>
.links {
  margin-bottom: 1rem;
  background: var(--background-transparent-color1);
  border-radius: 15px;
  padding: 10px;
  backdrop-filter: blur(5px);

  &__button {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 2rem;
  }
}

.title {
  margin: 10px 0;
}
</style>