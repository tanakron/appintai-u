import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/pages/Login.vue"),
  },
  {
    path: "/PerSen",
    name: "PerSen",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/PerSen.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",

    component: () => import("../views/pages/Dashboard.vue"),
  },
  {
    path: "/login",
    name: "Login",

    component: () => import("../views/pages/Login.vue"),
  },
  {
    path: "/loginnew",
    name: "Login",

    component: () => import("../views/pages/loginnew.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
