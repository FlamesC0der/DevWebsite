<template>
    <section class="home">
        <!-- <img class="logo" src="@/assets/avatar.jpg" /> -->
        <h1 class="title">FlamesCoder</h1>
        Уже {{ time.toLocaleTimeString() }}, а ты ещё не спишь?
        <!-- <img :src="weather['data']['current']['condition']['icon']" /> -->
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            time: new Date()
        }
    },
    async setup() {
        // const weather = await axios
        //     .get('http://api.weatherapi.com/v1/current.json?key=001f3c7627bf49e7a81205836232208&q=Arkhangelsk&aqi=no')
        //     .then((response) => {
        //         return response
        //     })
        // console.log(weather)
        // return {
        //     weather
        // }
    },
    methods: {
        timer() {
            setInterval(() => {
                this.time = new Date()
            }, 1000)
        }
    },
    beforeMount() {
        this.timer()
    }
}
</script>

<style lang="scss" scoped>
</style>