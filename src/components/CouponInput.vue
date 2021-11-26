<template>
  <form @submit="onSubmit" class="input-group">
    <input
      type="text"
      name="code"
      v-model="code"
      class="form-control"
      placeholder="Coupon"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
    <input type="submit" :class="btnClass" value="Apply" />
  </form>
</template>

<script>
export default {
  name: "CouponInput",
  data() {
    return {
      code: "",
    };
  },
  props: {
    btnClass: String,
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (this.code == "") {
        alert("Coupon Code is Invalid");
        return;
      }

      const couponCode = this.code;

      this.$emit("validate-coupon", couponCode);

      this.code = "";
    },
  },
};
</script>
