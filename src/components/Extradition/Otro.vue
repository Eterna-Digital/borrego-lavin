<template>
  <div class="d-flex flex-column justify-center align-center mt-16 mb-16">
    <h1 class="titl text-center font-weight-bold mb-16">
      Las áreas de práctica de Borrego Lavín Abogados <br />
      son las siguientes:
    </h1>
    <v-card
      class="d-flex justify-center align-center"
      tile
      elevation="0"
      width="85%"
    >
      <v-card
        tile
        elevation="0"
        width="85%"
        height="95vh"
        class="mt-10 mb-16 d-flex"
      >
        <div class="cont">
          <div class="line">
            <div class="number">
              <h1 class="num"></h1>
            </div>
            <div class="links-carousel">
              <p>CONSULTORÍA JURÍDICO PENAL</p>
              <p>LITIGIO PENAL</p>
              <p>AMPARO PENAL</p>
              <p>COMPLIANCE PENAL</p>
              <p>EXTRADICIÓN</p>
            </div>
          </div>
        </div>

        <div class="crsl">
          <div class="carousel-wrapper mt-1">
            <div class="controls">
              <h1 class="pl-12">Extradicion</h1>
              <div class="btns">
                <v-btn class="mr-3"  icon @click="previousSlide()">
                  <img
                    src="../../assets/slider left control.svg"
                    width="30px"
                  />
                </v-btn>
                <v-btn icon @click="nextSlide()">
                  <img
                    src="../../assets/slider right control.svg"
                    width="30px"
                  />
                </v-btn>
              </div>
            </div>
            <div class="carousel">
                <div
                  class="slideMove  cc-txt"
                  v-for="(slide, index) in slides"
                  :key="index"
                 v-show="activeSlide == index"
                >
                  <div  class="cont-text d-flex flex-column">
                    <h3 class="mb-3">{{ slide.title }}</h3>
                    <p>
                      {{ slide.content }}
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script>
// import Carousel from "./Carousel.vue";
export default {
  components: {
    // Carousel,
  },
  data: () => ({
    counter: 0,
    slideMove: 'forward',
    activeSlide: 0,
    number: '',
    slides: [
      {
        id: 1,
        title: "CONSULTORÍA JURÍDICO PENAL",
        content:
          "Borrego Lavín Abogados cuenta con profesionales de lamateria con conocimientos amplios, suficientes yespecializados para la atención de cualquier tipo deconsulta relacionada a la materia penal. <br /><br />Esto es, nuestra firma legal busca brindar al clientesoluciones integrales a todos los cuestionamientos quepudieren tener, ya sea para hacer frente a un procedimientopenal como víctima del delito o como imputado, o bien, parabuscar soluciones a conflictos por hechos que pudieran tenerapariencia del delito.<br /><br />Este conocimiento jurídico penal abarca el análisis oatención de cualquier tipo de procedimiento iniciado o quepudiera iniciarse tanto en materia federal como en fuerocomún en toda la República, y aquellos derivados del mismoconflicto, léase recursos y juicios de amparo. <br /><br />Es precisamente este conocimiento de la materia el eje yguía en que descansa el ejercicio de la profesión y, por lotanto, el actuar de esta firma.",
      },
      {
        id: 2,
        title: "LITIGIO PENAL",
        template:
        `<h1>hola</h1>`,
        content:
          "El litigio penal es la puesta en práctica de losconocimientos de la materia penal y procesal penal de lasque los integrantes de esta firma son expertos. <br /><br />La atención del procedimiento penal puede darse desde laperspectiva de la defensa al imputado o asesorando a lavíctima del delito, pudiendo ser tanto personas físicas comojurídicas. En todas estas perspectivas, Borrego LavínAbogados cuenta con la experiencia suficiente para brindarun servicio de la más alta calidad, siempre buscandoconseguir los objetivos planteados por los clientes yprocurando representar debidamente sus intereses.<br /><br />El litigio penal abarca todas las etapas procedimentales,haciendo frente a cada una de ellas según corresponda,siempre velando porque se desarrollen conforme a derecho yprotegiendo que los propios derechos de nuestrosrepresentados sean respetados por las distintas autoridadesinvolucradas, interponiendo, de ser necesario, toda clase derecursos que la ley establezca o bien, acudiendo al juiciode amparo.",
      },
      {
        id: 3,
        title: "AMPARO PENAL",
        content:
          "En <b>Borrego Lavín Abogados</b> tenemos amplia experienciay conocimiento para acudir al juicio de amparo como medio deprotección de los derechos inherentes a nuestrosrepresentados. <br /><br />Como expertos de la materia penal, nuestro enfoque al acudiral juicio de amparo es la protección de los derechos humanosdel cliente, para hacer frente a actos de las distintasautoridades involucradas que los hayan vulnerado. <br />Estarepresentación se da tanto por la vía de amparo indirectocomo directo según corresponda, así como en la presentacióno atención de cualquier incidencia o recurso dentro de lasubstanciación del juicio respectivo. <br /><br />Paraevitar que la persona jurídica esté en riesgo de serpenalmente responsable, es necesario actuar de formapreventiva, esto es, generar una cultura de prevención deldelito en ella. <br />La prevención del delito se da a partir de la implementaciónde un Programa de Cumplimiento Normativo, en el que se haceun análisis exhaustivo de las situaciones de riesgo en quepudiera actuar la empresa, para desarrollar herramientasinternas con la finalidad de evitarlos o, en caso de queocurran, localizarlos y hacer frente a ellos de formaadecuada. <br /><br /><b>Borrego Lavín Abogados</b> cuenta con expertos en lamateria para diseñar, implementar, capacitar y gestionarestos Programas de Cumplimiento Normativos para todo tipo deempresas.",
      },
      {
        id: 4,
        title: "COMPLIANCE PENAL",
        content:
          "La figura de la responsabilidad penal de las empresas cobróvigencia en nuestro país a partir del año 2016. Por talmotivo, los profesionistas de la materia penal tuvieron queactualizarse para hacer frente a la misma. <br /><br />Los integrantes de Borrego Lavín Abogados son profesionistascon estudios en la materia para poder brindar una completa eintegral atención a asuntos ajustados a estas nuevasrealidades.<br /><br />El Compliance Penal, como modelo, podemos definirlo como laadopción de una cultura empresarial de cumplimientonormativo, cuya finalidad es evitar cualquier tipo de riesgoo comisión de hechos con apariencia de delito a nombre, porcuenta o en beneficio de la empresa. <br /><br />Esto es así, pues la comisión de hechos delictivos de esanaturaleza acarrea responsabilidad penal a la empresa, conindependencia de aquella en que pudieran incurrir laspersonas físicas relacionadas.",
      },
      {
        id: 5,
        title: "EXTRADICIÓN",
        content:
          "La extradición es una institución del derecho internacionalque hace referencia al acto por el cual un Estado haceentrega a otro, de alguna persona que es reclamada parahacer frente a un proceso penal o a una pena. <br /><br />Nuestros profesionistas han participado activamente enprocedimientos de extradición, por lo que están capacitadospara asumir el rol correspondiente dependiendo el tipo deexradición bajo la que opera o pretende operar la figura enel caso particular. <br /><br />Esto es, tanto si se trata de extradición activa o pasiva obien, si se pretende lograr o impedir la misma, BorregoLavín Abogados tiene la preparación necesaria para hacerfrente al procedimiento en busca de lograr el objetivomarcado por los clientes.",
      },
    ],
  }),

  computed: {
    slideLength(){
      let number = this.slides.length
      return number
    }
  },


  methods: {
    activeClass(index) {
      if(this.activeSlide == index){
        return true
      } else {
        return false
      }
    },
    nextSlide(index){
      this.slideMove = 'forward'
       if(this.activeSlide + 1 == this.slideLength){
        this.activeSlide = 0
      } else {
        this.activeSlide++
      }
      console.log(index)
    },
    previousSlide(){
      this.slideMove = 'backward'
      if(this.activeSlide == 0){
        this.activeSlide = this.slideLength - 1;
      } else {
        this.activeSlide--
      
      }
    }
  }
};
</script>

<style>
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
.controls {
  display: flex;
  justify-content: space-between;
  /* background-color: pink; */
  margin-bottom: 0.5rem;
  border-bottom: 1.5px solid gray;
}
.controls h1 {
  font-size: 2rem;
  font-family: "STIX Two Text", serif;
}
.controls .btns {
  display: flex;
  align-items: center;
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
  height: 75%;
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
  /* background-color: rgb(212, 80, 102); */
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
</style>
