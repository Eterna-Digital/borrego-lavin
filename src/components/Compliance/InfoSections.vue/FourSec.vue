<template>
  <v-card
    class="card-4 mt-10 d-flex flex-column align-center"
    elevation="0"
    color="#F7F7F7"
  >
    <v-container
      class=" d-flex justify-center ma-0 pa-0"
      fluid
      grid-list-md
      wrap
    >
      <v-layout row wrap d-flex justify-center>
        <v-flex d-flex flex-column justify-center xs12 sm12 md6>
          <h3 class="mb-8">FASES DEL PROCESO</h3>
          <p class="txt-info1-c ma-0 mt-5 mb-10">
            Para evitar que la persona jurídica esté en riesgo de ser penalmente
            responsable, es necesario actuar de forma preventiva, esto es,
            generar una cultura de prevención del delito en ella.
            <br /><br /><br />
            1. Diagnóstico institucional de riesgos (protección y
            eliminación).<br /><br />
            2. Diseño de reglas mínimas y protocolo de autorregulación.<br /><br />
            3. Capacitación y evaluación periódica del personal de la empresa
            (incluyendo alta dirección).<br /><br />
            4. Implementación de un sistema de denuncias interno y externo
            (cultura del whistleblowing).<br /><br />
            5. Compliance Officer para aplicar el sistema de supervisión y
            sanciones en la empresa.
          </p>
        </v-flex>
        <v-flex d-flex flex-column justify-end xs12 sm12 md6>
          <div class="cont-img-4-c">
            <div class="img-4-c"></div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.card-4 {
  width: 75%;
}
.fragment {
  width: 70%;
  font-family: "STIX Two Text", serif;
  color: #d3a876;
  font-size: 20px;
  text-align: justify;
  padding-bottom: 2.5rem;
}
.cont-img-4-c {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: start;
  margin-top: 10%;
  margin-bottom: 5%;
}
.cont-img-4-c .img-4-c {
  width: 100%;
  background-image: url("../../../assets/compl/BL-21.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease;
}
.cont-img-4-c:hover .img-4-c {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/bn/BLL-21.jpg");
  background-size: 105%;
  background-position: center;
}
@media screen and (max-width: 768px) {
  .card-4 {
    width: 100%;
    padding-bottom: 0 !important;
    margin-bottom: 0;
  }
  .cont-img-4-c .img-4-c {
    transition: none !important;
    block-size: cover;
  }
  .cont-img-4-c:hover .img-4-c {
    background-image: url("../../../assets/compl/BL-21.jpg");
    background-size: contain;
  }
}
</style>
