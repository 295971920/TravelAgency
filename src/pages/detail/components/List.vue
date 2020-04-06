<!-- 详情页内容展示组件 -->
<template>
  <div>
    <!-- 遍历Detail中Ajax获取到的数据  -->
    <div class="item" v-for="(item, index) of list" :key="index.title">
      <!-- 展示遍历到的名字-->
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 使用递归获取数据-->
      <div class="item-children" v-if="item.children">
        <!-- 自己给自己传递数据  -->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    .item-title-icon
      position relative
      left .06rem
      top .2rem
      line-height .8rem
      display inline-block
      width .36rem
      height .36rem
      background url(../../../../static/img/detail/detail.png)
      margin .1rem
      background-size .4rem 3rem
  .item-children
    padding 0 .2rem
</style>
