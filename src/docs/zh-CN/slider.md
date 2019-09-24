# 滑块

滑块限定区域，实现过滤功能

## 按需引入

```javascript
import { Slider } from 'gree-ui';

Vue.component(Slider.name, Slider);
```

### 基本

:::demo

```html
<gree-block>
  <gree-slider v-model="number"></gree-slider>
</gree-block>

<script>
  export default {
    data() {
      return {
        number: 25
      };
    }
  };
</script>
```

:::

### 禁用

:::demo

```html
<gree-block>
  <gree-slider v-model="number2" disabled></gree-slider>
</gree-block>

<script>
  export default {
    data() {
      return {
        number2: 50
      };
    }
  };
</script>
```

:::

### 格式化 + 一直展示标签

:::demo

```html
<gree-block>
  <gree-slider
    v-model="temperature"
    :format="format3"
    :show-label-always="true"
  ></gree-slider>
</gree-block>

<script>
  export default {
    data() {
      return {
        temperature: 25
      };
    },
    methods: {
      format3(val) {
        return `${val}°C`;
      }
    }
  };
</script>
```

:::

### 可选范围 + 边界值

:::demo

```html
<gree-block>
  <gree-slider v-model="range2" range></gree-slider>
</gree-block>

<script>
  export default {
    data() {
      return {
        range2: [25, 50]
      };
    }
  };
</script>
```

:::

### 请选择天数，范围 0 - 30 天

:::demo

```html
<gree-block>
  <gree-slider
    v-model="range"
    :min="0"
    :max="30"
    :format="format"
  ></gree-slider>
</gree-block>

<script>
  export default {
    data() {
      return {
        range: [0, 30]
      };
    },
    methods: {
      format(val) {
        return `${val}天`;
      }
    }
  };
</script>
```

:::

## Props

| 属性              | 说明                                          | 类型               | 默认值                  |
| ----------------- | --------------------------------------------- | ------------------ | ----------------------- |
| v-model           | 双向绑定的值, 当开启`range`时, 其值为数组形式 | number, number\[\] | `0`                     |
| min               | 可拖动的最小值                                | number             | `0`                     |
| max               | 可拖动的最大值                                | number             | `100`                   |
| step              | 步长                                          | number             | `1`                     |
| range             | 是否启动双向拖动                              | Boolean            | `false`                 |
| show-label        | 拖动时是否展示标签                            | Boolean            | `true`                  |
| show-label-always | 是否一直展示标签                              | Boolean            | `false`                 |
| format            | 显示文本的格式化函数                          | Function           | `(val) => {return val}` |
| disabled          | 是否禁用滑块                                  | Boolean            | `false`                 |

<script>
export default {
  data() {
    return {
      number: 25,
      number2: 50,
      range: [0, 30],
      range2: [25, 50]
    };
  },
  methods: {
    format(val) {
      return `${val}天`;
    }
  }
};
</script>
