# 粘性布局

与 CSS 中position: sticky属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

## 按需引入

```javascript
import { Sticky } from 'gree-ui';

Vue.component(Sticky.name, Sticky);
```

### 基础

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="warning" scrollable>
  为了更好的体验效果，建议在 iOS 或 Android 设备上体验！
</gree-notice-bar>
<div class="gree-example-child gree-example-child-sticky gree-example-child-sticky-0">
  <gree-sticky>
    <gree-button type="primary">基础用法</gree-button>
  </gree-sticky>
</div>
```

:::

### 吸顶距离

:::demo

```html
<div class="gree-example-child gree-example-child-sticky gree-example-child-sticky-1">
  <gree-sticky :offset-top="100">
    <gree-button type="info">吸顶距离</gree-button>
  </gree-sticky>
</div>
```

:::

### 指定容器

:::demo

```html
<div class="gree-example-child gree-example-child-sticky gree-example-child-sticky-2">
  <div ref="container" style="height: 150px; background-color: #fff;">
    <gree-sticky :container="container" :z-index="999">
      <gree-button type="warning">指定容器</gree-button>
    </gree-sticky>
  </div>
</div>

<script>
export default {
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
</script>
```

:::

## Props

| 属性       | 说明                       | 类型             | 默认值 |
| ---------- | -------------------------- | ---------------- | ------ |
| z-index    | 吸顶时的 z-index           | [Number, String] | `99`   |
| container  | 容器对应的 HTML 节点       | Element          | \-     |
| offset-top | 吸顶时与顶部的距离，单位px | [Number, String] | `0`    |

## Events

| 事件名 | 说明       | 回调参数                                       |
| ------ | ---------- | ---------------------------------------------- |
| scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |

<script>
export default {
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
</script>
