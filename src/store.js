import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)
// 获取 本地存储中的数据
let cart = JSON.parse(localStorage.getItem('cart') || '[]')
export default new Store({
  state: {
    cart
  },
  getters: {
    // 计算所有的数量总数
    getAllCount(state) {
      let c = 0
      // 通过变量得到数据的总数
      state.cart.forEach(item => {
        c += item.count
      })
      return c
    },
    getAllPrice(state) {
      let o = {
        count: 0,
        allPrice: 0
      }
      state.cart.forEach(item => {
        if (item.selected === true) {
          o.count += item.count
          o.allPrice += item.count * item.sell_price
        }
      })
      return o
    }
  },
  mutations: {
    addCart(state, goodsinfo) {
      let flag = false

      // 如果已经有数据了  只是做数量上的修改
      state.cart.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += goodsinfo.count
          flag = true
          return true
        }
      })

      //  第一次没有数据的时候 先添加一回
      if (!flag) {
        console.log(flag) // false
        state.cart.push(goodsinfo)
      }

      // 把数据保存到 本地存储中
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  }
})
