# 遮罩层

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作

## 按需引入

```javascript
import { Overlay } from 'gree-ui';

Vue.component(Overlay.name, Overlay);
```

### 基础用法

:::demo

```html
<div class="gree-example-child gree-example-child-overlay gree-example-child-overlay-0">
  <gree-button @click="overlay1 = !overlay1">显示遮罩层</gree-button>
</div>
<gree-overlay :value="overlay1">
  <gree-icon name="close" size="xl" @click.native="overlay1 = false" />
</gree-overlay>

<script>
export default {
  data() {
    return {
      overlay1: false
    };
  }
};
</script>
```

:::

### 自定义

:::demo

```html
<div class="gree-example-child gree-example-child-overlay gree-example-child-overlay-1">
  <gree-button @click="overlay2 = !overlay2">显示遮罩层</gree-button>
</div>
<gree-overlay :absolute="absolute" :opacity="opacity" :value="overlay2" :z-index="zIndex">
  <gree-button type="primary" @click="overlay2 = false">关闭遮罩层</gree-button>
</gree-overlay>

<script>
export default {
  data() {
    return {
      absolute: true,
      opacity: 1,
      overlay2: false,
      zIndex: 0
    };
  }
};
</script>
```

:::

### 加载中

:::demo

```html
<div class="gree-example-child gree-example-child-overlay gree-example-child-overlay-2">
  <gree-button @click="overlay3 = !overlay3">显示遮罩层</gree-button>
</div>
<gree-overlay :value="overlay3">
  <gree-activity-indicator type="spinner" :size="32" color="light" />
</gree-overlay>

<script>
export default {
  data() {
    return {
      overlay3: false
    };
  },
  watch: {
    overlay3(val) {
      val &&
        setTimeout(() => {
          this.overlay3 = false;
        }, 3000);
    }
  }
};
</script>
```

:::

## Props

| 属性     | 说明                 | 类型             | 默认值    | 备注 |
| -------- | -------------------- | ---------------- | --------- | ---- |
| absolute | 绝对覆盖             | Boolean          | `false`   | \-   |
| color    | 给控制器指定颜色     | String           | `#212121` | \-   |
| opacity  | 设置遮罩层的透明度   | [Number, String] | `0.46`    | \-   |
| value    | 控制组件可见还是隐藏 | Boolean          | `true`    | \-   |
| z-index  | 遮罩层层级           | [Number, String] | `5`       | \-   |

## Slots

### default

默认插槽，用于在遮罩层上方嵌入内容

<script>
export default {
  data() {
    return {
      overlay1: false,
      absolute: true,
      opacity: 1,
      overlay2: false,
      zIndex: 0,
      overlay3: false
    };
  },
  watch: {
    overlay3(val) {
      val &&
        setTimeout(() => {
          this.overlay3 = false;
        }, 3000);
    }
  }
};
</script>
