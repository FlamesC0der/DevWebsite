<template>
  <Markdown class="markdown-body" :source="readmetext" :html="true" />
</template>

<script>
import Markdown from 'vue3-markdown-it';

export default {
  async setup(props) {
    const readmetext = await fetch(props.source)
      .then((res) => res.text())
      .then((text) => {
        return text
      })
      .catch((e) => console.error(e));
    return{ readmetext }
  },
  props: {
    source: {
      type: String
    }
  },
  components: {
    Markdown
  },
}
</script>

<style lang="scss">
@import url(github-markdown-css/github-markdown-dark.css);
</style>