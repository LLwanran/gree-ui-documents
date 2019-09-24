# 仪表盘

用于展示工作进度

## 按需引入

```javascript
import { Gauge } from 'gree-ui';

Vue.component(Gauge.name, Gauge);
```

### 示例 1

:::demo

```html
<gree-gauge :header="header" :minute="50" tips="烹饪中"></gree-gauge>

<script>
  export default {
    data() {
      return {
        header: '剩余'
      };
    }
  };
</script>
```

:::

### 示例 2

:::demo

```html
<gree-gauge is-segment :step="3" :title="title2" tips="加热中"></gree-gauge>

<script>
  export default {
    data() {
      return {
        title2: ['小火预热', '浸润吸水', '大火升温', '淀粉溶胀', '焖饭增香']
      };
    }
  };
</script>
```

:::

### 示例 3

:::demo

```html
<gree-gauge
  is-segment
  :step="5"
  :header="header"
  :title="title3"
  :minute="50"
  tips="焖饭中"
></gree-gauge>

<script>
  export default {
    data() {
      return {
        title3: ['小火预热', '浸润吸水', '大火升温', '淀粉溶胀', '焖饭增香']
      };
    }
  };
</script>
```

:::

## Props

| 属性       | 说明         | 类型    | 默认值   | 备注 |
| ---------- | ------------ | ------- | -------- | ---- |
| is-segment | 是否分段模式 | Boolean | `false`  | \-   |
| theme      | 主题         | String  | `yellow` | \-   |
| header     | 头部文字     | String  | \-       | \-   |
| title      | 标题         | Array   | `[]`     | \-   |
| hour       | 多少小时     | Number  | \-       | \-   |
| hourUnit   | 单位         | String  | `小时`   | \-   |
| minute     | 多少分钟     | Number  | \-       | \-   |
| minuteUnit | 单位         | String  | `分钟`   | \-   |
| tips       | 提示文本     | String  | \-       | \-   |
| step       | 第几步       | Number  | `1`      | \-   |

<script>
export default {
  data() {
    return {
      header: '剩余',
      title2: ['小火预热', '浸润吸水', '大火升温', '淀粉溶胀', '焖饭增香'],
      title3: ['小火预热', '浸润吸水', '大火升温', '淀粉溶胀', '焖饭增香']
    };
  }
};
</script>

<style lang="less" scoped>
.gree-gauge {
  &:not(:first-child) {
    height: 844px;
  }
  &.yellow {
    background-image: url('../../assets/images/progress_yellow.gif');
  }
  &.segmentation {
    /deep/ .progress-body {
      &.step-1 {
        background-image: url('../../assets/images/rice_stage_1.gif');
      }
      &.step-2 {
        background-image: url('../../assets/images/rice_stage_2.gif');
      }
      &.step-3 {
        background-image: url('../../assets/images/rice_stage_3.gif');
      }
      &.step-4 {
        background-image: url('../../assets/images/rice_stage_4.gif');
      }
      &.step-5 {
        background-image: url('../../assets/images/rice_stage_5.gif');
      }
    }
  }
}
</style>
