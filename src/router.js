import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import Risico from './components/Analyse.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/analyse',
      name: 'analyse',
      component: Risico
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
