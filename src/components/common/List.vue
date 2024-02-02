<script setup>
import Icon from '@/components/common/Icon.vue'

const props = defineProps({
  items: Array,
  title: {
    required: false,
    type: String
  }
})
</script>

<template>
  <ul v-if="title" class="list">
    <li class="list__item">{{ title }}</li>
    <ul class="list">
      <li v-for="item in items" class="list__item">
        <Icon v-if="item.icon" class="icon" :name="item.icon"/>
        <p v-if="item.text.type == 'translation'">{{ $t(item.text.text) }}</p>
        <p v-else>{{ item.text.text }}</p></li>
    </ul>
  </ul>
  <ul v-else class="list">
    <li v-for="item in items" class="list__item">
      <Icon v-if="item.icon" class="icon" :name="item.icon"/>
      <p v-if="item.text.type == 'translation'">{{ $t(item.text.text) }}</p>
      <p v-else>{{ item.text.text }}</p></li>
  </ul>
</template>

<style lang="scss">
img {
  width: 20px;
}

.list {
  padding-left: 40px;
  margin: 14px 0;
  list-style: none;

  &__item {
    display: flex;
    gap: 5px;
    margin: 10px 0;
    line-height: 20px;

    &::before {
      content: "\2022";
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
}
</style>