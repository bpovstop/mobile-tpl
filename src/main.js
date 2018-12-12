import "./lib/disable_smooth_scroll";
import "./lib/viewport";
import "babel-polyfill";
import "whatwg-fetch";
import Vue from "vue";
import storage from "@okvue/storage";
import componentService from "./services/component";
import App from "./App.vue";
import store from "./store";
import http from "./services/http";

import BetterRouter from "./lib/better-router";
import Mutiple from "./layout/mutiple";
import config from "./config";

Vue.use(componentService);
Vue.config.productionTip = false;
Vue.prototype.$storage = new storage();

const router = BetterRouter({
  mode: "history",
  base: process.env.BASE_URL,
  rules: config.routes,
  // layout can be single vue component or layout-object
  // eg. { main: layout-main-file, parts: { part1, part2 } }
  layout: config.app.mutiple && Mutiple
});

new Vue({ router, http, store, render: h => h(App) }).$mount("#app");
