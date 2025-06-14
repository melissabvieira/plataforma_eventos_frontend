module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:898', // URL do seu backend Laravel
        changeOrigin: true
      }
    }
  }
}
