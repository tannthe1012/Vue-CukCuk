<template>
  <div>
    <TheMenu />
    <TheHeader />
    <TheContent
      @showFormDetail="showForm"
      @showDataFormDetail="showDataFormDetail"
      
    />
  </div>
</template>

<script>
import TheHeader from "../../../components/layout/TheHeader.vue";
import TheMenu from "../../../components/layout/TheMenu.vue";
import TheContent from "../../../components/layout/TheContent.vue";
export default {
  name: "EmployeeList",
  
  components: {
    TheHeader,
    TheMenu,
    TheContent,
  },
  methods: {
    showForm() {
      this.$emit("showFormDetail");
    },
    showDataFormDetail(employee) {
      this.$emit("showDataFormDetail",employee);
    },
  },
};
</script>

<style>

</style>