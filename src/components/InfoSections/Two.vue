<template>
  <v-card tile elevation="0" class="mt-14">
    <v-container
      class="d-flex justify-center ma-0 pa-0"
      fluid
      grid-list-md
      wrap
    >
      <v-layout row wrap>
        <v-flex d-flex justify-start xs12 sm12 md6>
          <img src="../../assets/2.jpg" style="width: 100%" />
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
</style>
