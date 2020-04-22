import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 代码高亮插件
import Highlight from './utils/highlight';
Vue.use(Highlight);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
