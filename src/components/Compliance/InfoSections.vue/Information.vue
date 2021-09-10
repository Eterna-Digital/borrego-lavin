<template>
  <v-card
    color="#F7F7F7"
    elevation="0"
    class="cont-pc d-flex flex-column align-center"
  >
    <div class="txt-header-c d-flex justify-center">
      <p>
        La figura de la responsabilidad penal de las empresas cobró vigencia en
        nuestro país de la mano del nuevo sistema de justicia penal. Por tal
        motivo, los profesionistas de la materia penal tuvieron que actualizarse
        para hacer frente a la misma
      </p>
    </div>
    <v-card
      color="#F7F7F7"
      class=" d-flex flex-column align-center"
      elevation="0"
    >
      <v-card elevation="0" width="100%">
        <OneSec />
      </v-card>
      <v-card
        color="#F7F7F7"
        elevation="0"
        class="card-b d-flex justify-center mt-16"
      >
        <TwoSec />
      </v-card>
      <v-card elevation="0" width="100%" class="card-w ">
        <ThreeSec />
      </v-card>
      <v-card
        color="#F7F7F7"
        elevation="0"
        class="card-b4 d-flex justify-center "
      >
        <FourSec />
      </v-card>
      <v-card elevation="0" width="100%" class="mt-16">
        <FiveSec />
      </v-card>
      <v-card color="#F7F7F7" elevation="0" class="d-flex justify-center mt-16">
        <SixSec />
      </v-card>
      <v-card
        elevation="0"
        width="100%"
        class="mt-16 mb-15 d-flex justify-center"
      >
        <SevenSec />
      </v-card>
    </v-card>
  </v-card>
</template>

<script>
import OneSec from "../InfoSections.vue/OneSec.vue";
import TwoSec from "../InfoSections.vue/TwoSec.vue";
import ThreeSec from "../InfoSections.vue/ThreeSec.vue";
import FourSec from "../InfoSections.vue/FourSec.vue";
import FiveSec from "../InfoSections.vue/FiveSec.vue";
import SixSec from "../InfoSections.vue/SixSec.vue";
import SevenSec from "../InfoSections.vue/SevenSec.vue";

export default {
  components: {
    OneSec,
    TwoSec,
    ThreeSec,
    FourSec,
    FiveSec,
    SixSec,
    SevenSec,
  },
};
</script>

<style>
.card-w {
  margin-top: 10%;
}
.card-b4 {
  margin: 5% 0 5% 0;
}
.cont-pc {
  width: 100%;
}
.txt-header-c {
  margin: 4% 0 10% 0;
  width: 70%;
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .cont-pc {
    width: 100%;
    margin-top: 5%;
  }
  .txt-header-c {
    margin: 4% 0 20% 0;
    width: 90%;
    font-family: "Abhaya Libre", serif;
    font-size: 18px;
  }
  .txt-header-c p {
    font-size: 15px;
    text-align: justify;
  }
  .card-b4 {
    margin: 15% 0 0% 0;
  }
  .card-w {
    margin-top: 15%;
  }
}
</style>
