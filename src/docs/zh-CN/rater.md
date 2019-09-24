# 评分

用来自定义星星评分

## 按需引入

```javascript
import { Rater } from 'gree-ui';

Vue.component(Rater.name, Rater);
```

### 基本

:::demo

```html
<gree-list>
  <gree-list-item title="默认选中5颗星">
    <gree-rater slot="after" v-model="data1"></gree-rater>
  </gree-list-item>
  <gree-list-item title="自定义颜色 + 星星数量">
    <gree-rater
      slot="after"
      v-model="data2"
      :max="6"
      active-color="#44cc00"
    ></gree-rater>
  </gree-list-item>
  <gree-list-item title="自定义尺寸 + 选中百分比 + 禁止选中">
    <gree-rater
      slot="after"
      v-model="data3"
      :font-size="15"
      disabled
    ></gree-rater>
  </gree-list-item>
  <gree-list-item title="自定义图标">
    <gree-rater
      slot="after"
      v-model="data4"
      star="♡"
      active-color="#ff0202"
      :max="1"
      @input="input"
    ></gree-rater>
  </gree-list-item>
  <gree-list-item title="最少选中3颗星">
    <gree-rater slot="after" v-model="data5" :min="3"></gree-rater>
  </gree-list-item>
</gree-list>
```

:::

## Props

| 属性         | 说明             | 类型    | 默认值  |
| ------------ | ---------------- | ------- | ------- |
| value        | `v-model` 绑定值 | Number  | `0`     |
| min          | 最小值           | Number  | `0`     |
| max          | 最多可选个数     | Number  | `5`     |
| disabled     | 是否禁用         | Boolean | `false` |
| star         | 字符             | String  | `★`     |
| active-color | 选中时的颜色     | String  | `#fc6`  |
| margin       | 间距值           | Number  | `2`     |
| font-size    | 字体大小         | Number  | `25`    |

## Events

### @input(val)

选中回调事件

| 属性 | 说明     | 类型   | 结果 |
| ---- | -------- | ------ | ---- |
| val  | 是否选中 | Number | 0,1  |

<script>
export default {
  data() {
    return {
      data1: 5,
      data2: 1,
      data3: 3.5,
      data4: 0,
      data5: 0
    };
  },
  methods: {
    input(val) {
      console.log(val);
    }
  }
};
</script>
