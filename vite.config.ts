import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@kangc/v-md-editor/lib/theme/vuepress.js']
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true
      },
      // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
      markdownItSetup(md) {
        // directives: ''
        // for example
        md.use(require('markdown-it-anchor'), {
          permalink: true,
          permalinkBefore: true,
          permalinkSymbol: '§'
        })

        md.use(require('markdown-it-toc-done-right'), {
          format: function format(x, htmlencode) {
            return `<span>${htmlencode(x)}</span>`
          },
          containerId: 'container-md',
          callback: (e) => {
            return e
          }
        })

        md.use(require('markdown-it-prism'))
      },
      // Class names for the wrapper div
      wrapperClasses: 'markdown-body'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
      '@post': resolve(__dirname, 'src/post'), // 设置 `@` 指向 `src` 目录
      '@components': resolve(__dirname, 'src/components') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/gateway/': {
        target: 'http://219.144.185.121:14481/', // 开发环境
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/gateway/', '')
      }
    }
  }
})
