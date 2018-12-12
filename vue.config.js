var base_size = parseInt(
  process.env.VUE_APP_UI_BASE_SIZE || getComputedStyle(document.body).fontSize
);
module.exports = {
  baseUrl: process.env.VUE_APP_SUB_NAME
    ? "/" + process.env.VUE_APP_SUB_NAME + "/"
    : "/",
  chainWebpack: config => {
    function generateLoaders(loader) {
      config.module
        .rule(loader)
        .oneOf("vue")
        .use("px2rem")
        .loader("px2rem-loader")
        .before("postcss-loader")
        .options({ remUnit: base_size, remPrecision: 8 })
        .end();
      config.module
        .rule(loader)
        .oneOf("normal")
        .use("px2rem")
        .loader("px2rem-loader")
        .before("postcss-loader")
        .options({ remUnit: base_size, remPrecision: 8 })
        .end();
    }
    generateLoaders("css");
    generateLoaders("scss");
  },
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_ENDPOINT,
        ws: true,
        changeOrigin: true
      }
    }
  }
};
