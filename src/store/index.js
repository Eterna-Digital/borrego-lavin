import Vue from "vue";
import Vuex from "vuex";
import carousel from "./carousel"

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    
    modules: {
        carousel
    },
  });
  