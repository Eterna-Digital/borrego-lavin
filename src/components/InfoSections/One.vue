<template>
  <v-container class="d-flex justify-center ma-0 pa-0 ml-12" fluid grid-list-md wrap>
    <v-layout row wrap>
      <v-flex d-flex flex-column justify-start xs12 sm12 md6>
        <h3 class="mb-4">BORREGO LAVÍN</h3>
        <h4 class="sub-txt font-weight-bold mb-4">
          Protección de los intereses de <br />
          nuestros clientes
        </h4>
        <p class="txt-info">
          A partir del estudio, análisis, estrategia o litigación, según <br />
          corresponda a cada caso particular, ofrecemos soluciones <br />
          encaminadas a la protección de los intereses de nuestros <br />
          clientes, ya sea para hacer frente a un procedimiento <br />
          penal o fuera del mismo.
        </p>
      </v-flex>
      <v-flex d-flex justify-end xs12 sm12 md6>
        <img src="../../assets/1.jpg"
        style="width: 95%"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "One",
};
</script>

<style>
h3{
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
}
.sub-txt{
  font-family: 'Abhaya Libre', serif;
  font-size: 18px;
}
.txt-info{
  font-family: 'Abhaya Libre', serif;
  font-size: 13px;
  letter-spacing: 1px;
}
</style>
