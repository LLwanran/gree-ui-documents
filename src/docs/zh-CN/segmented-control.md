# 分段器

由至少 2 个分段控件组成，用作不同视图的显示，属于 iOS 风格

## 按需引入

```javascript
import { SegmentedControl } from 'gree-ui';

Vue.component(SegmentedControl.name, SegmentedControl);
```

## 基础

:::demo

```html
<gree-block>
  <gree-segmented-control :values="values"></gree-segmented-control>
</gree-block>

<script>
  export default {
    data() {
      return {
        values: ['Segment1', 'Segment2']
      };
    }
  };
</script>
```

:::

## 禁用

:::demo

```html
<gree-block>
  <gree-segmented-control :values="values" disabled></gree-segmented-control>
</gree-block>

<script>
  export default {
    data() {
      return {
        values: ['Segment1', 'Segment2']
      };
    }
  };
</script>
```

:::

## 设置索引

:::demo

```html
<gree-block>
  <gree-segmented-control
    :selected-index="selectedIndex"
    :values="values2"
  ></gree-segmented-control>
</gree-block>

<script>
  export default {
    data() {
      return {
        values2: ['Segment1', 'Segment2', 'Segment3']
      };
    }
  };
</script>
```

:::

## 自定义颜色

:::demo

```html
<gree-block>
  <gree-segmented-control
    tint-color="#ff0202"
    :values="values2"
  ></gree-segmented-control>
</gree-block>

<script>
  export default {
    data() {
      return {
        values2: ['Segment1', 'Segment2', 'Segment3']
      };
    }
  };
</script>
```

:::

## 选中事件回调

:::demo

```html
<gree-block>
  <gree-segmented-control
    :values="values2"
    @onChange="onChange"
    @onValueChange="onValueChange"
  ></gree-segmented-control>
</gree-block>

<script>
  export default {
    data() {
      return {
        values2: ['Segment1', 'Segment2', 'Segment3']
      };
    },
    methods: {
      onChange(e) {
        console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
      },
      onValueChange(value) {
        console.log(`selectedValue:${value}`);
      }
    }
  };
</script>
```

:::

## Props

| 属性           | 说明                 | 类型    | 默认值         | 备注 |
| -------------- | -------------------- | ------- | -------------- | ---- |
| v-model        | 双向绑定的值         | Number  | `0`            | \-   |
| prefix-cls     | 样式前缀             | String  | `gree-segment` | \-   |
| class-name     | 样式类               | String  | \-             | \-   |
| tint-color     | 组件主色调           | String  | `#00aeff`      | \-   |
| disabled       | 是否禁用             | Boolean | `false`        | \-   |
| selected-index | 选中项在数组中的索引 | Number  | `0`            | \-   |
| values         | 选项数组,值是字符串  | Array   | `[]`           | \-   |

## Events

| 参数           | 说明                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------- |
| @onChange      | 回调函数, 其中 e.nativeEvent.selectedSegmentIndex 是选中项索引, e.nativeEvent.value 是选中的值 |
| @onValueChange | 回调函数                                                                                       |

<script>
export default {
  data() {
    return {
      selectedIndex: 1,
      values: ['Segment1', 'Segment2'],
      values2: ['Segment1', 'Segment2', 'Segment3']
    };
  },
  methods: {
    onChange(e) {
      console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    },
    onValueChange(value) {
      console.log(`selectedValue:${value}`);
    }
  }
};
</script>
