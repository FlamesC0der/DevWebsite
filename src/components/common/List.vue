<script setup>
</script>

<template>
    <slot></slot>
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