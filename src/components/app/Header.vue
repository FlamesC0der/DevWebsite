<template>
    <header class="header">
        <NavBar />
    </header>
</template>

<script>
import NavBar from '@/components/app/NavBar.vue'
export default {
    components: {
        NavBar
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: row;
    margin: 0 auto 1rem;
    width: 100%;
    line-height: 3rem;
    border: 2px solid var(--border-color-light1);
    border-radius: 15px;
}
</style>