<script setup>
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
    <a class="button__link" :href="link" target="_blank">
      <i :class="logo"></i>
      {{ text }}
    </a>
  </button>
</template>

<style lang="scss" scoped>
i {
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