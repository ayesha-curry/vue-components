import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 组件模块
import HomePage from '@/components/HelloWorld'
import Pagination from '@/components/Pagination'

export default new Router({
  routes: [
    {
        path: '/',
        name: '分页组件',
        component: HomePage
    },
    {
      path: '/pagination',
      name: '分页组件',
      component: Pagination
    }
  ]
})
