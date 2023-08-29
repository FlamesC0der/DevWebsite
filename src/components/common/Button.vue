<script setup>
import { RouterLink, RouterView } from 'vue-router'
const props = defineProps({
  text: {
    type: String,
  },
  link: {
    type: String,
  },
  logo: {
    type: String,
  }
})
</script>

<template>
  <button class="button">
    <RouterLink class="button__link" :to="link">
      <i class="icon" :class="logo"></i>
      {{ text }}
    </RouterLink>
  </button>
</template>

<style lang="scss" scoped>
.icon {
  font-size: 25px;
}
.button {
  background: var(--background-transparent-color2);
  border-radius: 10px;
  font-size: 1.25rem;
  user-select: none;
  &__link {
    display: flex;
    justify-content: center;
    gap: 8px;
    color: var(--font-color-white);
    padding: 10px 20px;
    align-items: center;
  }
}
</style>