<template>
  <div class="carousel-c">
    <div class="controls">
              <!-- <h1 class="pl-8 t-car caption" v-for="(link, i) in linksTitle" :key="i" :class="{ active: i == index  }" >{{ link.name }}</h1> -->
              <div class="btns ">
                <v-btn class="btn-c mr-3 mb-2" icon @click="prev">
                  <img
                    src="../../../assets/slider left control.svg"
                  />
                </v-btn>
                <v-btn class="btn-c mb-2" icon @click="next">
                  <img
                    src="../../../assets/slider right control.svg"
                  />
                </v-btn>
              </div>
            </div>
    <div class="carousel-panes" >
      <slot></slot>
    </div>
    
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    value: {
      type: Number,
      default: 0,

    },
  },
  data() {
    return {
      panes: [],
      activePane: 0,
      activeTitle: "",
      counter: 0,
      linksTitle: [
      { name: "CONSULTORÍA JURÍDICO PENAL" },
      { name: "LITIGIO PENAL" },
      { name: "AMPARO PENAL" },
      { name: "COMPLIANCE PENAL" },
      { name: "EXTRADICIÓN" },
    ],
    };
  },
  watch: {
    value(newVal) {
      if (this.panes[newVal] !== undefined) this.goToPage(newVal);
    }
  },
  computed: {
    ...mapState(["index"]),
  },
  mounted() {
    if (this.$slots.default.length) {
      this.$slots.default.forEach(pane => {
        pane.elm.style.display = "none";
        this.panes.push(pane);
      });
      this.panes[0].elm.style.display = "block";
    }
  },
  methods: {
    prev() {
      let newPane = this.activePane;
      if (this.activePane - 1 < 0) newPane = this.panes.length - 1;
      else newPane = this.activePane - 1;
      this.goToPage(newPane);
    },
    next() {
      let newPane = this.activePane;
      if (this.activePane + 1 >= this.panes.length) newPane = 0;
      else newPane = this.activePane + 1;
      this.goToPage(newPane);
    },
    goToPage(index) {
      this.panes[this.activePane].elm.style.display = "none";
      this.panes[index].elm.style.display = "block";
      this.activePane = index;
      this.$emit("input", index);
      this.$store.commit("INDEX", index);
    }
  }
};
</script>

<style>
.controls {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  border-bottom: 1.5px solid gray;
}
.controls .btns {
  display: flex;
  align-items: center;
}
.btn-c img{
  width: 30px;
}
.carousel-panes{
  margin-left: 2rem;
}
@media screen and (max-width: 768px) {
  .controls {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  border-bottom: 1.5px solid gray;
}
.btn-c img{
  width: 25px;
}
.carousel-panes{
  margin-left: 0rem;
}
}
</style>