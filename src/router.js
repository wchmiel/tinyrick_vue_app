import Vue from 'vue'
import Router from 'vue-router'
import EpisodeDetails from './views/EpisodeDetails.vue'
import EpisodeView from './views/EpisodeView.vue';

//import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'EpisodeView',
      component: EpisodeView
    },
    {
      path: '/episode/:id',
      props: true,
      name: 'EpisodeDetails',
      component: EpisodeDetails
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
