<template>
    <section class="error">
        <h1 class="error__title">{{ $t("404.title") }}</h1>
        <p class="error__subtitle">{{ $t("404.subtitle") }}</p>
        <RouterLink class="error__link" to="/">{{ $t("404.link") }} ➜</RouterLink>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.error {
    margin-bottom: 1rem;
    text-align: center;
    line-height: 3rem;
    &__title {
        font-size: 2rem;
    }
    &__subtitle {
        color: var(--text-color3);
    }
    &__link {
        color: var(--text-color2);
        transition: color .35s;
        text-decoration: none;
    }
}

</style>