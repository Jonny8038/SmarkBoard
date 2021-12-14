import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue') //首页
  },
  {
    path: '/batter',
    name: 'Batter',
    component: () => import('@/views/Batter.vue') //电池页面
  },
  {
    path: '/devops',
    name: 'Devops',
    component: () => import('@/views/Devops.vue') //运维服务页面
  },
  {
    path: '/system',
    name: 'System',
    component: () => import('@/views/System.vue') //系统监测页面
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router