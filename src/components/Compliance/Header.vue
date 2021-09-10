<template>
  <v-card
    class="header-compl ma-0 pa-0
    d-flex justify-center align-center"
    tile
    width="100vw"
    height="75vh"
    elevation="0"
  >
    <div
      class="dh-c d-flex flex-column align-center justify-end"
      style="position: absolute; z-index: 10"
    >
      <h3 class="h3-h mb-10" style="color: #fff; letter-spacing: 8px">
        COMPLIANCE PENAL
      </h3>
      <div class="d-flex align-center flex-column mt-16" style="width: 100%">
        <img src="../../assets/down-arrow.svg" width="35" />
        <span class="line-header mt-3"></span>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {};
</script>

<style>
.header-compl {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.dh-c {
  width: 100vw;
  height: 100%;
  background-image: url("../../assets/compl/header-2.png");
  background-size: cover;
  background-position: center;
}
.dh-c p {
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
  text-align: justify !important;
  text-justify: distribute-all-lines;
  color: #f7f7f7;
}
@media screen and (max-width: 768px) {
  .h3-h {
    font-size: 1rem;
    padding: 0;
  }
}
</style>
