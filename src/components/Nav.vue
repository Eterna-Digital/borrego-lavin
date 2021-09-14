<template>
  <v-card color="#333F3D" tile width="100vw">
    <v-navigation-drawer
      class="d-flex align-center pl-5"
      style="z-index: 20; heigth: 100vh; width: 100vw; background: #333F3D"
      v-model="sidebar"
      app
    >
      <div class="d-flex justify-end pt-6 pr-6">
        <v-btn icon small @click="clear"
          ><v-icon color="white">mdi-close</v-icon></v-btn
        >
      </div>
      <div
        class="d-flex flex-column justify-center"
        style="width: 100vw; height: 100vh"
      >
        <v-list class="d-flex flex-column">
          <v-list-item>
            <div class="mb-10 img-nav" style="width: 100%; height: 10vh">
              <v-img
                alt="Logo"
                contain
                src="../assets/bl_nav bar logo.svg"
                width="200"
              />
            </div>
          </v-list-item>
          <v-list-item>
            <v-btn text class="btn-six-container-home">
              <router-link to="/" style="text-decoration: none">
                <p class="contact-bbtn text-caption mt-3 font-weight-light">
                  DESPACHO
                </p>
              </router-link>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text class="btn-six-container-home">
              <router-link to="/compliance" style="text-decoration: none">
                <p class="contact-bbtn text-caption mt-3 font-weight-light">
                  COMPLIANCE
                </p>
              </router-link>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text class="btn-six-container-home">
              <router-link to="/quienes-somos" style="text-decoration: none">
                <p class="contact-bbtn text-caption mt-3 font-weight-light">
                  ¿QUIÉNES SOMOS?
                </p>
              </router-link>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <div class="ma-0 ml-0 mt-10 pa-0">
              <v-btn outlined tile small class="btn-navc mb-1">
                CONTACTO
              </v-btn>
            </div>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-toolbar app color="#333F3D">
      <span class="hidden-sm-and-up">
        <v-btn icon @click="sidebar = !sidebar"
          ><v-icon color="white">mdi-menu</v-icon>
        </v-btn>
      </span>
      <v-toolbar-title>
        <div class="img-nav d-flex align-center ">
          <v-img
            alt="Logo"
            class=" shrink hidden-sm-and-down"
            contain
            src="../assets/bl_nav bar logo.svg"
            width="150"
          />
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only mr-6">
        <v-btn text class="btn-six-container-home">
          <router-link to="/" style="text-decoration: none">
            <p class="contact-bbtn text-caption mt-3 font-weight-light">
              DESPACHO
            </p>
          </router-link>
        </v-btn>
        <v-btn text class="btn-six-container-home">
          <router-link to="/compliance" style="text-decoration: none">
            <p class="contact-bbtn text-caption mt-3 font-weight-light">
              COMPLIANCE
            </p>
          </router-link>
        </v-btn>
        <v-btn text class="btn-six-container-home">
          <router-link to="/quienes-somos" style="text-decoration: none">
            <p class="contact-bbtn text-caption mt-3 font-weight-light">
              ¿QUIÉNES SOMOS?
            </p>
          </router-link>
        </v-btn>
        <div class="ma-0 mt-4 pa-0 ml-3">
          <router-link to="/contacto" style="text-decoration: none">
          <v-btn outlined tile small class="btn-nav mb-1">
            CONTACTO
          </v-btn>
          </router-link>
        </div>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Nav",
  data: () => ({
    sidebar: false,
  }),
  methods: {
    clear() {
      if (this.sidebar == true) {
        this.sidebar = false;
      }
    },
  },
};
</script>

<style scoped>
.list-nav {
  list-style-type: none;
  cursor: pointer;
  z-index: 30;
}
.img-nav {
  margin-left: 3rem;
}
.btn-six-container-home {
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  color: #ffffff !important;
  background-color: transparent;
}
.btn-nav:hover {
  color: rgb(0, 0, 0) !important;
  background-color: #ffffff;
}
@media screen and (max-width: 768px) {
  .img-nav {
    margin-left: 1rem;
  }
  .contact-bbtn {
    justify-content: flex-start !important;
    width: 40vw !important;
    font-size: 0.6rem !important;
  }
  .btn-navc {
    margin-left: 1rem;
    font-family: "Montserrat", sans-serif;
    color: white !important;
    background-color: transparent;
  }
  .btn-six-container-home {
    justify-content: start !important;
    background-image: none !important;
    transition: none;
  }
  .btn-six-container-home:hover {
    background-size: 0;
  }
  .btn-six-container-home:hover .contact-bbtn {
    color: #d3a876 !important;
  }
}
</style>
