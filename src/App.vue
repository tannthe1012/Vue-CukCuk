<template>
  <div id="app">
    <TheMenu />
    <TheHeader />
    <TheContent />
    <!-- <EmployeeDetail /> -->
  </div>
</template>

<script>
// import EmployeeDetail from "./view/dictionary/employee/EmployeeDetail.vue"
import TheMenu from "./components/layout/TheMenu.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheContent from "./components/layout/TheContent.vue";
export default {
  name: "App",
  components: {
    TheMenu,
    TheHeader,
    TheContent,
    // EmployeeDetail,
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

