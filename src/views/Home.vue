<script setup>
import { ref, onBeforeMount } from 'vue'

const countDownDate = new Date('2024-01-01T00:00:00')
let time = ref(new Date())
let countdownValue = ref({
  days: "-",
  hours: "-",
  minutes: "-",
  seconds: "-"
})

function timer() {
  setInterval(() => {
    time.value = new Date()
  }, 1000)
}

function countdown() {
  const countdownInterval = setInterval(function() {
    let now = new Date().getTime();
    var distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance > 0) {
      countdownValue = {
        days: days + "d",
        hours: hours + "h",
        minutes: minutes + "m",
        seconds: seconds + "s"
      }
    } else {
      clearInterval(countdownInterval)
    }
  })
}

onBeforeMount(() => {
  timer()
  countdown()
})
</script>

<template>
  <section class="home">
    <div class="home__top">
      <img class="home__logo" src="@/assets/avatar.jpg" />
      <h1 class="title">FlamesCoder</h1>
      {{ time.toLocaleTimeString() }}
    </div>
    <!-- <div class="countdown">
      <p class="countdown__title">{{ $t("home.countdown") }}</p>
      <div class="countdown__time">
        <div v-for="value in countdownValue" class="countdown__value">
          <Transition name="countdown-transition" mode="out-in">
            <p :key="value">{{ value }}</p>
          </Transition>
        </div>
      </div>
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
  gap: 5px;
  &__top {
    display: flex;
    padding: 20px;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    background: var(--background-transparent-color1);
    backdrop-filter: blur(5px);
    border: 2px solid var(--border-color-light1);
    border-radius: 15px;
    width: 100%;
    max-width: 40rem;
    gap: 5px;
  }
  &__logo {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
}
.countdown {
  display: flex;
  padding: 20px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  background: var(--background-transparent-color1);
  backdrop-filter: blur(5px);
  border: 2px solid var(--border-color-light1);
  border-radius: 15px;
  width: 100%;
  max-width: 40rem;
  gap: 10px;
  &__title {
    font-size: 20px;
    color: #893dcf;
  }
  &__time {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  &__value {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    background: #285dcf69;
    border-radius: 10px;
    font-size: 18px;
  }
}
.countdown-transition-enter-active,
.countdown-transition-leave-active {
  transition: all 0.3s cubic-bezier(.42,.97,.52,1.49);
}
.countdown-transition-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.countdown-transition-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
