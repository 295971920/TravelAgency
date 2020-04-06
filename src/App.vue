<template>
  <div id="app">
    <!-- keep-alive 是vue自带属性 将json数据写入内存中 解决json冲加载-->
    <!-- 通过exclude="组件名" 去除被缓存的组件 和activated() deactivated() 作用域一样 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
