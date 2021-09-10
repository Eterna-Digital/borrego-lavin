import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Compliance from "../views/Compliance.vue";
import QuienesSomos from "../views/QuienesSomos";
import VuePageTransition from "vue-page-transition";

Vue.use(Router);
Vue.use(VuePageTransition);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { transition: "fade-in-up" },
    },
    {
      path: "/compliance",
      name: "Compliance",
      component: Compliance,
      meta: { transition: "fade-in-up" },
    },
    {
      path: "/quienes-somos",
      name: "QuienesSomos",
      component: QuienesSomos,
      meta: { transition: "fade-in-up" },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
