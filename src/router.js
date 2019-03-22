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
      component: () => import("./views/Index.vue")
    },
    {
      path: "/user",
      name: "user",
      component: () => import("./views/user/User.vue")
    },
    {
      path: "/product",
      name: "product",
      component: () => import("./views/product/Product.vue")
    },
    {
      path: "/online",
      name: "online",
      component: () => import("./views/online/Online.vue")
    },
    {
      path: "/system/manager",
      name: "manager",
      component: () => import("./views/system/Manager.vue")
    }
  ]
});
