<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for=" item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'static/img/icons/0001.png',
        desc: '景点门票景点门票景点门票景点门票'
      },
      {
        id: '0002',
        imgUrl: 'static/img/icons/0002.png',
        desc: '滑雪季'
      },
      {
        id: '0003',
        imgUrl: 'static/img/icons/0003.png',
        desc: '泡温泉'
      },
      {
        id: '0004',
        imgUrl: 'static/img/icons/0004.png',
        desc: '动植物园'
      },
      {
        id: '0005',
        imgUrl: 'static/img/icons/0005.png',
        desc: '一日游'
      },
      {
        id: '0006',
        imgUrl: 'static/img/icons/0006.png',
        desc: '必游榜单'
      },
      {
        id: '0007',
        imgUrl: 'static/img/icons/0007.png',
        desc: '自然风光'
      },
      {
        id: '0008',
        imgUrl: 'static/img/icons/0008.png',
        desc: '全部'
      },
      {
        id: '0009',
        imgUrl: 'static/img/icons/0008.png',
        desc: '周边游'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> swiper-container
    height 0
    padding-bottom 50%
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    // background red
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      // background blue
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      color $darkTextColor
      text-align center
      ellipsis()
</style>
