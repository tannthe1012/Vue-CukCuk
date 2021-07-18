<template>
  <div>
    <TheContent/>
    <EmployeeDetail/>
  </div>
</template>
<script>
import TheContent from '../../../components/layout/TheContent.vue'
import EmployeeDetail from '../employee/EmployeeDetail.vue'
export default {
  name: "EmployeePage",
  components: {
    EmployeeDetail,
    TheContent,
  }
};
</script>
<style scoped>
</style>
