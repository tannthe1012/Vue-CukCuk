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

    },
    

}
const store = new Vuex.Store(storeData)
export default store


