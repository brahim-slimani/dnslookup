import Vue from 'vue'
import Router from 'vue-router'
import MasterContent from '@/components/MasterContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MasterContent',
      component: MasterContent
    }
  ]
})
