import Vue from 'vue'
import {
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

Vue
  .use(Cell).use(CellGroup)
  .use(Tag)
  .use(Card)
  .use(Grid).use(GridItem)
  .use(Swipe).use(SwipeItem)
  .use(Tabbar).use(TabbarItem)
  .use(NavBar)
  .use(Button)

Vue.prototype.$Toast = Toast
