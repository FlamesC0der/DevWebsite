<script setup>
import {computed, defineAsyncComponent} from 'vue';

const props = defineProps({
  name: String,
  size: String
})

function getIcon(splitName) {
  switch (splitName.length) {
    case 1:
      return defineAsyncComponent(() => import(`../../assets/icons/${splitName[0]}.svg`))
    case 2:
      return defineAsyncComponent(() => import(`../../assets/icons/${splitName[0]}/${splitName[1]}.svg`))
    case 3:
      return defineAsyncComponent(() => import(`../../assets/icons/${splitName[0]}/${splitName[1]}/${splitName[2]}.svg`))
  }
}

const icon = computed(() => {
  const splitName = props.name.split('/')
  return getIcon(splitName)
})
</script>

<template>
  <component
      :is="icon"
      :width="size"
      :height="size"
  />
</template>

<style lang="scss" scoped>
</style>
