<template>
  <div class="carousel-c">
    <div class="controls">
              <h1 class="pl-8" style="color: transparent">Extradicion</h1>
              <div class="btns">
                <v-btn class="mr-3" icon @click="prev(index)">
                  <img
                    src="../../assets/slider left control.svg"
                    width="30px"
                  />
                </v-btn>
                <v-btn icon @click="next(index)">
                  <img
                    src="../../assets/slider right control.svg"
                    width="30px"
                  />
                </v-btn>
              </div>
            </div>
    <div class="carousel-panes ml-8" >
      <slot></slot>
    </div>
    
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      panes: [],
      activePane: 0
    };
  },
  watch: {
    value(newVal) {
      if (this.panes[newVal] !== undefined) this.goToPage(newVal);
    }
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
    prev(index) {
      let newPane = this.activePane;
      if (this.activePane - 1 < 0) newPane = this.panes.length - 1;
      else newPane = this.activePane - 1;
      this.goToPage(newPane);
       this.$store.commit("INDEX", index);
    },
    next(index) {
      let newPane = this.activePane;
      if (this.activePane + 1 >= this.panes.length) newPane = 0;
      else newPane = this.activePane + 1;
      this.goToPage(newPane);
      this.$store.commit("INDEX", index);
    },
    goToPage(index) {
      this.panes[this.activePane].elm.style.display = "none";
      this.panes[index].elm.style.display = "block";
      this.activePane = index;
      this.$emit("input", index);
    }
  }
};
</script>

<style>
.controls {
  width: 100%;
  height: 3rem;
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
</style>