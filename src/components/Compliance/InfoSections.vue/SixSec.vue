<template>
  <v-card
    class="card-6 mt-10 d-flex flex-column align-center"
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
          <span class="mb-3 span"
            ><img src="../../../assets/bn/comillas-up.svg" width="30px"
          /></span>
          <h3 class="mb-8">ARTÍCULO 421</h3>
          <h4 class="sub-txt1-c font-weight-bold mb-4 mt-5">
            Ejercicio de la acción penal y responsabilidad penal autónoma.
          </h4>
          <p class="txt-info1-c ma-0  font-italic">
            Las personas jurídicas serán penalmente responsables, de los delitos
            cometidos a su nombre, por su cuenta, en su beneficio o a través de
            los medios que ellas proporcionen, cuando se haya determinado que
            además existió inobservancia del debido control en su organización.
            Lo anterior con independencia de la responsabilidad penal en que
            puedan incurrir sus representantes o administradores de hecho o de
            derecho. <br /><br />
            El Ministerio Público podrá ejercer la acción penal en contra de las
            personas jurídicas con excepción de las instituciones estatales,
            independientemente de la acción penal que pudiera ejercer contra las
            personas físicas involucradas en el delito cometido. <br /><br />
            No se extinguirá la responsabilidad penal de las personas jurídicas
            cuando se transformen, fusionen, absorban o escindan. En estos
            casos, el traslado de la pena podrá graduarse atendiendo a la
            relación que se guarde con la persona jurídica originariamente
            responsable del delito. La responsabilidad penal de la persona
            jurídica tampoco se extinguirá mediante su disolución aparente,
            cuando continúe su actividad económica y se mantenga la identidad
            sustancial de sus clientes, proveedores, empleados, o de la parte
            más relevante de todos ellos.
          </p>
        </v-flex>
        <v-flex d-flex flex-column justify-center xs12 sm12 md6>
          <p class="txt-info1-c ma-0 mt-12 font-italic">
            Las causas de exclusión del delito o de extinción de la acción
            penal, que pudieran concurrir en alguna de las personas físicas
            involucradas, no afectará el procedimiento contra las personas
            jurídicas, salvo en los casos en que la persona física y la persona
            jurídica hayan cometido o participado en los mismos hechos y estos
            no hayan sido considerados como aquellos que la ley señala como
            delito, por una resolución judicial previa. Tampoco podrá afectar el
            procedimiento el hecho de que alguna persona física involucrada se
            sustraiga de la acción de la justicia.<br /><br />
            Las personas jurídicas serán penalmente responsables únicamente por
            la comisión de los delitos previstos en el catálogo dispuesto en la
            legislación penal de la federación y de las entidades federativas.
            <span class="d-flex justify-end"
              ><img src="../../../assets/bn/comillas-down.svg" width="30px"
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
.card-6 {
  width: 75%;
}
.fragment {
  width: 70%;
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

.p-2 {
  padding-top: 11%;
  padding-right: 2rem;
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  font-style: italic;
  letter-spacing: 1px;
  text-align: justify;
}
@media screen and (max-width: 768px) {
  .card-6{
    width: 100%;
  }
  .span{
    margin-left: 1rem;
  }
}
</style>
