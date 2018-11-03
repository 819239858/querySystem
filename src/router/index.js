import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/mainPage'
import Login from '@/components/login'
import OnlineStatus from '@/components/content/onlineStatus'
import QueryEvent from '@/components/content/queryEvent'
import Index from '@/components/content/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage,
      children:[
        {
          path:'/',
          component:Index
        },
        {
          path:'/onlineStatus',
          component:OnlineStatus
        },
        {
          path:'/queryEvent',
          component:QueryEvent
        }
      ]
    },
    {
      path: '/login',
      component: Login,
    }
  ]
})
