<template>
  <form @submit="onSubmit">
    <li
      class="
        list-group-item
        d-flex
        justify-content-between
        align-items-center
        border-0
        px-0
        mb-3
      "
    >
      <div class="input-group">
        <span class="input-group-text">PHP</span>
        <input
          type="number"
          class="form-control"
          name="userMoney"
          v-model="userMoney"
          min="0"
          aria-describedby="basic-addon1"
        />
      </div>
      <ButtonModal
        btnName="Check Out"
        :title="isCheckOut == true? 'Successful Transaction': 'Invalid Transaction'"
        :text="
          isCheckOut == true
            ? `Thank you for checking out. Your change is PHP ${changeMoney.toFixed(2)}.`
            : 'Please double-check that your order has been placed to the cart and also that the amount of money is sufficient.'
        "
      />
    </li>
  </form>
</template>

<script>
import ButtonModal from "./ButtonModal";

export default {
  name: "Transaction",
  components: {
    ButtonModal,
  },
  props: {
    text: String,
    placeholder: String,
    changeMoney: Number,
    isCheckOut: Boolean,
  },
  data() {
    return {
      userMoney: 0,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      this.$emit("make-transaction", this.userMoney);
      this.userMoney = "";
    },
  },
};
</script>

<style scoped>
.input-group {
  width: 55%;
}
</style>
