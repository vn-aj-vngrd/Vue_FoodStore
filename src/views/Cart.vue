<template>
  <div class="container justify-content-center">
    <div class="row">
      <div class="col-lg-8 cart">
        <div class="mb-3">
          <CartItem
            @manual-input="manualInput"
            @update-qty="UpdateQty"
            @delete-item="deleteItem"
            :cartItems="cartItems"
            :totalPrice="totalPrice"
          />
        </div>
      </div>
      <Checkout
        @add-discount="getIndexCoupon"
        @make-transaction="makeTransaction"
        :totalPrice="totalPrice"
        :coupons="coupons"
        :save="save"
        :changeMoney="changeMoney"
        :isCheckOut="isCheckOut"
      />
    </div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import Checkout from "../components/Checkout.vue";

export default {
  name: "Cart",
  props: {
    cartItems: Array,
    totalPrice: Number,
    coupons: Array,
    save: Number,
    changeMoney: Number,
    isCheckOut: Boolean,
  },
  components: {
    CartItem,
    Checkout,
  },
  methods: {
    manualInput(manualQty, id) {
      this.qty = manualQty;
      this.$emit("update-qty", manualQty, id);
    },
    UpdateQty(qty, id) {
      this.$emit("update-qty", qty, id);
    },
    getIndexCoupon(indexCode) {
      this.$emit("add-discount", indexCode);
    },
    makeTransaction(userMoney) {
      this.$emit("make-transaction", userMoney);
    },
    deleteItem(itemId) {
      this.$emit("delete-item", itemId);
    },
  },
  data() {
    return {
      qty: Number,
      isUpdate: false,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
