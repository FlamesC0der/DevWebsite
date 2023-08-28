<script setup>
import Button from '@/components/common/Button.vue'

const links = [
    {text: 'Github', link: 'links/github', logo: 'bi-github'},
    {text: 'Discord', link: 'links/discord', logo: 'bi-discord'},
    {text: 'Telegram', link: 'links/telegram', logo: 'bi-telegram'}
]
</script>

<template>
    <section class="links">
        <h2 class="links__title title">{{ $t("links.links_title") }}</h2>
        <hr>
        <Button class="links__button" v-for="button in links" :text="button.text" :link="button.link" :logo="button.logo" />
    </section>
</template>

<style lang="scss" scoped>
.links {
    margin-bottom: 1rem;
    background: var(--background-transparent-color1);
    border-radius: 15px;
    padding: 10px;
    backdrop-filter: blur(5px);
    &__title {
        margin: 10px 0;
    }
    &__button {
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        font-size: 2rem;
    }
}
</style>