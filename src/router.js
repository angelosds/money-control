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

import store from './store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/balance',
    component: Balance,
    meta: {
      title: 'Balance'
    }
  },
  {
    path: '/cards',
    component: Cards,
    meta: {
      title: 'Cards'
    }
  },
  {
    path: '/account',
    component: Account,
    meta: {
      title: 'Account'
    }
  },
  {
    path: '/settings',
    component: Settings,
    meta: {
      title: 'Settings'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: '-active',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.hasOwnProperty('title')) {
    store.commit('setTitle', to.meta.title)
  }

  next();
})

export default router
