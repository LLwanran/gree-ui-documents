# 进度

常用于烹饪进度、洗衣进度等

## 按需引入

```javascript
import { Progress } from 'gree-ui';

Vue.component(Progress.name, Progress);
```

### 示例 1

:::demo

```html
<gree-block>
  <gree-progress :width="5" :size="206" color="url(#linear)">
    <div class="progress-value">25<span class="progress-unit">°C</span></div>
    <div class="progress-desc">正在高温杀毒</div>
    <defs slot="defs">
      <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#fb5f5f" />
        <stop offset="100%" stop-color="#f0c2c2" />
      </linearGradient>
    </defs>
  </gree-progress>
</gree-block>
```

:::

### 示例 2

:::demo

```html
<gree-block>
  <gree-progress :width="5" :size="206" color="url(#linear2)">
    <div class="progress-value">
      120<span class="progress-unit">剩余分钟</span>
    </div>
    <div class="progress-desc">正在臭氧消毒</div>
    <defs slot="defs">
      <linearGradient id="linear2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#57bdfb" />
        <stop offset="100%" stop-color="#cee7ee" />
      </linearGradient>
    </defs>
  </gree-progress>
</gree-block>
```

:::

### 示例 3

:::demo

```html
<gree-block>
  <gree-progress :width="5" :size="206" color="url(#linear3)">
    <div class="progress-value">
      50<span class="progress-unit">剩余分钟</span>
    </div>
    <div class="progress-desc">正在烘干</div>
    <div class="progress-desc-more">温度25°C</div>
    <defs slot="defs">
      <linearGradient id="linear3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#fcb31f" />
        <stop offset="100%" stop-color="#eeeace" />
      </linearGradient>
    </defs>
  </gree-progress>
</gree-block>
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

<style lang="less" scoped>
.content {
  flex-direction: column;
  .progress-value {
    color: #404657;
    font-size: 25px;
    font-family: 'Roboto_Thin';
    text-align: center;
    .progress-unit {
      font-family: 'FZLTHJW--GB1-0';
      font-size: 12px;
      vertical-align: text-top;
    }
  }
  .progress-desc, .progress-desc-more {
    font-family: 'FZLTHJW--GB1-0';
    color: rgba(112, 112, 112, 0.75);
    text-align: center;
    &.progress-desc-more {
      color: #707070;
      margin-top: 5px;
    }
  }
}
</style>
