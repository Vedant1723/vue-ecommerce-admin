import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Customers from "../views/Customers.vue";
import Orders from "../views/Orders.vue";
import Products from "../views/Products.vue";
import AddProduct from "../views/AddProduct.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Signup,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/Orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/Products",
    name: "Products",
    component: Products,
  },
  {
    path: "/Customers",
    name: "Customers",
    component: Customers,
  },
  {
    path: "/Add-Product",
    name: "AddProduct",
    component: AddProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
