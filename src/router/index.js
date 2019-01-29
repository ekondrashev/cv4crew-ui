import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import StepOne from '@/StepOne'
// import App from '@/App'
import StepTwo from '@/StepTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/',
      // name: 'Hello',
      // component: Hello
    },
    {
      path: '/',
      name: 'demo',
      component: StepOne
    }
    // ,
    // {
    //   path: '/demo/',
    //   name: 'demo',
    //   component: StepTwo
    // }
  ]
})
