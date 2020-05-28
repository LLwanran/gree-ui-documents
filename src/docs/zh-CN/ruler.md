# 刻度尺

可滑动刻度尺

## 按需引入

```javascript
import { Ruler } from 'gree-ui';

Vue.component(Ruler.name, Ruler);
```

### 基础

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="warning" scrollable>
  为了更好的体验效果，建议在 iOS 或 Android 设备上体验！
</gree-notice-bar>
<div class="gree-example-child gree-example-child-ruler gree-example-child-ruler-0">
  <gree-block>
    <gree-ruler v-model="value" :range="range" :step="100" :unit="20" :max="1000"></gree-ruler>
    <p>当前值：{{ value }}</p>
  </gree-block>
</div>

<script>
export default {
  data() {
    return {
      value: 360,
      range: [0, 1000]
    };
  }
}
</script>
```

:::

### 自定义step文案 + 位置

:::demo

```html
<div class="gree-example-child gree-example-child-ruler gree-example-child-ruler-1">
  <gree-block>
    <gree-ruler v-model="value" :range="range" :step="100" :unit="10" step-text-position="bottom" :step-text-render="stepTextRender"></gree-ruler>
    <p>当前值：{{ value }}</p>
  </gree-block>
</div>

<script>
export default {
  data() {
    return {
      value: 1300,
      range: [1000, 2000]
    };
  },
  methods: {
    stepTextRender(step) {
      return step + 'cm';
    }
  }
}
</script>
```

:::

### 自定义颜色 + 隐藏水平刻度线

:::demo

```html
<div class="gree-example-child gree-example-child-ruler gree-example-child-ruler-2">
  <gree-block>
    <gree-ruler v-model="value" :range="range" :step="100" :unit="10" unit-color="#ff6e19" hide-line></gree-ruler>
    <p>当前值：{{ value }}</p>
  </gree-block>
</div>

<script>
export default {
  data() {
    return {
      value: 1000,
      range: [1000, 2000]
    };
  }
}
</script>
```

:::

## Props

| 属性               | 说明                         | 类型     | 默认值     | 备注                     |
| ------------------ | ---------------------------- | -------- | ---------- | ------------------------ |
| v-model            | 双向绑定的值                 | Number   | `0`        | \-                       |
| range              | 刻度尺范围                   | Array    | `[0, 100]` | \-                       |
| step               | 刻度尺每一大格步数           | Number   | `10`       | \-                       |
| unit               | 刻度尺每一小格步数           | Number   | `1`        | \-                       |
| unit-color         | 刻度尺颜色rgba or hex number | String   | `#858B9C`  | \-                       |
| min                | 最小可滑动位置               | Number   | `0`        | \-                       |
| max                | 最大可滑动位置               | Number   | `100`      | \-                       |
| step-text-position | Step标志位置                 | String   | `top`      | 可选'top', 'bottom'      |
| step-text-render   | 自定义step文案               | Function | `noop`     | 自定义函数应该返回字符串 |
| hide-line          | 是否隐藏水平刻度线           | Boolean  | `false`    | \-                       |

## Events

### @change(currentValue)

值发生变化事件

<script>
export default {
  data() {
    return {
      value: 360,
      range: [0, 1000]
    };
  },
  methods: {
    stepTextRender(step) {
      return step + 'cm';
    }
  }
}
</script>

<style lang="less">
.gree-example-child-ruler-0,
.gree-example-child-ruler-1,
.gree-example-child-ruler-2 {
  p {
    text-align: center;
  }
}

.gree-example-child-ruler-2 {
  .gree-ruler-cursor {
    background-color: #ff6e19;
    box-shadow: 0 2px 4px #ff6e19;
  }
}
</style>
