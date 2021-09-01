<template>
  <v-app-bar app elevation="0" color="#333F3D" dark>
    <div class="d-flex align-center ml-16">
      <v-img
        alt="Logo"
        class="shrink hidden-sm-and-down"
        contain
        src="../assets/bl_nav bar logo.svg"
        width="150"
      />
    </div>

    <v-spacer></v-spacer>
    <v-list
      color="transparent"
      class="list-nav d-flex justify-center align-center ma-0 mr-5"
    >
      <v-list-item class="btn-six-container-home">
        <p class="contact-bbtn text-caption mt-3 font-weight-light">
          DESPACHO
        </p>
      </v-list-item>
      <v-list-item class="btn-six-container-home">
        <p class="contact-bbtn text-caption mt-3 font-weight-light">
          COMPLIANCE
        </p>
      </v-list-item>
      <v-list-item class="btn-six-container-home">
        <p class="contact-bbtn text-caption mt-3 font-weight-light">
          ¿QUIÉNES SOMOS?
        </p>
      </v-list-item>
      <v-list-item class="ma-0 ml-4 pa-0">
        <v-btn outlined tile small class="btn-nav mb-1">
          CONTACTO
        </v-btn>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.list-nav {
  list-style-type: none;
  cursor: pointer;
  z-index: 30;
}
.btn-six-container-home {
  display: flex;
  align-items: center;
  text-decoration: none;
  background-image: linear-gradient(#f7f7f7, #f7f7f7);
  background-size: 0 1px, auto;
  background-repeat: no-repeat;
  background-position: center bottom 12px;
  transition: all 0.2s ease-in;
}
.btn-six-container-home .contact-bbtn {
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  color: #f7f7f7;
  width: 10vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  outline: none;
  z-index: 30;
}
.btn-six-container-home:hover {
  background-size: calc(80% - 0em) 1px, auto;
}
.btn-nav {
  font-family: "Montserrat", sans-serif;
  color: "#F7F7F7";
  background-color: transparent;
}
.btn-nav:hover {
  background-color: #000000;
}
</style>
