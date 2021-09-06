import upperFirst from 'lodash/upperFirst'
import cameCase from 'lodash/camelCase'
// import store from '@/store'
// 自动注册全局组件
export function autoImportComponents(vue: any) {
  const importComponents: any = require.context('./', false, /\.vue$/)
  importComponents.keys().map((fileName: any) => {
    const componentConfig = importComponents(fileName)
    const componentName = upperFirst(cameCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')))
    // console.log(componentName)
    vue.component(componentName, componentConfig.default || componentConfig)
  })
}
