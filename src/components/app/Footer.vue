<template>
    <footer class="footer">
        <div class="footer__copyright">Copyright © 2023 FlamesCoder</div>
    </footer>
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
.footer {
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
    margin-top: auto;
    &__copyright {
        font-weight: 100;
        color: var(--text-color3);
        margin-bottom: 20px;
    }
}
</style>