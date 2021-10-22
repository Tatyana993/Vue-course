import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/dashboard/:page",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/dashboard/:action/:section/:category",
      name: "AddPaymentFromUrl",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/404",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});
export default router;
