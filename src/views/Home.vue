<script setup>
import { ref, onBeforeMount } from 'vue'

let time = ref(new Date())

function timer() {
  setInterval(() => {
    time.value = new Date()
  }, 1000)
}

onBeforeMount(() => {
    timer()
})
</script>

<template>
  <section class="home">
    <div class="home__top">
      <img class="home__logo" src="@/assets/avatar.jpg" />
      <h1 class="title">FlamesCoder</h1>
      {{ time.toLocaleTimeString() }}
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
  gap: 5px;
  &__top {
    display: flex;
    padding: 20px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    background: var(--background-transparent-color1);
    backdrop-filter: blur(5px);
    border: 2px solid var(--border-color-light1);
    border-radius: 15px;
    width: 100%;
    max-width: 40rem;
    gap: 5px;
  }
  &__logo {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
}
</style>
