<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Header from '@/components/app/Header.vue'
import Footer from '@/components/app/Footer.vue'
</script>

<template>
  <div class="container">
    <!-- <Header/> -->
    <RouterView v-slot="{ Component, route}">
      <Transition :name="route.meta.transition" mode="out-in">
        <component :is="Component"/>
      </Transition>
    </RouterView>
    <!-- <Footer/> -->
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  // padding-top: 1rem;
  min-height: 100vh;
  z-index: 1;
}

// slide animation
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s cubic-bezier(.42, .97, .52, 1.49);
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
  transition: all 0.3s cubic-bezier(.42, .97, .52, 1.49);
}

.slide-left-enter-from {
  transform: translateX(50px);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

@keyframes alert-animation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-200%);
  }
}

</style>
