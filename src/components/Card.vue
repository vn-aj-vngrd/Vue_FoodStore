<template>
  <div class="scroll">
    <div
      class="container-fluid d-flex flex-wrap justify-content-center"
      v-if="foods.length > 0"
    >
      <div :key="food.id" v-for="food in foods">
        <div
          class="m-2 card shadow bg-white rounded"
          v-show="food.quantity > 0"
        >
          <img class="card-img-top" :src="food.img" alt="Image not Available" />
          <div class="card-body">
            <h5 class="card-title">{{ food.name }}</h5>
            <p class="card-text">
              {{ `Price: PHP ${food.price.toFixed(2)} ` }}
            </p>
            <router-link
              :to="{
                name: 'Info',
                params: { pathname: food.name },
                query: {
                  name: food.name,
                  id: food.id,
                  price: food.price,
                  quantity: food.quantity,
                  category: food.category.join(', '),
                  desc: food.desc,
                  img: food.img,
                },
              }"
              class="btn btn-primary btn-sm"
            >
              Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="message text-center text-muted">No items were found.</p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    foods: Array,
  },
  methods: {
    // Anther Method to pass data through router-link
    // goToDetails(name, id, price, quantity, category, desc, img) {
    //   this.$router.push({ name: "Info", params: { pathname: name, name:name, id:id, price:price, quantity:quantity, category:category, desc:desc, img:img} });
    // },
  },
};
</script>

<style scoped>
p {
  font-size: 14px;
}

img {
  height: 10rem;
}

.scroll {
  margin-top: -20px;
  height: 650px;
  overflow-y: scroll;
}

.message {
  font-size: 20px;
}

.container-fluid {
  width: 80%;
}

.card {
  border-radius: 8px;
  border: 1px solid #cccccc;
  display: flex;
  padding: 5px;
  box-sizing: border-box;
  width: 18rem;
  height: 19rem;
  transition: all linear 200ms;
}
.card:hover {
  transform: scale(1.1);
  transition: all linear 200ms;
  z-index: 1;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
</style>
