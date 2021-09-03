<template>
  <div class="carousel-wrapper mt-1">
    <div class="controls">
      <h1 class="pl-12">Extradicion</h1>
      <div class="btns">
        <v-btn class="mr-3" icon @click="changeSlide(-1)">
          <img src="../../assets/slider left control.svg" width="30px" />
        </v-btn>
        <v-btn icon @click="changeSlide(1)">
          <img src="../../assets/slider right control.svg" width="30px" />
        </v-btn>
      </div>
    </div>
    <div class="carousel" :style="{ width, height }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["width", "height"],
  methods: {
    changeSlide(delta) {
      const carousel = this.$el.querySelector(".carousel");
      const width = carousel.offsetWidth;
      carousel.scrollTo(carousel.scrollLeft + width * delta, 0);
    },
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  border-bottom: 1.5px solid gray;
}
.carousel-wrapper {
  display: flex;
  flex-direction: column;
  /* background-color: gold; */
}
.controls {
  display: flex;
  justify-content: space-between;
  /* background-color: pink; */
  margin-bottom: 0.5rem;
  border-bottom: 1.5px solid gray;
}
.controls h1 {
  font-size: 2rem;
  font-family: "STIX Two Text", serif;
}
.controls .btns {
  display: flex;
  align-items: center;
}
.carousel > * {
  flex: 1 0 100%;
  scroll-snap-align: start;
}
</style>
