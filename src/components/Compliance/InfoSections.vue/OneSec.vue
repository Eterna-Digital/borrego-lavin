<template>
  <v-card width="100%" elevation="0" class="d-flex flex-column align-center">
    <v-card elevation="0" class="card-1 mt-15 mb-12">
      <v-container
        class="cont-one-cmp d-flex justify-center ma-0 pa-0"
        fluid
        grid-list-md
        wrap
      >
        <v-layout row wrap d-flex justify-center>
          <v-flex d-flex flex-column justify-center xs12 sm12 md6>
            <h3 class="mb-4">COMPLIANCE PENAL</h3>
            <h4 class="sub-txt1-c font-weight-bold mb-4 mt-5">
              Adopción de una cultura empresarial
            </h4>
            <p class="txt-info1-c ma-0 mt-5 mb-10">
              El <b>Compliance Penal</b>, como modelo, podemos definirlo como la
              adopción de una cultura empresarial de cumplimiento normativo,
              cuya finalidad es evitar cualquier tipo de riesgo o comisión de
              hechos con apariencia de delito a nombre, por cuenta o en
              beneficio de la empresa.
            </p>
          </v-flex>
          <v-flex class="flex2-1-cmp" d-flex flex-column xs12 sm12 md6>
            <div class="cont-i-cmp">
              <div class="img-c"></div>
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
.card-1{
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
.txt-info1-c {
  padding-right: 2rem;
  font-family: "Abhaya Libre", serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-align: justify;
}

.flex2-1-cmp {
  justify-content: end;
}
.cont-i-cmp {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cont-i-cmp .img-c {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/compl/2-2.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease;
}
.cont-i-cmp:hover .img-c {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/bn/asset-1.jpg");
  background-size: 105%;
  background-position: center;
}
@media screen and (max-width: 768px) {
  .card-1 {
    width: 100%;
  }
  .flex2-1-cmp {
    height: 30vh;
    justify-content: center;
  }
  h3 {
    padding-left: 1rem;
  }
  .sub-txt1-c {
    padding-left: 1rem;
  }
  .txt-info1-c {
    padding-right: 1rem;
    font-size: 15px;
    padding-left: 1rem;
    text-align: justify;
  }
  .cont-i-cmp .img-c {
    transition: none;
  }
  .cont-i-cmp:hover .img-c {
    background-image: url("../../../assets/compl/2-2.jpg");
    background-size: 100%;
  }
}
</style>
