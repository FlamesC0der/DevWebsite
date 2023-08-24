<template>
    <section class="home">
        <div class="top">
            <img class="top__logo" src="@/assets/avatar.jpg" />
            <h1 class="top__title title">FlamesCoder</h1>
            {{ time.toLocaleTimeString() }}
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            time: new Date()
        }
    },
    methods: {
        timer() {
            setInterval(() => {
                this.time = new Date()
            }, 1000)
        },
    },
    beforeMount() {
        this.timer()
    }
}
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    justify-content: center;
    margin: 2rem 0;
}
.top {
    display: flex;
    padding: 20px;
    margin: 10px auto;
    flex-direction: column;
    align-items: center;
    background: var(--background-transparent-color1);
    backdrop-filter: blur(5px);
    border: 2px solid var(--border-color-light1);
    border-radius: 15px;
    width: 100%;
    max-width: 40rem;
    gap: 5px;
    &__logo {
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }
    &__icon {
        width: 35px;
    }
}
</style>