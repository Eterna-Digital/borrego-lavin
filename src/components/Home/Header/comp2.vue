<template>
  <div class="comp2"></div>
</template>

<script>
export default {
  name: "comp2",
};
</script>

<style scoped>
.comp2 {
  width: 100vw;
  height: 75vh;
  background-image: url("../../../assets/carrusel-entrada-2-imagem.jpg");
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
}
@media screen and (max-width: 768px) {
  .comp2{
    background-size: cover;
  }
}
</style>
