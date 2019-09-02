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
  },
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      // 配置入口文件
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')
      // 配置CDN
      config
        .set('externals', {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          axios: 'axios',
          nprogress: 'NProgress',
          moment: 'moment'
        })
      // 配置首页定制
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })
    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')
      // 配置首页定制
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  }
}
