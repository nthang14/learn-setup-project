import Vue from "vue";
import VueRouter from "vue-router";
// import { CONFIG_NAME } from "@/utils/constants";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   let isAuthenticated = localStorage.getItem(CONFIG_NAME.ACCESS_TOKEN);
//   if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
// 	else next()
// })

export default router;
