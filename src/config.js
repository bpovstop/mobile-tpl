import Home from "./views/home";

export default {
  app: {
    name: "mobile-tpl",
    mutiple: [
      {
        route: "/",
        icon: "guozhi",
        name: "首页"
      },
      {
        route: "/component",
        icon: "kafei",
        iconActive: "xuegao",
        name: "cube-ui",
        active: false
      },
      {
        route: "/setting",
        icon: "hanbao",
        name: "带标题页"
      }
    ]
  },
  routes: {
    "/": Home,
    "/component": "component",
    "/setting": "setting",
    "/login": {
      pure: true,
      src: "login"
    }
  },
  api: {}
};
