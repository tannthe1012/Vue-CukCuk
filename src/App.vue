<template>
  <div id="app">
    <EmployeePage/>
  </div>
</template>

<script>
import EmployeePage from './view/dictionary/employee/EmployeePage.vue'
export default {
  name: 'App',
  components: {
    EmployeePage
  }
}
</script>

<style>
  @import './css/common/main.css';
</style>
