// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/* 解决兼容性问题（低版本设备白屏） */
import 'babel-polyfill'
import router from './router'
/* 解决移动端的300毫秒延时 */
import fastClick from 'fastclick'
/* 图片轮播组件 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
/* 样式重置 */
import 'styles/reset.css'
/* 移动端多倍屏1像素边框问题 */
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
