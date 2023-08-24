<template>
    <div class="switchLanguage" tabindex="-1" @blur="open = false">
        <div class="selected" :class="{open: open}" @click="open = !open">
            <country-flag :country="this.langs.find(x => x.lang === locale).country" size='normal'/>{{ this.langs.find(x => x.lang === locale).text }}<i :class="[open ? 'bi-chevron-up' : 'bi-chevron-down']"></i>
        </div>
        <div class="items" :class="{selectHide: !open}">
            <div v-for="(option, i) of supportedLocales" :key="i" @click="switchLanguage(i)">
                <country-flag :country="this.langs.find(x => x.lang === option).country" size='normal'/>{{ this.langs.find(x => x.lang === option).text }}
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useStore } from "vuex";
import { computed } from 'vue';
import Tr from "@/i18n/translation"
import CountryFlag from 'vue-country-flag-next'
export default {
    data() {
        return {
            open: false,
            selected: null
        }
    },
    setup() {
        const { t, locale } = useI18n()

        const supportedLocales = Tr.supportedLocales

        const store = useStore();

        const langs = computed(function() {
            return store.getters.langs
        })

        return {langs, locale, supportedLocales}
    },
    methods: {
        switchLanguage(i) {
            Tr.switchLanguage(this.supportedLocales[i]);
            this.open = false;
        }
    },
    components: {
        CountryFlag
    }
}
</script>

<style scoped>
.switchLanguage {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    margin-left: auto;
    border: 1px solid var(--border-color-light1);
    border-radius: 5px;
    min-width: 110px;
    max-height: 44px;
}
i {
    font-size: 20px;
}
.selected {
    display: flex;
    cursor: pointer;
    user-select: none;
    width: 100%;
    justify-content: space-around;
}
.items {
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    left: 0;
    right: 0;
    top: 42px;
    width: 100%;
    z-index: 1;
    background: var(--border-color-light1);
    backdrop-filter: blur(5px);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: var(--background-transparent-color3);
    border: 2px solid var(--border-color-light1);
}
.items div {
    display: flex;
    cursor: pointer;
    user-select: none;
    justify-content: space-between;
    padding: 0 5px;
}
.selectHide {
    display: none;
}
</style>