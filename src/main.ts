import Vue from 'vue';
import App from './App.vue';
import store from './store/index';

Vue.config.productionTip = false;

const app = new Vue({
  store,
  ...App,
});
app.$mount();
