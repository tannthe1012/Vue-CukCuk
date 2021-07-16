<template>
    <div class="navbar">
        <div class="logo-site">
            <div class="logo-box">
                <div class="toggle-icon"></div>
                <div class="amis-logo"></div>
            </div>
        </div>
        <div class="navbar-content">
            <a class="nav-item">
                <div class="nav-item-icon icon-dashboard" >
                </div>
                <div class="nav-item-content">Tổng Quan</div>
            </a>
            <a class="nav-item">
                <div class="nav-item-icon icon-report ">

                </div>
                <div class="nav-item-content">Báo Cáo</div>
            </a>
            <a class="nav-item" >
                <div class="nav-item-icon icon-dashboard">

                </div>
                <div class="nav-item-content">Mua Hàng</div>
            </a>
            <a class="nav-item" href="employee.html" style="text-decoration: none;color: #000000; background-color: #019160;">
                <div class="nav-item-icon icon-dic-employee" >

                </div>
                <div class="nav-item-content">Danh Mục Nhân Viên</div>
            </a>
            <a class="nav-item" href="customer.html" style="text-decoration: none;color: #000000;">
                <div class="nav-item-icon icon-dic-employee" >

                </div>
                <div class="nav-item-content">Danh Mục Khách Hàng</div>
            </a>
            <a class="nav-item">
                <div class="nav-item-icon icon-setting" >

                </div>
                <div class="nav-item-content">Thiết Lập Hệ Thống</div>
            </a>

        </div>
    </div>
</template>
<style lang="css" scoped>
    @import '../../css/common/navbar.css';
    .icon-setting {
        background-image: url('../../assets/icon/dashboard.png');
    }
    .icon-dashboard {
        background-image: url('../../assets/icon/dashboard.png')
    }
    .icon-report {
        background-image: url('../../assets/icon/report.png')
    }
    .icon-dic-employee {
        background-image: url('../../assets/icon/dic-employee.png')
    }
    


</style>