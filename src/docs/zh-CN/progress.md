# 进度

进度圆环，用于展示操作进度，告知用户当前状态和预期

## 按需引入

```javascript
import { Progress } from 'gree-ui';

Vue.component(Progress.name, Progress);
```

### 基础

:::demo

```html
<div
  class="gree-example-child gree-example-child-progress gree-example-child-progress-0"
>
  <gree-progress :value="0.25" :width="5">
    <span class="progress-value">25%</span>
  </gree-progress>
  <gree-progress :size="100" :value="0.5" :width="7" color="#ed4014">
    <span class="progress-value">50%</span>
  </gree-progress>
  <gree-progress
    :size="120"
    :value="1"
    :width="10"
    color="#19be6b"
    fill="#c5c8ce"
  >
    <span class="progress-value">100%</span>
  </gree-progress>
</div>

<style lang="scss">
  .gree-example-child-progress {
    display: flex;
    justify-content: center;

    .gree-progress {
      margin: 0 10px;

      .rolling-container {
        position: relative;
      }
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0 !important;
        transform: none !important;

        .progress-value {
          font-size: 38px;
        }
      }
    }
  }
</style>
```

:::

### 其他配置

:::demo

```html
<div
  class="gree-example-child gree-example-child-progress gree-example-child-progress-1"
>
  <gree-progress
    :value="0.8"
    :width="10"
    :size="100"
    color="url(#linear)"
    border-color="#FFF"
  >
    <span class="progress-value">80%</span>
    <defs slot="defs">
      <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FF5257" />
        <stop offset="100%" stop-color="#FFC541" />
      </linearGradient>
    </defs>
  </gree-progress>
  <gree-progress
    :value="0.8"
    :width="10"
    :size="100"
    :rotate="-90"
    color="#FF5257"
    transition
    linecap="butt"
  >
    <span class="progress-value">80%</span>
  </gree-progress>
</div>

<style lang="scss">
  .gree-example-child-progress {
    display: flex;
    justify-content: center;

    .gree-progress {
      margin: 0 10px;

      .rolling-container {
        position: relative;
      }
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0 !important;
        transform: none !important;

        .progress-value {
          font-size: 38px;
        }
      }
    }
  }
</style>
```

:::

### 仪表盘形进度条

:::demo

```html
<gree-block class="gree-example-child-progress-2">
  <gree-progress
    type="dashboard"
    :width="200"
    :stroke-width="5"
    :value="value"
    :color="colors"
  ></gree-progress>
  <gree-row>
    <gree-col width="50">
      <gree-button type="positive" size="small" inline @click="decrease"
        >-</gree-button
      >
      <gree-button type="assertive" size="small" inline @click="increase"
        >+</gree-button
      >
    </gree-col>
  </gree-row>
</gree-block>

<script>
  export default {
    data() {
      return {
        value: 0.1,
        colors: [
          { color: '#f56c6c', percentage: 0.2 },
          { color: '#e6a23c', percentage: 0.4 },
          { color: '#5cb87a', percentage: 0.6 },
          { color: '#1989fa', percentage: 0.8 },
          { color: '#6f7ad3', percentage: 1 }
        ]
      };
    },
    methods: {
      increase() {
        this.value += 0.1;
        if (this.value > 1) {
          this.value = 1;
        }
      },
      decrease() {
        this.value -= 0.1;
        if (this.value < 0) {
          this.value = 0;
        }
      }
    }
  };
</script>
```

:::

## Props

| 属性         | 说明                 | 类型    | 默认值              | 备注 |
| ------------ | -------------------- | ------- | ------------------- | ---- |
| value        | 进度值               | Number  | `0`                 | \-   |
| size         | 圆环大小             | Number  | `50`                | \-   |
| width        | 圆环宽度             | Number  | \-                  | \-   |
| color        | 圆环高亮颜色         | String  | `#2f86f6`           | \-   |
| border-color | 圆环颜色             | String  | `rgba(0, 0, 0, .1)` | \-   |
| fill         | 圆环内部填充         | String  | `transparent`       | \-   |
| linecap      | 圆环两端形状         | String  | `round`             | \-   |
| rotate       | 圆环旋转             | Number  | `0`                 | \-   |
| transition   | 进度变化是否使用动效 | Boolean | `false`             | \-   |
| duration     | 进度变化动效时长     | Number  | `1000`              | \-   |

<script>
export default {
  data() {
    return {
      value: 0.1,
      colors: [
        { color: '#f56c6c', percentage: 0.2 },
        { color: '#e6a23c', percentage: 0.4 },
        { color: '#5cb87a', percentage: 0.6 },
        { color: '#1989fa', percentage: 0.8 },
        { color: '#6f7ad3', percentage: 1 }
      ]
    };
  },
  methods: {
    increase() {
      this.value += 0.1;
      if (this.value > 1) {
        this.value = 1;
      }
    },
    decrease() {
      this.value -= 0.1;
      if (this.value < 0) {
        this.value = 0;
      }
    }
  }
};
</script>

<style lang="less">
.gree-example-child-progress {
  display: flex;
  justify-content: center;

  .gree-progress {
    position: relative;
    margin: 0 10px;

    .rolling-container {
      position: relative;
    }
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0 !important;
      transform: none !important;

      .progress-value {
        font-size: 14px;
      }
    }
  }
}
.gree-example-child-progress-2 {
  flex-direction: column;

  .row {
    justify-content: center;
    .gree-button {
      margin: 0 !important;
    }
  }
  .gree-progress-dashboard {
    display: block;
    margin: 0 auto;
  }
}
</style>
