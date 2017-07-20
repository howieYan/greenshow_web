import Vue from 'vue'
import Router from 'vue-router'
import Event from '@/components/Event'
import Home from '@/components/Home'
import Team from '@/components/Team'
import TeamInfo from '@/components/TeamInfo'
import Notice from '@/components/Notice'
import Agenda from '@/components/Agenda'
import Statute from '@/components/Statute'
import Player from '@/components/Player'
import Seniority from '@/components/Seniority'
import History from '@/components/History'
import Honor from '@/components/Honor'
import Photo from '@/components/Photo'
import Login from '@/components/Login'
import Share from '@/components/Share'

import * as lib from '../lib'
import api from '../api'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'HomeX',
      component: Home
    },
    {
      path: '/event/:id',
      name: 'Event',
      component: Event
    },
    {
      path: '/team/:id',
      name: 'Team',
      component: Team
    },
    {
      path: '/teaminfo',
      name: 'TeamInfo',
      component: TeamInfo
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/Agenda',
      name: 'Agenda',
      component: Agenda
    },
    {
      path: '/Statute',
      name: 'Statute',
      component: Statute
    },
    {
      path: '/Player',
      name: 'Player',
      component: Player
    },
    {
      path: '/Seniority',
      name: 'Seniority',
      component: Seniority
    },
    {
      path: '/History',
      name: 'History',
      component: History
    },
    {
      path: '/Honor',
      name: 'Honor',
      component: Honor
    },
    {
      path: '/Photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Share',
      name: 'Share',
      component: Share
    }
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
