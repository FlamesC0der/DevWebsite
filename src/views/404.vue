<script setup>
</script>

<template>
    <section class="error">
        <h2 class="error__title">{{ $t("404.title") }}</h2>
        <p class="error__subtitle">{{ $t("404.subtitle") }}</p>
        <RouterLink class="error__link" to="/">{{ $t("404.link") }} ➜</RouterLink>
    </section>
</template>

<style lang="scss" scoped>
.error {
    margin-bottom: 1rem;
    text-align: center;
    line-height: 3rem;
    background: var(--background-transparent-color1);
    border-radius: 15px;
    padding: 10px;
    backdrop-filter: blur(5px);
    &__title {
        font-size: 2rem;;
    }
    &__subtitle {
        color: var(--font-color-gray);
    }
    &__link {
        color: var(--font-color-green);
        transition: color .35s;
        text-decoration: none;
    }
}

</style>