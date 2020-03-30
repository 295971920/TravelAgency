<template>
  <div class="list" ref= "wrapper">
    <div>
      <!-- .area*3>.title.border-topbottom -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.currentCity}}</div>
            </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div class="button-wrapper"
              v-for="item of hot"
              :key="item.id"
              @click="handleCityClick(item.name)"
              >
              <div class="button">{{item.name}}</div>
            </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key ) of cities"
        :key="key"
        :ref="key"
        >
        <!-- start -->
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" >
          <div class="item border-bottom"
              v-for="innerItem of item"
              :key="innerItem.id"
              @click="handleCityClick(innerItem.name)"
             >{{innerItem.name}}</div>
        </div>
      </div>
      <!-- end -->
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  // 监听
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped="scoped">
@import '~styles/varibles.styl'
/*   两者的写法是等价的，也就是 :before ==::before
    :befor是css2的写法，::before是css3的写法,出现在css3中是为了区分伪类选择器，比如:hover等
    :before的兼容性要比::before好 ，不过在H5开发中建议使用::before比较好
 */
.border-topbottom
  &:before
    border-color #777
  &:after
    border-color #777
.border-bottom
  &:before
    border-color #777
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
    font-size .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem /* 顺序上右下左*/
    .button-wrapper
      float left
      width 33.33%
      .button
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem
  .item-list
    .item
      line-height .56rem
      padding-left: .2rem
</style>
