<template>
  <div class="cbx">
    <div class="cbx-show">
      <input
        type="text"
       
        @input="onChange"
        @keydown.down="onArrowDown"
        @keydown.up="onArrowUp"
        @keydown.enter="onEnter"
         v-model="valueInput"
        ref="input"
      />
      <i class="fas fa-chevron-down cbx-icon-dropdown" @click="iconOnClick"></i>
    </div>
    <div class="cbx-hide">
      <div
        class="cbx-select"
        v-for="(item, index) in results"
        :key="index"
        v-show="isShowOption"
        :class="{
          active: item.name == valueSelect,
          'cbx-select-focus': index == arrowCounter,
        }"
        @click="select(item, index)"
      >
        <i class="fas fa-check" :class="{'active-icon': item.name == valueSelect}"></i
        >{{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseComboBox",
  data() {
    return {
      isShowOption: false,
      // valueInput: "",
      valueSelect: this.valueInput,
      selectedIndex: -1,
      results: [],
      arrowCounter: -1,
    };
  },

  props: {
    item: Array,
    // placeholder: String
    valueInput: {type:String},
  },
  /**
   * xử lí sự kiện click ra ngoài sẽ ẩn combobox
   * created By: NTTan (19/7/2021)
   */
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
    // this.selectedIndex = -1;
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  created: function () {
    console.log("toi day");
    this.results = { ...this.item};
    // this.valueInput = this.default;

  },
  methods: {
    /**
     * xử lí sự kiện click vào icon sẽ show ra các option
     * created By: NTTan (19/7/2021)
     */
    iconOnClick() {
      this.filterResult();
      this.arrowCounter = -1;
      this.isShowOption = !this.isShowOption;
      if (this.isShowOption == true) this.$refs.input.focus();
    },
    /**
     * xử lí sự kiện click vào các option
     * created By: NTTan (19/7/2021)
     */
    select: function (item, index) {
      // this.valueInput = "tôi là tấn";
      console.log(item.name);
      this.isShowOption = false;
      this.valueInput = `${item.name}`;
      this.valueSelect = this.valueInput;
      this.selectedIndex = index;
    },
    /**
     * Gán class active vào option được chọn
     * created By: NTTan (19/7/2021)
     */
    checkClassActive(index) {
      if (index == this.selectedIndex) {
        return "active";
      }
    },
    /**
     * xử lí chọn các option có thể được hiện ra
     * created By: NTTan (19/7/2021)
     */
    filterResult() {

      this.results = this.item.filter((item) =>
        item.name
          .toLowerCase()
          .includes(this.valueInput.toLowerCase())
      );

    },
    /**
     * lắng nghê sự thay đổi của input
     * created By: NTTan (19/7/2021)
     */
    onChange() {
      // this.isShowOption = false;
      this.filterResult();
      this.isShowOption = true;
    },
    /**
     * Hàm lí sự kiện click ra ngoài sẽ ẩn combobox
     * created By: NTTan (19/7/2021)
     */
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.arrowCounter = -1;
        this.isShowOption = false;
      }
    },
    /**
     * Hàm lí sự kiện sử dụng keyboard ArrowDown (phím xuống)
     * created By: NTTan (19/7/2021)
     */

    onArrowDown() {
      if (this.arrowCounter < this.results.length - 1) {
        this.arrowCounter = this.arrowCounter + 1;
      } else if (this.arrowCounter == this.results.length - 1) {
        this.arrowCounter = 0;
      }
    },
    /**
     * Hàm lí sự kiện sử dụng keyboard ArrowUp (phím lên)
     * created By: NTTan (19/7/2021)
     */
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      } else if (this.arrowCounter == 0) {
        this.arrowCounter = this.results.length - 1;
      } else {
        this.arrowCounter = this.results.length - 1;
      }
    },
    /**
     * Hàm lí sự kiện sử dụng keyboard Enter
     * created By: NTTan (19/7/2021)
     */
    onEnter() {
      this.valueInput = this.results[this.arrowCounter].name;
      this.valueSelect = this.valueInput;
      this.selectedIndex = this.arrowCounter;
      this.arrowCounter = -1;
      this.isShowOption = false;
    },
  },
};
</script>
<style scoped>
@import "../../css/common/combobox.css";
.cbx-show input {
  border: none;
  max-height: 36px;
}
</style>