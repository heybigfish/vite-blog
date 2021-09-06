import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Vuex from '@/views/Vuex.vue'
import Layout from '@/Layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'vuex',
        // component: Vuex // 懒加载组件
        component: () => import('@/views/home.vue'), // 懒加载组件

        meta: {
          keepAlive: false, // 不需要被缓存
          title: 'Vuex'
        }
      }
    ]
  }
  // {
  //   path: '/vuex',
  //   name: 'Vuex',
  //   component: Vuex
  // }
  // {
  //   path: '/axios',
  //   name: 'Axios',
  //   component: () => import('@/views/axios.vue') // 懒加载组件
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
