<template>
    <div class="container">
        <Header />
        <RouterView v-slot="{ Component, route}">
            <Transition :name="route.meta.transition" mode="out-in">
                <component :is="Component" />
            </Transition>
        </RouterView>
        <Footer />
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/app/Header.vue'
import Footer from '@/components/app/Footer.vue'

const images = [
    'https://i.imgur.com/awNMIK7.gif',
    'https://i.imgur.com/JGsO7rv.jpeg',
    'https://i.imgur.com/KD7KFAF.gif',
    'https://i.imgur.com/WsUV4DK.gif',
]
onBeforeMount(async () => {
    await console.image(images[Math.floor(Math.random() * images.length)])
    console.log(`%c👆Refresh page to see another one of ${images.length} random images`, 'font-size: 14px; color:  #d20eb8;')
})
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    min-height: 100vh;
}
// slide animation
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.3s cubic-bezier(.42,.97,.52,1.49);
}
.slide-right-enter-from {
    transform: translateX(-50px);
    opacity: 0;
}
.slide-right-leave-to {
    transform: translateX(50px);
    opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
    transition: all 0.3s cubic-bezier(.42,.97,.52,1.49);
}
.slide-left-enter-from {
    transform: translateX(50px);
    opacity: 0;
}
.slide-left-leave-to {
    transform: translateX(-50px);
    opacity: 0;
}
</style>
