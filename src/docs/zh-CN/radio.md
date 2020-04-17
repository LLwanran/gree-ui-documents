# 单选框

可自定义或编辑单选框

## 按需引入

```javascript
import { Radio, RadioBox, RadioGroup, RadioList } from 'gree-ui';

Vue.component(Radio.name, Radio);
Vue.component(RadioBox.name, RadioBox);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(RadioList.name, RadioList);
```

### 内联模式

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-radio gree-example-child-radio-0"
  >
    <gree-list>
      <gree-list-item header="洗涤剂使用量">
        <gree-row slot="title">
          <gree-radio name="1" v-model="usage" inline>极少</gree-radio>
          <gree-radio name="2" v-model="usage" inline>较少</gree-radio>
          <gree-radio name="3" v-model="usage" inline>标准</gree-radio>
          <gree-radio name="4" v-model="usage" inline>较多</gree-radio>
        </gree-row>
      </gree-list-item>
      <gree-list-item class="special" media-item>
        <span slot="media">米种</span>
        <gree-row slot="title">
          <gree-radio
            name="1"
            v-model="rice"
            icon
            icon-inverse
            icon-disabled
            label="长粒米"
            inline
          ></gree-radio>
          <gree-radio
            name="2"
            v-model="rice"
            icon
            icon-inverse
            icon-disabled
            label="短粒米"
            inline
            disabled
          ></gree-radio>
          <gree-radio
            name="3"
            v-model="rice"
            icon
            icon-inverse
            icon-disabled
            label="糙米"
            inline
          ></gree-radio>
        </gree-row>
      </gree-list-item>
      <gree-list-item class="special" media-item>
        <span slot="media">口感</span>
        <gree-row slot="title">
          <gree-radio
            name="1"
            v-model="taste"
            icon
            icon-inverse
            icon-disabled
            label="稍软"
            inline
          ></gree-radio>
          <gree-radio
            name="2"
            v-model="taste"
            icon
            icon-inverse
            icon-disabled
            label="适中"
            inline
          ></gree-radio>
          <gree-radio
            name="3"
            v-model="taste"
            icon
            icon-inverse
            icon-disabled
            label="稍硬"
            inline
          ></gree-radio>
        </gree-row>
      </gree-list-item>
    </gree-list-item>
  </div>
</gree-block-title>

<script>
  import { Radio } from 'gree-ui';

  export default {
    components: {
      [Radio.name]: Radio
    },
    data() {
      return {
        usage: '2',
        rice: '1',
        taste: '2'
      };
    }
  };
</script>

<style lang="scss">
  .gree-example-child-radio-0 {
    .gree-radio {
      &.is-inline {
        border: 1px solid #e4e4e4;
        border-radius: 8px;
        width: 145px;
        height: 84px;
        justify-content: center;

        &.is-checked {
          border-color: #f2da7c;
          background-color: #f2da7c;
        }
      }
    }
  }
</style>
```

:::

### 列表模式

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-radio gree-example-child-radio-1"
  >
    <gree-radio-list
      :options="modes"
      v-model="mode"
      icon="check"
      icon-inverse
    ></gree-radio-list>
    <gree-block-title>选择列表 - 带描述</gree-block-title>
    <gree-radio-list
      :options="subscribes"
      v-model="subscribe"
      icon="checked"
    ></gree-radio-list>
    <gree-block-title>选择列表 - slot-scope模式</gree-block-title>
    <gree-radio-list :options="subscribes">
      <template slot-scope="{ option, index, selected }">
        <div class="custom-title">{{ option.text }}</div>
        <div class="custom-brief">
          {{ option.text }} - {{ index }} - {{ selected }}
        </div>
      </template>
    </gree-radio-list>
  </div>
</gree-block>

<script>
  import { RadioList } from 'gree-ui';

  export default {
    components: {
      [RadioList.name]: RadioList
    },
    data() {
      return {
        mode: '0',
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
        ],
        subscribe: '1',
        subscribes: [
          {
            value: '1',
            text: '1小时',
            brief: '自动判断房间无人时节能'
          },
          {
            value: '2',
            text: '2小时',
            brief: '自动判断房间无人时节能'
          },
          {
            value: '3',
            text: '3小时',
            brief: '自动判断房间无人时节能'
          },
          {
            value: '4',
            text: '4小时',
            brief: '自动判断房间无人时节能'
          }
        ]
      };
    }
  };
</script>

<style lang="scss">
  .gree-example-child-radio-1 {
    .custom-title {
      background: linear-gradient(90deg, #d400ff, #ff320a);
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 700;
      font-size: 40px;
      letter-spacing: 0.58px;
      display: inline-block;
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .custom-brief {
      color: #bfbfbf;
      font-size: 32px;
    }
  }
</style>
```

:::

### 单选框

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-radio gree-example-child-radio-2"
  >
    <gree-block>
      <gree-radio-box
        name="coldcloset"
        v-model="position"
        label="冷藏室"
      ></gree-radio-box>
      <gree-radio-box
        name="freezer"
        v-model="position"
        label="冷冻室"
      ></gree-radio-box>
      <gree-radio-box
        name="greenhouse"
        v-model="position"
        label="变温室"
      ></gree-radio-box>
    </gree-block>
  </div>
</gree-block>

<script>
  import { RadioBox } from 'gree-ui';

  export default {
    components: {
      [RadioBox.name]: RadioBox
    },
    data() {
      return {
        position: ''
      };
    }
  };
</script>
```

:::

### 单选框组

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-radio gree-example-child-radio-3"
  >
    <gree-block>
      <gree-radio-group v-model="weeks">
        <gree-radio-box name="monday">星期一</gree-radio-box>
        <gree-radio-box name="tuesday">星期二</gree-radio-box>
        <gree-radio-box name="wednesday">星期三</gree-radio-box>
        <gree-radio-box name="thursday">星期四</gree-radio-box>
        <gree-radio-box name="friday">星期五</gree-radio-box>
        <gree-radio-box name="saturday">星期六</gree-radio-box>
        <gree-radio-box name="sunday">星期日</gree-radio-box>
      </gree-radio-group>
    </gree-block>
  </div>
</gree-block>

<script>
  import { RadioBox, RadioGroup } from 'gree-ui';

  export default {
    components: {
      [RadioBox.name]: RadioBox,
      [RadioGroup.name]: RadioGroup
    },
    data() {
      return {
        weeks: 'wednesday'
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
| label         | 描述文案       | String- | \-               |      |
| disabled      | 是否禁用选项   | Boolean | `false`          | \-   |
| inline        | 是否内联显示   | Boolean | `false`          | \-   |
| icon          | 选中项的图标   | String  | `checked`        | \-   |
| icon-inverse  | 非选中项的图标 | String  | `unchecked`      | \-   |
| icon-disabled | 禁用项的图标   | String  | `check-disabled` | \-   |
| icon-svg      | 使用 svg 图标  | Boolean | `false`          | \-   |
| size          | 图标大小       | String  | `md`             | \-   |

## RadioBox Props

| 属性     | 说明         | 类型    | 默认值  | 备注                   |
| -------- | ------------ | ------- | ------- | ---------------------- |
| name     | 唯一键值     | any     | `true`  | 当选中时，双向绑定的值 |
| v-model  | 选中的值     | any     | `false` | \-                     |
| disabled | 是否禁用选择 | Boolean | `false` | \-                     |

## RadioGroup Props

| 属性    | 说明         | 类型   | 默认值 | 备注       |
| ------- | ------------ | ------ | ------ | ---------- |
| v-model | 选中的值     | Array  | \-     | \-         |
| max     | 最多选择几个 | Number | `0`    | 0 为不限制 |

## RadioGroup Methods

### check(name)

| 参数 | 说明           | 类型   | 默认值 |
| ---- | -------------- | ------ | ------ |
| name | 需要选中的键值 | String | \-     |

## Radio List Props

| 属性          | 说明                             | 类型    | 默认值           | 备注                     |
| ------------- | -------------------------------- | ------- | ---------------- | ------------------------ |
| v-model       | 选中项的`value`                  | any     | \-               |                          |
| options       | 选项数据源                       | Array   | `[]`             | `disabled`为选项是否禁用 |
| icon          | 选中项的图标                     | String  | `checked`        | \-                       |
| icon-inverse  | 非选中项的图标                   | String  | `unchecked`      | \-                       |
| icon-disabled | 禁用项的图标                     | String  | `check-disabled` | \-                       |
| icon-size     | 图标大小                         | String  | `md`             | \-                       |
| icon-svg      | 使用 svg 图标                    | Boolean | `false`          | \-                       |
| icon-position | 图标位置                         | String  | `right`          | `left`,`right`           |
| is-slot-scope | 是否强制使用或不使用`slot-scope` | Boolean | \-               | \-                       |

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
      usage: '2',
      rice: '1',
      taste: '2',
      mode: '0',
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
      ],
      subscribe: '1',
      subscribes: [
        {
          value: '1',
          text: '1小时',
          brief: '自动判断房间无人时节能'
        },
        {
          value: '2',
          text: '2小时',
          brief: '自动判断房间无人时节能'
        },
        {
          value: '3',
          text: '3小时',
          brief: '自动判断房间无人时节能'
        },
        {
          value: '4',
          text: '4小时',
          brief: '自动判断房间无人时节能'
        }
      ],
      position: '',
      weeks: 'wednesday'
    };
  }
};
</script>

<style lang="less">
.gree-example-child-radio {
  color: #404657;
  .row {
    margin-left: 0;
    margin-right: 0;
  }
  &.gree-example-child-radio-0 {
    .list .special {
      .gree-radio {
        &.is-inline {
          border: 1px solid #e4e4e4;
          border-radius: 4px;
          width: 72px;
          height: 42px;
          justify-content: center;

          &:not(:last-child) {
            margin-right: 15px;
          }
          &.is-checked {
            border-color: #f2da7c;
            background-color: #f2da7c;
          }
          .gree-radio-label {
            margin-left: 0;
          }
        }
      }
    }
  }
  &.gree-example-child-radio-1 {
    .custom-title {
      background: linear-gradient(90deg, #d400ff, #ff320a);
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.29px;
      display: inline-block;
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .custom-brief {
      color: #bfbfbf;
      font-size: 16px;
    }
  }
  &.gree-example-child-radio-2,
  &.gree-example-child-radio-3 {
    .gree-check-base-box {
      border-width: 1px;
      margin-right: 5px;
    }
  }
}
</style>
