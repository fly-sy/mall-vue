<template>
  <div class="goods-info">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="isShow" id="ball" ref="ballRef"></div>
    </transition>
    <div class="panel">
      <van-swipe indicator-color="white" style="width:360px;overflow: hidden" class="my-swipe">
        <van-swipe-item class="item" v-for="thum in thums" :key="thum.id">
          <img :src="thum.src" alt />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 列表信息 -->
    <van-panel class="panel" :title="goodsinfo.title">
      <div class="panel-body">
        <div class="price-group">
          市场价格:
          <span class="old">{{goodsinfo.market_price}}</span>
          销售价格:
          <span class="new">{{goodsinfo.sell_price}}</span>
        </div>
        <div class="stepper">
          <div class="number">购买数量:</div>
          <van-stepper v-model="value" integer class="number" />
        </div>
        <div class="btn-group">
          <van-button type="primary" size="small" class="btn">立即购买</van-button>
          <van-button
            type="danger"
            size="small"
            class="btn"
            @click="addCart"
            :disabled="isDisable"
          >加入购物车</van-button>
        </div>
      </div>
    </van-panel>

    <!-- 列表信息 -->
    <van-panel class="panel" title="商品信息">
      <div class="panel-body">
        <p>商品货号：{{ goodsinfo.goods_no }}</p>
        <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
        <p>上架时间：{{ goodsinfo.add_time | datefmt }}</p>
      </div>
    </van-panel>
    <!-- 模拟推出下面的距离 -->
    <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>
      <div>24</div>
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>31</div>
      <div>32</div>
      <div>33</div>
      <div>34</div>
      <div>35</div>
      <div>36</div>
      <div>37</div>
      <div>38</div>
      <div>39</div>
      <div>40</div>
      <div>41</div>
      <div>42</div>
      <div>43</div>
      <div>44</div>
      <div>45</div>
      <div>46</div>
      <div>47</div>
      <div>48</div>
      <div>49</div>
      <div>50</div>
      <div>51</div>
      <div>52</div>
      <div>53</div>
      <div>54</div>
      <div>55</div>
      <div>56</div>
      <div>57</div>
      <div>58</div>
      <div>59</div>
      <div>60</div>
      <div>61</div>
      <div>62</div>
      <div>63</div>
      <div>64</div>
      <div>65</div>
      <div>66</div>
      <div>67</div>
      <div>68</div>
      <div>69</div>
      <div>70</div>
      <div>71</div>
      <div>72</div>
      <div>73</div>
      <div>74</div>
      <div>75</div>
      <div>76</div>
      <div>77</div>
      <div>78</div>
      <div>79</div>
      <div>80</div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    id: '',
    thums: [],
    value: 1,
    goodsinfo: {},
    isShow: false,
    xDist: 0,
    yDist: 0,
    isDisable: false
  }),
  created() {
    this.id = this.$route.params.id
    this.getThumImages()
    this.getGoodsInfo()
  },
  methods: {
    async getThumImages() {
      let id = Number(this.id) + 100
      const {
        data: { status, message }
      } = await this.$http.get(`api/getthumimages/${id}`)
      if (status !== 0) return this.$Toast(message)
      console.log(message)
      this.thums = message
    },
    async getGoodsInfo() {
      const {
        data: { status, message }
      } = await this.$http.get('api/goods/getinfo/' + this.id)
      if (status !== 0) this.$Toast('获取商品信息失败')
      this.goodsinfo = message
    },
    getBound() {
      let ball = this.$refs.ballRef.getBoundingClientRect()

      let info = document.querySelector('.van-info').getBoundingClientRect()

      this.xDist = info.left - ball.left
      this.yDist = info.top - ball.top
    },
    addCart() {
      this.isShow = !this.isShow
      // 点击的瞬间 禁用按钮
      this.isDisable = true
      setTimeout(() => {
        // 当动画结束了 再 重新激活按钮
        this.isDisable = false
        //  时间只能比动画的时间大
      }, 400)

      let goodsinfo = {
        id: this.$route.params.id,
        count: this.value,
        sell_price: this.goodsinfo.sell_price,
        selected: true,
        title: this.goodsinfo.title,
        src: this.thums[0].src,
        timer: null
      }
      this.$store.commit('addCart', goodsinfo)
    },
    beforeEnter(el) {
      // 设置起始的位置
      el.style.transform = 'translate(0,0)'
    },
    enter(el, done) {
      // eslint-disable-next-line no-unused-expressions
      el.offsetLeft

      // 获取移动的距离
      this.getBound()

      // 设置目的地的位置
      el.style.transform = `translate(${this.xDist}px,${this.yDist}px)`
      el.style.transition = 'all .3s ease'
      done()
    },
    afterEnter() {
      this.isShow = false
    }
  }
}
</script>
<style lang="less" scoped>
.goods-info {
  position: relative;
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 218px;
    left: 128px;
    z-index: 999;
    // transform: translate(150px, 280px);
  }
  .my-swipe {
    padding: 10px;
    height: 150px;
    img {
      // width: 100%;
      height: 100%;
      margin: 0 auto;
      display: block;
    }
  }
  .panel {
    width: 96%;
    border-radius: 6px;
    box-shadow: 0 0 3px #ccc;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    .panel-body {
      margin-left: 16px;
      margin-bottom: 10px;
      color: #8f8f94;
      font-size: 14px;
      .price-group {
        margin-bottom: 12px;
        .old {
          text-decoration: line-through;
          margin-right: 6px;
        }
      }
      .stepper {
        color: #8f8f94;
        font-size: 0;
        .number {
          display: inline-block;
          font-size: 14px;
          margin-right: 6px;
        }
      }
      .btn-group {
        margin-top: 10px;
        .btn:first-child {
          margin-right: 10px;
        }
      }
      p {
        margin-top: 10px;
      }
    }
  }
}
</style>
