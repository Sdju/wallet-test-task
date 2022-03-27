import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Core from './scripts/core';
import EventBus from './scripts/plugins/event-bus';
import TradeApi from './scripts/plugins/trade-api';
import './global.css';

Vue.config.productionTip = false;

const core = Core.instance;
core.use(new EventBus());
core.use(new TradeApi());
Vue.use(core.vuePlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
