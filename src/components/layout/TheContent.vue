<template>
    <div class="content">
        <div class="header-content">
            <div class="title">Danh sách nhân viên</div>
            <div class="content-feature">
                <button class="m-btn m-btn-default" id="btn-add-employee">
                    <div class="m-btn-icon icon-add"></div>
                    <div class="btn-text">Thêm Nhân Viên</div>
                </button>
            </div>
        </div>
        <div class="filter-bar">
            <div class="filter-left">
                <input class="icon-search" type="text" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại" style="padding-left: 40px;width: 250px;">
                <div class="dropdown">
                    <div class="dropdown-show">
                        <span>Tất cả phòng ban</span>
                        <i class="fas fa-chevron-down dropdown-icon" style="transform: none;"></i>
                    </div>
                    <div class="dropdown-hide" style="display: none;">
                        <div class="dropdown-select"><i class="fas fa-check"></i>Phòng Nhân sự</div>
                        <div class="dropdown-select"><i class="fas fa-check"></i>Phòng Đào tạo</div>
                        <div class="dropdown-select"><i class="fas fa-check"></i>Phòng Nghiên cứu</div>
                        <div class="dropdown-select"><i class="fas fa-check"></i>Phòng Phát triển</div>
                    </div>
                </div>
                <div class="dropdown">
                    <div class="dropdown-show">
                        <span>Tất cả phòng ban</span>
                        <i class="fas fa-chevron-down dropdown-icon" style="transform: none;"></i>
                    </div>
                    <div class="dropdown-hide" style="display: none;">
                        <div class="dropdown-select"><i class="fas fa-check"></i>Phòng Nhân sự</div>
                        <div class="dropdown-select"><i class="fas fa-check"></i>Phòng Đào tạo</div>
                        <div class="dropdown-select"><i class="fas fa-check"></i>Phòng Nghiên cứu</div>
                        <div class="dropdown-select"><i class="fas fa-check"></i>Phòng Phát triển</div>
                    </div>
                </div>
            </div>
            <div class="filter-right">
                <button class="m-btn-refresh m-second-button" id="btn-refresh">
                </button>
            </div>
        </div>
        <div class="grid gird-employee">
            <table style="width:100%;table-layout: fixed ;" cellspacing="0">
                <colgroup>
                    <col style="width: 120px;">
                    <col style="width: 200px;">
                    <col style="width: 150px;">
                    <col style="width: 180px;">
                    <col style="width: 180px;">
                    <col style="width: 250px;">
                    <col style="width: 150px;">
                    <col style="width: 250px;">
                    <col style="width: 180px;">
                    <col style="width: 150px;">
                    <col style="width: 150px;">
                    <col style="width: 200px;">

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
                <tbody><tr recordid="f7a49fc3-e46c-11eb-94eb-42010a8c0002" class=""><td>NV-02391</td><td>Nguyễn Văn Hùng</td><td>Nam</td><td class="text-align-center">16/07/2021</td><td>123</td><td class="white-space"></td><td>0938948098</td><td>manh@gmail.com</td><td></td><td></td><td>200.009.843</td><td>5</td></tr><tr recordid="a7b93d12-e46c-11eb-94eb-42010a8c0002"><td>NV-102834</td><td>Nguyễn Văn Hùng</td><td></td><td class="text-align-center">15/07/2021</td><td>123</td><td class="white-space"></td><td>0987876987</td><td>manhdz@gmail.com</td><td></td><td></td><td>0</td><td></td></tr><tr recordid="37e62426-e44b-11eb-94eb-42010a8c0002"><td>NV0000008</td><td>Triệu Thùy Dung123</td><td>Nữ</td><td class="text-align-center">01/01/1970</td><td>132</td><td class="white-space"></td><td>0987123456</td><td>trieuthuydung66@gmail.com</td><td>Phòng Tài Chính</td><td>Phòng Nhân sự</td><td>0</td><td>1</td></tr><tr recordid="6b25053f-e3dd-11eb-94eb-42010a8c0002"><td>NV0000003</td><td>Nguyễn Tuấn Minh</td><td></td><td class="text-align-center">01/01/1970</td><td>001200030696</td><td class="white-space"></td><td>0915871399</td><td>tminh1103@gmail.com</td><td>Phòng Đào tạo</td><td>Phòng Nhân sự</td><td>0</td><td></td></tr><tr recordid="6b235464-e3dc-11eb-94eb-42010a8c0002"><td>NV0002</td><td>Nguyễn Tuấn Minh</td><td></td><td class="text-align-center">01/01/1970</td><td>001200030696</td><td class="white-space"></td><td>0915871399</td><td>tminh1103@gmail.com</td><td>Phòng Đào tạo</td><td></td><td>0</td><td></td></tr><tr recordid="3738ce93-1661-5628-2cc2-579daad24557"><td>NV-932844</td><td>Nguyễn Diễm Ngọc</td><td>Không xác định</td><td class="text-align-center">01/01/1970</td><td>21200784633</td><td class="white-space" title="1495 Rose Hill Rd, Guardian Building, Salem, OR, 07561">1495 Rose Hill Rd, Guardian Building, Salem, OR, 07561</td><td>0925274710</td><td>wawwcqng.wmbvidy@example.com</td><td>Phòng Nghiên Cứu</td><td>Phòng đào tạo</td><td>11.310.821</td><td>3</td></tr><tr recordid="12693b29-274c-35ce-d11d-086412a8ea97"><td>NV-247682</td><td>Lê Thị Ngọc</td><td>Nữ</td><td class="text-align-center">15/06/1998</td><td>253232520604</td><td class="white-space"></td><td>0995194059</td><td>Suggs@example.com</td><td>Phòng Đào tạo</td><td>Phòng Nhân sự</td><td>16.275.117</td><td>2</td></tr><tr recordid="4d536cce-31bf-335e-bfd2-89b22d10517e"><td>NV-821172</td><td>Nguyễn Thị Hoa</td><td>Không xác định</td><td class="text-align-center">08/06/1960</td><td>07392748689</td><td class="white-space" title="2057 Waterview Ln, 75th Floor, Dover, Delaware, 00313">2057 Waterview Ln, 75th Floor, Dover, Delaware, 00313</td><td>0958245028</td><td>LeonStafford295@example.com</td><td>Phòng Nghiên Cứu</td><td>Phòng đào tạo</td><td>13.714.521</td><td>2</td></tr><tr recordid="48147636-7e8f-6939-2580-de64d090a2c2"><td>NV-011157</td><td>Nguyễn Thị Linh</td><td>Nam</td><td class="text-align-center">25/09/1960</td><td>309126091351</td><td class="white-space"></td><td>0928416320</td><td>Demetrius_Mcintyre749@example.com</td><td>Phòng Đào tạo</td><td>Phòng đào tạo</td><td>0</td><td>0</td></tr><tr recordid="619ecbc4-37bc-19ea-6ff6-423b4e874d0f"><td>NV-992615</td><td>Nguyễn Thị Giang</td><td>Không xác định</td><td class="text-align-center">15/09/1990</td><td>55505481819</td><td class="white-space" title="3251 NE Front Circle, Jackson, Mississippi, 91647">3251 NE Front Circle, Jackson, Mississippi, 91647</td><td>0936812997</td><td>Seth_T_Acker@example.com</td><td>Phòng Nghiên Cứu</td><td>Phòng Nhân sự</td><td>13.488.181</td><td>0</td></tr><tr recordid="595e7d51-318c-39e8-1377-d9ebc53aac3d"><td>NV-302596</td><td>Nguyễn Thị Loan</td><td>Không xác định</td><td class="text-align-center">18/11/1988</td><td>77188866171</td><td class="white-space" title="1503 Market Cir, Concord, NH, 29993">1503 Market Cir, Concord, NH, 29993</td><td>0908386847</td><td>Chasidy.Nye82@example.com</td><td>Phòng Đào tạo</td><td>Phòng đào tạo</td><td>19.859.002</td><td></td></tr><tr recordid="6e5bdc72-59a2-5141-7af6-423b4e874d0f"><td>NV-375092</td><td>Nguyễn Thị Hoa</td><td>Nữ</td><td class="text-align-center">14/02/1961</td><td>138610226518</td><td class="white-space"></td><td>0961048319</td><td>NovellaKroll@nowhere.com</td><td>Phòng Nhân sự</td><td>Phòng Marketting</td><td>10.000.000.000.000.000</td><td>2</td></tr><tr recordid="70aead00-2db5-77f7-2277-d9ebc53aac3d"><td>NV-595130</td><td>Nguyễn Thị Giang</td><td>Nam</td><td class="text-align-center">26/06/1969</td><td>03187009292</td><td class="white-space" title="2270 Ironwood Highway, Bartlett Building, Augusta, ME, 29426">2270 Ironwood Highway, Bartlett Building, Augusta, ME, 29426</td><td>0941727306</td><td>Dedra.Laws888@nowhere.com</td><td>Phòng Nghiên Cứu</td><td>Phòng Nhân sự</td><td>16.036.275</td><td>3</td></tr><tr recordid="2f25e35e-15fb-71e4-4e35-0028ed526dd0"><td>NV-799297</td><td>Bùi Thị Hường</td><td>Nam</td><td class="text-align-center">09/07/1954</td><td>71644487939</td><td class="white-space" title="653 NW Rockwood Circle, Judge Building, Austin, TX, 09375">653 NW Rockwood Circle, Judge Building, Austin, TX, 09375</td><td>0937131453</td><td>DouglasSisson9@example.com</td><td>Phòng Nghiên Cứu</td><td>Phòng đào tạo</td><td>10.965.282</td><td>2</td></tr><tr recordid="56dce332-76f0-6b9b-5080-7ed9d1ea06ea"><td>NV-385585</td><td>Trịnh Thị Lệ</td><td>Nữ</td><td class="text-align-center">07/09/1957</td><td>10569302538</td><td class="white-space" title="441 S Ski Hill Highway, Bartlett Building, Boise, Idaho, 94526">441 S Ski Hill Highway, Bartlett Building, Boise, Idaho, 94526</td><td>0901648993</td><td>Salley69@nowhere.com</td><td>Phòng Đào tạo</td><td>Phòng Marketting</td><td>17.490.210</td><td>3</td></tr><tr recordid="39f3c493-4680-145e-42c2-579daad24557"><td>NV-197908</td><td>Nông Thị Mai</td><td></td><td class="text-align-center">13/02/1996</td><td>94346890065</td><td class="white-space" title="3620 West Buttonwood Parkway, Trenton, New Jersey, 52226">3620 West Buttonwood Parkway, Trenton, New Jersey, 52226</td><td>0930845523</td><td>AdalineZepeda@nowhere.com</td><td>Phòng Đào tạo</td><td>Phòng Nhân sự</td><td>23.532.780</td><td>1</td></tr><tr recordid="4a9854e8-12ac-72ac-2877-d9ebc53aac3d"><td>NV-796124</td><td>Nguyễn Mai Linh</td><td>Nữ</td><td class="text-align-center">01/01/1964</td><td>88399938898</td><td class="white-space" title="2658 Stonewood Ct, Judge Building, Juneau, AK, 50046">2658 Stonewood Ct, Judge Building, Juneau, AK, 50046</td><td>0952313897</td><td>Adcock@nowhere.com</td><td>Phòng Tài Chính</td><td>Phòng Marketting</td><td>14.557.897</td><td>1</td></tr><tr recordid="3cb58bb5-2fd7-6c15-8741-c1ec321fe728"><td>NV-195815</td><td>Võ Thị Hân</td><td></td><td class="text-align-center">06/11/1962</td><td>75914977592</td><td class="white-space" title="632 Ironwood Blvd, Olympia, WA, 90318">632 Ironwood Blvd, Olympia, WA, 90318</td><td>0931219522</td><td>PhilomenaLabbe@example.com</td><td>Phòng Nhân sự</td><td>Phòng đào tạo</td><td>24.526.766</td><td>2</td></tr></tbody>
            </table>
        </div>
        
        <div class="paging-bar">
            <div class="paging-contentleft">Hiển thị <span style="font-weight: 1000;">01-18/100</span> Lao động</div>
            <div class="page-navigations">
                <div class="m-btn btn-firstpage"></div>
                <div class="m-btn btn-prev-page"></div>
                <ul><li><a class="active" href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#">6</a></li></ul>
                <div class="m-btn btn-next-page"></div>
                <div class="m-btn btn-lastpage"></div>

            </div>
            <div class="paging-contentright"><span style="font-weight: 1000;">18</span> nhân viên/trang</div>
        </div>
    </div>
</template>
<style lang="css" scoped>
    @import '../../css/common/content.css'
</style>