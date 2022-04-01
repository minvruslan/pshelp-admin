const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@api': path.resolve(__dirname, 'src/api/'),
        '@helpers': path.resolve(__dirname, 'src/helpers/'),
        '@views': path.resolve(__dirname, 'src/views/')
      }
    }
  }
}
