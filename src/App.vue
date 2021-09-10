<template>
  <v-app id="app" style="background: #F7F7F7">
    <Nav style="position: fixed; z-index: 100" />
    <vue-page-transition>
      <router-view></router-view>
    </vue-page-transition>
    <Footer />
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Nav,
    Footer,
  },
};
</script>
<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  overflow: hidden;
}
#app {
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
