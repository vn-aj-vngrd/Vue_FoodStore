<template>
  <div class="d-flex justify-content-between align-items-center">
    <div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button @click="decrement" type="button" class="btn btn-danger btn-sm">
          -
        </button>
        <div class="input-group">
          <span class="input-group-text">Qty:</span>
          <input
            @keyup="manualInput"
            type="number"
            class="form-control"
            v-model="qty"
          />
        </div>
        <button @click="increment" type="button" class="btn btn-success btn-sm">
          +
        </button>
      </div>
    </div>
    <p class="mb-0" v-if="qty > 0 && qty <= max">
      Total Price: <b> PHP {{ qty * price }} </b>
    </p>
    <p v-else class="text-danger">Invalid Quantity</p>
  </div>
</template>

<script>
export default {
  name: "Quantity",
  props: {
    id: Number,
    quantity: Number,
    max: Number,
    price: Number,
  },
  data() {
    return {
      qty: Number,
      total: Number,
      qtyOrig: Number,
    };
  },
  created() {
    this.qtyOrig = this.quantity;
    this.qty = this.quantity;
    this.qtyMax = this.max;
  },
  methods: {
    decrement() {
      if (this.qty > 1) {
        this.qty--;
        this.$emit("update-qty", this.qty, this.id);
      }
    },
    increment() {
      if (this.qty < this.qtyMax) {
        this.qty++;
        this.$emit("update-qty", this.qty, this.id);
      }
    },
    manualInput() {
      if (this.qty < 0) {
        this.qty = 1;
      } else if (this.qty > this.qtyMax) {
        this.qty = this.qtyMax;
      }
      this.$emit("manual-input", this.qty, this.id);
    },
  },
};
</script>

<style scoped>
.input-group {
  width: 150px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
