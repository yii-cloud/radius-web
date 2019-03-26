import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import config from "../config/config";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;
Vue.prototype.CONFIG = config
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
