// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/style/index.scss'
import '@/utils/request'

// load vant
import Vant from 'vant'
import 'vant/lib/index.css'

// use cookies
import VueCookies from 'vue-cookies'

Vue.use(Vant)
Vue.use(VueCookies)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
