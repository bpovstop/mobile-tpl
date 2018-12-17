import Home from "./views/home";

export default {
  app: {
    name: "mobile-tpl",
    mutiple: [
      {
        route: "/",
        icon: "guozhi",
        iconActive: "guozhi",
        name: "果汁"
      },
      {
        route: "/list",
        icon: "kafei",
        iconActive: "kafei",
        name: "咖啡",
        active: false
      },
      {
        route: "/component",
        icon: "xuegao",
        iconActive: "xuegao",
        name: "雪糕"
      },
      {
        route: "/setting",
        icon: "hanbao",
        iconActive: "hanbao",
        name: "汉堡包"
      }
    ]
  },
  routes: {
    "/": Home,
    "/list": "list",
    "/component": "component",
    "/setting": "setting",
    "/login": {
      pure: true,
      src: "login"
    }
  },
  api: {
    excel: "get/excel"
  }
};
