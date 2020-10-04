<template>
  <div class="weather-item">
    <img :src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`" alt="" />
    <div class="weather-item__content">
      <p>{{ weather.description[0].toUpperCase() + weather.description.slice(1) }}</p>
      <span><small>Ощущается как:</small> {{ temp }}°</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherItem',
  props: {
    weather: {
      type: Object,
      default: () => {},
    },
    temp: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.weather-item {
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;

  &__content {
    p {
      font-weight: bold;
      padding: 5px 0;
    }

    span {
      small {
        font-size: 15px;
        color: rgb(58, 61, 62);
      }
    }

  }

}
</style>
