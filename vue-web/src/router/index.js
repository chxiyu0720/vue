import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/account/login'
import register from '@/components/account/register'
import index from '@/components/index/index'

Vue.use(Router)

var vueRouter= new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})

export default vueRouter;
