<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Icon from '@/components/common/Icon.vue'
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
      <Icon class="icon" :name="logo" size="30px"/>
      {{ text }}
    </RouterLink>
  </button>
</template>

<style lang="scss" scoped>
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