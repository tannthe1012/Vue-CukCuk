<template>
  <div class="grid gird-employee">
    <table style="width: 100%; table-layout: fixed" cellspacing="0">
      <colgroup>
        <col style="width: 120px" />
        <col style="width: 200px" />
        <col style="width: 150px" />
        <col style="width: 180px" />
        <col style="width: 180px" />
        <col style="width: 250px" />
        <col style="width: 150px" />
        <col style="width: 250px" />
        <col style="width: 180px" />
        <col style="width: 150px" />
        <col style="width: 150px" />
        <col style="width: 200px" />
      </colgroup>
      <thead>
        <tr>
          <th>Mã nhân viên</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th class="text-align-center">Ngày sinh</th>
          <th>Số CMTND/Căn cước</th>
          <th>Địa chỉ</th>
          <th>Điện thoại</th>
          <th>Email</th>
          <th>Chức vụ</th>
          <th>Phòng ban</th>
          <th style="text-align: right">Mức lương cơ bản</th>
          <th>Tình trạng công việc</th>
        </tr>
      </thead>

      <tbody v-if="this.$store.state.employeeList.length != 0">
        <tr
          v-for="employee in this.$store.state.employeeList"
          :key="employee.EmployeeId"
          @dblclick="showFormDetail(employee)"
          @contextmenu="openContextMenu($event, employee)"
        >
          <td>{{ employee.EmployeeCode }}</td>
          <td>{{ employee.FullName }}</td>
          <td>{{ employee.GenderName }}</td>
          <td class="text-align-center">
            {{ format_date(employee.DateOfBirth) }}
          </td>
          <td>{{ employee.IdentityNumber }}</td>
          <td class="white-space">{{ employee.Address }}</td>
          <td>{{ employee.PhoneNumber }}</td>
          <td>{{ employee.Email }}</td>
          <td>{{ employee.PositionName }}</td>
          <td>{{ employee.DepartmentName }}</td>
          <td style="text-align: right">
            {{ formatMoney(employee.Salary) }} VNĐ
          </td>
          <td>{{ employee.WorkStatus }}</td>
        </tr>
      </tbody>

      <BaseLoading v-else />
    </table>
    <BaseContextMenu
      v-show="viewMenu"
      v-bind:style="{ top: top, left: left }"
      @showDataFormDetail="showDataFormDetail"
      @showPopupDelete="showPopupDelete"
    />
  </div>
</template>
<script>
import moment from "moment";
import BaseContextMenu from "./BaseContextMenu.vue";
import BaseLoading from "./BaseLoading.vue";
export default {
  name: "BaseGrid",
  components: {
    BaseContextMenu,
    BaseLoading,
  },
  data() {
    return {
      viewMenu: false,
      top: "0px",
      left: "0px",
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    /**
     * xử lí khi dbclick vào thẻ TR
     * Created By: NTTan (18/7/2021)
     */
    showFormDetail(employee) {
      this.$emit("showFormDetail", employee);
    },
    /**
     * xử lí khi right click hiện contextmenu
     * Created By: NTTan (18/7/2021)
     */
    openContextMenu(e, employee) {
      e.preventDefault();
      this.viewMenu = true;
      this.top = e.clientY + "px";
      this.left = e.clientX + "px";
      this.$emit("openContextMenu", employee);
    },
    /**
     * xử lí khi chọn vào nút sửa
     * Created By: NTTan (18/7/2021)
     */
    showDataFormDetail() {
      this.$emit("showDataFormDetail");
    },
    /**
     * xử lí khi chọn vào nút xóa
     * Created By: NTTan (18/7/2021)
     */
    showPopupDelete() {
      this.$emit("showPopupDelete");
    },
    /**
     * Hàm format date vào các tr tương ứng
     * Created By: NTTan (15/7/2021)
     */
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
    /**
     * Hàm format money để bind vào các thẻ tr tương ứng
     * Created By: NTTan (15/7/2021)
     */
    formatMoney(money) {
      if (money == null) return "0";
      else return money.toLocaleString("it-IT");
    },
    /**
     * Hàm xử lý click ra ngoài sẽ đóng context menu
     * Created By: NTTan (20/7/2021)
     */
    handleClickOutside() {
      this.viewMenu = false;
    },
  },
};
</script>
<style scoped>
@import "../../css/common/grid.css";
@import "../../css/common/loading.css";
</style>