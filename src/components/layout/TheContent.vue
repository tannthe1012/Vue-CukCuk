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
          <div class="dropdown-show">
            <span>Tất cả phòng ban</span>
            <i
              class="fas fa-chevron-down dropdown-icon"
              style="transform: none"
            ></i>
          </div>
          <div class="dropdown-hide" style="display: none">
            <div class="dropdown-select">
              <i class="fas fa-check"></i>Phòng Nhân sự
            </div>
            <div class="dropdown-select">
              <i class="fas fa-check"></i>Phòng Đào tạo
            </div>
            <div class="dropdown-select">
              <i class="fas fa-check"></i>Phòng Nghiên cứu
            </div>
            <div class="dropdown-select">
              <i class="fas fa-check"></i>Phòng Phát triển
            </div>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropdown-show">
            <span>Tất cả phòng ban</span>
            <i
              class="fas fa-chevron-down dropdown-icon"
              style="transform: none"
            ></i>
          </div>
          <div class="dropdown-hide" style="display: none">
            <div class="dropdown-select">
              <i class="fas fa-check"></i>Phòng Nhân sự
            </div>
            <div class="dropdown-select">
              <i class="fas fa-check"></i>Phòng Đào tạo
            </div>
            <div class="dropdown-select">
              <i class="fas fa-check"></i>Phòng Nghiên cứu
            </div>
            <div class="dropdown-select">
              <i class="fas fa-check"></i>Phòng Phát triển
            </div>
          </div>
        </div>
      </div>
      <div class="filter-right">
        <button class="m-btn-refresh m-second-button" id="btn-refresh"></button>
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
            <th fieldname="EmployeeCode">Mã nhân viên</th>
            <th fieldname="FullName">Họ và tên</th>
            <th fieldname="GenderName">Giới tính</th>
            <th fieldname="DateOfBirth" class="text-align-center">Ngày sinh</th>
            <th fieldname="IdentityNumber">Số CMTND/Căn cước</th>
            <th fieldname="Address">Địa chỉ</th>
            <th fieldname="PhoneNumber">Điện thoại</th>
            <th fieldname="Email">Email</th>
            <th fieldname="PositionName">Chức vụ</th>
            <th fieldname="DepartmentName">Phòng ban</th>
            <th fieldname="Salary">Mức lương cơ bản</th>
            <th fieldname="WorkStatus">Tình trạng công việc</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="employee in employeeList"
            :key="employee.EmployeeId"
            @dblclick="showFormDetail(employee)"
            @contextmenu="openContextMenu($event,employee)"
          >
            <!-- @contextmenu="showContextMenu(event)" -->
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
            <td>{{ formatMoney(employee.Salary) }}</td>
            <td>{{ employee.WorkStatus }}</td>
          </tr>
        </tbody>
      </table>
      <BaseContextMenu
      v-show="viewMenu"
      v-bind:style="{ top: top, left: left }"
      @showPopupDelete="showPopupDelete"
      @showDataFormDetail="showDataFormDetail"
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
    
  </div>
</template>
<script>
import BaseContextMenu from "../base/BaseContextMenu.vue";
import moment from "moment";
import axios from "axios";
export default {
  name: "TheContent",
  components: {
    BaseContextMenu,
  },
  data() {
    return {
      employeeDetail: {},
      employeeList: [],
      viewMenu: false,
      top: "0px",
      left: "0px",
    };
  },
  methods: {
    /**
     * Hàm để show Form Thông tin nhân viên trống
     * Created By: NTTan (15/7/2021)
     */
    addEmployee: function () {
      this.$emit("showFormDetail");
    },

    showFormDetail: function (employee) {
      console.log(employee);
      this.$emit("showDataFormDetail", employee);
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
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
      this.top = (e.clientY)  + 'px';
      this.left = (e.clientX) +'px';
      console.log(e.clientX);
      console.log(e.clientY);
      this.employeeDetail = employee
    },
    showDataFormDetail() {
      this.viewMenu = false;
      this.$emit("showDataFormDetail",this.employeeDetail);
      this.employeeDetail = {};
    }
  },

  mounted: function () {
    axios
      .get("http://cukcuk.manhnv.net/v1/Employees")
      .then((response) => {
        this.employeeList = response.data;
        // console.log(formatDate(response.data.DateOfBirth));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="css" scoped>
@import "../../css/common/content.css";
</style>