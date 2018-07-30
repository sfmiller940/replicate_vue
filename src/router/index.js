import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import etf from '@/components/etf'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/etf',
      name: 'etf',
      component: etf
    }
  ]
})
