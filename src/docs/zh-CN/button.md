# 按钮

按钮组件，可配置多种不同的按钮样式

## 按需引入

```javascript
import { Button } from 'gree-ui';

Vue.component(Button.name, Button);
```

### 按钮类型

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-0"
>
  <gree-row>
    <gree-col>
      <gree-button type="default">默认按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button type="primary">主要按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button type="info">信息按钮</gree-button>
    </gree-col>
  </gree-row>
  <gree-row>
    <gree-col>
      <gree-button type="success">成功按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button type="warning">警告按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button type="danger">危险按钮</gree-button>
    </gree-col>
  </gree-row>
</div>
```

:::

### 朴素按钮

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-1"
>
  <gree-row>
    <gree-col>
      <gree-button plain type="primary">朴素按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button plain type="info">朴素按钮</gree-button>
    </gree-col>
  </gree-row>
</div>
```

:::

### 细边框

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-2"
>
  <gree-row>
    <gree-col>
      <gree-button plain hairline type="primary">细边框按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button plain hairline type="info">细边框按钮</gree-button>
    </gree-col>
  </gree-row>
</div>
```

:::

### 禁用状态

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-3"
>
  <gree-row>
    <gree-col>
      <gree-button disabled type="primary">禁用状态</gree-button>
    </gree-col>
    <gree-col>
      <gree-button disabled type="info">禁用状态</gree-button>
    </gree-col>
  </gree-row>
</div>
```

:::

### 加载状态

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-4"
>
  <gree-row>
    <gree-col>
      <gree-button loading type="primary" />
    </gree-col>
    <gree-col>
      <gree-button loading type="primary" loading-type="spinner" :loading-size="30" />
    </gree-col>
    <gree-col>
      <gree-button loading type="info" loading-text="加载中..." />
    </gree-col>
  </gree-row>
</div>
```

:::

### 按钮形状

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-5"
>
  <gree-row>
    <gree-col>
      <gree-button square type="primary">方形按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button round type="info">圆形按钮</gree-button>
    </gree-col>
  </gree-row>
</div>
```

:::

### 图标按钮

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-6"
>
  <gree-row>
    <gree-col>
      <gree-button icon="like-o" type="primary" />
    </gree-col>
    <gree-col>
      <gree-button icon="like-o" type="primary">按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button icon="wechat" icon-svg type="info" plain>按钮</gree-button>
    </gree-col>
  </gree-row>
</div>
```

:::

### 按钮尺寸

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-7"
>
  <gree-row>
    <gree-col>
      <gree-button type="primary" size="large">大号按钮</gree-button>
    </gree-col>
  </gree-row>
  <gree-row>
    <gree-col>
      <gree-button type="primary" size="normal">普通按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button type="primary" size="small">小型按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button type="primary" size="mini">迷你按钮</gree-button>
    </gree-col>
  </gree-row>
</div>
```

:::

### 块级元素

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-8"
>
  <gree-row>
    <gree-col>
      <gree-button type="primary" block>块级元素</gree-button>
    </gree-col>
  </gree-row>
</div>
```

:::

### 自定义颜色

:::demo

```html
<div
  class="gree-example-child gree-example-child-button gree-example-child-button-9"
>
  <gree-row>
    <gree-col>
      <gree-button color="#e33371">单色按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button color="#9a0036" plain>单色按钮</gree-button>
    </gree-col>
    <gree-col>
      <gree-button color="linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)">渐变色按钮</gree-button>
    </gree-col>
  </gree-row>
</div>
```

:::

## API

### Props

| 属性               | 说明                                    | 类型    | 默认值         | 备注                                                    |
| ------------------ | --------------------------------------- | ------- | -------------- | ------------------------------------------------------- |
| type               | 类型                                    | String  | `default`      | `default`,`primary`,`info`,`success`,`warning`,`danger` |
| size               | 尺寸                                    | String  | `normal`       | `large`,`normal`,`small`,`mini`                         |
| text               | 按钮文字                                | String  | \-             | \-                                                      |
| icon               | 左侧图标名称                            | String  | \-             | 参考组件`Icon`                                          |
| icon-svg           | 使用svg图标                             | Boolean | `false`        | \-                                                      |
| color              | 按钮颜色，支持传入linear-gradient渐变色 | String  | \-             |                                                         |
| block              | 是否为块级元素                          | Boolean | `false`        | \-                                                      |
| plain              | 是否为朴素按钮                          | Boolean | `false`        | \-                                                      |
| round              | 是否为圆形按钮                          | Boolean | `false`        | \-                                                      |
| square             | 是否为方形按钮                          | Boolean | `false`        | \-                                                      |
| loading            | 是否显示为加载状态                      | Boolean | `false`        | \-                                                      |
| hairline           | 是否使用 0.5px 边框                     | Boolean | `false`        | \-                                                      |
| disabled           | 是否禁用按钮                            | Boolean | `false`        | \-                                                      |
| loading-type       | 加载图标类型                            | String  | `roller`       | 参考组件`ActivityIndicator`                             |
| loading-size       | 加载图标大小                            | Number  | `20`           | \-                                                      |
| loading-width      | 加载图标宽度                            | Number  | \-             | \-                                                      |
| loading-color      | 加载图标颜色                            | String  | `light | #fff` | \-                                                      |
| loading-text-color | 加载文字颜色                            | String  | `#fff`         | \-                                                      |
| loading-text-size  | 加载文字大小                            | Number  | \-             | \-                                                      |
| loading-vertical   | 加载图标文字是否垂直排列                | Boolean | `false`        | \-                                                      |
| loading-text       | 加载状态提示文字                        | String  | \-             | \-                                                      |

### Events

#### @click(event)

按钮点击事件

<style lang="less">
.gree-example-child-button {
  .row {
    margin-bottom: 17px;
    text-align: center;
  }
}
</style>
