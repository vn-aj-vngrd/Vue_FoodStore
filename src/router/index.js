import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Info from "../views/Info.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/info/:pathname",
    name: "Info",
    component: Info,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
