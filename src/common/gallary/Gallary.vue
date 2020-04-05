<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="(item, index) in imgs" :key="index">
            <img class="gallary-img" :src="item" alt="" >
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observeParents: true,
        // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。默认false，不开启，可以使用update()方法更新。
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped="scoped">
  .container >>> .swiper-container
    overflow: inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    height 100%
    left: 0;
    right: 0;
    bottom 0
    background: #000;
    .wapper
      background #FFFFFF
      width 100%
      padding-bottom 100%
      .gallary-img
        width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
