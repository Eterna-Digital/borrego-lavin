<template>
  <v-app style="background: #F7F7F7">
    <Nav style="position: fixed; z-index: 100" />
    <v-main>
      <router-view></router-view>
      <Container />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import Container from "./views/Container.vue";
import Footer from "./components/Footer.vue"

export default {
  name: "App",

  components: {
    Nav,
    Container,
    Footer
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
</style>
