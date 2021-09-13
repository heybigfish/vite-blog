import upperFirst from 'lodash/upperFirst'
import cameCase from 'lodash/camelCase'
// import store from '@/store'
// 自动注册全局组件
// 组件name属性必填
export function autoImportComponents(app) {
  const importComponents = import.meta.globEager('./*/index.vue')
  Object.keys(importComponents).map((e, i) => {
    let components = importComponents[e]
    app.component(components.default.name, components.default)
  })
}
