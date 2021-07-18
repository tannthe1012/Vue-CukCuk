<template>
    <div id="contextmenu">
        <div id="contextmenu-update" @click="showDataFormDetail">Sửa</div>
        <div id="contextmenu-delete" @click="showPopupDetele">Xóa</div>
    </div>
</template>
<script>
export default {
    name: "BaseContextMenu",
    methods: {
        showPopupDetele() {
            this.$emit("showPopupDelete");
        },
        showDataFormDetail() {
            this.$emit("showDataFormDetail");
        }
    },
}
</script>
<style scoped>
    @import '../../css/common/contextmenu.css'
</style>