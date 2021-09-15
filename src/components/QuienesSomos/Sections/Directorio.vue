<template>
  <v-card
    width="100%"
    color="#F7F7F7"
    elevation="0"
    class="d-flex flex-column align-center"
  >
    <v-card elevation="0" color="#F7F7F7" class="card1-qs mt-15 mb-12">
      <v-container
        class="cont1-qs d-flex flex-column align-center ma-0 pa-0"
        fluid
        grid-list-md
        wrap
      >
        <h3 class="h3-q mb-4">DIRECTORIO</h3>
        <v-layout row wrap d-flex justify-center class="lay-qs">
          <v-flex
            style="background: #F7F7F7"
            d-flex
            flex-column
            justify-center
            xs12
            sm12
            md6
          >
            <v-list class="ma-0 pa-0" style="background: #F7F7F7">
              <v-list-item class="d-flex flex-column align-start ma-0 pa-0">
                <h5 class="h-q mb-4">FELIPE BORREGO FÉLIX</h5>
                <h5 style="color:#D3A876" class="h-q mb-4">SOCIO</h5>
              </v-list-item>
              <v-list-item class="d-flex flex-column align-start ma-0 pa-0">
                <h5 class="h-q mb-4">LUIS MIGUEL LAVÍN SANTACRUZ</h5>
                <h5 style="color:#D3A876" class="h-q mb-4">SOCIO</h5>
              </v-list-item>
              <v-list-item class="d-flex flex-column align-start ma-0 pa-0">
                <h5 class="h-q mb-4">CARLOS CÉSAR ÁLVAREZ ROMÁN</h5>
                <h5 style="color:#D3A876" class="h-q mb-4">SOCIO</h5>
              </v-list-item>
            </v-list>
          </v-flex>
          <v-flex class="flex-2" xs12 sm12 md6>
            <v-list class="ma-0 pa-0" style="background: #F7F7F7">
              <v-list-item class="d-flex flex-column align-start ma-0 pa-0">
                <h5 class="h-q mb-4 pl-0">SANTIAGO D.PÉREZ ALBARRÁN</h5>
                <h5 style="color:#D3A876" class="h-q mb-4 pl-0">ASOCIADO</h5>
              </v-list-item>
              <v-list-item class="d-flex flex-column align-start ma-0 pa-0">
                <h5 class="h-q mb-4 pl-0">FIDEL ÁNGEL ESCAMILLA SOSA</h5>
                <h5 style="color:#D3A876" class="h-q mb-4 pl-0">ASISTENTE LEGAL</h5>
              </v-list-item>
              <v-list-item class="d-flex flex-column align-start ma-0 pa-0">
                <h5 class="h-q mb-4 pl-0">MAURICIO IBARRA GARRIDO</h5>
                <h5 style="color:#D3A876" class="h-q mb-4 pl-0">ASISTENTE LEGAL</h5>
              </v-list-item>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.card1-qs {
  width: 80% !important;
}
.lay-qs {
  width: 70%;
}
.cont1-qs {
  margin-left: 2rem;
}
.h3-q {
  padding: 5% 0 5% 0;
  width: 69%;
}
.h3-q,
.h-q {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1px;
}
.flex-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
}
@media screen and (max-width: 768px) {
  .h3-q {
    width: 85%;
  }
  .h-q {
    margin: 0;
    padding-left: 0;
  }
  .lay-qs {
    width: 100%;
  }
  .flex-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
}
</style>
