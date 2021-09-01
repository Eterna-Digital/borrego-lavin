<template>
  <v-app style="background: #F7F7F7">
    <Nav />
    <v-main>
      <Container />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import Container from "./views/Container.vue";

export default {
  name: "App",

  components: {
    Nav,
    Container,
  },
};
</script>
<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
