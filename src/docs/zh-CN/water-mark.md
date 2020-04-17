# 水印

自带水印背景的容器

## 按需引入

```javascript
import { WaterMark } from 'gree-ui';

Vue.component(WaterMark.name, WaterMark);
```

### 基础

:::demo

```html
<div class="gree-example-child gree-example-child-water-mark gree-example-child-water-mark-0">
  <gree-water-mark class="text-container" content="GREE UI" spacing="5vw">
    <p>我们都不必在意未来的样子</p>
    <p>像是精神病患写的诗 或是烟花绽放的节日</p>
    <p>随它去吧 我们都只活一次</p>
    <p>呼吸呼吸呼吸 呼 一切曳然而止</p>
    <p>真理在荒谬被证实以前 都只是暗室里的装饰</p>
    <p>只有当眼前亮起来了以后</p>
    <p>才有机会彰显它的价值 不是谁能决定的</p>
    <p>该漫游还是冲刺</p>
    <p>我们都在海里 我觉得我们像沙子</p>
    <p>你说的亡命之徒 是不是大概就是这个意思</p>
  </gree-water-mark>
</div>

<style lang="scss">
.gree-example-child-water-mark-0 {
  .text-container {
    padding: 46px;
    background: #fff;

    p {
      margin-bottom: 29px;
      line-height: 1.5;
      font-size: 35px;
      text-indent: 2em;
    }
  }
}
</style>
```

:::

### 自定义插槽

:::demo

```html
<div class="gree-example-child gree-example-child-water-mark gree-example-child-water-mark-1">
  <gree-water-mark class="text-container" spacing="5vw">
    <p>听我说 我原来有个梦</p>
    <p>跟你高飞远走 跟你一起走到白头</p>
    <p>但是我 拥有化为乌有</p>
    <p>忘记我们承诺 忘记曾经爱你爱的那么浓</p>
    <p>我不能带你走 我犯了大错</p>
    <p>必须一个人走 必须扛下所有罪过</p>
    <p>必须离开熟悉的街口</p>
    <p>请你不要忘记我 这夜里有小雨飘在空中</p>
    <div slot="watermark" slot-scope="props">
      <span v-if="props.coord.row % 2">奇数行</span>
      <span v-else>偶数行</span>
    </div>
  </gree-water-mark>
</div>

<style lang="scss">
.gree-example-child-water-mark-1 {
  .text-container {
    padding: 46px;
    background: #fff;

    p {
      margin-bottom: 29px;
      line-height: 1.5;
      font-size: 35px;
      text-indent: 2em;
    }
  }
}
</style>
```

:::

### API

#### WaterMask Props

| 属性     | 说明     | 类型             | 默认值 | 备注                     |
| -------- | -------- | ---------------- | ------ | ------------------------ |
| content  | 水印内容 | String           | \-     | 复杂内容请使用自定义插槽 |
| spacing  | 水印间距 | [String, Number] | `20vw` | \-                       |
| repeat-x | 横向重复 | Boolean          | `true` | \-                       |
| repeat-y | 纵向重复 | Boolean          | `true` | \-                       |
| rotate   | 旋转角度 | [String, Number] | `-30`  | \-                       |
| opacity  | 透明度   | [String, Number] | `0.5`  | \-                       |

<style lang="less">
.gree-example-child-water-mark-0,
.gree-example-child-water-mark-1 {
  .text-container {
    padding: 23px;
    background: #fff;

    p {
      margin-bottom: 14px;
      line-height: 1.5;
      font-size: 17px;
      text-indent: 2em;
    }
  }
}
</style>
