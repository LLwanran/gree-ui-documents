# 单选框

可自定义或编辑单选框

## 按需引入

```javascript
import { Radio, RadioList } from 'gree-ui';

Vue.component(Radio.name, Radio);
Vue.component(RadioList.name, RadioList);
```

### 示例 1

:::demo

```html
<gree-list>
  <gree-list-item media-item>
    <span slot="media">米种</span>
    <gree-row slot="title">
      <gree-radio
        name="1"
        v-model="rice"
        icon=""
        icon-inverse=""
        icon-disabled=""
        label="长粒米"
        inline
      ></gree-radio>
      <gree-radio
        name="2"
        v-model="rice"
        icon=""
        icon-inverse=""
        icon-disabled=""
        label="短粒米"
        inline
        disabled
      ></gree-radio>
      <gree-radio
        name="3"
        v-model="rice"
        icon=""
        icon-inverse=""
        icon-disabled=""
        label="糙米"
        inline
      ></gree-radio>
    </gree-row>
  </gree-list-item>
  <gree-list-item media-item>
    <span slot="media">口感</span>
    <gree-row slot="title">
      <gree-radio
        name="1"
        v-model="taste"
        icon=""
        icon-inverse=""
        icon-disabled=""
        label="稍软"
        inline
      ></gree-radio>
      <gree-radio
        name="2"
        v-model="taste"
        icon=""
        icon-inverse=""
        icon-disabled=""
        label="适中"
        inline
      ></gree-radio>
      <gree-radio
        name="3"
        v-model="taste"
        icon=""
        icon-inverse=""
        icon-disabled=""
        label="稍硬"
        inline
      ></gree-radio>
    </gree-row>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        rice: '1',
        taste: '2'
      };
    }
  };
</script>
```

:::

### 示例 2

:::demo

```html
<gree-radio-list
  :options="modes"
  v-model="myMode"
  icon="check"
  icon-size="md"
></gree-radio-list>

<script>
  export default {
    data() {
      return {
        myMode: '0',
        modes: [
          {
            value: '0',
            text: '自定义1'
          },
          {
            value: '1',
            text: '自定义2',
            disabled: true
          },
          {
            value: '2',
            text: '睡眠模式'
          },
          {
            value: '3',
            text: '自动模式'
          }
        ]
      };
    }
  };
</script>
```

:::

## Radio Props

| 属性          | 说明           | 类型    | 默认值           | 备注 |
| ------------- | -------------- | ------- | ---------------- | ---- |
| v-model       | 选中项的`name` | any     | \-               |      |
| name          | 唯一键值       | any     | \-               | \-   |
| label         | 描述文案       | String  | \-               |      |
| disabled      | 是否禁用选项   | Boolean | `false`          | \-   |
| inline        | 是否内联显示   | Boolean | `false`          | \-   |
| icon          | 选中项的图标   | String  | `checked`        | \-   |
| icon-inverse  | 非选中项的图标 | String  | `check`          | \-   |
| icon-disabled | 禁用项的图标   | String  | `check-disabled` | \-   |
| size          | 图标大小       | String  | `md`             |

## Radio List Props

| 属性          | 说明            | 类型   | 默认值           | 备注                     |
| ------------- | --------------- | ------ | ---------------- | ------------------------ |
| v-model       | 选中项的`value` | any    | \-               |                          |
| options       | 选项数据源      | Array  | `[]`             | `disabled`为选项是否禁用 |
| icon          | 选中项的图标    | String | `checked`        | \-                       |
| icon-inverse  | 非选中项的图标  | String | `check`          | \-                       |
| icon-disabled | 禁用项的图标    | String | `check-disabled` | \-                       |
| icon-size     | 图标大小        | String | `lg`             | \-                       |
| icon-position | 图标位置        | String | `left`           | `left`,`right`           |

## Radio List Methods

### select(value)

设置选中项

| 参数  | 说明           | 类型   |
| ----- | -------------- | ------ |
| value | 选中项的 value | String |

## Radio List Events

### @change(option, index)

切换选中项事件

| 属性   | 说明             | 类型                                |
| ------ | ---------------- | ----------------------------------- |
| option | 当前选中项的数据 | Object:{text, value, disabled, ...} |
| index  | 当前选中项的索引 | Number                              |

<script>
export default {
  data() {
    return {
      rice: '1',
      taste: '2',
      myMode: '0',
      modes: [
        {
          value: '0',
          text: '自定义1'
        },
        {
          value: '1',
          text: '自定义2',
          disabled: true
        },
        {
          value: '2',
          text: '睡眠模式'
        },
        {
          value: '3',
          text: '自动模式'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.row {
  margin-left: 0;
  margin-right: 0;
  .gree-radio {
    &.is-inline {
      border: 1px solid #e4e4e4;
      border-radius: 4px;
      width: 72px;
      height: 42px;
      justify-content: center;
      &.is-checked {
        border-color: #f2da7c;
        background-color: #f2da7c;
      }
    }
  }
}
</style>
