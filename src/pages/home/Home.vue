<!-- 首页 -->
<template>
  <div class="class">
    <!-- 引入头部组件 -->
    <home-header ></home-header>
    <!-- 轮播图组件 -->
    <home-swiper :list= "swiperList"></home-swiper>
    <!-- icon 图标组件 -->
    <home-icons :list="iconList"></home-icons>
    <!-- 热销推荐组件 -->
    <home-recommend :list="recommendList"></home-recommend>
    <!-- 周末去哪儿组件 -->
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/Icons'
import HomeRecommend from '../components/Recommend'
import HomeWeekend from '../components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('api/index.json?city = ' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      // console.log(res)
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      // 重发axios请求
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
