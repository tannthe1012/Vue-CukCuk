<template>
  <div id="app">
    <TheMenu />
    <TheHeader />
    <router-view></router-view>
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
};
</script>

<style>
@import "./css/common/main.css";
@import "./css/page/employee.css";
#id {
  position: relative;
}
</style>

