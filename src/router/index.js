import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/page/mainPage'
import Login from '@/page/login'
import OnlineStatus from '@/components/allManagement/onlineStatus'
import QueryEvent from '@/components/allManagement/queryEvent'
import Index from '@/page/index'

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
