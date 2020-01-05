import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/', redirect: '/Hot'
  }, {
    path: '/Home',
    name: '主页',
    component: () => import('@/views/Home')
  }, {
    path: '/Hot',
    name: '热门',
    component: () => import('@/views/Hot')
  }, {
    path: '/Boutique',
    name: '精品',
    component: () => import('@/views/Boutique')
  }, {
    path: '/Purchased',
    name: '已购',
    component: () => import('@/views/Purchased')
  }, {
    path: '/Mine',
    name: '我的',
    component: () => import('@/views/Mine')
  }, {
    path: '/Vip',
    name: 'Vip',
    component: () => import('@/views/Vip')
  }, {
    path: '/Login',
    name: '登录',
    component: () => import('@/views/Login')
  }, {
    path: '/Register',
    name: '注册',
    component: () => import('@/views/Login/Register')
  }]
})
