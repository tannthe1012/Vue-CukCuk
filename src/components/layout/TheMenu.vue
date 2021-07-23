<template>
  <div class="navbar">
    <div class="navbar-content">
      <router-link
        class="nav-item"
        v-for="(item, index) in menuList"
        :key="index"
        :to="item.route"
        :class="{ 'menu-active': index == indexSelected }"
        @click.native="updateMenu(index)"
      >
        <div class="nav-item-icon" :class="[item.icon,{'icon-menu-active': index == indexSelected}]" ></div>
        <div class="nav-item-content" :class="[{'content-active': index == indexSelected}]">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheMenu",
  data() {
    return {
      indexSelected: 4,
      val: true,
      minimenu: Boolean,
      menuList: [
        {
          text: "Tổng quan",
          icon: "icon-dashboard",
          route: "/dashboard",
        },
        {
          text: "Báo cáo",
          icon: "icon-report",
          route: "/report",
        },
        {
          text: "Mua hàng",
          icon: "icon-purchase",
          route: "/purchase",
        },
        {
          text: "Danh sách khách hàng",
          icon: "icon-customer",
          route: "/customer",
        },
        {
          text: "Danh sách nhân viên",
          icon: "icon-employee",
          route: "/employee",
        },
        {
          text: "Cài đặt",
          icon: "icon-setting",
          route: "/setting",
        },
      ],
    };
  },
  watch: {
    minimenu: function() {
      this.minimenu = this.mini;
    }
  },
  props: {
    mini: Boolean,
  },
  methods: {
    /**
     * Hàm update lại menu được active
     * Created By: NTTan (22/7/2021)
     */
    updateMenu(index) {
      this.indexSelected = index;
    },
  },
};
</script>
<style lang="css" scoped>
@import "../../css/common/navbar.css";
.icon-setting {
  background-image: url("../../assets/icon/dashboard.png");
}
.icon-dashboard {
  background-image: url("../../assets/icon/dashboard.png");
}
.icon-report {
  background-image: url("../../assets/icon/report.png");
}
.icon-employee {
  background-image: url("../../assets/icon/dic-employee.png");
}
.icon-customer {
  background-image: url("../../assets/icon/dic-employee.png");
}
.icon-purchase {
  background-image: url("../../assets/icon/dashboard.png");
}
</style>