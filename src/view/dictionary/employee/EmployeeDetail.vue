<template>
  <div id="modal" class="modal">
    <div class="form-employee">
      <div class="close" id="btn-x-close" @click="showPopupCloseForm"></div>
      <div class="header-form">THÔNG TIN NHÂN VIÊN</div>
      <div class="form-main">
        <div class="avatar">
          <div class="img-avatar"></div>
          <div class="caption-avatar">
            <p>
              (Vui lòng chọn có định <br />dạng<br />
              .jpg,.jpeg,.png,.gif.)
            </p>
          </div>
        </div>
        <div class="form-user">
          <div class="form-user-top">
            <div class="content-form">A. THÔNG TIN CHUNG:</div>
            <div class="form-row">
              <BaseInput
                v-model="currentEmployee.EmployeeCode"
                label="Mã nhân viên"
                :required="true"
                ref="input1"
              />
              <BaseInput
                v-model="currentEmployee.FullName"
                label="Họ và tên"
                :required="true"
                ref="input2"
              />
            </div>
            <div class="form-row">
              <BaseInput
                v-model="currentEmployee.DateOfBirth"
                label="Ngày sinh"
                :required="true"
                type="date"
                ref="input3"
              />
              <div class="form-input">
                <label for="gender"
                  >Giới tính(<span style="color: brown">*</span>)</label
                ><br />

                <BaseComboBox
                  :required="true"
                  v-bind:item="gender"
                  v-bind:valueInput="formateGender(currentEmployee.Gender)"
                  @result="(result) => fotmatDataCbb(result, 'gender')"
                  ref="input4"
                />
              </div>
            </div>
            <div class="form-row">
              <BaseInput
                v-model="currentEmployee.IdentityNumber"
                label="Số CMTND/Căn cước"
                :required="true"
                ref="input5"
              />
              <BaseInput
                v-model="currentEmployee.IdentityDate"
                label="Số CMTND/Căn cước"
                type="date"
              />
            </div>
            <div class="form-row">
              <BaseInput
                v-model="currentEmployee.IdentityPlace"
                label="Nơi cấp"
              />
            </div>
            <div class="form-row">
              <BaseInput
                v-model="currentEmployee.Email"
                label="Email"
                type="email"
                :required="true"
                ref="input6"
              />
              <BaseInput
                v-model="currentEmployee.PhoneNumber"
                label="Số điện thoại"
                :required="true"
                ref="input7"
              />
            </div>
          </div>
          <div class="form-user-bottom">
            <div class="content-form">B. THÔNG TIN CÔNG VIỆC</div>
            <div class="form-row">
              <div class="form-input">
                <label for="position">Vị trí</label><br />
                <BaseComboBox
                  v-bind:item="position"
                  v-bind:valueInput="currentEmployee.PositionName"
                  @result="(result) => fotmatDataCbb(result, 'position')"
                />
              </div>
              <div class="form-input">
                <label for="department">Phòng ban</label><br />
                <BaseComboBox
                  v-bind:item="department"
                  v-bind:valueInput="currentEmployee.DepartmentName"
                  @result="(result) => fotmatDataCbb(result, 'department')"
                />
              </div>
            </div>
            <div class="form-row" id="form-salary">
              <BaseInput
                v-model="currentEmployee.PersonalTaxCode"
                label="Mã số thuế cá nhân"
              />
              <BaseInput
                v-model="currentEmployee.Salary"
                label="Mức lương cơ bản"
              />
              <div id="vnd" style="font-style: italic; opacity: 0.8">(VNĐ)</div>
            </div>
            <div class="form-row">
              <BaseInput
                v-model="currentEmployee.JoinDate"
                label="Ngày gia nhập công ty"
                type="date"
              />
              <div class="form-input">
                <label for="work-status">Tình trạng công việc</label><br />
                <BaseComboBox
                  v-bind:item="statuswork"
                  @result="(result) => fotmatDataCbb(result, 'workstatus')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-button">
        <div
          class="btn-close"
          id="employee-btn-close"
          @click="showPopupCloseForm"
        >
          Hủy
        </div>
        <button
          class="m-btn m-btn-default"
          id="btn-save"
          @click="btnSaveOnClick"
        >
          <div class="m-btn-icon icon-add"></div>
          <div class="btn-text">Lưu</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import BaseComboBox from "../../../components/base/BaseComboBox.vue";
import BaseInput from "../../../components/base/BaseInput.vue";
import {toast} from "../../../mixins/mixin.js"
export default {
  name: "EmployeeDetail",
  mixins: [toast],
  components: {
    BaseComboBox,
    BaseInput,
  },
  data() {
    return {
      gender: [
        { id: 0, name: "Nữ" },
        { id: 1, name: "Nam" },
        { id: 2, name: "Không Xác Định" },
      ],
      statuswork: [
        { id: 0, name: "Đang làm việc" },
        { id: 1, name: "Đang thử việc" },
        { id: 2, name: "Đã nghỉ việc" },
        { id: 3, name: "Không Xác Định" },
      ],
    };
  },
  props: {
    EmployeeDetail: { type: Object },
    department: { type: Array },
    position: { type: Array },
  },
  computed: {
    currentEmployee: function () {
      return {
        ...this.EmployeeDetail,
        DateOfBirth: this.formatDateToInput(this.EmployeeDetail?.DateOfBirth),
        JoinDate: this.formatDateToInput(this.EmployeeDetail?.JoinDate),
        IdentityDate: this.formatDateToInput(this.EmployeeDetail?.IdentityDate),
      };
    },
  },

  methods: {
    /**
     * Hàm xử lí đóng form Gửi lên EmployeeDetail
     * Created By: NTTan(16/7/2021)
     */
    showPopupCloseForm() {
      this.$emit("showPopupCloseForm");
    },
    /**
     * Hàm thêm nhân viên
     * Created By: NTTan(16/7/2021)
     */
    btnSaveOnClick() {
      let errors = [];
      Object.entries(this.$refs).forEach((baseinput) => {
        baseinput[1].$refs.refinput.focus();
        baseinput[1].$refs.refinput.blur();
        if (baseinput[1].error) {
          errors.push(baseinput[1]);
        }
      });
      if (errors.length == 0) {
        this.$emit("saveOnClick", this.currentEmployee);
      } else {
        errors[0].$refs.refinput.focus();
      }
    },
    
    /**
     * Hàm format date vào các tr tương ứng
     * Created By: NTTan (15/7/2021)
     */
    formatDateToInput(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },
    formateGender(number) {
      if (number == null) {
        return "";
      } else if (number == 1) {
        return "Nam";
      } else if (number == 0) {
        return "Nữ";
      } else {
        return "Không Xác Định";
      }
    },
    updateDate(value) {
      this.dateOfBirth = value;
    },
    fotmatDataCbb(result, type) {
      switch (type) {
        case "gender":
          this.currentEmployee.GenderName = result;
          this.currentEmployee.Gender = this.findId(result, this.gender);
          break;
        case "position":
          this.currentEmployee.PositionName = result;
          this.currentEmployee.PositionId = this.findId(result, this.position);
          break;
        case "department":
          this.currentEmployee.DepartmentName = result;
          this.currentEmployee.DepartmentId = this.findId(
            result,
            this.department
          );
          break;
        case "workstatus":
          this.currentEmployee.WorkStatus = this.findId(
            result,
            this.statuswork
          );
          break;
        default:
          break;
      }
    },
    findId(result, array) {
      const obj = array.find((item) => item.name == result);
      return obj.id;
    },
  },
};
</script>

<style scoped>
@import "../../../css/common/form.css";
</style>