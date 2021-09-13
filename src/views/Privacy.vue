<template>
  <v-container
    class="pa-0 d-flex flex-column align-center"
    fill
    style="width: 100%"
  >
    <Header />
    <InfoPrivacy />
  </v-container>
</template>

<script>
import Header from "../components/Privacy/Header.vue";
import InfoPrivacy from "../components/Privacy/InfoPrivacy.vue";

export default {
  components: { Header, InfoPrivacy },
};
</script>

<style></style>
