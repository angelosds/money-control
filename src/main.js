import Vue from 'vue'
import App from './App.vue'

import router from './router'

import '../node_modules/normalize.css/normalize.css';

// Vue configuration
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
