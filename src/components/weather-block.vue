<template>
  <div>
    <div class="weather-block">
      <div class="weather-block__title">
        <h2>{{ main.name }}</h2>
      </div>
      <div class="weather-block__main">
        <weather-item
          v-for="(item, index) in main.weather"
          :key="index"
          :weather="item"
          :temp="main.main.feels_like.toFixed()"
        />
        <p>{{ main.main.temp.toFixed() }}°</p>
      </div>
      <div v-if="show" class="weather-block__other">
        <p>Влажность воздуха: {{ main.main.humidity }}%</p>
        <p>Давление: {{ main.main.pressure }} мм рт. ст.</p>
        <p>Скорость ветра: {{ main.wind.speed }} м/с</p>
        <p>Максимальная температура: {{ main.main.temp_max.toFixed()  }}°</p>
        <p>Минимальная температура: {{ main.main.temp_min.toFixed()  }}°</p>
      </div>
      <button @click="show = !show">
        <i class="icon_arrow" :class="{'icon_arrow-rotate': show}"></i>
      </button>
    </div>
  </div>
</template>

<script>
import WeatherItem from '@/components/weather-item.vue';

export default {
  name: 'WeatherBlock',
  components: { WeatherItem },
  props: {
    main: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    show: false,
  }),
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
.weather-block {
  font-family: "Montserrat", sans-serif;
  background-color: rgb(241, 244, 245);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 460px;
  align-items: center;

  &__main {
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 100%;
    p {
      font-size: 24px;
    }
  }

  &__other {
    p {
      padding: 5px 0;
    }
  }

  .icon_arrow {
    content: url('~@/assets/icons/arrow.svg');
    height: 30px;
    width: 30px;
    transform: rotate(180deg);

    &:hover {
      cursor: pointer;
    }

    &-rotate {
      transform: rotate(0deg);
    }

  }

  button {
    background-color: transparent;
    height: 50px;
    width: 200px;
    border: none;
    outline: none;
  }

}

</style>
