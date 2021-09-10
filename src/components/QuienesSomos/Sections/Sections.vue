<template>
  <v-container class="pa-0 d-flex flex-column" fill style="width: 100%">
    <Directorio />
    <Felipe />
    <LuisMiguel />
    <Carlos />
    <Santiago />
  </v-container>
</template>

<script>
import Directorio from "./Directorio.vue";
import Felipe from "./Felipe.vue";
import LuisMiguel from "./LuisMiguel.vue";
import Carlos from "./Carlos.vue";
import Santiago from "./Santiago.vue";

export default {
  components: {
    Directorio,
    Felipe,
    LuisMiguel,
    Carlos,
    Santiago,
  },
};
</script>

<style></style>
