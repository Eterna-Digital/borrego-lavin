<template>
  <v-card width="100%" elevation="0" color="#F7F7F7" class="d-flex flex-column align-center mt-5 mb-16">
    <v-card elevation="0" color="#F7F7F7" class="card-1 mt-15 mb-12">
      <v-container
        class="cont-one-lm d-flex justify-center ma-0 pa-0"
        fluid
        grid-list-md
        wrap
      >
        <v-layout row wrap d-flex justify-center>
          <v-flex class="flex2-sn" d-flex flex-column xs12 sm12 md6>
            <div class="cont-i-sn">
              <div class="img-sn"></div>
            </div>
          </v-flex>
          <v-flex class="lm-st" d-flex flex-column justify-center xs12 sm12 md6>
            <h5 class="h-qsn mb-4">SANTIAGO PÉREZ ALBARRÁN</h5>
            <h5 style="color:#D3A876" class="h-qsn mb-4">ASOCIADO</h5>
            <p class="txt-st ma-0 mt-5 mb-10" style="color: transparent">
              Trabajó del año 2005 al 2007 en el despacho Villicaña y Campos
              S.C. <br/><br/> En el mes de febrero del 2007 ingresó a la prestigiosa firma
              especializada en Derecho Penal Nassar Nassar y Asociados, S.C.
              desempeñándose como asociado hasta el año 2021 en que decidió
              fundar la firma Borrego Lavín Abogados, S.C. como socio fundador.<br/><br/>
              Licenciado en Derecho por la Facultad de Derecho de la Barra
              Nacional de Abogados. <br/><br/>Especialista en Sistema Acusatorio y Juicios
              Orales por la Escuela Libre de Derecho.<br/><br/> Cursó la Especialidad de
              Derecho Penal en la Escuela Libre de Derecho. <br/><br/> Actualmente se
              encuentra estudiando el Máster Iberoamericano en Compliance de la
              Universidad de Salamanca, España. <br/><br/> Ha cursado diplomados y cursos
              en Teoría del Delito, Servicios Periciales, Juicio de Amparo,
              Técnicas de Litigación Oral, Compliance, Responsabilidad Penal de
              las Empresas, Lavado de Dinero, Delitos Fiscales, Delitos
              Patrimoniales, Delitos Electorales, entre otros relacionados con
              la materia penal y procesal penal.
            </p>
          </v-flex>
          
        </v-layout>
      </v-container>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "One",
};
</script>

<style>
.lm-st {
  padding-left: 3rem !important;
}
.card-1 {
  width: 75%;
}
.cont-one-lm {
  margin-left: 2rem;
}
h3 {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
}
.sub-txt1-c {
  font-family: "Abhaya Libre", serif;
  font-size: 18px;
}
.txt-st {
  padding-right: 2rem;
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-align: justify;
}

.flex2-sn {
  justify-content: end;
}
.cont-i-sn {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-i-sn .img-sn {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/qs/santi1.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease;
}
.cont-i-sn:hover .img-sn {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/qs/santi2.jpg");
  background-size: 105%;
  background-position: center;
}
@media screen and (max-width: 768px) {
  .card-1 {
    width: 100%;
  }
  .lm-st {
  padding-left: 1rem !important;
}
  .flex2-sn {
    height: 100vh;
    justify-content: center;
  }
  h3 {
    padding-left: 1rem;
  }

  .sub-txt1-c {
    padding-left: 1rem;
  }
  .txt-st {
    display: none;
   
  }
  .cont-i-sn .img-sn {
    transition: none;
  }
  .cont-i-sn:hover .img-sn {
    background-image: url("../../../assets/qs/santi1.jpg");
    background-size: 100%;
  }
}
</style>
