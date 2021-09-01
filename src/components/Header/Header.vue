<template>
  <v-card
    class="header-cont ma-0 
    d-flex flex-column justify-end align-center"
    tile
    width="100vw"
    height="70vh"
  >
    <div class="d-flex flex-column align-center justify-center mb-5">
      <div class="wrapper">
        <transition name="section">
          <component :is="activeSection"></component>
        </transition>
      </div>
      <div class="d-flex justify-center" style="width: 100%">
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
    </div>
    <div class="d-flex align-center flex-column mr-3 mt-10" style="width: 100%">
      <img src="../../assets/down-arrow.svg" width="35" />
      <span class="line-header mt-3"></span>
    </div>
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
  }),
};
</script>

<style>
.header-cont {
  background-image: url("../../assets/fondo section 1.png");
  background-size: cover;
}
.wrapper {
  position: relative;
  overflow: hidden;
  height: 25vh;
  width: 50vw;
}
.wrapper > * {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.section-leave-active,
.section-enter-active {
  transition: all 0.01s ease-in-out;
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
  height: 10px;
  left: 0;
  margin: 0px;
  left: 0;
  position: absolute;
  top: 3px;
  width: 10px;
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
@media (min-width: 960px) {
  .container {
    max-width: 100%;
  }
}
</style>
