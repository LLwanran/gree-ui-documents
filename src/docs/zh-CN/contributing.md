# 开发环境

- node >= 8.9.0
- npm >= 5.0.0

## 代码规范

[eslint standard](https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style)规范，建议 IDE 上添加 eslint 的插件

## 组件命名

- 组件名(kebab-case)使用小写字母，以`-`分割, 例如`gree-date-picker`。
- 准确表达组件 UI 或功能且避免过于宽泛。

## 组件实现

- 依赖

  新增外部依赖需要内部讨论后决定，尽量选择较为知名开源组件，且避免体积过大。

- 引用

  组件内部使用相对路径引用，避免使用`alias`。如`import { debounce, throttle } from '../util'`。

- 通用方法

  通用逻辑和样式使用`_util/*`、`_style/*`, 避免组件代码内部通用逻辑或样式冗余。

- 样式

  使用`stylus`; 单位统一使用`px`; 所有图标使用内置 svg 图标, 详情见组件`Icon`。

## 组件核心代码

以官方[vue-sytle-guide](https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended)为标准

## 组件单元测试代码

测试工具使用`Jest`+`vue-test-utils`, 原则上各项指标覆盖率要大于`50%`

工具参考文档:

[https://vuejs.org/v2/guide/unit-testing.html](https://vuejs.org/v2/guide/unit-testing.html)  
[https://jestjs.io](https://jestjs.io/docs/getting-started.html)  
[https://vue-test-utils.vuejs.org](https://vue-test-utils.vuejs.org/)
