import Vue from 'vue'
import Router from 'vue-router'
import HeroWrapper from '@/components/HeroWrapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HeroWrapper',
      component: HeroWrapper
    }
  ]
})
