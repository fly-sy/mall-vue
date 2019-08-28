const data = require('./data.json')

module.exports = {
  devServer: {
    before(app) {
      app.get('/api/data', (req, res) => {
        res.json(data)
      })
    }
  }
}
