import Vue from 'vue'
import {
  Lazyload,
  Tab, Tabs,
  Cell, CellGroup,
  Tag,
  Card,
  Grid, GridItem,
  Toast,
  Swipe, SwipeItem,
  Tabbar, TabbarItem,
  Button,
  NavBar
} from 'vant'

const options = {
  // 设置懒加载图片地址
  loading: 'http://img.zcool.cn/community/01e5b9554116a0000001e71b366b39.jpg'
}

Vue
  .use(Lazyload, options)
  .use(Tab).use(Tabs)
  .use(Cell).use(CellGroup)
  .use(Tag)
  .use(Card)
  .use(Grid).use(GridItem)
  .use(Swipe).use(SwipeItem)
  .use(Tabbar).use(TabbarItem)
  .use(NavBar)
  .use(Button)

Vue.prototype.$Toast = Toast
