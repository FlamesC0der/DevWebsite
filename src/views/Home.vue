<template>
    <section class="home">
        <div class="top">
            <img class="top__logo" src="@/assets/avatar.jpg" />
            <h1 class="top__title title">FlamesCoder</h1>
            {{ time.toLocaleTimeString() }}
            <Transition name="slide" mode="out-in">
                <div v-if="weather" class="top__weather" :key="weather">
                    <span class="top__location">{{ weather['data']['location']['name'] }}</span>
                    <span class="top__temperature">{{ weather['data']['current']['temp_c'] }}°C</span>
                    <img class="top__icon" :src="weather['data']['current']['condition']['icon']" :title="weather['data']['current']['condition']['text']" />
                </div>
            </Transition>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            time: new Date(),
            weather: null,
            current_location: 0
        }
    },
    methods: {
        timer() {
            setInterval(() => {
                this.time = new Date()
            }, 1000)
        },
        async changeWeather() {
            const locations = ["Arkhangelsk", "Moscow", "Tokyo"]
            const weather = await axios
                .get(`http://api.weatherapi.com/v1/current.json?key=001f3c7627bf49e7a81205836232208&q=${locations[this.current_location]}&aqi=no`)
                .then((response) => {
                    return response
                })
            this.weather = weather
            this.current_location++
            if (this.current_location === locations.length) {
                this.current_location = 0
            }
        }
    },
    beforeMount() {
        this.timer()
        this.changeWeather()
        setInterval(this.changeWeather, 30000)
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
    &__weather {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
    }
    &__location {
        color: var(--font-color-orange);
    }
    &__temperature {
        color: var(--font-color-green);
    }
}
.slide-enter-active,
.slide-leave-active {
    transition: all 0.6s cubic-bezier(.42,.97,.52,1.49);
}
.slide-enter-from {
    transform: translateX(-100px);
    opacity: 0;
}
.slide-leave-to {
    transform: translateX(100px);
    opacity: 0;
}
</style>