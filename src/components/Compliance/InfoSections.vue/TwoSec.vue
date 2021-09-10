<template>
  <v-card
    class="card-2 mt-10 d-flex flex-column align-center"
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
          <h3 class="mb-8">PREVENCIÓN DEL DELITO</h3>
          <p class="txt-info1-c ma-0 mt-5 mb-10">
            Esto es así, pues la comisión de hechos delictivos de esa naturaleza
            acarrea responsabilidad penal a la empresa, con independencia de
            aquella en que pudieran incurrir las personas físicas relacionadas.
            <br /><br />
            Para evitar que la persona jurídica esté en riesgo de ser penalmente
            responsable, es necesario actuar de forma preventiva, esto es,
            generar una cultura de prevención del delito en ella. <br /><br />
            La prevención del delito se da a partir de la implementación de un
            Programa de Cumplimiento Normativo -<b>Compliance Program</b>-, en
            el que se hace un análisis exhaustivo de las situaciones de riesgo
            en que pudiera actuar la empresa, para desarrollar herramientas
            internas con la finalidad de evitarlos o, en caso de que ocurran,
            localizarlos y hacer frente a ellos de forma adecuada.
          </p>
        </v-flex>
        <v-flex class="date-2" d-flex flex-column justify-end xs12 sm12 md6>
          <span class="mb-2"
            ><img src="../../../assets/comillas superior.svg" width="30px"
          /></span>
          <p class="fragment">
            Para evitar que la persona jurídica esté en riesgo de ser penalmente
            responsable, es necesario actuar de forma preventiva, esto es,
            generar una cultura de prevención del delito en ella.
            <span class="d-flex justify-end"
              ><img src="../../../assets/comillas inferior.svg" width="30px"
            /></span>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="cont-img-2-c">
      <div class="img-2-c"></div>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.card-2 {
  width: 75%;
}
.fragment {
  width: 90% !important;
  font-family: "STIX Two Text", serif;
  color: #d3a876;
  font-size: 20px;
  text-align: justify;
  padding-bottom: 0rem;
}
.cont-img-2-c {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: start;
  margin-top: 10%;
  margin-bottom: 5%;
}
.cont-img-2-c .img-2-c {
  width: 100%;
  background-image: url("../../../assets/compl/BL-23.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease;
}
.cont-img-2-c:hover .img-2-c {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/bn/BLL-23.jpg");
  background-size: 105%;
  background-position: center;
}
@media screen and (max-width: 768px) {
  .card-2 {
    width: 100%;
  }
  .date-2 {
    margin-left: 1rem;
  }
  .fragment {
    width: 95% !important;
  }
  .cont-img-2-c .img-2-c {
    background-size: cover;
    background-position: center;
    transition: none;
  }
  .cont-img-2-c:hover .img-2-c {
    background-image: url("../../../assets/compl/BL-23.jpg");
    background-size: cover;
  }
}
</style>
