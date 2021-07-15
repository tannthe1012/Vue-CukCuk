<template>
    <div class="modal-popup" id="modal-popup">
        <div class="popup">
            <div class="popup-btn-x"></div>
            <div class="popup-title"></div>
            <div class="popup-content">
                <div class="popup-content-icon"><i class="fas fa-exclamation-triangle"></i></div>
                <div class="popup-content-text">Bạn có chắc muốn &ldquo;Xóa Bản Ghi&rdquo; trên hay không?</div>
            </div>
            <div class="popup-btn">
                <button class="m-popup-btn popup-btn-close">Hủy</button>
                <button class="m-popup-btn popup-btn-confirm">Xóa</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BasePopup",
}
</script>
<style scoped>
    @import '../../css/common/popup.css'
</style>
