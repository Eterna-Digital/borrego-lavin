<template>
  <div class="d-flex flex-column justify-center align-center mt-10">
    <v-card class="cont-info mt-16" elevation="0" color="#F7F7F7">
      <v-container fluid grid-list-md wrap>
        <v-layout column wrap>
          <v-flex d-flex xs12 sm12 md12>
            <One />
          </v-flex>
          <v-flex d-flex xs12 sm12 md12>
            <Two />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card
      tile
      elevation="0"
      class="card mt-16 pt-16 d-flex justify-center align-center"
      width="100%"
    >
      <div class="beige d-flex justify-center">
        <Three />
      </div>
    </v-card>
  </div>
</template>

<script>
import One from "../components/Home/InfoSections/One.vue";
import Two from "../components/Home/InfoSections/Two.vue";
import Three from "../components/Home/InfoSections/Three.vue";

export default {
  name: "Information",
  components: {
    One,
    Two,
    Three,
  },
};
</script>

<style scoped>
.beige {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  background-image: url("../assets/beige.png");
  background-size: 100% 50%;
  background-position-y: bottom;
  overflow: hidden;
}
.cont-info{
  width: 75%;
}
@media screen and (max-width: 768px) {
  .cont-info{
    width: 100%;
    background-color: gold;
  }
}
</style>
