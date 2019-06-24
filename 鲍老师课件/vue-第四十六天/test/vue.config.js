module.exports = {
    // 全局sass变量
    css: {
        loaderOptions: {
            sass: {
                // @是src的别名
                data: `
            @import "@/assets/sass/util.scss";
          `
            }
        }
    }
}