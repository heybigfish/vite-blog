#### 项目结构

```
├── publish/
└── src/
    ├── assets/                     // 静态资源目录
    ├── common/                     // 通用类库目录
    ├── components/                 // 公共组件目录
    ├── router/                     // 路由配置目录
    |     └── index.ts               // 路由配置文件
    |
    ├── store/                      // 状态管理目录
    |     └── index.ts               // store 配置文件
    |
    ├── style/                      // 通用 CSS 目录
    ├── utils/                      // 工具函数目录
          ├── axios.ts              // Axios 配置文件

    ├── views/                      // 页面组件目录
    ├── App.vue
    ├── main.ts
    ├── shims-vue.d.ts

├── tests/                          // 单元测试目录
├── index.html
├── tsconfig.json                   // TypeScript 配置文件
├── vite.config.ts                  // Vite 配置文件
└── package.json
```

#### 代码规范

项目使用`EditorConfig` + `Prettier` + `ESLint` 进行代码规范控制。

##### 集成 EditorConfig 配置

EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。
