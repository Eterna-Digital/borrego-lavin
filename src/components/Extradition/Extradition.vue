<template>
  <div class=" d-flex flex-column justify-center align-center mt-16 mb-16">
    <h1 class="titl text-center font-weight-bold mb-16">
      Las áreas de práctica de Borrego Lavín Abogados <br />
      son las siguientes:
    </h1>
    <v-card
      class="c-ext d-flex justify-center align-center"
      tile
      elevation="0"
      width="85%"
    >
      <v-card
        tile
        elevation="0"
        width="85%"
        class="card-3 mt-10 mb-16 d-flex"
      >
        <div class="cont">
          <div class="line">
            <div class="number">
              <h1 class="num" id="number">0</h1>
            </div>
            <div class="links-carousel" >
              <p v-for="(link, index) in links" :key="index">{{link.name}}</p>
            </div>
          </div>
        </div>

        <div class="crsl">
          <div class="carousel-wrapper mt-1">
            <carousel v-model="index">
              <carousel-pane>
                <div class="cc-txt">
                  <div key="first" class="cont-text d-flex flex-column">
                    <h3 class="mb-3">CONSULTORÍA JURÍDICO PENAL</h3>
                    <p>
                      <b>Borrego Lavín Abogados</b> cuenta con profesionales de
                      la materia con conocimientos amplios, suficientes y
                      especializados para la atención de cualquier tipo de
                      consulta relacionada a la materia penal. <br />
                      <br />
                      Esto es, nuestra firma legal busca brindar al cliente
                      soluciones integrales a todos los cuestionamientos que
                      pudieren tener, ya sea para hacer frente a un
                      procedimiento penal como víctima del delito o como
                      imputado, o bien, para buscar soluciones a conflictos por
                      hechos que pudieran tener apariencia del delito.
                      <br />
                      <br />
                      Este conocimiento jurídico penal abarca el análisis o
                      atención de cualquier tipo de procedimiento iniciado o que
                      pudiera iniciarse tanto en materia federal como en fuero
                      común en toda la República, y aquellos derivados del mismo
                      conflicto, léase recursos y juicios de amparo. <br />
                      <br />
                      Es precisamente este conocimiento de la materia el eje y
                      guía en que descansa el ejercicio de la profesión y, por
                      lo tanto, el actuar de esta firma.
                    </p>
                  </div>
                </div>
              </carousel-pane>
              <carousel-pane>
                <div class="cc-txt">
                  <div
                    key="first"
                    v-if="showFirst"
                    class="cont-text d-flex flex-column"
                  >
                    <h3 class="mb-3">LITIGIO PENAL</h3>
                    <p>
                      El litigio penal es la puesta en práctica de los
                      conocimientos de la materia penal y procesal penal de las
                      que los integrantes de esta firma son expertos.
                      <br /><br />
                      La atención del procedimiento penal puede darse desde la
                      perspectiva de la defensa al imputado o asesorando a la
                      víctima del delito, pudiendo ser tanto personas físicas
                      como jurídicas. En todas estas perspectivas,
                      <b>Borrego Lavín Abogados</b> cuenta con la experiencia
                      suficiente para brindar un servicio de la más alta
                      calidad, siempre buscando conseguir los objetivos
                      planteados por los clientes y procurando representar
                      debidamente sus intereses. <br /><br />
                      El litigio penal abarca todas las etapas procedimentales,
                      haciendo frente a cada una de ellas según corresponda,
                      siempre velando porque se desarrollen conforme a derecho y
                      protegiendo que los propios derechos de nuestros
                      representados sean respetados por las distintas
                      autoridades involucradas, interponiendo, de ser necesario,
                      toda clase de recursos que la ley establezca o bien,
                      acudiendo al juicio de amparo.
                    </p>
                  </div>
                </div>
              </carousel-pane>
              <carousel-pane>
                <div class="cc-txt">
                  <div
                    key="first"
                    v-if="showFirst"
                    class="cont-text d-flex flex-column"
                  >
                    <h3 class="mb-3">AMPARO PENAL</h3>
                    <p>
                      En <b>Borrego Lavín Abogados</b> tenemos amplia
                      experiencia y conocimiento para acudir al juicio de amparo
                      como medio de protección de los derechos inherentes a
                      nuestros representados. <br /><br />
                      Como expertos de la materia penal, nuestro enfoque al
                      acudir al juicio de amparo es la protección de los
                      derechos humanos del cliente, para hacer frente a actos de
                      las distintas autoridades involucradas que los hayan
                      vulnerado. <br />Esta representación se da tanto por la
                      vía de amparo indirecto como directo según corresponda,
                      así como en la presentación o atención de cualquier
                      incidencia o recurso dentro de la substanciación del
                      juicio respectivo. <br /><br />Para evitar que la persona
                      jurídica esté en riesgo de ser penalmente responsable, es
                      necesario actuar de forma preventiva, esto es, generar una
                      cultura de prevención del delito en ella. <br />
                      La prevención del delito se da a partir de la
                      implementación de un Programa de Cumplimiento Normativo,
                      en el que se hace un análisis exhaustivo de las
                      situaciones de riesgo en que pudiera actuar la empresa,
                      para desarrollar herramientas internas con la finalidad de
                      evitarlos o, en caso de que ocurran, localizarlos y hacer
                      frente a ellos de forma adecuada. <br /><br />
                      <b>Borrego Lavín Abogados</b> cuenta con expertos en la
                      materia para diseñar, implementar, capacitar y gestionar
                      estos Programas de Cumplimiento Normativos para todo tipo
                      de empresas.
                    </p>
                  </div>
                </div>
              </carousel-pane>
              <carousel-pane>
                <div class="cc-txt">
                  <div
                    key="first"
                    v-if="showFirst"
                    class="cont-text d-flex flex-column"
                  >
                    <h3 class="mb-3">COMPLIANCE PENAL</h3>
                    <p>
                      La figura de la responsabilidad penal de las empresas
                      cobró vigencia en nuestro país a partir del año 2016. Por
                      tal motivo, los profesionistas de la materia penal
                      tuvieron que actualizarse para hacer frente a la misma.
                      <br /><br />
                      Los integrantes de <b>Borrego Lavín Abogados</b> son
                      profesionistas con estudios en la materia para poder
                      brindar una completa e integral atención a asuntos
                      ajustados a estas nuevas realidades. <br /><br />
                      El Compliance Penal, como modelo, podemos definirlo como
                      la adopción de una cultura empresarial de cumplimiento
                      normativo, cuya finalidad es evitar cualquier tipo de
                      riesgo o comisión de hechos con apariencia de delito a
                      nombre, por cuenta o en beneficio de la empresa.
                      <br /><br />
                      Esto es así, pues la comisión de hechos delictivos de esa
                      naturaleza acarrea responsabilidad penal a la empresa, con
                      independencia de aquella en que pudieran incurrir las
                      personas físicas relacionadas.
                    </p>
                  </div>
                </div>
              </carousel-pane>
              <carousel-pane>
                <div class="cc-txt">
                  <div
                    key="first"
                    v-if="showFirst"
                    class="cont-text d-flex flex-column"
                  >
                    <h3 class="mb-3">EXTRADICIÓN</h3>
                    <p>
                      La extradición es una institución del derecho
                      internacional que hace referencia al acto por el cual un
                      Estado hace entrega a otro, de alguna persona que es
                      reclamada para hacer frente a un proceso penal o a una
                      pena. <br /><br />
                      Nuestros profesionistas han participado activamente en
                      procedimientos de extradición, por lo que están
                      capacitados para asumir el rol correspondiente dependiendo
                      el tipo de exradición bajo la que opera o pretende operar
                      la figura en el caso particular. <br /><br />
                      Esto es, tanto si se trata de extradición activa o pasiva
                      o bien, si se pretende lograr o impedir la misma,
                      <b>Borrego Lavín Abogados</b> tiene la preparación
                      necesaria para hacer frente al procedimiento en busca de
                      lograr el objetivo marcado por los clientes.
                    </p>
                  </div>
                </div>
              </carousel-pane>
            </carousel>
          </div>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import CarouselPane from "./CarouselPane.vue";

export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Carousel,
    CarouselPane,
  },
  data: () => ({
    counter: 0,
    showFirst: true,
    index: 0,
     links: [
        { name: 'CONSULTORÍA JURÍDICO PENAL' },
        { name: 'LITIGIO PENAL' },
        { name: 'AMPARO PENAL' },
        { name: 'COMPLIANCE PENAL' },
        { name: 'EXTRADICIÓN' },
      ]
  }),
};
</script>

<style>
.card-3{
  height: 95vh;
}
.titl {
  font-family: "Abhaya Libre", serif;
}
.carousel {
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  border-bottom: 1.5px solid gray;
}
.carousel-wrapper {
  display: flex;
  flex-direction: column;
  /* background-color: gold; */
}

.carousel > * {
  flex: 1 0 100%;
  scroll-snap-align: start;
}
.carousel > * {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.cont {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 30%;
  /* background-color: teal; */
}
.line {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 79%;
  border-right: 1.5px solid gray;
  /* background-color: gold; */
}
.number {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding-bottom: 18vh;
  /* background-color: blueviolet; */
}
.number h1 {
  color: #d3a876;
  font-size: 3rem;
  margin: 0;
  margin-right: 1.5rem;
  padding: 0;
  font-weight: lighter;
  font-family: "STIX Two Text", serif;
}
.links-carousel {
  height: 45vh;
  width: 20vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transform: matrix(0, -1, 1, 0, 0, 0);
}

.links-carousel p {
  width: 100%;
  height: 2.5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: bolder;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 0 0 0.5rem;
  border-top: 1.5px solid gray;
}

.spnc p {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  bottom: 0;
  left: 0;
  text-transform: uppercase;
  background-color: rgb(89, 89, 192);
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.crsl {
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  /* background-color: green; */
}
.cont-text {
  width: 90%;
  height: 100%;
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  transition: all 2s ease-in-out;
  /* background-color: rgb(212, 80, 102); */
}
.slidefade-enter-active,
.slidefade-leave-active {
  transition: all ease 0.4s;
}
.slidefade-enter,
.slidefade-leave-to {
  transform: translate(30px);
  opacity: 0;
}
.cont-text h3 {
  margin-top: 1.5rem;
  font-family: "Montserrat", sans-serif;
  color: #262626;
}
.cont-text p {
  margin-top: 1rem;
  color: #262626;
}
.carousel .cc-txt {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #4299e1; */
}
@media screen and (max-width: 768px) {

.cont{
  display: none;
}
.c-ext{
  padding-bottom: 5rem;

}
}
</style>
