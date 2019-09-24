# 分割线

区隔内容的分割线

对不同章节的文本段落进行分割

对行内文字/链接进行分割，例如表格的操作列

## 按需引入

```javascript
import { Divider } from 'gree-ui';

Vue.component(Divider.name, Divider);
```

### 基本

:::demo

```html
<gree-block>
  <p>赵客缦胡缨，吴钩霜雪明。</p>
  <gree-divider></gree-divider>
  <p>事了拂衣去，深藏身与名。</p>
</gree-block>
```

:::

### 设置文案

:::demo

```html
<gree-block>
  <p>元嘉草草，封狼居胥，赢得仓皇北顾。</p>
  <gree-divider content-position="left">永遇乐 京口北固亭怀古</gree-divider>
  <p>众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。</p>
  <gree-divider>
    <gree-icon name="menu"></gree-icon>
  </gree-divider>
  <p>旧时茅店社林边，路转溪桥忽见。</p>
  <gree-divider content-position="right">辛弃疾</gree-divider>
</gree-block>
```

:::

### 垂直分割

:::demo

```html
<gree-block>
  <span>诺克萨斯之手</span>
  <gree-divider direction="vertical"></gree-divider>
  <span>蛮族之王</span>
  <gree-divider direction="vertical"></gree-divider>
  <span>傲之追猎者</span>
</gree-block>
```

:::

## Props

| 属性            | 说明     | 类型   | 默认值       | 备注                  |
| --------------- | -------- | ------ | ------------ | --------------------- |
| direction       | 展示方向 | String | `horizontal` | 可选值`vertical`      |
| contentPosition | 内容位置 | String | `center`     | 可选值`left`、`right` |

<style lang="less" scoped>
.block {
  color: #404657;
  font-size: 32px;
  /deep/ .gree-divider .gree-divider__text {
    background-color: #eee;
  }
}
</style>
