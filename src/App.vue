<template>
  <div id="app" :class="{dark: !light}">
    <button @click="light = !light" class="theme">Сменить тему</button>
    <WeatherBlock :main="info" />
    {{ status }}
  </div>
</template>

<script>
import WeatherBlock from './components/weather-block.vue';

export default {
  name: 'Home',
  components: {
    WeatherBlock,
  },
  data: () => ({
    light: true,
    info: null,
    status: '',
  }),
  created() {
    if (!navigator.geolocation) {
      this.status = 'Разрешите доступ к геопозиции';
    } else {
      this.status = 'Определяю...';
      navigator.geolocation.getCurrentPosition((position) => {
        this.status = '';
        this.getWeather(position.coords.latitude, position.coords.longitude);
      }, () => {
        this.status = 'Разрешите доступ к геопозиции';
      });
    }
  },
  methods: {
    getWeather(lat, long) {
      this.$axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=ru&appid=d0e89fc89523134758ba52e2afdb6674`)
        .then((res) => {
          this.info = res.data;
        });
    },
  },
};
</script>

<style lang="scss">
@import 'assets/styles/reset.scss';

#app {
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  color: #2c3e50;
  align-items: center;
  height: 100vh;

  .theme {
    position: fixed;
    top: 50px;
    right: 200px;
  }

  &.dark {
    background-color: #2c3e50;
  }

}

</style>
