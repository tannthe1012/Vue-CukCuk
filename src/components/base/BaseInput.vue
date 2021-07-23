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
      :class="[
        { 'error-input': error == true },
        { 'input-salary': label == textSalary },
      ]"
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
      textSalary: "Mức lương cơ bản",
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
      if (this.label === "Mức lương cơ bản") {
        value = value.replaceAll(".", "");
        value = value.replaceAll(",", "");
        value = Number(value).toLocaleString("it-IT");
      }
      this.valueInput = value;
       if (this.label === "Mức lương cơ bản") {
        value = value.replaceAll(".", "");
        value = value.replaceAll(",", "");
      }
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
.input-salary {
  text-align: right;
  padding-right: 55px;
  padding-left: 0px;
}
</style>