const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")
module.exports = {
  configureWebpack: {
      plugins: [
          new GoogleFontsPlugin({
              fonts: [
                  { family: "Poppins", variants: [ "500", "700" ] }
              ]
          })
      ]
  }
}