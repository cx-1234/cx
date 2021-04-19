import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Yzm from './views/Yzm.vue'
import Banji from './views/Banji.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/yzm',
      name:'yzm',
      component:Yzm,
      children:[{
        path:'/Banji',
        name:'Banji',
        component:Banji
      }
       
      ]
    },
    {
      path:'/Banji',
      name:'Banji',
      component:Banji
    }
  ],
 
})
