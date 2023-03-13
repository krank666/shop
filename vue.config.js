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
        target: 'http://120.78.137.246:8888/api/private/v1/',
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
