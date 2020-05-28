# 标签

用于标记和选择

## 按需引入

```javascript
import { Tag } from 'gree-ui';

Vue.component(Tag.name, Tag);
```

### 半圆

:::demo

```html
<gree-block>
  <gree-tag size="tiny" shape="circle" type="fill" fill-color="rgba(0,0,0,.6)">
    巴厘岛 | 自由行
  </gree-tag>
  <gree-tag size="small" shape="circle" type="fill" fill-color="#e4393c">
    7天无理由退货
  </gree-tag>
  <gree-tag size="large" shape="circle" type="fill" fill-color="#00b4ff">
    满250减17
  </gree-tag>
  <gree-tag size="small" shape="circle" type="ghost" font-color="#00cc00">
    新用户专享
  </gree-tag>
  <gree-tag
    size="large"
    shape="circle"
    sharp="bottom-left"
    type="fill"
    fill-color="linear-gradient(270deg, #f7dfa5, #efc489)"
    font-color="#603b07"
  >
    商家发货&售后
  </gree-tag>
</gree-block>
```

:::

### 圆角

:::demo

```html
<gree-block>
  <gree-tag
    size="large"
    shape="fillet"
    type="fill"
    fill-color="rgba(255, 91, 96, .1)"
    font-weight="normal"
    font-color="#ff5b60"
  >
    12期免息
  </gree-tag>
</gree-block>
```

:::

### 线框

:::demo

```html
<gree-block>
  <gree-tag size="large" shape="square" font-color="#d29c52" type="ghost">
    白条
  </gree-tag>
  <gree-tag size="small" shape="square" font-color="#ef4034" type="ghost">
    信用卡
  </gree-tag>
</gree-block>
```

:::

### 浮雕文字

:::demo

```html
<gree-block>
  <gree-tag
    size="large"
    shape="square"
    fill-color="rgba(0,0,0,0)"
    type="fill"
    font-weight="bolder"
    font-color="#f13a4d"
  >
    ￥25
  </gree-tag>
  <gree-tag
    size="small"
    shape="square"
    fill-color="rgba(0,0,0,0)"
    type="fill"
    font-weight="bolder"
    font-color="#232326"
  >
    好评 99%
  </gree-tag>
</gree-block>
```

:::

### 特殊标签

:::demo

```html
<gree-block>
  <gree-tag
    size="large"
    shape="bubble"
    fill-color="linear-gradient(90deg, #ff5b60 0%, #ff2d3d 100%)"
    type="fill"
  >
    66
  </gree-tag>
  <gree-tag
    size="large"
    shape="quarter"
    fill-color="#FC9153"
    type="fill"
    font-color="#fff"
    style="margin-right: 20px;"
  >
    <gree-icon name="success"></gree-icon>
  </gree-tag>
  <gree-tag
    size="large"
    shape="coupon"
    fill-color="#ec2f8a"
    type="fill"
    font-color="#fff"
    style="margin-right: 20px;"
  >
    优鲜赔
  </gree-tag>
</gree-block>
```

:::

## Props

| 属性        | 说明                        | 类型   | 默认值   | 可选值                                                 |
| ----------- | --------------------------- | ------ | -------- | ------------------------------------------------------ |
| size        | 大小                        | String | `large`  | `tiny`, `small`, `large`                               |
| shape       | 形状                        | String | `square` | `square`, `circle`, `fillet`, `quarter`, `coupon`      |
| sharp       | 尖角                        | String | \-       | `top-left`, `top-right`, `bottom-left`, `bottom-right` |
| type        | 样式                        | String | `ghost`  | `fill`(填充), `ghost`(线框)                            |
| fill-color  | 标签颜色 rgba or hex number | String | \-       | \-                                                     |
| font-weight | 字体粗细                    | String | `normal` | `normal`, `bold`, `bolder`                             |
| font-color  | 字体颜色 rgba or hex number | String | \-       | \-                                                     |

<style lang="less" scoped>
/deep/ .gree-tag {
  margin-right: 12px;
  .type-ghost {
    border-width: 1px;
  }
}
</style>
