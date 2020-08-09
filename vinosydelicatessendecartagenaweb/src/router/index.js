import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import MensajeEnviado from '@/components/MensajeEnviado'
import AdminPage from '@/components/AdminPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/MensajeEnviado',
      name: 'MensajeEnviado',
      component: MensajeEnviado
    },
    {
      path: '/AdminPage',
      name: 'AdminPage',
      component: AdminPage
    }
  ]
})
