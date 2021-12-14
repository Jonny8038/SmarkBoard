import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/iconfont/iconfont.css' //引入阿里字体图标

import ElementUI from 'element-ui'; //引入element ui
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api/'
})

import BaiduMap from 'vue-baidu-map' //引入百度地图
Vue.use(BaiduMap, {
  ak: 'eO1Dj7EXNcmZUrzTSU0EznbmWT4iQV2e' //应用的ak
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')