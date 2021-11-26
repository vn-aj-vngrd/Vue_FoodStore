<template>
  <div class="col-lg-4">
    <div class="mb-3">
      <div class="">
        <h5 class="mb-3">Check Out</h5>

        <ul class="list-group list-group-flush">
          <li
            class="
              list-group-item
              d-flex
              justify-content-between
              align-items-center
              border-0
              px-0
              pb-0
            "
          >
            <CouponInput @validate-coupon="validateCoupon" :coupons="coupons" />
          </li>
          <li
            class="
              list-group-item
              d-flex
              justify-content-between
              align-items-center
              px-0
            "
          ></li>

          <li
            v-if="save > 0"
            class="
              list-group-item
              d-flex
              justify-content-between
              align-items-center
              border-0
              px-0
            "
          >
            <div>Previous Discount:</div>
            <span>- PHP {{ save }}</span>
          </li>
          <li
            class="
              list-group-item
              d-flex
              justify-content-between
              align-items-center
              border-0
              px-0
            "
          >
            <div>
              <strong>Total Amount: </strong>
            </div>
            <span
              ><strong>{{ `PHP ${totalPrice.toFixed(2)}` }}</strong></span
            >
          </li>
        </ul>
        <Transaction
          @make-transaction="makeTransaction"
          text="Check Out"
          validateCoupon
          :changeMoney="changeMoney"
          :isCheckOut="isCheckOut"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CouponInput from "./CouponInput.vue";
import Transaction from "./Transaction.vue";

export default {
  name: "CheckOut",
  props: {
    totalPrice: Number,
    coupons: Array,
    save: Number,
    changeMoney: Number,
    isCheckOut: Boolean,
  },
  components: {
    CouponInput,
    Transaction,
  },
  methods: {
    validateCoupon(couponCode) {
      const indexCode = this.coupons.findIndex(
        (elem) => elem.code == couponCode
      );
      if (indexCode > -1) {
        this.$emit("add-discount", indexCode);
      } else {
        alert("Coupon Code is Invalid.");
      }
    },
    makeTransaction(userMoney) {
      this.$emit("make-transaction", userMoney);
    },
  },
};
</script>
