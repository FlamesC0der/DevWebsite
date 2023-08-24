<template>
    <section class="links">
        <h2 class="links__title title">{{ $t("links.links_title") }}</h2>
        <hr>
        <Button class="links__button" v-for="button in links" :text="button.text" :link="button.link" :logo="button.logo" />
    </section>
</template>

<script>
import {useStore} from "vuex";
import {computed} from 'vue';
import Button from '@/components/common/Button.vue'
export default {
    setup() {
        const store = useStore();

        let links = computed(function() {
            return store.getters.links
        })

        return {
            links
        }
    },
    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
.links {
    margin-bottom: 1rem;
    background: var(--background-transparent-color1);
    border-radius: 15px;
    padding: 10px;
    backdrop-filter: blur(5px);
    &__title {
        margin: 10px 0;
    }
    &__button {
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        font-size: 2rem;
    }
}
</style>