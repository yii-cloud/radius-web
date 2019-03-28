import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import config from "../config/config";
import axios from "axios";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;
Vue.prototype.CONFIG = config;
Vue.prototype.axios = axios;
Vue.use(Antd);

router.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (localStorage.getItem("rad_access_token") == null) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
