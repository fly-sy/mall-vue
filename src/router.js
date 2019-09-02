import Vue from 'vue'
import Router from 'vue-router'

// import GoodsList from '@/views/home/goods/goodslist'
const GoodsList = () => import(/* webpackChunkName: "goods" */ '@/views/home/goods/goodslist')
// import GoodsInfo from '@/views/home/goods/goodsinfo'
const GoodsInfo = () => import(/* webpackChunkName: "goods" */ '@/views/home/goods/goodsinfo')

// import PhotoList from '@/views/home/photos/photolist'
const PhotoList = () => import(/* webpackChunkName: "photos" */ '@/views/home/photos/photolist')
// import PhotoInfo from '@/views/home/photos/photoinfo'
const PhotoInfo = () => import(/* webpackChunkName: "photos" */ '@/views/home/photos/photoinfo')

// import NewsList from '@/views/home/news/newslist'
const NewsList = () => import(/* webpackChunkName: "news" */ '@/views/home/news/newslist')
// import NewsInfo from '@/views/home/news/newsinfo'
const NewsInfo = () => import(/* webpackChunkName: "news" */ '@/views/home/news/newsinfo')

// import Cart from '@/views/cart'
const Cart = () => import(/* webpackChunkName: "tabs" */ '@/views/cart')
// import Search from '@/views/search'
const Search = () => import(/* webpackChunkName: "tabs" */ '@/views/search')
// import Home from '@/views/home'
const Home = () => import(/* webpackChunkName: "tabs" */ '@/views/home')
// import Friends from '@/views/friends'
const Friends = () => import(/* webpackChunkName: "tabs" */ '@/views/friends')

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
    },
    {
      path: '/home/photolist',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    },
    {
      path: '/home/goodslist',
      component: GoodsList
    },
    {
      path: '/home/goodsinfo/:id',
      name: 'goodsinfo',
      component: GoodsInfo
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
