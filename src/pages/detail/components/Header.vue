<!-- 详情页头部 -->
<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-if="showABs">
      <div class="iconfont header-abs-back" >&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showABs" :style="opacityStyle">
      景点详情
     <router-link to='/'>
       <div class="iconfont header-fixed-back" >&#xe624;</div>
     </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showABs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 获取当前滚动的位置
      const top = document.documentElement.scrollTop
      // 判断位置进行渐显与隐藏
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showABs = false
      } else {
        this.showABs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 解决addEventListener作用域对其他页面产生影响
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    top 0
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
