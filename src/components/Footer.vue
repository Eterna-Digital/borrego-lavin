<template>
  <v-footer color="#333F3D" class="ftr pt-5" padless>
    <v-row justify="center" no-gutters>
      <v-container
        class="d-flex justify-center align-center"
        fluid
        grid-list-md
        wrap
      >
        <v-layout class="layout" row wrap d-flex justify-center align-center>
          <v-flex class="img" d-flex justify-center xs12 sm12 md3>
            <img src="../assets/bl_footer logo.svg" width="90px" />
          </v-flex>
          <v-flex d-flex justify-center xs12 sm12 md3>
            <div class="cont-f d-flex flex-column">
              <p class="p">ÁREAS DE PRÁCTICA</p>
              <ul>
                <li class="mb-2">Consultoría Jurídico Penal</li>
                <li class="mb-2">Litigio penal</li>
                <li class="mb-2">Amparo Penal</li>
                <li class="mb-2">Compliance penal</li>
                <li class="mb-2">Extradición</li>
              </ul>
            </div>
          </v-flex>
          <v-flex d-flex justify-center xs12 sm12 md3>
            <div class="cont-f d-flex flex-column">
              <p>CONTACTO</p>
              <ul>
                <li class="mb-2">Tel. 5559298224</li>
                <li>
                  Amatlán 40 BIS <br />Condesa <br />CP 06140 <br />
                  Cuauhtémoc, CDMX
                </li>
              </ul>
            </div>
          </v-flex>
          <v-flex d-flex justify-center xs12 sm12 md3>
            <div class="cont-f d-flex flex-column">
              <p>NOSOTROS</p>
              <ul>
                <li class="mb-8">
                  Somos un nuevo despacho jurídico <br />
                  especializado en la atención <br />
                  integral de asuntos relacionados a <br />
                  la materia penal.
                </li>
                <router-link to="/privacy" style="text-decoration: none"
                  ><li class="privacy" style="text-decoration-line: underline;">AVISO DE PRIVACIDAD</li></router-link
                >
              </ul>
            </div>
          </v-flex>
        </v-layout>
      </v-container>

      <v-col
        color="#333F3D"
        class="mt-12 lighten-2 py-4 text-center white--text"
        cols="12"
      >
        <div class="d-flex justify-center align-center">
          <v-icon color="#959595" x-small class="mr-2">mdi-copyright</v-icon>
          <p style="color: #959595" class="caption ma-0 pa-0">
            {{ new Date().getFullYear() }} Borrego Lavín
          </p>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.cont-f {
  width: 100%;
  height: 100px;
}
.cont-f p {
  font-size: 11px;
  font-weight: lighter;
  color: #f8f8f8;
}
.cont-f ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0;
  padding: 0;
}
.cont-f ul li {
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 10px;
  color: #f8f8f8;
  text-align: justify;
}
.privacy:hover {
  color: #d3a876;
}
@media screen and (max-width: 768px) {
  .ftr {
    margin-top: 10%;
  }
  .img {
    padding: 5% 40% 10% 0 !important;
  }
  .cont-f {
    width: 70%;
    margin-bottom: 3rem;
  }
  .cont-f p {
    font-size: 11px;
    font-weight: lighter;
    color: #f8f8f8;
  }
  .cont-f ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0;
    padding: 0;
  }
  .cont-f ul li {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 10px;
    color: #f8f8f8;
  }
  .privacy:hover {
  color: #d3a876;
}
}
</style>
