# 环状滑块

圆环型滑块，作用类似于 Slider

## 按需引入

```javascript
import { SliderCircle } from 'gree-ui';

Vue.component(SliderCircle.name, SliderCircle);
```

### 基础

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-slider-circle gree-example-child-slider-circle-0"
  >
    <gree-slider-circle v-model="val0"></gree-slider-circle>
    <div>{{ val0 }}</div>
  </div>
</gree-block>

<script>
  export default {
    data() {
      return {
        val0: 10
      };
    }
  };
</script>
```

:::

### 自定义最小/最大值和步长

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-slider-circle gree-example-child-slider-circle-1"
  >
    <gree-slider-circle
      v-model="val1"
      :min="0"
      :max="10000"
      :step-size="100"
    ></gree-slider-circle>
    <div>{{ val1 }}</div>
  </div>
</gree-block>

<script>
  export default {
    data() {
      return {
        val1: 2000
      };
    }
  };
</script>
```

:::

### 自定义尺寸

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-slider-circle gree-example-child-slider-circle-2"
  >
    <gree-slider-circle v-model="val2" :side="150"></gree-slider-circle>
    <gree-slider-circle v-model="val2" :side="50"></gree-slider-circle>
    <div>{{ val2 }}</div>
  </div>
</gree-block>

<script>
  export default {
    data() {
      return {
        val2: 75
      };
    }
  };
</script>
```

:::

### 自定义周长/进度曲线宽度/旋钮半径

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-slider-circle gree-example-child-slider-circle-3"
  >
    <gree-slider-circle
      v-model="val3"
      :circle-width="8"
      :progress-width="12"
      :knob-radius="10"
    ></gree-slider-circle>
    <gree-slider-circle
      v-model="val3"
      :circle-width="10"
      :progress-width="5"
      :knob-radius="10"
    ></gree-slider-circle>
    <gree-slider-circle
      v-model="val3"
      :circle-width="12"
      :progress-width="3"
      :knob-radius="4"
    ></gree-slider-circle>
    <div>{{ val3 }}</div>
  </div>
</gree-block>

<script>
  export default {
    data() {
      return {
        val3: 75
      };
    }
  };
</script>
```

:::

### 自定义相对圆周/进度曲线宽度/相对旋钮半径

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-slider-circle gree-example-child-slider-circle-4"
  >
    <gree-slider-circle
      v-model="val4"
      :circle-width-rel="30"
      :progress-width-rel="15"
      :knob-radius-rel="8"
    ></gree-slider-circle>
    <div>{{ val4 }}</div>
  </div>
</gree-block>

<script>
  export default {
    data() {
      return {
        val4: 50
      };
    }
  };
</script>
```

:::

### 自定义颜色

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-slider-circle gree-example-child-slider-circle-5"
  >
    <gree-slider-circle
      v-model="val5"
      circle-color="#edeff0"
      progress-color="#cecece"
      knob-color="#a0a0ff"
    ></gree-slider-circle>
    <gree-slider-circle
      v-model="val5"
      circle-color="#f00"
      progress-color="#0a0"
      knob-color="#0c0"
    ></gree-slider-circle>
    <gree-slider-circle
      v-model="val5"
      circle-color="#cecece"
      progress-color="#00f"
      knob-color="#5555ff"
    ></gree-slider-circle>
    <div>{{ val5 }}</div>
  </div>
</gree-block>

<script>
  export default {
    data() {
      return {
        val5: 25
      };
    }
  };
</script>
```

:::

### 双向绑定

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-slider-circle gree-example-child-slider-circle-6"
  >
    <gree-slider-circle
      v-model="val6"
      @touchmove="$refs.input.blur()"
    ></gree-slider-circle>
    <gree-input-item
      ref="input"
      type="number"
      title="输入值"
      v-model.number="val6"
    ></gree-input-item>
  </div>
</gree-block>

<script>
  export default {
    data() {
      return {
        val6: 10
      };
    }
  };
</script>
```

:::

## Props

| 属性               | 说明                                | 类型   | 默认值    | 备注                                             |
| ------------------ | ----------------------------------- | ------ | --------- | ------------------------------------------------ |
| v-model            | 双向绑定的值                        | Number | `0`       | \-                                               |
| side               | 以 px 为单位的 svg 正方形的边的大小 | Number | `100`     | \-                                               |
| min                | 最小值                              | Number | `0`       | \-                                               |
| max                | 最大值                              | Number | `100`     | \-                                               |
| step-size          | 值之间的差距                        | Number | `1`       | \-                                               |
| circle-color       | 滑块周长颜色                        | String | `#334860` | \-                                               |
| progress-color     | 进度曲线颜色                        | String | `#00be7e` | \-                                               |
| knob-color         | 旋钮颜色                            | String | `00be7e`  | \-                                               |
| knob-radius        | 旋钮半径 px                         | Number | `null`    | \-                                               |
| knob-radius-rel    | 相对旋钮半径                        | Number | `7`       | px 的半径值将计算为(side/2) / knobRadiusRel      |
| circle-width       | 圆的半径                            | Number | `null`    | \-                                               |
| circle-width-rel   | 相对圆半径                          | Number | `20`      | px 中的宽度值将计算为(side/2) / circleWidthRel   |
| progress-width     | 进度曲线宽度 px                     | Number | `null`    | \-                                               |
| progress-width-rel | 相对进度曲线宽度                    | Number | `10`      | px 中的宽度值将计算为(side/2) / progressWidthRel |

<script>
  export default {
    data() {
      return {
        val0: 10,
        val1: 2000,
        val2: 75,
        val3: 75,
        val4: 50,
        val5: 25,
        val6: 10
      };
    }
  };
</script>

<style lang="less" scoped>
.block {
  display: flex;
  align-items: center;
  justify-content: center;

  .gree-example-child-slider-circle {
    text-align: center;
  }
}
</style>
