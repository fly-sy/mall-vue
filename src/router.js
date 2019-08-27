import Vue from 'vue'
import Router from 'vue-router'

// @ 相当一个绝对路径 src  官方帮我们配置了 别名
// import Home from './views/Home.vue'
import Home from '@/views/home'
import Friends from '@/views/friends'
import Cart from '@/views/cart'
import Search from '@/views/search'
import NewsList from '@/views/home/news/newslist'
import NewsInfo from '@/views/home/news/newsinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/friends',
      component: Friends
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
