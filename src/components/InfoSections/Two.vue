<template>
  <v-card width="100vw" tile elevation="0" class="mt-14">
    <v-container
      class="d-flex justify-center ma-0 pa-0"
      fluid
      grid-list-md
      wrap
    >
      <v-layout row wrap>
        <v-flex class="flex-iff" d-flex justify-start xs12 sm12 md6>
          <div class="cont-i2">
            <div class="img2"></div>
          </div>
        </v-flex>
        <v-flex d-flex flex-column justify-start xs12 sm12 md6>
          <h3 class="h3-one mb-4 mt-16">NUESTRA MANERA DE TRABAJAR</h3>
          <p class="txt-info-2 pb-10 mt-5">
            La representación de los intereses de nuestros
            clientes dentro de los procedimientos penales es de
            la mayor calidad, ya sea actuando como asesores
            jurídicos de la víctima o como defensores del
            imputado.
            Además, en <b>Borrego Lavín Abogados</b> estamos
            capacitados para actuar no sólo como reacción a
            hechos con apariencia de delito sino también a su
            prevención.
            Nuestra meta es brindar una atención completa y
            personalizada con los más altos estándares de
            calidad a cada cliente, sea persona física o
            corporaciones de todas las escalas.
            Es precisamente en la atención a las empresas en
            que podemos implementar protocolos o programas
            internos eficaces para prevenir la comisión de
            algún hecho delictivo en el seno de las mismas,
            evitando así cualquier tipo de responsabilidad
            penal propia de la persona jurídica.
          </p>
        </v-flex>
        <v-flex class="flex-if" d-flex justify-start xs12 sm12 md6>
          <div class="cont-i2">
            <div class="img2"></div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Two",
};
</script>

<style>
.flex-iff {
  display: block !important;
}
.display-if {
  display: none !important;
}
h3 {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
}
.h3-one{
  margin-left: 2rem;
}
.txt-info-2 {
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  letter-spacing: 1px;
  margin-left: 2rem;
  padding-right: 2rem;
}
.cont-i2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-i2 .img2 {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/2.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease;
}
.cont-i2:hover .img2 {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/bn/2B.jpg");
  background-size: 105%;
  background-position: center;
}

@media screen and (max-width: 768px) {
  .flex-if {
    height: 100vh;
    display: none !important;
  }
  .flex-if .cont-i2 {
    display: block;
  }
  .flex-if .cont-i2 .img2 {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/2.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.5s ease;
  }
  .flex-if .cont-i2:hover .img2 {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/bn/2B.jpg");
    background-size: 105%;
    background-position: center;
  }
  .flex-iff {
    display: block !important;
  }
  .flex-iff .cont-i2 {
    display: none;
  }
  .txt-info-2 {
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 15px;
  letter-spacing: 0px;
}
}
</style>
