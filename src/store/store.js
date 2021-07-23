import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)
const storeData = {
    state: {
        Toast: [

        ],
        iconToast: {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-triangle',
            warning: 'fas fa-exclamation-circle',
        },
        employeeList: [],
        position:[],
        department:[],
        Pagination: {
            // currentPage: 1,
            pageSize: 18,
            pageNumber: Number,
            employeeFilter: "MF",
            departmentId: "",
            positionId: "",
            totalPage: 15,
            totalRecord: 255,
            // listPage: [1,2,3,4,5,6],
        }

    },
    

}
const store = new Vuex.Store(storeData)
export default store


