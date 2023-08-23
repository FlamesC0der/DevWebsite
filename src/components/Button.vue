<template>
  <button class="button">
    <a class="button__link" :href="link">
      <i :class="logo"></i>
      {{ text }}
    </a>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    link: {
      type: String,
    },
    logo: {
      type: String,
    }
  },
}
</script>

<style lang="scss" scoped>
i {
  font-size: 25px;
}
.button {
  background: var(--background-color3);
  border-radius: 10px;
  font-size: 1.25rem;
  user-select: none;
  &__link {
    display: flex;
    justify-content: center;
    gap: 8px;
    color: var(--text-color1);
    padding: 10px 20px;
    align-items: center;
  }
}
</style>