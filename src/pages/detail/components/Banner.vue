<!-- 详情页首页图片展示  -->
<template>
  <div>
    <!-- 点击进入详情页 -->
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="" class="banner-img" />
      <div class="banner-info">
        <!-- 标题 -->
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <!-- 图片小图标 -->
          <span class="iconfont banner-icon">&#xe63b;</span>
          <!-- 图片张数 -->
          &nbsp;{{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <!-- 引入Grallary 组件展示内容 绑定点击关闭事件  -->
    <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      /* 默认不展示 */
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #FFFFFF
    /* 图片过渡的一个渐变 */
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0 0.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height .32rem
      line-height .32rem
      margin-top .14rem
      padding 0 .4rem
      border-radius .2rem
      background rgba(0, 0, 0, .8)
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>
