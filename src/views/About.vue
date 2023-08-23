<template>
    <section class="about">
        <div class="about__profile">
            <img class="about__logo" src="@/assets/avatar.jpg" />
            <h1 class="about__name">FlamesCoder</h1>
        </div>
        <h3 class="about_title title">{{ $t("about.about_me") }}</h3>
        <hr>
        <p><i class="bi-person-circle"></i> {{ $t("about.about_me1") }}</p>
        <p><i class="bi-calendar"></i>  {{ age }} y.o</p>
        <hr>
        <ul class="list">
            <li class="list__item">{{ $t("about.about_me2") }}</li>
            <li class="list__item">{{ $t("about.about_me3") }}</li>
            <li class="list__item">{{ $t("about.about_me4") }}</li>
        </ul>
        <hr>
        <h3 class="about_title title">{{ $t("about.about_web1") }}</h3>
        <p>{{ $t("about.about_web2") }} <img width="15" src="https://github.com/devicons/devicon/raw/master/icons/vuejs/vuejs-original.svg"/></p>
        <p>{{ $t("about.about_web3") }}</p>
        <pre v-highlightjs><code class="json">{{ code }}</code></pre>
    </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from 'vue';
export default {
    data() {
        return {
            code: null,
            age: null
        }
    },
    setup() {
        const store = useStore();

        let code = computed(function() {
            return store.getters.Projectdependencies
        })

        return {
            code
        }
    },
    methods: {
        calculateAge() {
            var ageDifMs = Date.now() - new Date('04/04/2008');
            var ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970)
        }
    },
    beforeMount() {
        this.age = this.calculateAge()
    }
}
</script>

<style lang="scss" scoped>
.about {
    margin-bottom: 1rem;
    color: var(--font-color-green);
    background: var(--background-transparent-color1);
    border-radius: 15px;
    padding: 10px;
    &__profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &__logo {
        width: 200px;
        height: 200px;
        border-radius: 100%;
    }
    &__name {
        font-size: 30px;
        color: var(--font-color-orange);
    }
    &_title {
        margin: 10px 0;
    }
}
p {
    margin: 16px 0;
}
.list {
    padding-left: 40px;
    margin: 14px 0;
    list-style: none;
    &__item {
        line-height: 24px;
        &::before {
            content: "\2022";
            font-weight: bold;
            display: inline-block; 
            width: 1em;
            margin-left: -1em;
        }
    }
}
pre,
code {
    background: var(--background-transparent-color3);
    border-radius: 15px;
}
</style>