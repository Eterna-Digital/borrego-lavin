<template>
  <v-container
    class="cont-one d-flex justify-center ma-0 pa-0"
    fluid
    grid-list-md
    wrap
  >
    <v-layout row wrap d-flex justify-center>
      <v-flex d-flex flex-column justify-center xs12 sm12 md6>
        <h3 class="mb-4">BORREGO LAVÍN</h3>
        <h4 class="sub-txt-one font-weight-bold mb-4 mt-5">
          Protección de los intereses de <br />
          nuestros clientes
        </h4>
        <p class="txt-info-one ma-0 mt-5 mb-10">
          A partir del estudio, análisis, estrategia o litigación, según
          corresponda a cada caso particular, ofrecemos soluciones encaminadas a
          la protección de los intereses de nuestros clientes, ya sea para hacer
          frente a un procedimiento penal o fuera del mismo.
        </p>
      </v-flex>
      <v-flex class="flex2-1" d-flex flex-column xs12 sm12 md6>
        <div class="cont-i-h">
          <div class="img-h"></div>
        </div>
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
.cont-one {
  margin-left: 2rem;
}
h3 {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
}
.sub-txt-one {
  font-family: "Abhaya Libre", serif;
  font-size: 18px;
}
.txt-info-one {
  padding-right: 2rem;
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-align: justify;
}
.flex2-1 {
  justify-content: end;
}
.cont-i-h {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-i-h .img-h {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/1.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease;
}
.cont-i-h:hover .img-h {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/bn/1B.jpg");
  background-size: 105%;
  background-position: center;
}
@media screen and (max-width: 768px) {
  .flex2-1 {
    height: 30vh;
    justify-content: center;
  }
  h3 {
    padding-left: 1rem;
  }
  .sub-txt-one {
    padding-left: 1rem;
  }
  .txt-info-one {
    padding-right: 1rem;
    font-size: 15px;
    padding-left: 1rem;
    text-align: justify;
  }
  .cont-i-h .img-h {
    transition: none;
  }
  .cont-i-h:hover .img-h {
    background-image: url("../../../assets/1.jpg");
    background-size: 100%;
  }
}
</style>
