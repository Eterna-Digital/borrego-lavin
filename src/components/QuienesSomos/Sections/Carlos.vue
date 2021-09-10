<template>
  <v-card width="100%" elevation="0" class="d-flex flex-column align-center mt-5 mb-10">
    <v-card elevation="0" class="card-1 mt-15 mb-12">
      <v-container
        class="cont-one-cmp d-flex justify-center ma-0 pa-0"
        fluid
        grid-list-md
        wrap
      >
        <v-layout row wrap d-flex justify-center>
          <v-flex d-flex flex-column justify-center xs12 sm12 md6>
            <h5 class="h-q mb-4">CARLOS CÉSAR ÁLVAREZ ROMÁN</h5>
            <h5 style="color:#D3A876" class="h-q mb-4">SOCIO</h5>
            <p class="txt-f ma-0 mt-5 mb-10">
              Laboró de 2013 a 2021 para la prestigiada firma penal Nassar
              Nassar y Asociados, S.C, incursionando como pasante en derecho
              para posteriormente desempeñarse como asociado a partir del año
              2017 y hasta el primer trimestre de 2021 en que decidió formar el
              despacho Borrego Lavín Abogados, S.C. <br/><br/> Licenciado en Derecho por la
              Universidad Nacional Autónoma de México, titulándose por Curso
              Superior de Posgrado en Derecho Penal. <br/><br/> Especialista en Sistema
              Acusatorio y Juicios Orales por la Escuela Libre de Derecho. <br/><br/>
              Especialista en Derecho Penal por la Universidad Nacional Autónoma
              de México. <br/><br/> Cursó la Especialidad en Derecho Penal en la Escuela
              Libre de Derecho. <br/><br/> Se encuentra cursando el Máster Iberoamericano
              en Compliance de la Universidad de Salamanca, España.  <br/><br/>Ha cursado
              distintos diplomados, cursos y certificaciones tanto en México
              como en el extranjero en Sistema Penal Acusatorio, Técnicas de
              Litigación Oral, Delitos Electorales, Compliance, Lavado de
              Dinero, Delitos Fiscales, entre otros relacionados con la materia
              penal y procesal penal.
            </p>
          </v-flex>
          <v-flex class="flex2-cr" d-flex flex-column xs12 sm12 md6>
            <div class="cont-i-cr">
              <div class="img-cr"></div>
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
.sub-txt1-c {
  font-family: "Abhaya Libre", serif;
  font-size: 18px;
}
.txt-f {
  padding-right: 2rem;
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-align: justify;
}

.flex2-cr {
  justify-content: end;
}
.cont-i-cr {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-i-cr .img-cr {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/qs/carlos1.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease;
}
.cont-i-cr:hover .img-cr {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/qs/carlos2.jpg");
  background-size: 105%;
  background-position: center;
}
@media screen and (max-width: 768px) {
  .card-1 {
    width: 100%;
  }
  .flex2-cr {
    height: 100vh;
    justify-content: center;
  }
  h3 {
    padding-left: 1rem;
  }
  .sub-txt1-c {
    padding-left: 1rem;
  }
  .txt-f {
    padding-right: 1rem;
    font-size: 15px;
    padding-left: 1rem;
    text-align: justify;
  }
  .cont-i-cr .img-cr {
    transition: none;
  }
  .cont-i-cr:hover .img-cr {
    background-image: url("../../../assets/qs/carlos1.jpg");
    background-size: 100%;
  }
}
</style>
