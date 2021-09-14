<template>
  <v-container class="d-flex flex-column align-center mt-15 mb-10">
    <h3 class="h3-h mb-10">
      ESTAMOS PARA AYUDARTE
    </h3>
    <v-card width="50%" class="mb-10" elevation="0" color="#F7F7F7">
      <v-form v-model="valid">
        <v-container>
          <v-col>
            <v-col cols="12" md="12">
              <v-text-field
               class="caption"
                v-model="fullName"
                :rules="nameRules"
                label="Nombre"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-text-field
                v-model="phone"
                :rules="nameRules"
                label="Teléfono"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-text-field
                v-model="asunto"
                :rules="nameRules"
                label="Asunto"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-textarea
                v-model="comment"
                clearable
                rows="4"
                row-height="30"
                clear-icon="mdi-close-circle"
                label="Comentario"
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="12">
              <v-btn @click="saveForm" block elevation="0" color="#444343">
                <p class="ma-0 font-weight-light" style="color: #fff">ENVIAR</p>
              </v-btn>
            </v-col>
          </v-col>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [(v) => !!v || "* este campo es requerido"],
    email: "",
    asunto: "",
    comment: "",
    emailRules: [(v) => !!v || "* este campo es requerido"],
  }),
  methods: {
      saveForm(){
          const payload = {
              fullName: this.fullName,
              phone: this.phone,
              asunto: this.asunto,
              email: this.email,
              comment: this.comment
          }
          console.log(payload)
      }
  }
};
</script>

<style></style>
