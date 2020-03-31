<template>
  <div id="app">
    <!-- keep-alive 是vue自带属性 将json数据写入内存中 解决json冲加载-->
    <keep-alive>
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
