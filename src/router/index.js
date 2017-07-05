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

Vue.use(Router)

export default new Router({
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
    }
  ]
})
