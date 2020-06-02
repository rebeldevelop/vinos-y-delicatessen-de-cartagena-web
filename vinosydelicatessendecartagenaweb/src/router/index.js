import Vue from 'vue'
import Router from 'vue-router'
import BasicSendMail from '@/components/BasicSendMail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BasicSendMail',
      component: BasicSendMail
    }
  ]
})
