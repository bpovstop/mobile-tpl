import scroll from "./scroll";

const Scroll = {
  install(Vue) {
    Vue.directive("scroll-refresh", {
      componentUpdated: function(el, binding, vdom) {
        const scrollOwner = vdom.elm.offsetParent.__vue__.scroll;
        scrollOwner.refresh();
      }
    });
    return Vue.component(scroll.name, scroll);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(scroll);
}

export default Scroll;
