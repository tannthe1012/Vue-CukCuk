<template>
  <div class="modal-popup" id="modal-popup" ref="Popup">
    <div class="popup">
      <div class="popup-btn-x" @click="closePopup"></div>
      <div class="popup-title"></div>
      <div class="popup-content">
        <div class="popup-content-icon" v-html="dataPopup.icon"></div>
        <div class="popup-content-text">{{ dataPopup.title }}</div>
      </div>
      <div class="popup-btn">
        <button class="m-popup-btn popup-btn-close" @click="closePopup">Hủy</button>
        <button class="m-popup-btn popup-btn-confirm" @click="confirmPopup">
          {{ dataPopup.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BasePopup",
  
  props: {
    dataPopup: {
      icon: String,
      title: String,
      buttonText: String,
    },
  },
 
  methods: {
    confirmPopup() {
      // this.statusPopup = this;
      this.$emit("confirmPopup");
    },
    closePopup() {
        this.$emit("closePopup");
    }
  },
};
</script>
<style scoped>
@import "../../css/common/popup.css";
</style>
