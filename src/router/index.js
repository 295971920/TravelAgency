import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  /* component: () => import('路径') 实现异步请求 */
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      /* 绑定id */
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }],
  /* 重置detail目录下header中handleScroll函数的坐标，解决大坐标引起的白屏 */
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
