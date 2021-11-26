<template>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          :src="$route.query.image"
          class="
            d-block
            mx-lg-auto
            img-fluid img-thumbnail
            shadow
            bg-white
            rounded
          "
          alt="Image is Unavailable"
          loading="lazy"
        />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">
          {{ `${$route.query.name}` }}
        </h1>
        <p class="lead">
          <b>{{ $route.query.desc }}</b>
        </p>
        <p class="lead mb-4">
          <b> Price: </b>
          {{ ` PHP ${total.toFixed(2)}` }} <br />
          <b> Category: </b>{{ $route.query.category }} <br /><b> Quantity: </b>
          {{ $route.query.qty }}
        </p>
        <Quantity
          @update-qty="updateQty"
          @manual-input="manualInput"
          :quantity="qty"
          :max="max"
          :price="parseInt($route.query.price)"
        />
        <div class="btn-add">
          <ButtonModal
            @add-to-cart="addToCart"
            btnName="Add to Cart"
            :title="isValidQty ? 'Successful' : 'Failed'"
            :text="
              isValidQty
                ? 'Item is successfully added to the cart.'
                : 'Invalid order quantity, please try again.'
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quantity from "../components/Quantity.vue";
import ButtonModal from "../components/ButtonModal.vue";

export default {
  name: "Info",
  components: {
    Quantity,
    ButtonModal,
  },
  data() {
    return {
      qty: Number,
      max: Number,
      btn: String,
      item: Object,
      total: Number,
      isValidQty: Boolean,
    };
  },
  created() {
    this.qty = 1;
    this.max = parseInt(this.$route.query.qty);
    this.total = parseInt(this.$route.query.price);
  },
  methods: {
    manualInput(manualQty) {
      this.qty = manualQty;
    },
    updateQty(qty) {
      this.qty = qty;
    },
    addToCart() {
      if (this.qty <= 0 || isNaN(this.qty) || this.qty > this.max) {
        this.isValidQty = false;
      } else {
        this.item = {
          id: parseInt(this.$route.query.id),
          name: this.$route.query.name,
          img: this.$route.query.image,
          quantity: parseInt(this.qty),
          max: this.max,
          price: parseInt(this.$route.query.price),
          category: this.$route.query.category,
          desc: this.$route.query.desc,
        };
        this.$emit("add-to-cart", this.item);
        this.isValidQty = true;
      }
    },
  },
};
</script>

<style scoped>
img {
  height: 25rem;
}
input {
  width: 150px;
}
.btn-add {
  margin-top: 30px;
}
</style>
