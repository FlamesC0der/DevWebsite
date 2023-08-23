<template>
    <div class="container">
        <Header />
        <Suspense>
            <RouterView />
        </Suspense>
        <Footer />
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/app/Header.vue'
import Footer from '@/components/app/Footer.vue'
export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    min-height: 100vh;
}
</style>
