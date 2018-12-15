import Vue from 'vue'
import Router from 'vue-router'
import EpisodeDetails from './views/EpisodeDetails.vue'
import EpisodeView from './views/EpisodeView.vue';

Vue.use(Router);

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
  ]
})
