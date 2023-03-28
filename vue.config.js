const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  devServer: {
    https: false,
    proxy: {
      '/api': {
        target: 'http://43.143.0.76:8889/api/private/v1/',
        // target: 'https://mock.presstime.cn/mock/640ee6b8a2172a0b7dcd199d/example/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData:   // 8版本用prependData:
            `
          @import "@/styles/variables.scss";
          @import "@/styles/mixin.scss"; 
          `
      }
    }
  },
  transpileDependencies: true,
  lintOnSave: false
})
