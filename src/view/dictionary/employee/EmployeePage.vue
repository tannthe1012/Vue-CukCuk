<template>
  <div>
    <EmployeeList
      @showFormDetail="showForm"
      @showDataFormDetail="showDataFormDetail"
    />
    <EmployeeDetail v-show="isShow" @closeForm="closeFormDetail" v-bind:EmployeeDetail="employeeDetail"/>
  </div>
</template>
<script>
import EmployeeDetail from "./EmployeeDetail.vue";
import EmployeeList from "./EmployeeList.vue";
// import BasePopup from '../../../components/base/BasePopup.vue'
// import BaseToast from '../../../components/base/BaseToast.vue'
export default {
  name: "EmployeePage",
  data() {
    return {
      isShow: false,
      employeeDetail: {},
    };
  },
  components: {
    EmployeeDetail,
    EmployeeList,
  },
  methods: {
    showForm: function () {
      this.isShow = true;
      this.employeeDetail = {};
    },
    closeFormDetail: function () {
      this.isShow = false;
    },
    showDataFormDetail: function (employee) {
      this.isShow = true;
      this.employeeDetail = employee;
    },
  },
};
</script>
<style scoped>
</style>
