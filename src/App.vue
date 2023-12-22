<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/app/Header.vue'
import Footer from '@/components/app/Footer.vue'
</script>

<template>
  <div class="container">
    <Header />
    <RouterView v-slot="{ Component, route}">
      <Transition :name="route.meta.transition" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <Footer />
    <div class="snowflake-wrapper">
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
      <div class="snowflake"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
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

.snowflake-wrapper {
}

.snowflake {
  --size: 1vw;
  width: var(--size);
  height: var(--size);
  background: white;
  border-radius: 50%;
  position: absolute;
  top: -5vh;
  z-index: -1;
}
@keyframes snowfall {
  0% {
    transform: translate3d(var(--left-ini), 0, 0);
  }
  100% {
    transform: translate3d(var(--left-end), 110vh, 0);
  }
}
.snowflake:nth-child(1) {
  --size: 0.8vw;
  --left-ini: -8vw;
  --left-end: -9vw;
  left: 6vw;
  animation: snowfall 15s linear infinite;
  animation-delay: -5s;
}
.snowflake:nth-child(2) {
  --size: 0.8vw;
  --left-ini: -7vw;
  --left-end: -5vw;
  left: 29vw;
  animation: snowfall 11s linear infinite;
  animation-delay: -6s;
}
.snowflake:nth-child(3) {
  --size: 0.2vw;
  --left-ini: 6vw;
  --left-end: 0vw;
  left: 79vw;
  animation: snowfall 15s linear infinite;
  animation-delay: -9s;
}
.snowflake:nth-child(4) {
  --size: 0.2vw;
  --left-ini: -8vw;
  --left-end: 2vw;
  left: 35vw;
  animation: snowfall 7s linear infinite;
  animation-delay: -10s;
}
.snowflake:nth-child(5) {
  --size: 0.8vw;
  --left-ini: -8vw;
  --left-end: -2vw;
  left: 5vw;
  animation: snowfall 13s linear infinite;
  animation-delay: -1s;
}
.snowflake:nth-child(6) {
  --size: 1vw;
  --left-ini: -4vw;
  --left-end: 3vw;
  left: 44vw;
  animation: snowfall 8s linear infinite;
  animation-delay: -1s;
}
.snowflake:nth-child(7) {
  --size: 0.6vw;
  --left-ini: -9vw;
  --left-end: -3vw;
  left: 3vw;
  animation: snowfall 6s linear infinite;
  animation-delay: -2s;
}
.snowflake:nth-child(8) {
  --size: 0.2vw;
  --left-ini: -3vw;
  --left-end: 0vw;
  left: 58vw;
  animation: snowfall 11s linear infinite;
  animation-delay: -4s;
}
.snowflake:nth-child(9) {
  --size: 0.2vw;
  --left-ini: -3vw;
  --left-end: 0vw;
  left: 28vw;
  animation: snowfall 7s linear infinite;
  animation-delay: -8s;
}
.snowflake:nth-child(10) {
  --size: 0.6vw;
  --left-ini: 5vw;
  --left-end: 5vw;
  left: 18vw;
  animation: snowfall 14s linear infinite;
  animation-delay: -7s;
}
.snowflake:nth-child(11) {
  --size: 0.4vw;
  --left-ini: 4vw;
  --left-end: 0vw;
  left: 75vw;
  animation: snowfall 10s linear infinite;
  animation-delay: -7s;
}
.snowflake:nth-child(12) {
  --size: 0.6vw;
  --left-ini: -7vw;
  --left-end: 8vw;
  left: 94vw;
  animation: snowfall 10s linear infinite;
  animation-delay: -7s;
}
.snowflake:nth-child(13) {
  --size: 0.2vw;
  --left-ini: -4vw;
  --left-end: 6vw;
  left: 66vw;
  animation: snowfall 6s linear infinite;
  animation-delay: -8s;
}
.snowflake:nth-child(14) {
  --size: 0.6vw;
  --left-ini: -7vw;
  --left-end: 6vw;
  left: 14vw;
  animation: snowfall 15s linear infinite;
  animation-delay: -10s;
}
.snowflake:nth-child(15) {
  --size: 0.2vw;
  --left-ini: -9vw;
  --left-end: 7vw;
  left: 71vw;
  animation: snowfall 9s linear infinite;
  animation-delay: -10s;
}
.snowflake:nth-child(16) {
  --size: 0.8vw;
  --left-ini: -4vw;
  --left-end: -4vw;
  left: 47vw;
  animation: snowfall 11s linear infinite;
  animation-delay: -5s;
}
.snowflake:nth-child(17) {
  --size: 0.2vw;
  --left-ini: -4vw;
  --left-end: 4vw;
  left: 29vw;
  animation: snowfall 14s linear infinite;
  animation-delay: -6s;
}
.snowflake:nth-child(18) {
  --size: 0.2vw;
  --left-ini: 2vw;
  --left-end: 3vw;
  left: 14vw;
  animation: snowfall 9s linear infinite;
  animation-delay: -9s;
}
.snowflake:nth-child(19) {
  --size: 1vw;
  --left-ini: -8vw;
  --left-end: 5vw;
  left: 25vw;
  animation: snowfall 11s linear infinite;
  animation-delay: -1s;
}
.snowflake:nth-child(20) {
  --size: 0.4vw;
  --left-ini: 9vw;
  --left-end: 2vw;
  left: 98vw;
  animation: snowfall 6s linear infinite;
  animation-delay: -3s;
}
.snowflake:nth-child(21) {
  --size: 0.6vw;
  --left-ini: 4vw;
  --left-end: -6vw;
  left: 67vw;
  animation: snowfall 12s linear infinite;
  animation-delay: -10s;
}
.snowflake:nth-child(22) {
  --size: 1vw;
  --left-ini: -9vw;
  --left-end: 3vw;
  left: 89vw;
  animation: snowfall 9s linear infinite;
  animation-delay: -8s;
}
.snowflake:nth-child(23) {
  --size: 1vw;
  --left-ini: -2vw;
  --left-end: -4vw;
  left: 86vw;
  animation: snowfall 8s linear infinite;
  animation-delay: -10s;
}
.snowflake:nth-child(24) {
  --size: 0.6vw;
  --left-ini: -6vw;
  --left-end: 7vw;
  left: 93vw;
  animation: snowfall 9s linear infinite;
  animation-delay: -4s;
}
.snowflake:nth-child(25) {
  --size: 0.2vw;
  --left-ini: 8vw;
  --left-end: 5vw;
  left: 97vw;
  animation: snowfall 14s linear infinite;
  animation-delay: -8s;
}
.snowflake:nth-child(26) {
  --size: 0.8vw;
  --left-ini: -7vw;
  --left-end: 6vw;
  left: 21vw;
  animation: snowfall 8s linear infinite;
  animation-delay: -7s;
}
.snowflake:nth-child(27) {
  --size: 0.2vw;
  --left-ini: 6vw;
  --left-end: -3vw;
  left: 9vw;
  animation: snowfall 14s linear infinite;
  animation-delay: -6s;
}
.snowflake:nth-child(28) {
  --size: 0.6vw;
  --left-ini: -9vw;
  --left-end: 4vw;
  left: 90vw;
  animation: snowfall 12s linear infinite;
  animation-delay: -7s;
}
.snowflake:nth-child(29) {
  --size: 1vw;
  --left-ini: -1vw;
  --left-end: -4vw;
  left: 36vw;
  animation: snowfall 13s linear infinite;
  animation-delay: -6s;
}
.snowflake:nth-child(30) {
  --size: 0.2vw;
  --left-ini: 6vw;
  --left-end: -5vw;
  left: 4vw;
  animation: snowfall 15s linear infinite;
  animation-delay: -6s;
}
.snowflake:nth-child(31) {
  --size: 0.8vw;
  --left-ini: -6vw;
  --left-end: -5vw;
  left: 31vw;
  animation: snowfall 10s linear infinite;
  animation-delay: -6s;
}
.snowflake:nth-child(32) {
  --size: 0.8vw;
  --left-ini: 9vw;
  --left-end: -6vw;
  left: 13vw;
  animation: snowfall 7s linear infinite;
  animation-delay: -3s;
}
.snowflake:nth-child(33) {
  --size: 0.2vw;
  --left-ini: 9vw;
  --left-end: 5vw;
  left: 87vw;
  animation: snowfall 15s linear infinite;
  animation-delay: -2s;
}
.snowflake:nth-child(34) {
  --size: 1vw;
  --left-ini: 0vw;
  --left-end: -5vw;
  left: 79vw;
  animation: snowfall 13s linear infinite;
  animation-delay: -7s;
}
.snowflake:nth-child(35) {
  --size: 0.8vw;
  --left-ini: -4vw;
  --left-end: 4vw;
  left: 9vw;
  animation: snowfall 9s linear infinite;
  animation-delay: -5s;
}
.snowflake:nth-child(36) {
  --size: 0.6vw;
  --left-ini: 8vw;
  --left-end: 10vw;
  left: 43vw;
  animation: snowfall 9s linear infinite;
  animation-delay: -7s;
}
.snowflake:nth-child(37) {
  --size: 0.8vw;
  --left-ini: 2vw;
  --left-end: -3vw;
  left: 99vw;
  animation: snowfall 11s linear infinite;
  animation-delay: -5s;
}
.snowflake:nth-child(38) {
  --size: 0.6vw;
  --left-ini: 5vw;
  --left-end: -7vw;
  left: 29vw;
  animation: snowfall 13s linear infinite;
  animation-delay: -6s;
}
.snowflake:nth-child(39) {
  --size: 0.4vw;
  --left-ini: 5vw;
  --left-end: -5vw;
  left: 82vw;
  animation: snowfall 6s linear infinite;
  animation-delay: -10s;
}
.snowflake:nth-child(40) {
  --size: 0.6vw;
  --left-ini: 3vw;
  --left-end: -6vw;
  left: 54vw;
  animation: snowfall 7s linear infinite;
  animation-delay: -5s;
}
.snowflake:nth-child(41) {
  --size: 0.4vw;
  --left-ini: -3vw;
  --left-end: -1vw;
  left: 7vw;
  animation: snowfall 9s linear infinite;
  animation-delay: -9s;
}
.snowflake:nth-child(42) {
  --size: 0.6vw;
  --left-ini: 9vw;
  --left-end: 9vw;
  left: 83vw;
  animation: snowfall 10s linear infinite;
  animation-delay: -9s;
}
.snowflake:nth-child(43) {
  --size: 0.6vw;
  --left-ini: 2vw;
  --left-end: -6vw;
  left: 81vw;
  animation: snowfall 13s linear infinite;
  animation-delay: -10s;
}
.snowflake:nth-child(44) {
  --size: 0.8vw;
  --left-ini: 1vw;
  --left-end: -3vw;
  left: 67vw;
  animation: snowfall 15s linear infinite;
  animation-delay: -1s;
}
.snowflake:nth-child(45) {
  --size: 0.8vw;
  --left-ini: 6vw;
  --left-end: -7vw;
  left: 35vw;
  animation: snowfall 14s linear infinite;
  animation-delay: -1s;
}
.snowflake:nth-child(46) {
  --size: 0.2vw;
  --left-ini: -1vw;
  --left-end: -7vw;
  left: 26vw;
  animation: snowfall 8s linear infinite;
  animation-delay: -2s;
}
.snowflake:nth-child(47) {
  --size: 0.8vw;
  --left-ini: 3vw;
  --left-end: -3vw;
  left: 86vw;
  animation: snowfall 10s linear infinite;
  animation-delay: -1s;
}
.snowflake:nth-child(48) {
  --size: 0.6vw;
  --left-ini: -9vw;
  --left-end: -9vw;
  left: 18vw;
  animation: snowfall 15s linear infinite;
  animation-delay: -6s;
}
.snowflake:nth-child(49) {
  --size: 0.8vw;
  --left-ini: -9vw;
  --left-end: 6vw;
  left: 34vw;
  animation: snowfall 6s linear infinite;
  animation-delay: -4s;
}
.snowflake:nth-child(50) {
  --size: 0.8vw;
  --left-ini: 10vw;
  --left-end: 6vw;
  left: 25vw;
  animation: snowfall 13s linear infinite;
  animation-delay: -4s;
}
/* added small blur every 6 snowflakes*/
.snowflake:nth-child(6n) {
  filter: blur(1px);
}
</style>
