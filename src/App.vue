<template>
  <div id="app">
    <TheHeader @menuMini="menuMini"/>
    <div id="main">
      <TheMenu :class="{'minimenu':mini}" v-bind:mini="mini"/>
      <router-view :mini="mini"></router-view>
    </div>
  </div>
</template>

<script>
import TheMenu from "./components/layout/TheMenu.vue";
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheMenu,
    TheHeader,
  },
  data() {
    return {
      mini: false,
    }
  },
  methods: {
    menuMini() {
      this.mini = !this.mini;
    }
  }
};
</script>

<style>
@import "./css/common/main.css";
@import "./css/page/employee.css";
#id {
  position: relative;
}
#main {
  display: flex;
}
</style>

