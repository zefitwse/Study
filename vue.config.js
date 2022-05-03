const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{

    proxy:{
      '/api':{
        target: "http://kumanxuan1.f3322.net:8001/",
        changeOrigin:true,

      }
    }
}

})
