import Vue from "vue";

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import '@/styles/index.less' // global css

import App from "./App.vue";
import router from "./router";
import store from "./store";

// 代码高亮插件
import Highlight from './utils/highlight'
Vue.use(Highlight);


// 使用mock
const { mockXHR } = require('../mock')
mockXHR()


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
