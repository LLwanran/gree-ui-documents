# 块内容

添加额外的格式和文本内容所需的间距

## 按需引入

```javascript
import { Block, BlockTitle, BlockHeader, BlockFooter } from 'gree-ui';

Vue.component(Block.name, Block);
Vue.component(BlockTitle.name, BlockTitle);
Vue.component(BlockHeader.name, BlockHeader);
Vue.component(BlockFooter.name, BlockFooter);
```

### 基础

:::demo

```html
<div
  class="gree-example-child gree-example-child-block gree-example-child-block-0"
>
  <gree-block-title>块标题</gree-block-title>
  <gree-block-title medium>中标题</gree-block-title>
  <gree-block-title large>大标题</gree-block-title>
  <gree-block
    >八百标兵奔北坡，炮兵并排北边跑，炮兵怕把标兵碰，标兵怕碰炮兵炮。</gree-block
  >
  <gree-block-title>内容加粗</gree-block-title>
  <gree-block strong
    >有个小孩叫小杜，上街打醋又买布，买了布，打了醋，回头看见鹰抓兔，放下布，搁下醋，上前去追鹰和兔，飞了鹰，跑了兔，洒了醋，湿了布。</gree-block
  >
  <gree-block-title>无边框</gree-block-title>
  <gree-block strong no-hairlines
    >和尚端汤上塔，塔滑汤洒汤烫塔；和尚端塔上汤，汤滑塔洒塔烫汤。</gree-block
  >
  <gree-block-title>嵌入</gree-block-title>
  <gree-block strong inset
    >天上七颗星，地下七块冰，树上七只鹰，梁上七根钉，台上七盏灯。</gree-block
  >
  <gree-block>
    <gree-block-header>块头</gree-block-header>哥哥弟弟坡前坐, 坡上卧着一只鹅,
    坡下流着一条河,哥哥说:宽宽的河, 弟弟说:白白的鹅。鹅要过河,河要渡
    鹅,不知是鹅过河还是河渡鹅。
    <gree-block-footer>块底</gree-block-footer>
  </gree-block>
</div>
```

:::

## Block Props

| 属性         | 说明     | 类型    | 默认值  |
| ------------ | -------- | ------- | ------- |
| inset        | 嵌入     | Boolean | `false` |
| strong       | 内容加粗 | Boolean | `false` |
| no-hairlines | 无边框   | Boolean | `false` |

## BlockTitle Props

| 属性   | 说明     | 类型    | 默认值  |
| ------ | -------- | ------- | ------- |
| large  | 大尺寸   | Boolean | `false` |
| medium | 中等尺寸 | Boolean | `false` |
