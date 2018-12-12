import Vue from "vue";
import Vuex from "vuex";
import { binding } from "@okvue/vuex-bind";
import config from "./config";

Vue.use(Vuex);

export default new Vuex.Store(
  binding({
    state: {
      multiplePage: config.app.mutiple
    },
    mutations: {},
    actions: {}
  })
);
