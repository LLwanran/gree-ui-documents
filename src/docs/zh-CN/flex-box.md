# 布局

Flexbox 布局、栅格布局

## 按需引入

```javascript
import { Row, Col } from 'gree-ui';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
```

### 设置元素间距

:::demo

```html
<gree-block>
  <gree-row>
    <gree-col>50% (.col)</gree-col>
    <gree-col>50% (.col)</gree-col>
  </gree-row>
  <gree-row>
    <gree-col>25% (.col)</gree-col>
    <gree-col>25% (.col)</gree-col>
    <gree-col>25% (.col)</gree-col>
    <gree-col>25% (.col)</gree-col>
  </gree-row>
  <gree-row>
    <gree-col>33% (.col)</gree-col>
    <gree-col>33% (.col)</gree-col>
    <gree-col>33% (.col)</gree-col>
  </gree-row>
  <gree-row>
    <gree-col>20% (.col)</gree-col>
    <gree-col>20% (.col)</gree-col>
    <gree-col>20% (.col)</gree-col>
    <gree-col>20% (.col)</gree-col>
    <gree-col>20% (.col)</gree-col>
  </gree-row>
  <gree-row>
    <gree-col width="33">33% (.col-33)</gree-col>
    <gree-col width="66">66% (.col-66)</gree-col>
  </gree-row>
  <gree-row>
    <gree-col width="25">25% (.col-25)</gree-col>
    <gree-col width="25">25% (.col-25)</gree-col>
    <gree-col width="50">50% (.col-50)</gree-col>
  </gree-row>
  <gree-row>
    <gree-col width="75">75% (.col-75)</gree-col>
    <gree-col width="25">25% (.col-25)</gree-col>
  </gree-row>
  <gree-row>
    <gree-col width="80">80% (.col-80)</gree-col>
    <gree-col width="20">20% (.col-20)</gree-col>
  </gree-row>
</gree-block>
```

:::

### 无元素间距

:::demo

```html
<gree-block>
  <gree-row no-gap>
    <gree-col>50% (.col)</gree-col>
    <gree-col>50% (.col)</gree-col>
  </gree-row>
  <gree-row no-gap>
    <gree-col>25% (.col)</gree-col>
    <gree-col>25% (.col)</gree-col>
    <gree-col>25% (.col)</gree-col>
    <gree-col>25% (.col)</gree-col>
  </gree-row>
  <gree-row no-gap>
    <gree-col>33% (.col)</gree-col>
    <gree-col>33% (.col)</gree-col>
    <gree-col>33% (.col)</gree-col>
  </gree-row>
  <gree-row no-gap>
    <gree-col>20% (.col)</gree-col>
    <gree-col>20% (.col)</gree-col>
    <gree-col>20% (.col)</gree-col>
    <gree-col>20% (.col)</gree-col>
    <gree-col>20% (.col)</gree-col>
  </gree-row>
  <gree-row no-gap>
    <gree-col width="33">33% (.col-33)</gree-col>
    <gree-col width="66">66% (.col-66)</gree-col>
  </gree-row>
  <gree-row no-gap>
    <gree-col width="25">25% (.col-25)</gree-col>
    <gree-col width="25">25% (.col-25)</gree-col>
    <gree-col width="50">50% (.col-50)</gree-col>
  </gree-row>
  <gree-row no-gap>
    <gree-col width="75">75% (.col-75)</gree-col>
    <gree-col width="25">25% (.col-25)</gree-col>
  </gree-row>
  <gree-row no-gap>
    <gree-col width="80">80% (.col-80)</gree-col>
    <gree-col width="20">20% (.col-20)</gree-col>
  </gree-row>
</gree-block>
```

:::

### 嵌套

:::demo

```html
<gree-block>
  <gree-row>
    <gree-col
      >50% (.col)
      <gree-row>
        <gree-col>50% (.col)</gree-col>
        <gree-col>50% (.col)</gree-col>
      </gree-row>
    </gree-col>
    <gree-col
      >50% (.col)
      <gree-row>
        <gree-col width="33">33% (.col-33)</gree-col>
        <gree-col width="66">66% (.col-66)</gree-col>
      </gree-row>
    </gree-col>
  </gree-row>
</gree-block>
```

:::

## Props

| 属性    | 说明 | 类型    | 默认值 |
| ------- | ---- | ------- | ------ |
| no-gap  | 间距 | Boolean | \-     |
| icon    | 图标 | Boolean | \-     |
| options | 内容 | Array   | `[]`   |

<style lang="less" scoped>
[class*='col'] {
  background: #fff;
  text-align: center;
  color: #000;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 30px;
  font-size: 24px;
}
</style>
