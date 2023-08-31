<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Tr from "@/i18n/translation"
import CountryFlag from 'vue-country-flag-next'

let open = ref(false)
const langs = [
    {lang: "ru", text: "Русский", country: "ru"},
    {lang: "en", text: "English", country: "gb"},
    {lang: "ja", text: "日本語", country: "jp"},
]
const { locale } = useI18n()
const supportedLocales = Tr.supportedLocales

function switchLanguage(i) {
    Tr.switchLanguage(supportedLocales[i]);
    open.value = false;
}
</script>

<template>
    <div class="switchLanguage" tabindex="-1" @blur="open = false">
        <div class="switchLanguage__selected" :class="{open: open}" @click="open = !open">
            <i class="icon bi-globe"></i>{{ langs.find(x => x.lang === locale).text }}<i class="icon arrow bi-chevron-down"></i>
        </div>
        <div class="switchLanguage__items" :class="{selectHide: !open}">
            <div v-for="(option, i) of supportedLocales" :key="i" @click="switchLanguage(i)">
                <country-flag :country="langs.find(x => x.lang === option).country" size='normal'/>{{ langs.find(x => x.lang === option).text }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.switchLanguage {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    margin-left: auto;
    border-radius: 5px;
    min-width: 110px;
    max-height: 44px;
    &__selected {
        display: flex;
        cursor: pointer;
        user-select: none;
        width: 100%;
        justify-content: space-around;
    }
    &__items {
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
        div {
            display: flex;
            cursor: pointer;
            user-select: none;
            justify-content: space-between;
            padding: 0 5px;
        }
    }
}
.icon {
    font-size: 20px;
}
.arrow {
    -webkit-text-stroke: 1px;
    transition: transform .3s;
}
.open .arrow {
    transform: rotate(180deg);
}
.selectHide {
    display: none;
}
</style>