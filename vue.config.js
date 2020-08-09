module.exports = {
  productionSourceMap: false,
  assetsDir: "assets",
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/assets/styles/_config.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
  }
};
