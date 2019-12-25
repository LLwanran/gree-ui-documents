# 卡片

基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用

## 按需引入

```javascript
import { Card, CardHeader, CardContent, CardFooter } from 'gree-ui';

Vue.component(Card.name, Card);
Vue.component(CardHeader.name, CardHeader);
Vue.component(CardContent.name, CardContent);
Vue.component(CardFooter.name, CardFooter);
```

### 基本

:::demo

```html
<gree-card
  content="这是一个具有纯文本的简单卡片，但是卡片也可以包含它们自己的页眉、页脚、列表视图、图像或任何其他元素"
></gree-card>
<gree-card
  title="卡片页眉"
  content="珠海格力电器股份有限公司成立于 1991 年， 1996 年 11 月在深交所挂牌上市。公司成立初期，主要依靠组装生产家用空调，现已发展成为多元化、科技型的全球工业集团，产业覆盖空调、生活电器、高端装备、通信设备等领域，产品远销 160 多个国家和地区。 公司现有近 9 万名员工，其中有 1.2 万名研发人员和 3 万多名技术工人，在国内外建有 14 个生产基地，分别坐落于珠海、重庆、合肥、郑州、武汉、石家庄、芜湖、长沙、杭州、洛阳、南京、成都以及巴西、巴基斯坦；同时建有长沙、郑州、石家庄、芜湖、天津 5 个再生资源基地，覆盖从上游生产到下游回收全产业链，实现了绿色、循环、可持续发展。 "
  footer="卡片页脚"
></gree-card>
```

:::

### 边线

:::demo

```html
<gree-card
  outline
  content="这是一个具有纯文本的简单卡片，但是卡片也可以包含它们自己的页眉、页脚、列表视图、图像或任何其他元素"
></gree-card>
```

:::

### 个性化

:::demo

```html
<gree-card class="demo-card-header-pic">
  <gree-card-header valign="bottom">电饭煲系列</gree-card-header>
  <gree-card-content>
    <p class="title">
      Gree/格力 GDF-5025C格力电饭煲家用大容量5L官方旗舰店电饭锅
    </p>
    <p>
      宝贝已收到、照片光线不好、晚上拍的。物流速度快很给力、也谢谢客服的耐心服务和良好的态度。给好评！格力是大品牌，我相信其品质质量。买的5L的、家里人员多。给好评！祝卖家生意兴隆！
    </p>
  </gree-card-content>
  <gree-card-footer>
    <p>左侧文本</p>
    <p>右侧文本</p>
  </gree-card-footer>
</gree-card>
```

:::

## Card Props

| 属性      | 说明       | 类型           | 默认值 |
| --------- | ---------- | -------------- | ------ |
| title     | 卡头内容   | String, Number | \-     |
| content   | 卡片内容   | String, Number | \-     |
| footer    | 卡页脚内容 | String, Number | \-     |
| outline   | 边线       | Boolean        | \-     |
| no-shadow | 无阴影     | Boolean        | \-     |
| no-border | 无边线     | Boolean        | \-     |
| padding   | 间距       | Boolean        | `true` |

## CardContent Props

| 属性    | 说明 | 类型    | 默认值 |
| ------- | ---- | ------- | ------ |
| padding | 间距 | Boolean | `true` |

<style lang="less" scoped>
.card {
  font-size: 30px;
  &.demo-card-header-pic {
    .card-header {
      height: 40vw;
      background-size: cover;
      background-position: center;
      background-color: #ffcc63;
      color: #404657;
    }
    .card-content-padding {
      > p {
        margin: 1em 0;
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
      .title {
        color: #8e8e93;
      }
    }
    .card-footer {
      > p {
        margin-bottom: 0;
      }
    }
  }
}
</style>
