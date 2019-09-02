const data = require('./data.json')

module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  devServer: {
    before(app) {
      app.get('/api/data', (req, res) => {
        res.json(data)
      })
    }
  }
}
