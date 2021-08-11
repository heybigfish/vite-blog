import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import api from './api/index'
const app = createApp(App)
app.config.globalProperties.$api = api
app.use(ElementPlus).use(store).use(router).mount('#app')
