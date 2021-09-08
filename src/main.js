import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import store from './store'
import router from "./router"

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  vuetify,
  VueRouter,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
