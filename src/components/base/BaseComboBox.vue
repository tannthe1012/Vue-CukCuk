<template>
    <div class="cbx">
        <div class="cbx-show">
            <input type="text">
            <i class="fas fa-chevron-down cbx-icon-dropdown" @click="iconOnClick"></i>
        </div>
        <div class="cbx-hide" v-show="isShowOption">
            <div value = "1" class="cbx-select"><i class="fas fa-check"></i>Phòng Nhân sự</div>
            <div value = "2" class="cbx-select"><i class="fas fa-check"></i>Phòng Đào tạo</div>
            <div value = "3" class="cbx-select"><i class="fas fa-check"></i>Phòng Nghiên cứu</div>
            <div value = "4" class="cbx-select"><i class="fas fa-check"></i>Phòng Phát triển</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BaseComboBox",
    data() {
        return {
            isShowOption: false,
        }
    },
    methods: {
        iconOnClick() {
            this.isShowOption = true;
        }
    },
}
</script>
<style scoped>
    @import '../../css/common/combobox.css'
</style>