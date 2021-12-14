import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// import mqtt from 'mqtt'
// Vue.prototype.mqtt = mqtt

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api/'
  // baseURL: 'http://192.168.110.235:9000/'
})


import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的** 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'eO1Dj7EXNcmZUrzTSU0EznbmWT4iQV2e'
})




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')