<template>
  <div class="project">
    <div class="project__info">
      <h2 class="project__name">{{ name }}</h2>
      <p class="project__description">{{ $t(`projects.${name}`) }}</p>
      <div class="project__buttons">
        <Button class="project__button" v-for="link in links" :text="$t(`projects.${link['text']}`)" :link="link['link']" :logo="link['logo']" />
      </div>
    </div>
    <div class="project__image">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/common/Button.vue'
export default {
  components: {
    Button
  },
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    links: {
      type: Array,
    }
  },
}
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: row;
  background: var(--background-transparent-color2);
  border-radius: 15px;
  min-height: 10rem;
  padding: 10px 15px;
  justify-content: space-between;
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__name {
    font-size: 24px;
    margin: 0 0 10px;
    color: var(--font-color-orange);
  }
  &__description {
    margin: 0 0 10px;
  }
  &__buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
  }
}
img {
  width: 50px;
}
</style>