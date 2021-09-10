<template>
  <v-card
    class="card-7 mt-10 pb-10 d-flex flex-column align-center"
    elevation="0"
  >
    <v-container
      class=" d-flex justify-center ma-0 pa-0"
      fluid
      grid-list-md
      wrap
    >
      <v-layout row wrap d-flex justify-center>
        <v-flex d-flex flex-column justify-center xs12 sm12 md6>
          <h3 class="mb-6 mt-3">CON RESPECTO AL ARTÍCULO 421</h3>
          <p class="txt-info1-c ma-0  mb-15">
            Respecto del artículo inserto, es necesario tomar especial
            consideración a la frase “cuando se haya determinado que además
            existió inobservancia del debido control en su organización”, pues
            esta es precisamente la referencia a los Compliance Programs que es
            necesaria de atender. <br/><br/> Lo anterior, pues la fase de detección y
            eliminación de riesgos de la empresa está encaminada a evitar que
            ellos se conviertan en delitos, debiendo de ejercerse pues, el
            debido control sobre ellos.<br/><br/> Esta observancia del debido control
            organizacional va de la mano con la aplicación de los protocolos
            para prevenir o incluso descubrir los delitos que pudieran
            cometerse, tarea que habrá de aplicar el Compliance Officer que
            habrá de apoyarse de los canales de denuncia que se implementen.<br/><br/>
            Esto último, en caso de ser reactivo al hecho generador de
            responsabilidad, pudiera resultar en alguna circunstancia atenuante
            de la misma.
          </p>
        </v-flex>
        <v-flex d-flex flex-column justify-end xs12 sm12 md6>
          <p class="txt-info1-c t-2 ma-0 ">
            Lo anterior, según se desprende de los Códigos Penales tanto de la
            Federación como de las distintas entidades, donde también
            encontraremos pues, fundamento de la necesidad de aplicar los
            <b>Compliance Programs</b> en las empresas.<br/><br/> El <b>Compliance</b> como tal, sirve
            para la prevención del delito y la protección de los bienes
            jurídicos.<br/><br/> Así, si la empresa cuenta con un Programa de Cumplimiento
            Normativo efectivo, ello supone que la moral ha mantenido los
            riesgos de sus actividades dentro de los niveles permitidos, lo que
            ocasiona, por sí mismo, que no pueda considerarse la conducta
            reprochada como típica.
          </p>
          <span class="span-7 mb-2"
            ><img src="../../../assets/comillas superior.svg" width="30px"
          /></span>
          <p class="p-3">
            ... la responsabilidad penal de las empresas cobró vigencia a partir
            de que fue incluida en la legislación penal y procesal penal.
            <span class="d-flex justify-end"
              ><img src="../../../assets/comillas inferior.svg" width="30px"
            /></span>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.card-7{
  width: 75%;
}
.p-3 {
    width: 90%;
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
@media screen and (max-width: 768px) {
  .card-7{
    width: 100%;
  }
  .span-7{
    margin-left: 1rem;
  }
  .p-3 {
    margin-left: 1rem;
  }
}
</style>
