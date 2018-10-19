// Opzet van dit document is afkomstig van deze youtube tutorial; https://www.youtube.com/watch?v=78tNYZUS-ps

import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router'

Vue.use(VeeValidate)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
