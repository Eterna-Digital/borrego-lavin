import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueRouter,
  store,
  render: h => h(App)
}).$mount('#app')
