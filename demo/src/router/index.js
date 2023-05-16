import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line camelcase
import patient_list from '@/components/patient_list'
// eslint-disable-next-line camelcase
import patient_block from '@/components/patient_block'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'patient_list',
      component: patient_list
    },
    {
      path: '/patient_list',
      name: 'patient_block',
      component: patient_block
    }
  ]
})
