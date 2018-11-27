module.exports = {
  baseUrl: process.env.VUE_APP_SUB_NAME
    ? "/" + process.env.VUE_APP_SUB_NAME + "/"
    : "/",
  chainWebpack: config => {
    function generateLoaders(loader) {
      config.module
        .rule(loader)
        .oneOf("vue")
        .use("px2rem-loader")
        .loader("px2rem-loader")
        .options({ remUnit: 13.33333333, remPrecision: 8 })
        .end();
      config.module
        .rule(loader)
        .oneOf("normal")
        .use("px2rem-loader")
        .loader("px2rem-loader")
        .options({ remUnit: 13.33333333, remPrecision: 8 })
        .end();
    }
    generateLoaders("css");
    generateLoaders("scss");
  },
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_API,
        ws: true,
        changeOrigin: true
      }
    }
  }
};
