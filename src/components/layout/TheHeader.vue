<template>
  <div style="display: flex">
    <div class="logo-site">
      <div class="logo-box">
        <div class="toggle-icon" @click="menuMini"></div>
        <div class="amis-logo"></div>
      </div>
    </div>
    <div class="header">
      <div class="header-dropdown">
        <div class="header-dropdown-content">Nhà Hàng Biển Đông</div>
        <img src="../../assets/icon/icondropdown.png" alt="Alternate Text" />
      </div>
      <div class="header-right">
        <div class="header-right-icon icon-bell"></div>
        <div class="header-right-avatar"></div>
        <div class="header-right-content">Ngô Thế Tấn</div>
        <div class="header-right-icon icon-option"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheHeader",
  methods: {
      menuMini() {
          this.$emit("menuMini");
      }
  }
};
</script>


<style lang="css" scoped>
@import "../../css/common/header.css";
</style>

