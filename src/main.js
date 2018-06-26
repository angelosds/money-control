import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import Home from './pages/home'
import Balance from './pages/balance'
import Cards from './pages/cards'
import Account from './pages/account'
import Settings from './pages/settings'

import '../node_modules/normalize.css/normalize.css';

// Router configuration
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/balance',
    component: Balance
  },
  {
    path: '/cards',
    component: Cards
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/settings',
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// Vue configuration
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
