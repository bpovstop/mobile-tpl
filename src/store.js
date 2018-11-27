import Vue from "vue";
import Vuex from "vuex";
import { binding } from "@okvue/vuex-bind";

Vue.use(Vuex);

export default new Vuex.Store(
  binding({
    state: {
      multiplePage: [
        {
          route: "/",
          icon: "logo",
          name: "home"
        },
        {
          route: "/about",
          icon: "logo",
          name: "about"
        }
      ]
    },
    mutations: {},
    actions: {}
  })
);
