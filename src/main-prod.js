import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './plugins/vant.js'

import axios from 'axios'
import store from './store'

// import './config/rem.js'
import 'lib-flexible'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import moment from 'moment'
// 配置根路径
axios.defaults.baseURL = 'http://localhost:5000/'

// axios 请求拦截
axios.interceptors.request.use(function (config) {
  NProgress.start()
  return config
})

// axios 响应拦截
axios.interceptors.response.use(function (response) {
  NProgress.done()
  return response
})

// 全局配置 axios
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.filter('datefmt', (str, arg2 = "'YYYY-MM-DD HH:mm:ss'") => {
  return moment(str).format(arg2)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
