import "./lib/viewport";
import "babel-polyfill";
import "whatwg-fetch";
// 图标
import "./lib/inpect-icon";
import Vue from "vue";
import Component from "./service/component";
import Storage from "./service/storage";
import http from "./service/http";
import App from "./App.vue";
import store from "./store";

import BetterRouter from "./lib/better-router";
import tabbar from "./layout/tabbar";
import layout from "./layout";
import conf from "./config";

// 初始化插件
Vue.use(Component);
Vue.prototype.app = conf.app;
Vue.config.productionTip = false;

// 初始化服务
Vue.use(Storage);

// 初始化路由
const router = BetterRouter({
  mode: "history", // 路由类型[history, hash]
  base: process.env.VUE_APP_SUB_NAME || "", // 路由基路径, 配合二级目录
  rules: conf.routes,
  layout: { main: layout, parts: { tabbar } }
});

// 初始化页面
new Vue({ router, http, store, render: h => h(App) }).$mount("#app");
