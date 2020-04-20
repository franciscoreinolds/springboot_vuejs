module.exports = {
    devServer: {
        proxy: {
            '/api': {
              target: 'localhost:9000/',
              ws: true,
              changeOrigin: true
            }
        }
    }
}