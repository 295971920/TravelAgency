<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for=" item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="" >
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        /* 设置当前页位置图标 */
        pagination: '.swiper-pagination',
        /* loop 设置循环轮播 */
        loop: true
      }
    }
  },
  /* v-if="list.length" 作用域是去出除swiper从空数组开始创建带来的多余角标 */
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped="scoped">
  /* >>> 向上传递，解决scoped作用域*/
  .wrapper >>> .swiper-pagination-bullet-active
    background red !important
  /* 去除加载时元素抖动*/
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    background #ccc
    .swiper-img
      width 100%
</style>
