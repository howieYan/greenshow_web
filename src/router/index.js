import Vue from 'vue'
import Router from 'vue-router'
import Event from '@/components/Event'
import Home from '@/components/Home'
import Team from '@/components/Team'
import TeamInfo from '@/components/TeamInfo'
import Notice from '@/components/Notice'
import Notices from '@/components/Notices'
import Agenda from '@/components/Agenda'
import Statute from '@/components/Statute'
import TeamPlayer from '@/components/TeamPlayer'
import Seniority from '@/components/Seniority'
import History from '@/components/History'
import Histories from '@/components/Histories'
import Honor from '@/components/Honor'
import Honors from '@/components/Honors'
import Photo from '@/components/Photo'
import Photos from '@/components/Photos'
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
      name: 'Notices',
      component: Notices
    },
    {
      path: '/notice/:id',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: Agenda
    },
    {
      path: '/statute/:id',
      name: 'Statute',
      component: Statute
    },
    {
      path: '/teamPlayer',
      name: 'TeamPlayer',
      component: TeamPlayer
    },
    {
      path: '/Seniority',
      name: 'Seniority',
      component: Seniority
    },
    {
      path: '/history',
      name: 'Histories',
      component: Histories
    },
    {
      path: '/history/:id',
      name: 'History',
      component: History
    },
    {
      path: '/honor',
      name: 'Honors',
      component: Honors
    },
    {
      path: '/honor/:id',
      name: 'Honor',
      component: Honor
    },
    {
      path: '/photo',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/photo/:id',
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
