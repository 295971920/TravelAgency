<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for=" item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        /* 设置当前页位置图标 */
        pagination: '.swiper-pagination',
        /* loop 设置循环轮播 */
        loop: true
      },
      swiperList: [{
        id: '0001',
        // imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg'
        imgUrl: 'static/img/swiper/0001.jpg'
      }, {
        id: '0002',
        // imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/93/ce59d182aca07102.jpg_640x200_ba03d44c.jpg'
        imgUrl: 'static/img/swiper/0002.jpg'
      }]
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
