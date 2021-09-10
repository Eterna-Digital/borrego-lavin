import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from "./router/index"
import VuePageTransition from 'vue-page-transition'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  VuePageTransition,
  render: h => h(App)
}).$mount('#app')
