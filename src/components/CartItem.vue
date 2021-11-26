<template>
  <div class="wish-list">
    <h5 class="mb-4">Cart</h5>
    <div class="scroll">
      <div v-if="cartItems.length > 0">
        <div class="row mb-4 cart-row" v-for="item in cartItems" :key="item.id">
          <div class="col-md-5 col-lg-3 col-xl-3">
            <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
              <img class="img img-thumbnail" :src="item.img" alt="Sample" />
            </div>
          </div>
          <div class="col-md-7 col-lg-9 col-xl-9">
            <div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{{ item.name }}</h5>
                </div>
                <Button
                  @on-click="deleteItem"
                  btnTitle="Remove"
                  btnStyle="btn btn-outline-danger btn-sm"
                  :itemId="item.id"
                />
              </div>
              <div>
                <p class="mb-3 text-muted text-uppercase small">
                  {{ `Category: ${item.category}` }} <br />
                  {{ `Price: PHP ${item.price.toFixed(2)}` }}<br />
                  {{ `InStock: ${item.max} PCS` }}
                </p>
              </div>
            </div>
            <div class="price">
              <Quantity
                @update-qty="UpdateQty"
                @manual-input="manualInput"
                :id="item.id"
                :quantity="item.quantity"
                :max="item.max"
                :price="item.price"
              />
            </div>
          </div>
          <hr class="mt-4" />
        </div>
      </div>
      <div v-else>
        <p class="text-muted">
          The cart is currently empty, please select an item from the menu to
          check out.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Quantity from "../components/Quantity.vue";
import Button from "../components/Button.vue";

export default {
  name: "CartItem",
  props: {
    cartItems: Array,
    totalPrice: Number,
  },
  components: {
    Quantity,

    Button,
  },
  methods: {
    manualInput(manualQty, id) {
      this.$emit("manual-input", manualQty, id);
    },
    UpdateQty(qty, id) {
      this.$emit("update-qty", qty, id);
    },
    deleteItem(itemId) {
      this.$emit("delete-item", itemId);
    },
  },
};
</script>

<style scoped>
img {
  width: 14rem;
  height: 10rem;
}
.scroll {
  height: 730px;
  overflow-y: scroll;
  padding-left: 20px;
}
.cart-row {
  width: 100%;
}
.container {
  margin-top: 20px;
}
.price {
  margin-top: 24.5px;
}
</style>
