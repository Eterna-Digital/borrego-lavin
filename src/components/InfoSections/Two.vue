<template>
  <v-card width="100vw" tile elevation="0" class="mt-14">
    <v-container
      class="d-flex justify-center ma-0 pa-0"
      fluid
      grid-list-md
      wrap
    >
      <v-layout row wrap>
        <v-flex d-flex justify-start xs12 sm12 md6>
          <div class="cont-i2">
            <div class="img2"></div>
          </div>
          <!-- <img src="../../assets/2.jpg" style="width: 100%" /> -->
        </v-flex>
        <v-flex d-flex flex-column justify-start xs12 sm12 md6>
          <h3 class="mb-4 mt-16 ml-12">NUESTRA MANERA DE TRABAJAR</h3>
          <p class="txt-info pb-10 ml-12 mt-5">
            La representación de los intereses de nuestros <br />
            clientes dentro de los procedimientos penales es de <br />
            la mayor calidad, ya sea actuando como asesores <br />
            jurídicos de la víctima o como defensores del <br />
            imputado. <br /><br />
            Además, en <b>Borrego Lavín Abogados</b> estamos <br />
            capacitados para actuar no sólo como reacción a <br />
            hechos con apariencia de delito sino también a su <br />
            prevención. <br /><br />
            Nuestra meta es brindar una atención completa y <br />
            personalizada con los más altos estándares de <br />
            calidad a cada cliente, sea persona física o <br />
            corporaciones de todas las escalas. <br /><br />
            Es precisamente en la atención a las empresas en <br />
            que podemos implementar protocolos o programas <br />
            internos eficaces para prevenir la comisión de <br />
            algún hecho delictivo en el seno de las mismas, <br />
            evitando así cualquier tipo de responsabilidad <br />
            penal propia de la persona jurídica.
          </p>
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
h3 {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
}
.txt-info {
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  letter-spacing: 1px;
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
</style>
