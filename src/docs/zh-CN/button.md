# 按钮

按钮组件，可配置多种不同的按钮样式

## 按需引入

```javascript
import { Button } from 'gree-ui';

Vue.component(Button.name, Button);
```

### 基础

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-0"
>
  <gree-button>默认</gree-button>
  <gree-button type="positive">蓝色</gree-button>
  <gree-button type="positive" loading>加载中</gree-button>
  <gree-button type="assertive">红色</gree-button>
  <gree-button type="assertive" inactive>未激活</gree-button>
  <gree-button type="disabled">禁用</gree-button>
</div>
```

:::

### 线性

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-1"
>
  <gree-button plain>默认</gree-button>
  <gree-button type="positive" plain round loading>蓝色</gree-button>
  <gree-button type="assertive" plain round loading>红色</gree-button>
</div>
```

:::

### 行内

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-2"
>
  <gree-row>
    <gree-col>
      <gree-button type="positive" icon="warning" inline>带图标</gree-button>
      <gree-button type="positive" inline plain>线性</gree-button>
    </gree-col>
  </gree-row>
  <gree-row>
    <gree-col>
      <gree-button type="assertive" inline>红色</gree-button>
      <gree-button type="disabled" inline>禁用</gree-button>
    </gree-col>
  </gree-row>
</div>
```

:::

### 圆角

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-3"
>
  <gree-button type="default" round>默认</gree-button>
  <gree-button type="positive" round>蓝色</gree-button>
  <gree-button type="assertive" round>红色</gree-button>
  <gree-button type="disabled" round>禁用</gree-button>
</div>
```

:::

### 小尺寸

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-4"
>
  <gree-row>
    <gree-col>
      <gree-button size="small" inline>默认</gree-button>
      <gree-button type="positive" size="small" inline>蓝色</gree-button>
      <gree-button type="assertive" size="small" inline>红色</gree-button>
      <gree-button type="disabled" size="small" inline>禁用</gree-button>
    </gree-col>
  </gree-row>
</div>
```

:::

### 文字链接按钮

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-5"
>
  <gree-row>
    <gree-button type="link" icon="location">收货地址</gree-button>
    <gree-button type="link" inactive>
      反馈
      <gree-icon name="arrow-right"></gree-icon>
    </gree-button>
  </gree-row>
</div>
```

:::

## API

### Props

| 属性     | 说明          | 类型    | 默认值    | 备注                                                 |
| -------- | ------------- | ------- | --------- | ---------------------------------------------------- |
| type     | 样式          | String  | `default` | `default`,`positive`,`assertive`,`disabled`,`link`   |
| size     | 尺寸          | String  | `large`   | `large/small`                                        |
| plain    | 扁平          | Boolean | `false`   | \-                                                   |
| round    | 圆角          | Boolean | `false`   | \-                                                   |
| inline   | 行内          | Boolean | `false`   | \-                                                   |
| icon     | 图标          | String  | \-        | 参考组件`Icon`                                       |
| icon-svg | 使用 svg 图标 | Boolean | `false`   | \-                                                   |
| inactive | 未激活        | Boolean | `false`   | `inactive`设为`true`和`disabled`类型的按钮都无法点击 |
| loading  | 加载中状态    | Boolean | `false`   | \-                                                   |

### Events

#### @click(event)

按钮点击事件

<style lang="less">
.gree-example-child-button {
  .gree-button.button-block {
    margin-bottom: 10px;
  }
  &.gree-example-child-button-2 {
    .row {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
