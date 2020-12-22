import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import store from './store';

const base = axios.create({
    // baseURL: 'https://fierce-scrubland-23566.herokuapp.com'
  baseURL : 'https://radiant-shore-56700.herokuapp.com'
})

Vue.prototype.$http = base;

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
