<template>
  <v-container class="pa-0" fill style="width: 100%">
    <Header />
    <Info/>
    <Extradition/>
  </v-container>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Info from "../components/Information.vue"
import Extradition from "../components/Extradition/Extradition.vue"

export default {
  name: "Container",
  components: {
    Header,
    Info,
    Extradition
  },
};
</script>
