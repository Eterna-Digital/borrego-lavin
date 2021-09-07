<template>
  <v-card
    class="header-cont ma-0 
    d-flex justify-center align-center"
    tile
    width="100vw"
    height="75vh"
    elevation="0"
  >
    <div
      class="dh d-flex flex-column align-center justify-end"
      style="position: absolute; z-index: 10"
    >
      <p class="">
        Borrego Lavín Abogados es un despacho jurídico especializado en <br />
        la atención integral de asuntos relacionados a la materia penal
      </p>

      <div class="d-flex justify-center mt-10 ml-5" style="width: 100%">
        <label class="custom-radio ">
          <input
            type="radio"
            @change="activeSection = 'comp1'"
            name="radio"
            value="Radio2"
            checked
          />
          <span class="radio"></span>
        </label>
        <label class="custom-radio">
          <input type="radio" @change="activeSection = 'comp2'" name="radio" />
          <span class="radio"></span>
        </label>
      </div>
      <div class="d-flex align-center flex-column mt-13" style="width: 100%">
        <img src="../../assets/down-arrow.svg" width="35" />
        <span class="line-header mt-3"></span>
      </div>
    </div>
    <div class="wrapper">
      <transition :name="transitionName">
        <component :is="activeSection"></component>
      </transition>
    </div>

    <!-- </div> -->
  </v-card>
</template>

<script>
import comp1 from "./comp1.vue";
import comp2 from "./comp2.vue";
export default {
  name: "Header",
  components: {
    comp1,
    comp2,
  },
  data: () => ({
    activeSection: "comp1",
    transitionName: "fade-in",
  }),
};
</script>

<style>
.dh {
  width: 100%;
  height: 100%;
}
.dh p {
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
  text-align: center;
  color: #f7f7f7;
}
.wrapper {
  position: relative;
  overflow: hidden;
  height: 75vh;
  width: 100vw;
}
.wrapper > * {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.fade-in-enter {
  opacity: 0;
}

.fade-in-enter-active {
  transition: all 0.8s ease-in-out;
}

.fade-in-enter-to {
  opacity: 1;
}

.fade-in-leave {
  opacity: 1;
}

.fade-in-leave-active {
  transition: all 0.8s ease-in-out;
}

.fade-in-leave-to {
  opacity: 0;
}

.section-leave-active,
.section-enter-active {
  transition: all 0.8s ease-in-out;
}
.section-enter {
  opacity: 0;
}
.section-leave-to {
  opacity: 100;
}
.v-radio .v-icon {
  color: #ffffff;
}
.custom-radio {
  cursor: pointer;
  display: block;
  margin: 0 0 21px;
  padding: 0 0 0 26px;
  position: relative;
}

.custom-radio input[type="radio"] {
  display: none;
}

.custom-radio span.radio {
  border-color: #ffffff;
  background: #85878a;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 8px;
  left: 0;
  margin: 0px;
  left: 0;
  position: absolute;
  top: 3px;
  width: 8px;
}

.custom-radio span.radio:after {
  border-radius: 50%;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  transform: scale(2);
  opacity: 0;
  transition: all 0.3s ease-in;
  width: 100%;
}

.custom-radio input[type="radio"]:checked + span.radio:after {
  background: #ffffff;
  border: solid 2px #85878a;
  box-shadow: 0px 0px 4px 0.7px rgba(234, 234, 234, 0.78);
  transform: scale(1);
  opacity: 1;
}

.custom-radio input[type="radio"]:disabled + span.radio,
.custom-checkbox input[type="checkbox"]:disabled + span.checkbox {
  cursor: not-allowed;
  opacity: 0.5;
}

.custom-radio input[type="radio"]:disabled + span.radio:after {
  transform: scale(1);
  opacity: 0.5;
}
.line-header {
  width: 1px;
  height: 50px;
  background-color: rgb(255, 255, 255);
}
@media screen and (max-width: 768px) {
  .container {
    max-width: 100%;
  }
  .dh p{
    text-justify: distribute;
    font-size: 1.2rem;
  }
}
</style>
