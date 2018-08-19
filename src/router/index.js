import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import etfs from '@/components/etfs'
import etf from '@/components/etf'
import replicate from '@/components/replicate'

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
      name: 'etfs',
      component: etfs
    },
    {
      path: '/etf/:id',
      name: 'etf',
      component: etf
    },
    {
      path: '/etf/:id/replicate',
      name: 'replicate',
      component: replicate
    }
  ]
})
