# 插件开发指南

> 插件开发全部对应 @vue/cli 3.x 的版本

## 目录规范

### 一个常规插件的开发，目录结构应该是酱紫的 ——

```text
├── public [任何放置在 public 文件夹的静态资源都会被简单的复制，而不经过 webpack。你需要通过绝对路径来引用它们]
  ├─ favicon.ico
  ├─ index.html
├─ src
  ├─ api [API 接口]
    ├─ xxx.js [按 RouterName 拆分]
  ├─ assets
  ├─ img
  ├─ js
  ├─ scss
    ├─ global.scss [通用样式]
    ├─ xxx.scss [按 RouterName 拆分]
  ├─ components [自定义组件]
    ├─ mid [按 mid 拆分]
  ├─ config
    ├─ config.xml [按 mid 注释]
  ├─ directives [自定义指令]
  ├─ i18n [语言包]
    ├─ en
    ├─ zh_CN
  ├─ mixins [混入，分发Vue 组件中的可复用功能]
    ├─ config
      ├─ mid [按 mid 拆分]
      ├─ xxx.js [公用逻辑不必拆分]
    ├─ utils
      ├─ debug.js [调试]
      ├─ init.js [初始化]
      ├─ updateStatus.js [状态检测]
  ├─ store [Vuex]
    ├─ modules
      ├─ xxx.js
    ├─ actions.js
    ├─ getters.js
    ├─ index.js
    ├─ mutations.js
    ├─ state.js
    ├─ types.js
  ├─ utils [通用工具方法]
    ├─ xxx.js
  ├─ views [视图文件]
    ├─ mid [按 mid 拆分]
    ├─ Error.vue [公用文件不必拆分]
    ├─ Offline.vue [公用文件不必拆分]
    ├─ xxx.vue [公用文件不必拆分]
  ├─ APP.vue [根组件]
  ├─ main.js [入口 js 文件]
  ├─ router.js [路由]
├─ .env [环境变量]
├─ .env.debug [环境变量，打包测试环境]
├─ .env.test [环境变量，开发测试环境]
├─ .eslintignore [ESLint 忽略指定文件和目录]
├─ .eslintrc.js [ESLint 配置文件]
├─ .gitignore [Git 忽略特殊文件]
├─ .postcssrc.js [PostCSS 配置]
├─ README.md [项目的入门手册或介绍文档]
├─ babel.config.js [Babel 配置文件]
├─ package.json [包依赖管理]
├─ vue.config.js [Vue CLI 配置]
```

## 组件核心代码

### 举例： 插件 "首页" 的开发，代码结构应该是酱儿婶的 ——

```html
<template>
  <!-- 根元素全部包裹在View和Page组件里 -->
  <!-- Page组件带上自定义样式，方便提取到scss中 -->
  <!-- 多个动态属性需分为多行，使用VSCode格式化 -->
  <!-- 统一使用指令缩写 : @ -->
  <gree-view>
    <gree-page no-navbar class="page-home">
      <!-- 组件名称和prop属性使用kebab-case，且避免使用自闭合 -->
      <gree-header>xxx</gree-header>
      <gree-row>
        <!-- v-for 必须增加 key -->
        <gree-col v-for="(item, index) in lists" :key="index">xxx</gree-col>
      </gree-row>
      <!-- 电源关闭 -->
      <gree-power-off></gree-power-off>
    </gree-page>
    <!-- 底部弹出层按钮 -->
    <custom-function-list></custom-function-list>
    <!-- 底部按钮 -->
    <gree-toolbar position="bottom" no-hairline></gree-toolbar>
  </gree-view>
</template>

<script>
  // View和Page组件无需在此引入，它在main.js已全局引入
  // 你可以在main.js中引入你认为频繁引用的组件
  import { xxx, xxx, xxx } from 'gree-ui';

  // options按照如下顺序
  export default {
    components: {
      [Component.name]: Component
    },
    // props命名尽量以明细方式书写
    props: {
      // prop属性需用驼峰
      myPropText: {
        type: String,
        default: 'primary'
      }
    },
    // data必须为函数
    data() {
      return {};
    },
    computed: {},
    watch: {},
    // 生命周期钩子
    /*
      beforeCreate
      created
      beforeMount
      mounted
      beforeUpdate
      updated
      activated
      deactivated
      beforeDestroy
      destroyed
      errorCaptured
    */
    methods: {
      myMethod() {}
    }
  };
</script>

<style lang="scss" scoped>
  样式提取到scss，尽量不要写在Vue文件里
</style>
```
