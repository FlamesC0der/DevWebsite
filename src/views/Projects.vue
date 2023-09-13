<script setup>
import Project from '@/components/Project.vue'
import Button from '@/components/common/Button.vue'

const projects = [
  {
    name: 'discord-bot-template',
    links: [
      {text: 'source', link: 'projects/discord-bot-template', logo: 'social/github'},
    ],
  },
]
</script>

<template>
  <section class="projects">
    <Project v-for="project in projects" :name="project.name" :image="`/projects/${project.name}.png`" :links="project.links" :key="project.id"></Project>
    <Button class="projects__more" :text="$t(`projects.more`)" link="links/github" logo="social/github"/>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  margin-bottom: 1rem;
  display: grid;
  gap: 1rem;
  background: var(--background-transparent-color1);
  border-radius: 15px;
  padding: 10px;
  backdrop-filter: blur(5px);
  &__projects__more {
    background: var(--background-transparent-color2);
    border-radius: 15px;
    min-height: 50px;
    padding: 10px 15px;
  }
}
</style>