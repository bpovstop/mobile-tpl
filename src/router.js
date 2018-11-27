import Vue from "vue";
import Router from "vue-router";
import Mutiple from "@/layout/mutiple";
import Home from "./views";
import Demo from "./views/demo";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // 多页入口模板
    {
      path: "/",
      name: "mutiple",
      component: Mutiple,
      children: [
        {
          path: "/",
          name: "home",
          meta: { keepAlive: true },
          component: Home
        },
        {
          path: "/about",
          name: "about",
          meta: { keepAlive: true },
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
      ]
    },
    // 单页入口模板
    {
      path: "/page",
      name: "page",
      component: Demo
    }
  ]
});
