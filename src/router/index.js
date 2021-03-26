import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signup",
    component: () => import("../components/Signup.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue")
  },
  {
    path: "/fiddle",
    name: "Fiddle",
    component: () => import("../components/fiddle.vue")
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../components/ForgotPassword.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../components/Home.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/UserCreate")
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../components/UserList")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/UserEdit")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
