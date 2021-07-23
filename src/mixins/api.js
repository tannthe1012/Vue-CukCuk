import axios from "axios";
import { toast } from "../mixins/mixin.js";
export const api = {
    mixins: [toast],
    methods: {
        /**
        * Hàm lấy dữ liệu của table
        * Created By:  NTTan (15/7/2021)
        */
        async getAllEmployee() {
            await axios
                .get("http://cukcuk.manhnv.net/v1/Employees")
                .then((response) => {
                    this.$store.state.employeeList = response.data;
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
                        this.$store.state.position.push({
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
                        this.$store.state.department.push({
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
        * Hàm xóa dữ liệu của table
        * Created By:  NTTan (15/7/2021)
        */
        async deleteEmployee(id) {
            await axios
                .delete(`http://cukcuk.manhnv.net/v1/Employees/${id}`)
                .then(() => {
                    this.$store.state.employeeList = [];
                    this.getAllEmployee();
                    setTimeout(() => {
                        this.addToast("success", "Bạn đã xóa bản ghi thành công");
                    }, 500);
                }).catch(function (error) {
                    console.log(error);
                })
        },
        /**
        * Hàm update dữ liệu của table
        * Created By:  NTTan (15/7/2021)
        */
        async putEmployee(employee) {
            await axios

                .put(
                    `http://cukcuk.manhnv.net/v1/Employees/${employee.EmployeeId}`,
                    employee
                )
                .then(() => {
                    this.$store.state.employeeList = [];
                    this.getAllEmployee();
                    setTimeout(() => {
                        this.addToast("success", "Bạn đã sửa dữ liệu thành công");
                    }, 500);
                }).catch(function (error) {
                    console.log(error);
                })
        },
        /**
        * Hàm thêm mới dữ liệu của table
        * Created By:  NTTan (15/7/2021)
        */
        async postEmployee(employee) {
            await axios
                .post(`http://cukcuk.manhnv.net/v1/Employees`, employee)
                .then(() => {
                    this.$store.state.employeeList = [];
                    this.getAllEmployee();
                    setTimeout(() => {
                        this.addToast("success", "Bạn đã thêm mới bản ghi thành công");
                    }, 500);
                }).catch(function () {
                    this.addToast("error", "Bạn đã thêm mới bản ghi thất bại");
                })
        },
        
    },
}