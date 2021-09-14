import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from "./router/index"
import VuePageTransition from 'vue-page-transition'
import * as VueGoogleMaps from "vue2-google-maps";
import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false,
Vue.use(VueGeolocation)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCvn2uiySAo-uKtKma8ubBc_bmaVJBBhf8',
  },
});

new Vue({
  vuetify,
  store,
  router,
  VuePageTransition,
  VueGeolocation,
  VueGoogleMaps,
  render: h => h(App)
}).$mount('#app')
