// 基础配置
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import { createHead } from '@vueuse/head' // <--
//element UI
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 基础style
import './assets/css/base.less'
import './assets/css/prism.css'
// markdown
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
// import '@kangc/v-md-editor/lib/theme/style/github.css'

import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

// 引入所有语言包
import Prism from 'prismjs'

VueMarkdownEditor.use(vuepressTheme, {
  Prism: Prism
})

const app = createApp(App)
// 注册全局组件
import { autoImportComponents } from '@/components/index.js'
autoImportComponents(app)

// api配置
import api from './api/index'
app.config.globalProperties.$api = api

//md tag
const head = createHead()
app.use(ElementPlus).use(store).use(router).use(VueMarkdownEditor).use(head).mount('#app')
