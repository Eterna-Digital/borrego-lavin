<template>
<v-container class="pa-0" fill style="width: 100%">
  <Header/>
  <Information/>
</v-container>
</template>

<script>
import Header from '../components/Compliance/Header.vue'
import Information from '../components/Compliance/InfoSections.vue/Information.vue'

export default {
  components: {
    Header,
    Information,
  }

}
</script>

<style>
.cont-comp{
  background-color: red;
}
</style>