# 动作面板

用于提供场景相关的多个操作动作

## 按需引入

```javascript
import { ActionSheet } from 'gree-ui';

Vue.component(ActionSheet.name, ActionSheet);

this.$actionsheet.create({}); // 全量引入
```

### 基础

:::demo

```html
<gree-list>
  <gree-list-item
    link
    title="唤起面板"
    text="默认"
    @click.native="showActionSheet"
  ></gree-list-item>
  <gree-list-item
    link
    title="唤起面板"
    text="单例模式"
    @click.native="showActionSheetStatic"
  ></gree-list-item>
</gree-list>
<gree-action-sheet
  v-model="value"
  :title="title"
  :default-index="defaultIndex"
  :invalid-index="invalidIndex"
  :cancel-text="cancelText"
  :options="options"
  @selected="selected"
  @cancel="cancel"
></gree-action-sheet>

<script>
  export default {
    data() {
      return {
        value: false,
        title: '操作说明的标题',
        options: [
          {
            label: '已选中',
            value: 0
          },
          {
            label: '未选中',
            value: 1
          },
          {
            label: '禁止选中',
            value: 2
          }
        ],
        defaultIndex: 0,
        invalidIndex: 2,
        cancelText: '取消'
      };
    },
    methods: {
      showActionSheet() {
        this.value = true;
      },
      selected(item) {
        console.log('action-sheet selected:', JSON.stringify(item));
      },
      cancel() {
        console.log('action-sheet cancel');
      },
      showActionSheetStatic() {
        ActionSheet.create({
          value: true,
          title: '操作说明的标题',
          options: [
            {
              label: '已选中',
              value: 0
            },
            {
              label: '未选中',
              value: 1
            },
            {
              label: '禁止选中',
              value: 2
            }
          ],
          defaultIndex: 0,
          invalidIndex: 2,
          cancelText: '取消',
          onCancel: this.cancel,
          onSelected: this.selected
        });
      }
    }
  };
</script>
```

:::

## Props

| 属性          | 说明           | 类型    | 默认值  |
| ------------- | -------------- | ------- | ------- |
| v-model       | 面板是否可见   | Boolean | `false` |
| title         | 面板标题       | String  | \-      |
| options       | 面板选项       | Array   | `[]`    |
| default-index | 默认选中项     | Boolean | `0`     |
| invalid-index | 禁用选择项索引 | Number  | `-1`    |
| cancel-text   | 取消按钮文案   | String  | \-      |

## Events

### @selected(item)

选择事件

| 属性 | 说明       | 类型                  |
| ---- | ---------- | --------------------- |
| item | 选中项的值 | Object: {text, value} |

### @cancel()

取消选择事件

### @show()

面板展示事件

### @hide()

面板隐藏事件

## Static Methods

### create(props)

静态方法创建操作菜单, 返回 ActionSheet 实例。可以通过控制实例的`value`属性来控制显示或隐藏操作菜单。

| 属性         | 说明             | 类型                          | 默认值 |
| ------------ | ---------------- | ----------------------------- | ------ |
| value        | 面板是否立即可见 | Boolean                       | `true` |
| title        | 面板标题         | String                        | \-     |
| options      | 面板选项         | Array                         | `[]`   |
| defaultIndex | 默认选中项       | Number                        | `-1`   |
| invalidIndex | 禁用选择项索引   | Number                        | `-1`   |
| cancelText   | 取消按钮文案     | String                        | `取消` |
| onShow       | 面板展示回调     | Function                      | \-     |
| onHide       | 面板隐藏回调     | Function                      | \-     |
| onCancel     | 取消选择回调     | Function                      | \-     |
| onSelected   | 选择回调         | Function(item: {text, value}) | \-     |

### closeAll()

关闭所有全局操作菜单

### destroyAll()

关闭并销毁所有全局操作菜单

<script>
export default {
  data() {
    return {
      value: false,
      title: '操作说明的标题',
      options: [
        {
          label: '已选中',
          value: 0
        },
        {
          label: '未选中',
          value: 1
        },
        {
          label: '禁止选中',
          value: 2
        }
      ],
      defaultIndex: 0,
      invalidIndex: 2,
      cancelText: '取消'
    };
  },
  methods: {
    showActionSheet() {
      this.value = true;
    },
    selected(item) {
      console.log('action-sheet selected:', JSON.stringify(item));
    },
    cancel() {
      console.log('action-sheet cancel');
    },
    showActionSheetStatic() {
      this.$actionsheet.create({
        value: true,
        title: '操作说明的标题',
        options: [
          {
            label: '已选中',
            value: 0
          },
          {
            label: '未选中',
            value: 1
          },
          {
            label: '禁止选中',
            value: 2
          }
        ],
        defaultIndex: 0,
        invalidIndex: 2,
        cancelText: '取消',
        onCancel: this.cancel,
        onSelected: this.selected
      });
    }
  }
};
</script>
