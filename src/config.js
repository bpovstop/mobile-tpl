import Home from "./views/home";

export default {
  app: {
    name: "mobile-tpl",
    mutiple: [
      {
        route: "/",
        icon: "icon:logo",
        iconActive: "icon:logo",
        name: "home"
      },
      {
        route: "/list",
        icon: "icon:logo",
        iconActive:
          "uri:https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543484931209&di=d1cdf54945d044a33fbc9eb45d0a499f&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F64380cd7912397dddb514b2d5282b2b7d0a287eb.jpg",
        name: "list",
        active: false
      },
      {
        route: "/form",
        icon: "icon:logo",
        iconActive: "src:assets/image/logo.png",
        name: "form"
      },
      {
        route: "/setting",
        name: "setting"
      }
    ]
  },
  routes: {
    "/": Home,
    "/list": 'list'
  },
  api: {
    excel: "get/excel"
  }
};