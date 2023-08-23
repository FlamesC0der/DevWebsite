<template>
    <main>
        <div class="projects">
            <Project :name="project.name" :image="`/src/assets/projects/${project.name}/logo.png`" :links="project.links" v-for="project in projects"></Project>
            <Button class="projects__more" :text="this.$t(`projects.more`)" link="https://github.com/FlamesC0der" logo="bi-github" />
        </div>
    </main>
</template>

<script>
import {useStore} from "vuex";
import {computed} from 'vue';
import Project from '@/components/Project.vue'
import Button from '@/components/common/Button.vue'
export default {
    setup() {
        const store = useStore();

        let projects = computed(function() {
            return store.getters.projects
        })

        return {
            projects
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
    &__projects__more {
        background: var(--background-transparent-color2);
        border-radius: 15px;
        min-height: 50px;
        padding: 10px 15px;
    }
}
</style>