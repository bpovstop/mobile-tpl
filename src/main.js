// import "./lib/disable_smooth_scroll";
import "./lib/viewport";
import Vue from "vue";
import componentService from "./services/component";
import App from "./App.vue";
import router from "./router";
import store from "./store";

componentService(Vue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
