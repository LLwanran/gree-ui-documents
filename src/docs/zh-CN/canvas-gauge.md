# Canvas 刻度盘

用于展示工作进度

## 按需引入

```javascript
import { CanvasGauge } from 'gree-ui';

Vue.component(CanvasGauge.name, CanvasGauge);
```

### 基础

:::demo

```html
<gree-block>
  <gree-canvas-gauge
    title="剩余"
    content="60分钟"
    brief="五花肉"
    :gradient-color="gradientColor"
  ></gree-canvas-gauge>
</gree-block>
```

:::

### 设置文案

:::demo

```html
<gree-block>
  <gree-canvas-gauge
    :width="450"
    :height="450"
    :total="500"
    :current="220"
    :score="70"
    :stroke-line-width="2"
    :speed="2"
    color="#363fff"
    bg="rgba(91, 66, 214, .12)"
    title="自定义标题"
    content="自定义内容"
    brief="自定义摘要"
  ></gree-canvas-gauge>
</gree-block>
```

:::

## Props

| 属性              | 说明         | 类型   | 默认值    | 备注                                                      |
| ----------------- | ------------ | ------ | --------- | --------------------------------------------------------- |
| width             | 宽度         | Number | `375`     | \-                                                        |
| height            | 高度         | Number | `375`     | \-                                                        |
| total             | 总分         | Number | `100`     | \-                                                        |
| current           | 当前分       | Number | `60`      | \-                                                        |
| score             | 刻度数量     | Number | `50`      | 越大刻度越密                                              |
| stroke-line-width | 刻度线宽     | Number | `4`       | \-                                                        |
| speed             | 动画速度     | Number | `8`       | 值越大越快                                                |
| color             | 当前刻度颜色 | String | `#f17026` | 纯色 `Hex`或`RGBA`                                        |
| gradient-color    | 渐变色数组   | Array  | `[]`      | 渐变顺序从左到右 例如：`[[241, 171, 38], [241, 105, 38]]` |
| bg                | 刻度背景色   | String | `#dedede` | \-                                                        |
| title             | 文本标题     | String | \-        | \-                                                        |
| content           | 文本内容     | String | \-        | \-                                                        |
| brief             | 文本摘要     | String | \-        | \-                                                        |

<script>
export default {
  data() {
    return {
      gradientColor: [[241, 171, 38], [241, 105, 38]]
    };
  }
};
</script>

<style lang="less" scoped>
.block {
  width: 100%;
  height: auto;
  text-align: center;
  margin: 0 auto;
}
</style>
