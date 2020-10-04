import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store';

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
