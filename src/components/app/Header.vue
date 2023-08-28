<script setup>
import NavBar from '@/components/misc/NavBar.vue'
</script>

<template>
    <header class="header">
        <NavBar />
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
}
</style>