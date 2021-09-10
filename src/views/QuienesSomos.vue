<template>
   <v-container class="pa-0" fill style="width: 100%">
       <Header />
       <Sections/>
   </v-container>
</template>

<script>
import Header from "../components/QuienesSomos/Header.vue";
import Sections from "../components/QuienesSomos/Sections/Sections.vue"
export default {
    components: {
        Header,
        Sections,
    }
}
</script>

<style>

</style>