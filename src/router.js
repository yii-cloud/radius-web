import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "login",
      component: () => import("./views/login/Login.vue")
    },
    {
      path: "/index",
      meta: {
        requireAuth: true
      },
      component: () => import("./views/IndexView.vue"),
      children: [
        {
          path: "",
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
          component: () => import("./views/user/User.vue"),
        },
        {
          path: "/user/add",
          name: "userAdd",
          meta: {
            requireAuth: true
          },
          component: () => import("./views/user/UserAdd.vue")
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
            requireAuth: true,
            parent: "system"
          },
          component: () => import("./views/system/manager/Manager.vue")
        },
        {
          path: "/system/nas",
          name: "nas",
          meta: {
            requireAuth: true,
            parent: "system"
          },
          component: () => import("./views/system/nas/Nas.vue")
        },
        {
          path: "/system/resource",
          name: "resource",
          meta: {
            requireAuth: true,
            parent: "system"
          },
          component: () => import("./views/system/res/Resource.vue")
        },
        {
          path: "/system/role",
          name: "role",
          meta: {
            requireAuth: true,
            parent: "system"
          },
          component: () => import("./views/system/role/Role.vue")
        },
        {
          path: "/system/department",
          name: "department",
          meta: {
            requireAuth: true,
            parent: "system"
          },
          component: () => import("./views/system/department/Department.vue")
        }
      ]
    }
  ]
});