
const webpack = require('webpack')

module.exports = {

  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      'window.Quill': 'quill/dist/quill.js',
      'Quill': 'quill/dist/quill.js'
    }])

  }
}

/*module.export ={
  configureWebpack: {
    plugins: [

    ]
  }
}*/
