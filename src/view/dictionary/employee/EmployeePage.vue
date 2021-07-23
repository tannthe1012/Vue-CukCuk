<template>
  <div class="content" :class="{'contentExpand': mini}">
    <div class="header-content">
      <div class="title">Danh sách nhân viên</div>
      <div class="content-feature">
        <button
          class="m-btn m-btn-default"
          id="btn-add-employee"
          v-on:click="addEmployee"
        >
          <div class="m-btn-icon icon-add"></div>
          <div class="btn-text">Thêm Nhân Viên</div>
        </button>
      </div>
    </div>
    <div class="filter-bar">
      <div class="filter-left">
        <input
          class="icon-search"
          type="text"
          placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
          style="padding-left: 40px; width: 250px"
        />
        <div class="dropdown">
          <BaseComboBox
            v-bind:item="position"
            v-bind:valueInput="optionAll[0].name"
            v-bind:optionAll="optionAll[0]"
          />
        </div>
        <div class="dropdown">
          <BaseComboBox
            v-bind:item="department"
            v-bind:valueInput="optionAll[1].name"
            v-bind:optionAll="optionAll[1]"
          />
        </div>
      </div>
      <div class="filter-right">
        <button
          class="m-btn-refresh m-second-button"
          id="btn-refresh"
          @click="refreshData"
        ></button>
      </div>
    </div>
    <BaseGrid
      @showFormDetail="showFormDetail"
      @openContextMenu="openContextMenu"
      @showDataFormDetail="showDataFormDetail"
      @showPopupDelete="showPopupDelete"
    />

    <BasePagination />
    <EmployeeDetail
      v-if="isShowFormDetail"
      v-bind:EmployeeDetail="employeeDetail"
      v-bind:department="department"
      v-bind:position="position"
      @showPopupCloseForm="showPopupCloseForm"
      @saveOnClick="saveOnClick"
    />
    <BasePopup
      v-show="isShowPopup"
      v-bind:dataPopup="dataPopup"
      @confirmPopup="confirmPopup"
      @closePopup="closePopup"
    />
    <div id="toast">
      <BaseToast
        v-for="toast in this.$store.state.Toast"
        :key="toast.id"
        v-bind:toast="toast"
      />
    </div>
  </div>
</template>

<script>
import EmployeeDetail from "./EmployeeDetail.vue";
import BaseComboBox from "../../../components/base/BaseComboBox.vue";
import BasePopup from "../../../components/base/BasePopup.vue";
import BaseToast from "../../../components/base/BaseToast.vue";
import BaseGrid from "../../../components/base/BaseGrid.vue";
import BasePagination from "../../../components/base/BasePagination.vue";
import { toast } from "../../../mixins/mixin.js";
import { api } from "../../../mixins/api.js";
export default {
  name: "EmployeePage",
  mixins: [toast, api],
  // mixins: [api],
  components: {
    BasePagination,
    EmployeeDetail,
    BasePopup,
    BaseComboBox,
    BaseToast,
    BaseGrid,
  },
  data() {
    return {
      dataPopup: {
        icon: String,
        title: String,
        buttonText: String,
      },
      optionAll: [
        { id: "0", name: "Tất cả vị trí" },
        { id: "0", name: "Tất cả phòng ban" },
      ],
      valueCbx: "",
      statusPopup: "",
      isShowPopup: false,
      isShowFormDetail: false,
      employeeDetail: {},
      department: [],
      position: [],
    };
  },
  props: {
    mini: Boolean,
  },
  async created() {
    await this.getAllEmployee();
    await this.getDepartment();
    this.department = this.$store.state.department;
    await this.getPosition();
    this.position = this.$store.state.position;
  },
  methods: {
    /**
     * Hàm để show Form Thông tin nhân viên trống
     * Created By: NTTan (15/7/2021)
     */
    addEmployee: function () {
      this.employeeDetail = { PositionName: "", DepartmentName: "" };
      this.isShowFormDetail = true;
    },
    /**
     * Hiển thị form Detail với sự kiện chọn DBlCLICK
     * Created By: NTTan (15/7/2021)
     */
    showFormDetail(employee) {
      this.employeeDetail = { ...employee };
      this.isShowFormDetail = true;
    },

    /**
     * Hàm để hiện cái context Menu
     * Created By: NTTan (16/7/2021)
     */
    openContextMenu(employee) {
      this.employeeDetail = { ...employee };
    },
    /**
     * Hàm xử lí sự kiện với nút X trong form
     * Created By: NTTan  (16/7/2021)
     */
    showPopupCloseForm() {
      this.statusPopup = "CLOSE";
      this.dataPopup.icon = `<i class="fas fa-exclamation-triangle"></i>`;
      this.dataPopup.title = `Bạn có chắc muốn Đóng Form trên hay không`;
      this.dataPopup.buttonText = `Đóng`;
      this.isShowPopup = true;
      this.viewMenu = false;
    },

    /**
     * Hàm show form khi chọn nút Sửa trong context menu
     * Created By:NTTan (16/7/2021)
     */
    showDataFormDetail() {
      this.isShowFormDetail = true;
    },
    /**
     * Hàm xử lí sự kiện khi nhấn nút LƯU trong form
     * Created By: NTT(17/7/2021)
     */
    saveOnClick(employee) {
      if (employee.EmployeeId == undefined) {
        console.log(employee);
        this.postEmployee(employee);
      } else {
        this.putEmployee(employee);
      }
      this.isShowFormDetail = false;
    },
    /**
     * Hiện popup delete
     * Created By: NTTan (19/7/2021)
     */
    showPopupDelete() {
      this.statusPopup = "DELETE";
      this.dataPopup.icon = `<i class="fas fa-exclamation-triangle"></i>`;
      this.dataPopup.title = `Bạn có chắc muốn Xóa bản ghi trên hay không`;
      this.dataPopup.buttonText = `Xoá`;
      this.isShowPopup = true;
      this.viewMenu = false;
    },
    /**
     * Hàm xử lí confirm Delete
     * Created By: NTTan (19/7/2021)
     */
    confirmPopup() {
      this.isShowPopup = false;
      if (this.statusPopup == "DELETE") {
        this.deleteEmployee(this.employeeDetail.EmployeeId);
      } else {
        this.isShowFormDetail = false;
        this.addToast("success", "Bạn đã đóng Form thành công");
      }
      this.employeeDetail = {};
    },
    /**
    Hàm xử lí sự kiện đóng popup
    Created By: NTTan (19/7/2021)
     */
    closePopup() {
      this.isShowPopup = false;
    },
    /**
     *  Hàm xử lý refresh Data Api
     * Created By: NTTan (19/7/2021)
     */
    refreshData() {
      this.$store.state.employeeList = [];
      setTimeout(() => {
        this.getAllEmployee();
      }, 2000);
    },
  },
};
</script>
<style lang="css" scoped>
@import "../../../css/common/content.css";
@import "../../../css/common/loading.css";
@import "../../../css/common/toast.css";
</style>