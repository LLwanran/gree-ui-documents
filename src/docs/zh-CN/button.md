# 按钮

按钮组件，可配置多种不同的按钮样式

## 按需引入

```javascript
import { Button } from 'gree-ui';

Vue.component(Button.name, Button);
```

### 基本

:::demo

```html
<gree-block>
  <gree-row>
    <gree-button>默认</gree-button>
  </gree-row>
  <gree-row>
    <gree-button type="positive">蓝色</gree-button>
    <gree-button type="positive" loading>加载中</gree-button>
    <gree-button type="assertive">红色</gree-button>
    <gree-button type="assertive" inactive>未激活</gree-button>
    <gree-button type="disabled">禁用</gree-button>
  </gree-row>
</gree-block>
```

:::

### 线性

:::demo

```html
<gree-block>
  <gree-row>
    <gree-button plain>默认</gree-button>
  </gree-row>
</gree-block>
```

:::

### 行内

:::demo

```html
<gree-block>
  <gree-row class="gree-example-child-button-3">
    <gree-button type="positive" icon="warning" inline>带图标</gree-button>
    <gree-button type="positive" inline plain>线性按钮</gree-button>
    <gree-button type="assertive" inline>红色</gree-button>
    <gree-button type="disabled" inline>禁用</gree-button>
  </gree-row>
</gree-block>
```

:::

### 圆角

:::demo

```html
<gree-block>
  <gree-row>
    <gree-button round>默认</gree-button>
  </gree-row>
</gree-block>
```

:::

### 小尺寸

:::demo

```html
<gree-block>
  <gree-row>
    <gree-button size="small" inline>默认</gree-button>
    <gree-button type="positive" size="small" inline>蓝色</gree-button>
    <gree-button type="assertive" size="small" inline>红色</gree-button>
    <gree-button type="disabled" size="small" inline>禁用</gree-button>
  </gree-row>
</gree-block>
```

:::

### 文字链接按钮

:::demo

```html
<gree-block>
  <gree-row class="gree-example-child-button-5">
    <gree-button type="link" icon="location">收货地址</gree-button>
    <gree-button type="link" inactive>
      反馈
      <gree-icon name="arrow-right"></gree-icon>
    </gree-button>
  </gree-row>
</gree-block>
```

:::

## Props

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

## Events

### @click(event)

按钮点击事件

<style lang="less" scoped>
.gree-button.block {
  margin-bottom: 20px;
}
.gree-example-child-button-3 {
  justify-content: space-around;
}
.gree-example-child-button-5 {
  justify-content: flex-start;
}
</style>
