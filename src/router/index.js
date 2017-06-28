import Vue from 'vue'
import Router from 'vue-router'
import Event from '@/components/Event'
import Home from '@/components/Home'
import Team from '@/components/Team'
import TeamInfo from '@/components/TeamInfo'

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
      path: '/event',
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
    }
  ]
})
