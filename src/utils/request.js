import Vue from 'vue'
import axios from 'axios'
import { Notify } from 'vant'
Vue.prototype.$axios = axios
  // const whiteList = ['/api', '/nodeapi', '/groupuser']
axios.defaults.timeout = 5000 // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // 配置请求头
  // POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(config => {
  return config
}, error => {
  console.log('错误的传参')
  return Promise.reject(error)
})

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(response => {
  // 对响应数据做些事
  const res = response.data
  if (response.status !== 200) {
    Notify({ type: 'warning', message: '亲！接口调用失败，请检查！' })
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return res
  }
}, error => {
  console.log('网络异常')
  return Promise.reject(error)
})
export default {}
