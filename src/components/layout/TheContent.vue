<template>
  <div class="content">
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
            v-bind:item="department"
            v-bind:valueInput="optionAll[0].name"
            v-bind:optionAll="optionAll[0]"
          />
        </div>
        <div class="dropdown">
          <BaseComboBox
            v-bind:item="position"
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

        <tbody v-if="employeeList.length != 0">
          <tr
            v-for="employee in employeeList"
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
            <td style="text-align: right">{{ formatMoney(employee.Salary) }}</td>
            <td>{{ employee.WorkStatus }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <div class="loading">
            <div class="uil-ring-css" style="transform: scale(0.79)">
              <div></div>
            </div>
          </div>
        </tbody>
      </table>
      <BaseContextMenu
        v-show="viewMenu"
        v-bind:style="{ top: top, left: left }"
        @showDataFormDetail="showDataFormDetail"
        @showPopupDelete="showPopupDelete"
      />
    </div>

    <div class="paging-bar">
      <div class="paging-contentleft">
        Hiển thị <span style="font-weight: 1000">01-18/100</span> Lao động
      </div>
      <div class="page-navigations">
        <div class="m-btn btn-firstpage"></div>
        <div class="m-btn btn-prev-page"></div>
        <ul>
          <li><a class="active" href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">6</a></li>
        </ul>
        <div class="m-btn btn-next-page"></div>
        <div class="m-btn btn-lastpage"></div>
      </div>
      <div class="paging-contentright">
        <span style="font-weight: 1000">18</span> nhân viên/trang
      </div>
    </div>
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
    <!-- <BaseToast v-for="toast in this.$store.state.Toast" :key="toast.id"/> -->
    <BaseToast v-for="toast in this.$store.state.Toast" :key="toast.id" v-bind:toast="toast"/>
    </div>
  </div>
</template>

<script>
import EmployeeDetail from "../../view/dictionary/employee/EmployeeDetail.vue";
import BaseContextMenu from "../base/BaseContextMenu.vue";
import BaseComboBox from "../base/BaseComboBox.vue";
import BasePopup from "../base/BasePopup.vue";
import BaseToast from "../base/BaseToast.vue";
import moment from "moment";
import axios from "axios";
import {toast} from "../../mixins/mixin.js"

export default {
  name: "TheContent",
  mixins: [toast],
  components: {
    BaseContextMenu,
    EmployeeDetail,
    BasePopup,
    BaseComboBox,
    BaseToast,
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
      employeeList: [],
      department: [],
      position: [],
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
  created() {
    this.getAllEmployee();
    this.getDepartment();
    this.getPosition();
  },
  methods: {
    /**
     * Hàm lấy dữ liệu của table
     * Created By:  NTTan (15/7/2021)
     */
    async getAllEmployee() {
      await axios
        .get("http://cukcuk.manhnv.net/v1/Employees")
        .then((response) => {
          this.employeeList = response.data;
          // console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    /**
     * Hàm lấy dữ liệu của table
     * Created By:  NTTan (15/7/2021)
     */
    async getPosition() {
      await axios
        .get("http://cukcuk.manhnv.net/v1/Positions")
        .then((response) => {
          response.data.forEach((element) => {
            this.position.push({
              id: element.PositionId,
              name: element.PositionName,
            });
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    /**
     * Hàm lấy dữ liệu của table
     * Created By:  NTTan (15/7/2021)
     */
    async getDepartment() {
      await axios
        .get("http://cukcuk.manhnv.net/api/Department")
        .then((response) => {
          response.data.forEach((element) => {
            this.department.push({
              id: element.DepartmentId,
              name: element.DepartmentName,
            });
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },

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
    showFormDetail: function (employee) {
      this.employeeDetail = { ...employee };
      // console.log(this.employeeDetail);
      this.isShowFormDetail = true;
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
     * Hàm để hiện cái context Menu
     * Created By: NTTan (16/7/2021)
     */
    openContextMenu(e, employee) {
      e.preventDefault();
      this.viewMenu = true;
      this.top = e.clientY + "px";
      this.left = e.clientX + "px";
      console.log(e.clientX);
      console.log(e.clientY);
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
    async saveOnClick(employee) {
      if (employee.EmployeeId == undefined) {
        await axios.post(`http://cukcuk.manhnv.net/v1/Employees`, employee);
      } else {
        await axios.put(
          `http://cukcuk.manhnv.net/v1/Employees/${employee.EmployeeId}`,
          employee
        );
      }
      this.isShowFormDetail = false;
      this.getAllEmployee();
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
    async confirmPopup() {
      if (this.statusPopup == "DELETE") {
        await axios.delete(
          `http://cukcuk.manhnv.net/v1/Employees/${this.employeeDetail.EmployeeId}`
        );
        this.employeeDetail = {};
        this.addToast("success","Bạn đã xóa bản ghi thành công");
        setTimeout(() => {
          this.employeeList = [];
          this.getAllEmployee();
        }, 3000);        
        this.isShowToast = true;
        this.isShowPopup = false;
      } else {
        this.isShowPopup = false;
        (this.employeeDetail = {}), (this.isShowFormDetail = false);
        this.addToast("success","Bạn đã đóng Form thành công");
      }
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
      this.employeeList = [];
      setTimeout(() => {
        this.getAllEmployee();
      }, 2000);
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

<style lang="css" scoped>
@import "../../css/common/content.css";
@import "../../css/common/loading.css";
@import "../../css/common/toast.css";
</style>