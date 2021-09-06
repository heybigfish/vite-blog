// 基础配置
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
//element UI
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 基础style
import './assets/css/base.less'
// import './assets/
import { autoImportComponents } from '@components/index.ts'

// markdown
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import Prism from 'prismjs'
VueMarkdownEditor.use(vuepressTheme, {
  Prism
})

const app = createApp(App)

// api配置
import api from './api/index'
app.config.globalProperties.$api = api

app.use(ElementPlus).use(store).use(router).mount('#app')
