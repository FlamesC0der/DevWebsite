<template>
    <main>
        <div class="projects">
            <Project :name="project.name" :image="`src/assets/projects/${project.name}.png`" :links="project.links" v-for="project in projects"></Project>
            <Button class="projects__more" :text="this.$t(`projects.more`)" link="https://github.com/FlamesC0der" logo="bi-github" />
        </div>
    </main>
</template>

<script>
import Project from '@/components/Project.vue'
import Button from '@/components/common/Button.vue'
export default {
    data() {
        return {
            projects: [
                {
                    name: 'discord-bot-template',
                    links: [
                        {text: 'source', link: 'https://github.com/FlamesC0der/discord-bot-template', logo: 'bi-github'},
                    ],
                },
            ],
        }
    },
    components: {
        Project,
        Button
    }
}
</script>

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