# 选项组

主要用于一组可选项多项选择，或者单独用于标记切换某种状态

## 按需引入

```javascript
import { Check, CheckBox, CheckGroup, CheckList } from 'gree-ui';

Vue.component(Check.name, Check);
Vue.component(CheckBox.name, CheckBox);
Vue.component(CheckGroup.name, CheckGroup);
Vue.component(CheckList.name, CheckList);
```

### 复选项组

:::demo

```html
<gree-block>
  <gree-check-group v-model="times">
    <gree-check name="0">永久</gree-check>
    <gree-check name="1">15秒</gree-check>
    <gree-check name="2">30秒</gree-check>
    <gree-check name="3">1分钟</gree-check>
    <gree-check name="4" disabled>2分钟</gree-check>
    <gree-check name="5">5分钟</gree-check>
  </gree-check-group>
</gree-block>

<script>
  export default {
    data() {
      return {
        times: []
      };
    },
    methods: {
      input(val) {
        console.log(val);
      }
    }
  };
</script>
```

:::

### 复选框

:::demo

```html
<gree-block>
  <gree-check-box name="marrow" v-model="mode" disabled>精煮饭</gree-check-box>
  <gree-check-box name="fastCook" v-model="mode" @input="input"
    >快煮饭</gree-check-box
  >
  <gree-check-box name="crude" v-model="mode" @input="input"
    >糙米饭</gree-check-box
  >
</gree-block>

<script>
  export default {
    data() {
      return {
        mode: ''
      };
    },
    methods: {
      input(val) {
        console.log(val);
      }
    }
  };
</script>
```

:::

### 复选框组

:::demo

```html
<gree-block>
  <gree-check-group v-model="patterns">
    <gree-check-box name="rice">上下扫风</gree-check-box>
    <gree-check-box name="quick-cook">左右扫风</gree-check-box>
    <gree-check-box name="sprout-rice" disabled>加湿</gree-check-box>
    <gree-check-box name="porridge">定时</gree-check-box>
  </gree-check-group>
</gree-block>
<gree-block-title>选中的项：{{ patterns }}</gree-block-title>

<script>
  export default {
    data() {
      return {
        patterns: []
      };
    }
  };
</script>
```

:::

### 复选列表

:::demo

```html
<gree-block>
  <gree-check-list :options="costume" v-model="favorites"></gree-check-list>
</gree-block>

<script>
  export default {
    data() {
      return {
        favorites: ['mixture'],
        costume: [
          { value: 'shirt', text: '衬衫' },
          { value: 'mixture', text: '混合' },
          { value: 'quick_drying', text: '快速洗烘' },
          { value: 'silk', text: '丝绸' },
          { value: 'wool', text: '羊毛', disabled: true },
          { value: 'down_coat', text: '羽绒服' }
        ]
      };
    }
  };
</script>
```

:::

### slot-scope 示例

:::demo

```html
<gree-block>
  <gree-check-list :options="speeds" v-model="speed" :is-slot-scope="true">
    <template slot-scope="{ option }">
      <h3>标题：{{ option.title }}</h3>
      <p>内容: {{ option.text }}</p>
      <p>值: {{ option.value }}</p>
    </template>
  </gree-check-list>
</gree-block>

<script>
  export default {
    data() {
      return {
        speed: ['2'],
        speeds: [
          {
            value: '0',
            text: '自动风',
            title: 'fan_auto'
          },
          {
            value: '1',
            text: '低风档',
            title: 'fan_low'
          },
          {
            value: '2',
            text: '中低风档',
            title: 'fan_medium_low'
          },
          {
            value: '3',
            text: '中风档',
            title: 'fan_medium'
          },
          {
            value: '4',
            text: '高风档',
            title: 'fan_high'
          },
          {
            value: '5',
            text: '强劲档',
            title: 'fan_turbo'
          }
        ]
      };
    }
  };
</script>
```

:::

## Check Props

| 属性          | 说明               | 类型    | 默认值           | 备注                   |
| ------------- | ------------------ | ------- | ---------------- | ---------------------- |
| name          | 唯一键值           | any     | `true`           | 当选中时，双向绑定的值 |
| v-model       | 选中的值           | any     | `false`          | \-                     |
| label         | 选项文案           | String  | \-               | \-                     |
| disabled      | 是否禁用选择       | Boolean | `false`          | \-                     |
| icon          | 选中项图标名称     | String  | `checked`        | \-                     |
| icon-inverse  | 未选中项图标名称   | String  | `checke`         | \-                     |
| icon-disabled | 禁用项选择图标名称 | String  | `check-disabled` | \-                     |

## CheckBox Props

| 属性     | 说明         | 类型    | 默认值  | 备注                   |
| -------- | ------------ | ------- | ------- | ---------------------- |
| name     | 唯一键值     | any     | `true`  | 当选中时，双向绑定的值 |
| v-model  | 选中的值     | any     | `false` | \-                     |
| disabled | 是否禁用选择 | Boolean | `false` | \-                     |

## CheckGroup Props

复选组，用以选中多个复选项。与`Check`或`CheckBox`组合使用。

| 属性    | 说明         | 类型   | 默认值 | 备注       |
| ------- | ------------ | ------ | ------ | ---------- |
| v-model | 选中的值     | Array  | \-     | \-         |
| max     | 最多选择几个 | Number | `0`    | 0 为不限制 |

## Methods

### check(name)

| 参数 | 说明           | 类型   | 默认值 |
| ---- | -------------- | ------ | ------ |
| name | 需要选中的键值 | String | \-     |

### uncheck(name)

| 参数 | 说明           | 类型   | 默认值 |
| ---- | -------------- | ------ | ------ |
| name | 需要去掉的键值 | String | \-     |

### toggle(name)

| 参数 | 说明           | 类型   | 默认值 |
| ---- | -------------- | ------ | ------ |
| name | 需要反选的键值 | String | \-     |

## CheckList Props

| 属性    | 说明            | 类型  | 默认值 | 备注                     |
| ------- | --------------- | ----- | ------ | ------------------------ |
| v-model | 选中项的`value` | Array | \-     | \-                       |
| options | 选项数据源      | Array | `[]`   | `disabled`为选项是否禁用 |

<script>
export default {
  data() {
    return {
      times: [],
      patterns: [],
      mode: '',
      favorites: ['mixture'],
      costume: [
        { value: 'shirt', text: '衬衫' },
        { value: 'mixture', text: '混合' },
        { value: 'quick_drying', text: '快速洗烘' },
        { value: 'silk', text: '丝绸' },
        { value: 'wool', text: '羊毛', disabled: true },
        { value: 'down_coat', text: '羽绒服' }
      ],
      speed: ['2'],
      speeds: [
        {
          value: '0',
          text: '自动风',
          title: 'fan_auto'
        },
        {
          value: '1',
          text: '低风档',
          title: 'fan_low'
        },
        {
          value: '2',
          text: '中低风档',
          title: 'fan_medium_low'
        },
        {
          value: '3',
          text: '中风档',
          title: 'fan_medium'
        },
        {
          value: '4',
          text: '高风档',
          title: 'fan_high'
        },
        {
          value: '5',
          text: '强劲档',
          title: 'fan_turbo'
        }
      ]
    };
  },
  methods: {
    input(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .gree-check-group {
  .gree-check {
    .gree-check-label {
      font-size: 17px;
    }
  }
}
</style>
