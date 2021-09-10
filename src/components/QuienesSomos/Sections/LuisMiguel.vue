<template>
  <v-card
    width="100%"
    elevation="0"
    tile
    color="#F7F7F7"
    class="d-flex flex-column align-center mt-5 mb-10"
  >
    <v-card elevation="0" color="#F7F7F7" class="card-lm mt-15 mb-12">
      <v-container
        class="cont-one-lm d-flex justify-center ma-0 pa-0"
        fluid
        grid-list-md
        wrap
      >
        <v-layout wrap class="cont-c">
          <v-flex class="flex2-lm" d-flex flex-column xs12 sm12 md6>
            <div class="cont-i-lm">
              <div class="img-lm"></div>
            </div>
          </v-flex>
          <v-flex class="lm-tx" d-flex flex-column justify-center xs12 sm12 md6>
            <h5 class="h-q mb-4">LUIS MIGUEL LAVÍN SANTACRUZ</h5>
            <h5 style="color:#D3A876" class="h-q mb-4">SOCIO</h5>
            <p class="txt-lm ma-0 mt-5 mb-10">
              Trabajó del año 2005 al 2007 en el despacho Villicaña y Campos
              S.C. <br /><br />
              En el mes de febrero del 2007 ingresó a la prestigiosa firma
              especializada en Derecho Penal Nassar Nassar y Asociados, S.C.
              desempeñándose como asociado hasta el año 2021 en que decidió
              fundar la firma Borrego Lavín Abogados, S.C. como socio
              fundador.<br /><br />
              Licenciado en Derecho por la Facultad de Derecho de la Barra
              Nacional de Abogados. <br /><br />Especialista en Sistema
              Acusatorio y Juicios Orales por la Escuela Libre de Derecho.<br /><br />
              Cursó la Especialidad de Derecho Penal en la Escuela Libre de
              Derecho. <br /><br />
              Actualmente se encuentra estudiando el Máster Iberoamericano en
              Compliance de la Universidad de Salamanca, España. <br /><br />
              Ha cursado diplomados y cursos en Teoría del Delito, Servicios
              Periciales, Juicio de Amparo, Técnicas de Litigación Oral,
              Compliance, Responsabilidad Penal de las Empresas, Lavado de
              Dinero, Delitos Fiscales, Delitos Patrimoniales, Delitos
              Electorales, entre otros relacionados con la materia penal y
              procesal penal.
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
.cont-c {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.lm-tx {
  padding-left: 3rem !important;
}
.card-lm {
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
.txt-lm {
  padding-right: 2rem;
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-align: justify;
}

.flex2-lm {
  justify-content: end;
}
.cont-i-lm {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-i-lm .img-lm {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/qs/luism1.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease;
}
.cont-i-lm:hover .img-lm {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/qs/luism2.jpg");
  background-size: 105%;
  background-position: center;
}
@media screen and (max-width: 768px) {
  .cont-c {
    display: flex;
    justify-content: center;
  }
  .card-lm {
    width: 100%;
  }
  .flex2-lm {
    height: 100vh;
    justify-content: start;
  }
  .h-q{
    padding-left: 1rem;
  }
  .sub-txt1-c {
    padding-left: 0rem;
  }

  .lm-tx {
  padding-left: 0rem !important;
  padding-right: 1rem !important;
}
  .txt-lm {
    padding-right: 0rem !important;
    font-size: 15px;
    padding-left: 1rem;
    text-align: justify;
  }
  .cont-i-lm .img-lm {
    transition: none;
  }
  .cont-i-lm:hover .img-lm {
    background-image: url("../../../assets/qs/luism1.jpg");
    background-size: 100%;
  }
}
</style>
