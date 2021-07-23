import Vue from 'vue'
import VueRouter from 'vue-router'

import TheContent from '../components/layout/TheContent.vue'
// import CustomerPage from '../views/dictionary/customer/CustomerPage.vue'
// import DashboardPage from '../views/DashboardPage.vue'
// import ReportPage from '../views/ReportPage.vue'
// import PurchasePage from '../views/PurchasePage.vue'
// import SettingPage from '../views/SettingPage.vue'


Vue.use(VueRouter);

const routes = [
  {path:"/", component: TheContent},

  {path:"/employee", component: TheContent},
  {path:"/customer", component: TheContent},
  {path:"/dashboard", component: TheContent},
  {path:"/report", component: TheContent},
  {path:"/purchase", component: TheContent},
  {path:"/setting", component: TheContent},
];

export const router = new VueRouter({
  mode:'history',
  routes
})