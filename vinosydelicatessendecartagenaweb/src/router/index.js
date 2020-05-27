import Vue from 'vue'
import Router from 'vue-router'
import ScrollPrueba from '@/components/ScrollPrueba'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScrollPrueba',
      component: ScrollPrueba
    }
  ]
})
