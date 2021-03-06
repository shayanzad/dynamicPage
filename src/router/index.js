import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EachOne from "@/views/EachOne.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/EachOne/:cat/:id",
    name: "EachOne",
    component: EachOne,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
