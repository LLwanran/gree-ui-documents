# 步进器

增加，减少或修改当前数值

## 按需引入

```javascript
import { Stepper } from 'gree-ui';

Vue.component(Stepper.name, Stepper);
```

### 基本

:::demo

```html
<gree-list>
  <gree-list-item title="最小值-10，最大值10">
    <section slot="after">
      <gree-stepper
        slot="right"
        v-model="value"
        min="-10"
        max="10"
      ></gree-stepper>
    </section>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        value: 0
      };
    }
  };
</script>
```

:::

### 只读

:::demo

```html
<gree-list>
  <gree-list-item title="只读">
    <section slot="after">
      <gree-stepper slot="right" read-only></gree-stepper>
    </section>
  </gree-list-item>
</gree-list>
```

:::

### 禁用

:::demo

```html
<gree-list>
  <gree-list-item title="只读">
    <section slot="after">
      <gree-stepper slot="right" disabled></gree-stepper>
    </section>
  </gree-list-item>
</gree-list>
```

:::

### 步进

:::demo

```html
<gree-list>
  <gree-list-item title="只读">
    <section slot="after">
      <gree-stepper
        slot="right"
        v-model="value3"
        :step="2"
        :min="2"
        is-integer
      ></gree-stepper>
    </section>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        value3: 3
      };
    }
  };
</script>
```

:::

### step 为小数

:::demo

```html
<gree-list>
  <gree-list-item title="step为小数1.3">
    <section slot="after">
      <gree-stepper slot="right" :step="1.3"></gree-stepper>
    </section>
  </gree-list-item>
</gree-list>
```

:::

## Props

| 属性          | 说明                     | 类型          | 默认值      |
| ------------- | ------------------------ | ------------- | ----------- |
| v-model       | 当前值                   | Number/String | \-          |
| default-value | 默认值                   | Number/String | \-          |
| step          | 每次改变步数，可以为小数 | Number/String | `1`         |
| min           | 最小值                   | Number/String | `-Infinity` |
| max           | 最大值                   | Number/String | `Infinity`  |
| disabled      | 禁用                     | Boolean       | `false`     |
| read-only     | 只读                     | Boolean       | `false`     |
| is-integer    | 只能输入整数             | Boolean       | `false`     |

## Events

### @change(currentValue)

值发生变化事件

### @increase(difference)

当前值增加时触发

| 属性       | 说明       | 类型   |
| ---------- | ---------- | ------ |
| difference | 增加的数值 | Number |

### @decrease(difference)

当前值减少时触发

| 属性       | 说明       | 类型   |
| ---------- | ---------- | ------ |
| difference | 减少的数值 | Number |

<script>
export default {
  data() {
    return {
      value: 0,
      value3: 3
    };
  }
};
</script>
