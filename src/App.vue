<template>
  <NavBar />
  <router-view
    :foods="foods"
    :cartItems="cartItems"
    :totalPrice="totalPrice"
    :coupons="coupons"
    :save="save"
    :isCheckOut="isCheckOut"
    :changeMoney="changeMoney"
    @add-to-cart="addToCart"
    @update-qty="updateQty"
    @add-discount="AddDiscount"
    @make-transaction="makeTransaction"
    @delete-item="deleteItem"
    @update-total="updateTotalPrice"
  />
  <Footer text="Created by: Van AJ B. Vanguardia" />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      foods: [],
      push: Boolean,
      cartItems: [],
      totalPrice: Number,
      coupons: [],
      save: 0,
      isCheckOut: false,
      changeMoney: 0,
    };
  },
  methods: {
    updateTotalPrice() {
      this.totalPrice = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        this.totalPrice += this.cartItems[i].quantity * this.cartItems[i].price;
      }
    },
    AddDiscount(indexCode) {
      const origPrice = this.totalPrice;
      if (this.totalPrice == 0) {
        alert("You do not have any items in the cart yet.");
      } else if (this.coupons[indexCode].minimum == 0) {
        this.totalPrice -= this.coupons[indexCode].discount * this.totalPrice;
      } else if (this.coupons[indexCode].minimum < this.totalPrice) {
        this.totalPrice -= this.coupons[indexCode].discount;
      } else {
        alert("Does not meet minimun.");
      }
      this.save = origPrice - this.totalPrice;
    },
    updateQty(qty, id) {
      if (qty > 0) {
        const indexCart = this.cartItems.findIndex((elem) => elem.id == id);
        if (indexCart > -1) {
          if (qty <= this.cartItems[indexCart].max)
            this.cartItems[indexCart].quantity = qty;
        }
      }
      this.updateTotalPrice();
    },
    addToCart(item) {
      this.push = true;
      if (this.cartItems.length > -1) {
        const indexCart = this.cartItems.findIndex(
          (elem) => elem.id == item.id
        );
        const indexFood = this.foods.findIndex((elem) => elem.id == item.id);
        if (indexCart > -1) {
          const updateQty = this.cartItems[indexCart].quantity + item.quantity;
          if (
            this.foods[indexFood].quantity >=
            this.cartItems[indexCart].quantity + item.quantity
          ) {
            this.cartItems[indexCart].quantity = updateQty;
          }
          this.push = false;
        }
      }
      if (this.push == true) {
        this.cartItems.push(item);
      }
      this.totalPrice += item.quantity * item.price;
    },
    makeTransaction(userMoney) {
      if (this.totalPrice != 0 && userMoney >= this.totalPrice) {
        // To remove data from Array but according to instructions, do nothing. :-/
        // for (let i = 0; i < this.cartItems.length; i++) {
        //   for (let j = 0; j < this.foods.length; j++) {
        //     if (this.cartItems[i].id == this.foods[j].id) {
        //       this.foods[j].quantity -= this.cartItems[i].quantity;
        //     }
        //   }
        // }
        this.changeMoney = userMoney - this.totalPrice;
        this.isCheckOut = true;
        this.cartItems = [];
        this.totalPrice = 0;
      } else {
        this.isCheckOut = false;
      }
    },
    deleteItem(itemID) {
      const index = this.cartItems.findIndex((elem) => elem.id == itemID);
      if (index > -1) {
        this.totalPrice -=
          this.cartItems[index].quantity * this.cartItems[index].price;
        this.cartItems.splice(index, 1);
      }
    },
  },
  created() {
    this.foods = [
      {
        id: 1,
        name: "Bacon",
        price: 250,
        quantity: 32,
        category: ["Meat"],
        img: "https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg",
        desc: "Bacon is a type of salt-cured pork made from various cuts, typically the belly or less fatty parts of the back.",
      },
      {
        id: 2,
        name: "Fish",
        price: 150,
        quantity: 8,
        category: ["Seafood", "Fresh"],
        img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg",
        desc: "Fish are aquatic, craniate, gill-bearing animals that lack limbs with digits. Included in this definition are the living hagfish, lampreys, and cartilaginous and bony fish as well as various extinct related groups.",
      },
      {
        id: 3,
        name: "Chicken",
        price: 200,
        quantity: 9,
        category: ["Poultry", "Fresh"],
        img: "https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg",
        desc: "Chicken generally includes low fat in the meat itself (castrated roosters excluded). The fat is highly concentrated on the skin.",
      },
      {
        id: 4,
        name: "Beef",
        price: 300,
        quantity: 0,
        category: ["Meat"],
        img: "https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg",
        desc: "Beef refers to the meat that comes from the cattle animal.",
      },
      {
        id: 5,
        name: "Soy Sauce",
        price: 50,
        quantity: 42,
        category: ["Sauce", "Seasoning"],
        img: "https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024",
        desc: "Soy sauce is a liquid condiment of Chinese origin, traditionally made from a fermented paste of soybeans, roasted grain, brine, and Aspergillus oryzae or Aspergillus sojae molds.",
      },
      {
        id: 9,
        name: "Egg",
        price: 10,
        quantity: 22,
        category: ["Dairy"],
        img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
        desc: "An egg is surrounded by a thin, hard shell. ",
      },
      {
        id: 11,
        name: "Pork",
        price: 200,
        quantity: 4,
        category: ["Meat"],
        img: "https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg",
        desc: "Pork is the culinary name for the meat of the domestic pig. It is the most commonly consumed meat worldwide, with evidence of pig husbandry dating back to 5000 BC.",
      },
    ];
    (this.coupons = [
      { code: "menu50", discount: 0.5, minimum: 0 },
      { code: "menu20", discount: 0.2, minimum: 0 },
      { code: "menu10", discount: 0.1, minimum: 0 },
      { code: "menu200flat", discount: 200, minimum: 1001 },
    ]),
      (this.totalPrice = 0);
  },
};
</script>
