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
    path: "/Info/:pathname",
    name: "Info",
    component: Info,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
