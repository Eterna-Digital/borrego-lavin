<template>
  
  <div class="comp2">
  </div>
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
  background-image: url("../../assets/carrusel-entrada-2-imagem.jpg");
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  /* transition: all 0.1s ease; */
}
.comp2:hover{
  background-size: 105%;
  background-position: center;
}
/* .comp2 p {
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
  text-align: center;
  color: #f7f7f7;
} */
</style>
