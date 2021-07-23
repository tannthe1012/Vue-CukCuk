<template>
  <div class="paging-bar">
    <div class="paging-contentleft">
      Hiển thị <span style="font-weight: 1000">01-18/100</span> Lao động
    </div>
    <div class="page-navigations">
      <div class="m-btn btn-firstpage"></div>
      <div class="m-btn btn-prev-page"></div>
      <ul v-for="number in listPage" :key="number">
        <li>
          <a href="#" :class="{ active: number == currentPage }">{{
            number
          }}</a>
        </li>
      </ul>
      <div class="m-btn btn-next-page"></div>
      <div class="m-btn btn-lastpage"></div>
    </div>
    <div class="paging-contentright">
      <span style="font-weight: 1000">18</span> nhân viên/trang
    </div>
  </div>
</template>
<script>
export default {
  name: "BasePagination",
  data() {
    return {
      currentPage: 1,
      listPage: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    renderList(number) {
      this.listPage = [];
      for (let i = 1; i <= 6; i++) {
        if (number + i > this.$store.state.Pagination.totalPage) {
          break;
        }
        this.listPage.push(number+i);

      }
    },
  },
};
</script>
<style scoped>
@import "../../css/common/colab.css";
</style>