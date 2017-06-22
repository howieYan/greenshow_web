import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Event from '@/components/Event'
import TeamInfo from '@/components/TeamInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/event'
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/teaminfo',
      name: 'TeamInfo',
      component: TeamInfo
    }
  ]
})
