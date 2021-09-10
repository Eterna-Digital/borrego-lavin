<template>
  <div class="d-flex justify-center">
    <v-card elevation="0" class="card-3s">
      <h3 class="mb-4">
        ¿QUÉ ENTENDEMOS ENTONCES <br />
        POR <span style="color: #D3A876">COMPLIANCE PROGRAM?</span>
      </h3>
      <p class="txt-info-3 ma-0 mt-4 mb-10">
        Es un catálogo de estándares mínimos de cumplimiento, se configura por
        una serie de reglas, pautas y/o protocolos, que deben cumplirse para que
        el actuar en el seno de una persona jurídica, vaya en consonancia con el
        ordenamiento jurídico vigente.<br />
        <br />
        La elaboración de estos Programas corresponde a expertos que puedan
        hacer frente a la disminución de los riesgos de la empresa, o bien,
        hacer frente a las eventualidades que deriven de la propia actuación de
        ésta. <br />
        <br />
        Para ello, siempre es necesario partir de un exhaustivo y, sobre todo,
        efectivo diagnóstico empresarial. Esto es, el diagnóstico debe hacerse
        conforme a la realidad de la empresa.
      </p>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card-3s {
  width: 50%;
  margin-top: 5%;
  margin-bottom: 3% !important;
}
.txt-info-3 {
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-align: justify;
}
@media screen and (max-width: 768px) {
  .card-3s {
    width: 90%;
    margin-top: 15%;
    margin-bottom: 0 !important;
    padding-bottom: 5% !important;
  }
  .txt-info-3 {
  font-family: "Abhaya Libre", serif;
  font-size: 15px !important;
  letter-spacing: 1px;
  text-align: justify;
}
  .card-3s h3 {
    margin-left: 0 !important;
    padding-left: 0;
  }
}
</style>
