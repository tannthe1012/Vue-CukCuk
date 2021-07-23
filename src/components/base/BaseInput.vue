<template>
  <div class="form-input">
    <label for="name"
      >{{ label
      }}<span v-if="required"
        >(<span style="color: brown">*</span>)</span
      ></label
    ><br />
    <input
      :type="type"
      :title="errorMessage"
      :class="{ 'error-input': error == true }"
      :value="valueInput"
      @blur="validate(valueInput)"
      @input="updateValue($event.target.value)"
      ref="refinput"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      error: false,
      errorMessage: "",
      valueInput: this.value,
      regexEmail:
        /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    };
  },
  name: "BaseInput",
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    value: String,
    label: String,
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    updateValue(value) {
      this.valueInput = value;
      this.$emit("input", value);
    },
    validate(value) {
      if (this.required == false) {
        return;
      }
      if (!value || value == null) {
        this.error = true;
        this.errorMessage = "Trường này không được phép bỏ trống";
      } else {
        this.errorMessage = "";
        this.error = false;
      }
      if (this.label == "Email" && value != "") {
        if (!this.regexEmail.test(value)) {
          this.error = true;
          this.errorMessage = "Email không đúng định dạng";
        } else {
          this.errorMessage = "";
          this.error = false;
        }
      }
    },
  },
};
</script>
<style scoped>
@import "../../css/common/form.css";
</style>