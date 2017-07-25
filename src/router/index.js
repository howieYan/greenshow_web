import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
// import HistoryForm from '@/components/HistoryForm'

import * as lib from '../lib'
import api from '../api'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    }
    // {
    //   path: '/HistoryForm',
    //   name: 'HistoryForm',
    //   component: HistoryForm
    // }
  ]
})

router.beforeEach((to, from, next) => {
  lib.debug && console.debug(`OPEN: ${from.name}(${from.path}) -> ${to.name}(${to.path}) %o`, to)
  console.time('route')

  if (to.query && to.query.token) {
    api.setToken(to.query.token)
  }

  next()
})

export default router
