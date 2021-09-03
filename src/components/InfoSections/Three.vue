<template>
  <v-container
    class="d-flex justify-center ma-0 pa-0 ml-12 mb-16"
    fluid
    grid-list-md
    wrap
    style="width: 75%; background: #fff"
  >
    <v-layout row wrap class="mt-0">
      <v-flex class="pa-0" d-flex flex-column justify-start xs12 sm12 md6>
        <div class="beige d-flex flex-column pa-0">
          <h3 class="mb-4">FIRMA JURÍDICA INNOVADORA</h3>
          <h4 class="sub-txt font-weight-bold mb-4">
            Abogados con amplia experiencia, <br />
            reconocidos a nivel nacional.
          </h4>
          <p class="txt-info">
            <b>Borrego Lavín Abogados</b> es una nueva firma jurídica <br /> integrada por
            abogados jóvenes con amplia experiencia <br /> en el ejercicio de la
            profesión, cuyos socios provienen de <br /> uno de los despachos penales
            más importantes y <br /> reconocidos a nivel nacional. <br /><br /> Aunado a esta
            experiencia profesional, nuestros <br /> profesionistas buscan el continuo
            crecimiento académico <br /> para la ampliación y actualización de los
            conocimientos <br /> jurídicos con miras a hacer frente de la mejor manera
            a <br /> todos los asuntos encomendados por nuestros clientes.
          </p>
        </div>
      </v-flex>
      <v-flex class="pa-0"  d-flex justify-end xs12 sm12 md6>
        <img src="../../assets/3.jpg" style="width: 100%" />
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
h3 {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
}
.sub-txt {
  font-family: "Abhaya Libre", serif;
  font-size: 18px;
}
.txt-info {
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  letter-spacing: 1px;
}
.beige{
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  background-image: url("../../assets/beige.png");
  background-size: 100% 50.3%;
  background-position-y: bottom;
}
</style>
