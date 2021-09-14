<template>
  <v-container
    class="pa-0 d-flex flex-column align-center"
    fill
    style="width: 100%"
  >
    <Header />
    <v-card width="100vw" color="#F7F7F7" elevation="0">
      <div class="d-flex flex-column align-center mt-14 mb-14">
        <h3 class="h-q mb-4">contacto@borregolavinabogados.com</h3>
        <h5 class="h-q font-weight-light mb-4">
          AMATLÁN 40 BIS, CONDESA<br />
          CUAUHTÉMOC, CDMX CP 06140
        </h5>
        <div class="map mt-10"></div>
      </div>
    </v-card>
    <Form />
  </v-container>
</template>

<script>
import Header from "../components/Contact/Header.vue";
import Form from "../components/Contact/Form.vue";

export default {
  components: { Header, Form },
};
</script>

<style>
.map {
  width: 70vw;
  height: 60vh;
  background-image: url("../assets/map.png");
  background-size: 100%;
  background-position: center;
}
</style>
