/**
 * Global router configuration
 */

import Vue from 'vue'
import VueRouter from 'vue-router';

import Home from './pages/home'
import Balance from './pages/balance'
import Cards from './pages/cards'
import Account from './pages/account'
import Settings from './pages/settings'

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

export default new VueRouter({
  mode: 'history',
  linkActiveClass: '-active',
  routes
})
