<template>
    <div id="modal" class="modal">
        <!-- <p>{{showProps()}}</p> -->
        <div class="form-employee">

            <div class="close" id="btn-x-close" @click="closeForm"></div>
            <div class="header-form">THÔNG TIN NHÂN VIÊN</div>
            <div class="form-main">
                <div class="avatar">
                    <div class="img-avatar"></div>
                    <div class="caption-avatar">
                        <p>(Vui lòng chọn có định <br>dạng<br> .jpg,.jpeg,.png,.gif.)</p>
                    </div>
                </div>
                <div class="form-user">
                    <div class="form-user-top">
                        <div class="content-form">A. THÔNG TIN CHUNG:</div>
                        <div class="form-row">
                            <div class="form-input">
                                <label for="MaNV">Mã nhân viên(<span style="color: brown;">*</span>)</label><br>
                                <input type="text" name="MaNV" value="" v-model="EmployeeDetail.EmployeeCode" id="txtEmployeeCode" class="input-required" fieldname="EmployeeCode">

                            </div>
                            <div class="form-input">
                                <label for="name">Họ và tên(<span style="color: brown;">*</span>)</label><br>
                                <input type="text" value="" id="txtFullName" v-model="EmployeeDetail.FullName" class="input-required" fieldname="FullName">

                            </div>

                        </div>
                        <div class="form-row">
                            <div class="form-input">
                                <label for="dateofbirth">Ngày sinh(<span style="color: brown;">*</span>)</label><br>
                                <input type="date" name="dateofbirth" id="dtDateofBirth" value="" v-model="EmployeeDetail.DateOfBirth" class="input-required" fieldname="DateOfBirth">

                            </div>
                            <div class="form-input">
                                <label for="gender">Giới tính(<span style="color: brown;">*</span>)</label><br>
                                <div class="dropdown">
                                    <div class="dropdown-show">
                                        <span id="Gender" fieldname="GenderName"></span>
                                        <i class="fas fa-chevron-down dropdown-icon"></i>
                                    </div>
                                    <div class="dropdown-hide">
                                        <div class="dropdown-select"><i class="fas fa-check"></i>Nam</div>
                                        <div class="dropdown-select"><i class="fas fa-check"></i>Nữ</div>
                                        <div class="dropdown-select"><i class="fas fa-check"></i>Không xác định</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="form-row">
                            <div class="form-input">
                                <label for="personal-identity">Số CMTND/Căn cước(<span style="color: brown;">*</span>)</label><br>
                                <input type="text" name="personal-identity" value="" v-model="EmployeeDetail.IdentityNumber" class="input-required" id="txtIdentityNumber" fieldname="IdentityNumber">

                            </div>
                            <div class="form-input">
                                <label for="date-identity">Ngày cấp</label><br>
                                <input type="date" name="date-identity" id="IdentityDate"  value="" v-model="EmployeeDetail.IdentityDate" fieldname="IdentityDate"> 

                            </div>

                        </div>
                        <div class="form-row">
                            <div class="form-input">
                                <label for="address-identity">Nơi cấp</label><br>
                                <input type="text" name="address-identity" value="" v-model="EmployeeDetail.IdentityPlace" id="IdentityPlace" fieldname="IdentityPlace">

                            </div>


                        </div>
                        <div class="form-row">
                            <div class="form-input">
                                <label for="email">Email(<span style="color: brown;">*</span>)</label><br>
                                <input type="email" name="email" value="" class="input-required" v-model="EmployeeDetail.Email" id="txtEmail" fieldname="Email">

                            </div>
                            <div class="form-input">
                                <label for="phonenumber">Số điện thoại(<span style="color: brown;">*</span>)</label><br>
                                <input type="text" name="phonenumber" value="" class="input-required" v-model="EmployeeDetail.PhoneNumber" id="txtPhoneNumber" fieldname="PhoneNumber">

                            </div>

                        </div>
                    </div>
                    <div class="form-user-bottom">
                        <div class="content-form">B. THÔNG TIN CÔNG VIỆC</div>
                        <div class="form-row">
                            <div class="form-input">
                                <label for="position">Vị trí</label><br>
                                <div class="cbx" id="Position">
                                    <div class="cbx-show">
                                        <input type="text">
                                        <i class="fas fa-chevron-down cbx-icon-dropdown"></i>
                                    </div>
                                    <div class="cbx-hide" fieldname="PositionName" api="/v1/Positions">
                                        
                                    </div>
                                </div>


                            </div>
                            <div class="form-input">
                                <label for="department">Phòng ban</label><br>
                                <div class="cbx">
                                    <div class="cbx-show">
                                        <input type="text">
                                        <i class="fas fa-chevron-down cbx-icon-dropdown"></i>
                                    </div>
                                    <div class="cbx-hide" fieldname="DepartmentName" api="/api/Department">
                                        
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="form-row">
                            <div class="form-input">
                                <label for="tax-code">Mã số thuế cá nhân</label><br>
                                <input type="text" name="tax-code" value="" v-model="EmployeeDetail.PersonalTaxCode" id="txtPersonalTaxCode" fieldname="PersonalTaxCode">

                            </div>
                            <div class="form-input" id="form-salary">
                                <div id="vnd" style="font-style: italic;opacity: 0.8;">(VNĐ)</div>
                                <label for="salary">Mức lương cơ bản</label><br>
                                <input type="text" id="salary" name="salary" value="" fieldname="Salary" v-model="EmployeeDetail.Salary">

                            </div>

                        </div>
                        <div class="form-row">
                            <div class="form-input">
                                <label for="date-attend-comppany">Ngày gia nhập công ty</label><br>
                                <input type="date" name="date-attend-comppany" id="JoinDate" value="" fieldname="JoinDate">

                            </div>
                            <div class="form-input">
                                <label for="work-status">Tình trạng công việc</label><br>
                                <div class="dropdown">
                                    <div class="dropdown-show">
                                        <span id="WorkStatus" fieldname="WorkStatus"></span>
                                        <i class="fas fa-chevron-down dropdown-icon"></i>
                                    </div>
                                    <div class="dropdown-hide">
                                        <div class="dropdown-select"><i class="fas fa-check"></i>Đang làm việc</div>
                                        <div class="dropdown-select"><i class="fas fa-check"></i>Đang thử việc</div>
                                        <div class="dropdown-select"><i class="fas fa-check"></i>Đã Nghỉ việc</div>
                                        <div class="dropdown-select"><i class="fas fa-check"></i>Khác ...</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="form-button">
                <div class="btn-close" id="employee-btn-close">Hủy</div>
                <button class="m-btn m-btn-default" id="btn-save" @click="addEmployee">
                    <div class="m-btn-icon icon-add"></div>
                    <div class="btn-text">Lưu</div>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";

    export default ({
        
        name:"EmployeeDetail",
        props: {
            EmployeeDetail: {type:Object}
        },
        methods: {
            closeForm() {
                console.log(this.EmployeeDetail);
                this.$emit('closeForm');
            },
            addEmployee() {
                axios.post('http://cukcuk.manhnv.net/v1/Employees',this.EmployeeDetail);
            }
        },
        computed: {
            inputVal: {
                get() {

                    return this.EmployeeDetail;
                },
            }
        }
    })
</script>

<style scoped>
    @import '../../../css/common/form.css'
</style>