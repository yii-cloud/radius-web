import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("./views/login/Login.vue")
    },
    {
      path: "/index",
      name: "index",
      meta: {
        requireAuth: true
      },
      component: () => import("./views/Index.vue")
    },
    {
      path: "/user",
      name: "user",
      meta: {
        requireAuth: true
      },
      component: () => import("./views/user/User.vue")
    },
    {
      path: "/product",
      name: "product",
      meta: {
        requireAuth: true
      },
      component: () => import("./views/product/Product.vue")
    },
    {
      path: "/online",
      name: "online",
      meta: {
        requireAuth: true
      },
      component: () => import("./views/online/Online.vue")
    },
    {
      path: "/system/manager",
      name: "manager",
      meta: {
        requireAuth: true
      },
      component: () => import("./views/system/Manager.vue")
    }
  ]
});
