# 评分

用来自定义星星评分

## 按需引入

```javascript
import { Rate } from 'gree-ui';

Vue.component(Rate.name, Rate);
```

### 基础

:::demo

```html
<div
  class="gree-example-child gree-example-child-rate gree-example-child-rate-0"
>
  <gree-list>
    <gree-list-item title="基础用法">
      <gree-rate v-model="value1" slot="after" />
    </gree-list-item>
    <gree-list-item title="自定义图标">
      <gree-rate v-model="value2" icon="like" void-icon="like-o" slot="after" />
    </gree-list-item>
    <gree-list-item title="自定义样式">
      <gree-rate
        v-model="value3"
        size="lg"
        color="#44cc00"
        void-icon="star"
        void-color="#eee"
        slot="after"
      />
    </gree-list-item>
    <gree-list-item title="半星">
      <gree-rate
        v-model="value4"
        size="xl"
        allow-half
        void-icon="star"
        void-color="#eee"
        slot="after"
      />
    </gree-list-item>
    <gree-list-item title="自定义数量">
      <gree-rate v-model="value5" :count="6" slot="after" />
    </gree-list-item>
    <gree-list-item title="禁用状态">
      <gree-rate v-model="value6" disabled slot="after" />
    </gree-list-item>
    <gree-list-item title="只读状态">
      <gree-rate v-model="value6" readonly slot="after" />
    </gree-list-item>
  </gree-list>
</div>
```

:::

## Props

| 属性           | 说明                                             | 类型             | 默认值    |
| -------------- | ------------------------------------------------ | ---------------- | --------- |
| v-model        | 当前分值                                         | Number           | `0`       |
| size           | 图标大小，可选值见 Icon 组件                     | String           | `md`      |
| gutter         | 图标间距，默认单位为`px`                         | [Number, String] | \-        |
| readonly       | 是否为只读状态                                   | Boolean          | `false`   |
| disabled       | 是否禁用评分                                     | Boolean          | `false`   |
| allow-half     | 是否允许半选                                     | Boolean          | `false`   |
| icon           | 选中时的图标名称或图片链接，可选值见 Icon 组件   | String           | `star`    |
| void-icon      | 未选中时的图标名称或图片链接，可选值见 Icon 组件 | String           | `star-o`  |
| color          | 选中时的颜色                                     | String           | `#ffbd17` |
| void-color     | 未选中时的颜色                                   | String           | `#b5b5b5` |
| disabled-color | 禁用时的颜色                                     | String           | `#c5cad5` |
| count          | 图标总数                                         | Number           | `5`       |
| touchable      | 是否可以通过滑动手势选择评分                     | Boolean          | `true`    |

## Events

| 事件名 | 说明                     | 回调参数 |
| ------ | ------------------------ | -------- |
| change | 当前分值变化时触发的事件 | 当前分值 |

<script>
export default {
  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 3,
      value4: 2.5,
      value5: 4,
      value6: 3
    };
  }
};
</script>
