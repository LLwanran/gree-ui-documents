# 工具栏

屏幕顶部或底部包含导航元素的固定区域

## 按需引入

```javascript
import { ToolBar } from 'gree-ui';

Vue.component(ToolBar.name, ToolBar);
```

### 基础

:::demo

```html
<gree-toolbar position="top" no-hairline>
  <gree-button type="danger" block plain>我是顶部Toolbar</gree-button>
</gree-toolbar>
<gree-toolbar position="bottom" no-hairline>
  <gree-button type="primary" block round>我是底部Toolbar</gree-button>
</gree-toolbar>
```

:::

## Props

| 属性        | 说明                        | 类型    | 默认值      |
| ----------- | --------------------------- | ------- | ----------- |
| no-hairline | 无分割线                    | Boolean | \-          |
| position    | 位置，可选[`top`、`bottom`] | String  | `undefined` |

<style lang="less" scoped>
/deep/ .toolbar-bottom {
  margin-top: 240px;
}
/deep/ .gree-button-content {
  margin-bottom: 0;
}
</style>
