# 列表选择器

用于弹出列表中选择一项

## 按需引入

```javascript
import { Selector } from 'gree-ui';

Vue.component(Selector.name, Selector);
```

### 无需确认

:::demo

```html
<gree-list>
  <gree-list-item
    link
    title="普通模式"
    :text="selectorValue"
    media-item
    @click.native="showSelector"
  ></gree-list-item>
</gree-list>
<gree-selector
  v-model="isSelectorShow"
  default-value="2"
  :data="data[0]"
  max-height="320px"
  title="标题"
  @choose="onSelectorChoose"
></gree-selector>

<script>
  export default {
    data() {
      return {
        isSelectorShow: false,
        data: [
          [
            {
              value: '1',
              text: '综合排序'
            },
            {
              value: '2',
              text: '好评优先'
            },
            {
              value: '3',
              text: '销量最高'
            },
            {
              value: '4',
              text: '起送价最低'
            },
            {
              value: '5',
              text: '配送最快'
            },
            {
              value: '6',
              text: '配送费最低'
            },
            {
              value: '7',
              text: '人均从低到高'
            },
            {
              value: '8',
              text: '人均从高到低'
            },
            {
              value: '9',
              text: '通用排序'
            }
          ]
        ]
      };
    },
    methods: {
      showSelector() {
        this.isSelectorShow = true;
      },
      onSelectorChoose({ text }) {
        this.selectorValue = text;
      }
    }
  };
</script>
```

:::

### 多选模式

:::demo

```html
<gree-list>
  <gree-list-item
    link
    title="多选模式"
    :text="selectorValue2.join(',')"
    media-item
    @click.native="showSelector2"
  ></gree-list-item>
</gree-list>
<gree-selector
  v-model="isSelectorShow2"
  :data="data2[0]"
  :defaultValue="selectorValue2"
  title="多选模式"
  min-height="320px"
  okText="确定"
  cancelText="取消"
  large-radius
  @confirm="onSelectorConfirm"
  multi
></gree-selector>

<script>
  export default {
    data() {
      return {
        isSelectorShow2: false,
        data2: [
          [
            {
              value: '1',
              text: '蜂鸟专送'
            },
            {
              value: '2',
              text: '品牌商家'
            },
            {
              value: '3',
              text: '新店'
            },
            {
              value: '4',
              text: '食安保'
            },
            {
              value: '5',
              text: '开发票'
            }
          ]
        ],
        selectorValue2: ['1']
      };
    },
    methods: {
      showSelector2() {
        this.isSelectorShow2 = true;
      },
      onSelectorConfirm(array) {
        this.selectorValue2 = array;
      }
    }
  };
</script>
```

:::

#### Props

| 属性           | 说明                                 | 类型          | 默认值           | 备注                                         |
| -------------- | ------------------------------------ | ------------- | ---------------- | -------------------------------------------- |
| v-model        | 选择器是否可见                       | Boolean       | false            | \-                                           |
| data           | 数据源                               | Array         | `[]`             | `text`可为`html`片段                         |
| default-value  | 选择器初始选中项的值                 | any           | \-               | `multi`为`true`时，`default-value`应该传数组 |
| title          | 选择器标题                           | String        | \-               | \-                                           |
| describe       | 选择器描述                           | String        | \-               | \-                                           |
| ok-text        | 选择器确认文案                       | String        | \-               | 若为空则为`确认模式`，即点击选项直接选择     |
| cancel-text    | 选择器取消文案                       | String        | `取消`           | \-                                           |
| large-radius   | 选择器标题栏大圆角模式               | Boolean       | `false`          | \-                                           |
| hide-title-bar | 隐藏选择器标题栏                     | Boolean       | `false`          | \-                                           |
| mask-closable  | 点击蒙层是否可关闭弹出层             | Boolean       | `true`           | \-                                           |
| is-check       | 是否有`check`图标                    | Boolean       | `false`          | 仅`确认模式`                                 |
| max-height     | 选择器内容区域最高高度, 超出后可滚动 | Number/String | `auto`           | \-                                           |
| min-height     | 选择器内容区域最小高度, 超出后可滚动 | Number/String | `auto`           | \-                                           |
| icon           | 选中项的图标                         | String        | `checked`        | \-                                           |
| icon-inverse   | 非选中项的图标                       | String        | `check`          | \-                                           |
| icon-disabled  | 禁用项的图标                         | String        | `check-disabled` | \-                                           |
| icon-size      | 图标大小                             | String        | `lg`             | \-                                           |
| icon-svg       | 使用 svg 图标                        | Boolean       | `false`          | \-                                           |
| icon-position  | 图标位置                             | String        | `right`          | `left`,`right`                               |
| multi          | 支持多选                             | Boolean       | `false`          | `multi`为`true`时，`ok-text`不能为空         |

## Events

### @choose({value, text, ...})

选择器选中某选项事件

### @confirm({value, text, ...})

选择器确认选中事件

### @cancel()

选择器取消选中事件

### @show()

选择器展示事件

### @hide()

选择器隐藏事件

## Slots

### default

默认插槽

### header

顶部插槽

### footer

底部插槽

<script>
export default {
  data() {
    return {
      isSelectorShow: false,
      data: [
        [
          {
            value: '1',
            text: '综合排序'
          },
          {
            value: '2',
            text: '好评优先'
          },
          {
            value: '3',
            text: '销量最高'
          },
          {
            value: '4',
            text: '起送价最低'
          },
          {
            value: '5',
            text: '配送最快'
          },
          {
            value: '6',
            text: '配送费最低'
          },
          {
            value: '7',
            text: '人均从低到高'
          },
          {
            value: '8',
            text: '人均从高到低'
          },
          {
            value: '9',
            text: '通用排序'
          }
        ]
      ],
      selectorValue: '好评优先',
      isSelectorShow2: false,
      data2: [
        [
          {
            value: '1',
            text: '蜂鸟专送'
          },
          {
            value: '2',
            text: '品牌商家'
          },
          {
            value: '3',
            text: '新店'
          },
          {
            value: '4',
            text: '食安保'
          },
          {
            value: '5',
            text: '开发票'
          }
        ]
      ],
      selectorValue2: ['1']
    };
  },
   methods: {
    showSelector() {
      this.isSelectorShow = true;
    },
    onSelectorChoose({ text }) {
      this.selectorValue = text;
    },
    showSelector2() {
      this.isSelectorShow2 = true;
    },
    onSelectorConfirm(array) {
      this.selectorValue2 = array;
    }
  }
};
</script>
