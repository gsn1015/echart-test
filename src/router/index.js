import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import VueChart from '@/components/VueChart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/to-do',
      name: 'ToDo',
      component: List
    },
    {
      path: '/vue-chart',
      name: 'VueChart',
      component: VueChart
    }
  ]
})
