<template>
  <v-card width="100%" elevation="0" class="mt-5 mb-10 d-flex flex-column align-center">
    <v-card elevation="0" class="card-1 mt-15 mb-12">
      <v-container
        class="cont-one-cmp d-flex justify-center ma-0 pa-0"
        fluid
        grid-list-md
        wrap
      >
        <v-layout row wrap d-flex justify-center>
          <v-flex d-flex flex-column justify-center xs12 sm12 md6>
            <h5 class="h5 mb-4">FELIPE BORREGO FÉLIX</h5>
            <h5 style="color:#D3A876" class="h5 mb-4">SOCIO</h5>
            <p class="txt-f ma-0 mt-5 mb-10">
              Trabajó del año 2008 al 2011 en la Suprema Corte de Justicia de la
              Nación con el Ministro Sergio Salvador Aguirre Anguiano.
              <br /><br />
              En el año 2011 se incorporó como asociado al despacho jurídico RJP
              Abogados, S.C., especializado en materia penal. <br /><br />
              En el año 2014 ingresó al reconocido despacho en materia penal
              Nassar Nassar y Asociados, S.C. desempeñándose como asociado hasta
              el año 2021 en que decidió formar la firma jurídica Borrego Lavín
              Abogados, S.C. <br /><br />
              Licenciado en Derecho por la Universidad Iberoamericana León.
              <br /><br />
              Especialista en Sistema Acusatorio y Juicios Orales por la Escuela
              Libre de Derecho. <br /><br />
              Cursó la Especialidad de Derecho Penal en la Escuela Libre de
              Derecho. <br /><br />
              Ha cursado diversos diplomados, cursos y certificaciones tanto en
              México como en el extranjero en Teoría del Delito, Técnicas de
              Litigación Oral, Expresión Oral, Compliance, Responsabilidad Penal
              de las Empresas, Lavado de Dinero, Delitos Fiscales, Delitos
              Electorales, entre otros relacionados con la materia penal y
              procesal penal.
            </p>
          </v-flex>
          <v-flex class="flex2-f" d-flex flex-column xs12 sm12 md6>
            <div class="cont-i-f">
              <div class="img-f"></div>
            </div>
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
.card-1 {
  width: 75%;
}
.cont-one-cmp {
  margin-left: 2rem;
}
h3 {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
}


.txt-f {
  padding-right: 2rem;
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-align: justify;
}

.flex2-f {
  justify-content: end;
}
.cont-i-f {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-i-f .img-f {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/qs/felipe1.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease;
}
.cont-i-f:hover .img-f {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/qs/felipe2.jpg");
  background-size: 105%;
  background-position: center;
}
@media screen and (max-width: 768px) {
  .card-1 {
    width: 100%;
  }
  .flex2-f {
    height: 100vh;
    justify-content: center;
  }
  .h5{
    padding-left: 1rem;
  }

  .txt-f {
    padding-right: 1rem;
    font-size: 15px;
    padding-left: 1rem;
    text-align: justify;
  }
  .cont-i-f .img-f {
    background-size: cover;
    transition: none;
  }
  .cont-i-f:hover .img-f {
    background-image: url("../../../assets/qs/felipe2.jpg");
    background-size: cover;
  }
}
</style>
