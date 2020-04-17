# 区域组合

区域列表垂直排列，显示当前的内容、状态和可进行的操作

## 按需引入

```javascript
import { Field, FieldItem } from 'gree-ui';

Vue.component(Field.name, Field);
Vue.component(FieldItem.name, FieldItem);
```

### 基础

:::demo

```html
<div class="gree-example-child gree-example-child-field gree-example-child-field-0">
  <gree-field title="标题" brief="摘要、描述">
    <div class="action-container" slot="action" @click="onClick">
      点击收藏
      <gree-icon name="star-o" />
    </div>
    <p slot="footer">页脚区域内容插槽</p>
    <gree-field-item solid title="标题" placeholder="占位文本"></gree-field-item>
    <gree-field-item solid title="标题" content="内容文本" addon="次要信息"></gree-field-item>
    <gree-field-item solid title="附加内容" content="正文内容">
      <p slot="children">子内容区域</p>
    </gree-field-item>
    <gree-field-item solid title="动作栏目" arrow></gree-field-item>
    <gree-field-item solid title="禁用栏目" content="内容禁用状态" arrow disabled></gree-field-item>
  </gree-field>
</div>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    onClick() {
      Dialog.alert({
        content: '触发了'
      });
    }
  }
};
</script>

<style lang="scss">
.gree-example-child-field-0 {
  .gree-field-action {
    height: 52px;
    align-items: flex-end;

    .action-container {
      display: flex;
      align-items: center;

      .gree-icon {
        margin-left: 14px;
      }
    }
  }
}
</style>
```

:::

## Field Props

| 属性     | 说明         | 类型    | 默认值  |
| -------- | ------------ | ------- | ------- |
| title    | 标题         | String  | \-      |
| brief    | 描述内容     | String  | \-      |
| disabled | 是否禁用区域 | Boolean | `false` |

### Field Slots

#### header

页眉内容插槽

#### action

页眉操作区域插槽

#### footer

页脚内容插槽

## FieldItem Props

| 属性        | 说明                             | 类型              | 默认值  |
| ----------- | -------------------------------- | ----------------- | ------- |
| title       | 标题                             | String            | \-      |
| placeholder | 占位符                           | String            | \-      |
| content     | 描述内容                         | String            | \-      |
| addon       | 附加文案                         | String            | \-      |
| disabled    | 是否禁用项目                     | Boolean           | `false` |
| solid       | 是否固定标题宽度，超出会自动换行 | Boolean           | `false` |
| arrow       | 动作箭头标识                     | [Boolean, String] | `false` |

### FieldItem Events

#### @click(event)

非禁用状态下的点击事件

### FieldItem Slots

#### left

起始区域插槽

#### right

末尾区域插槽

#### children

额外内容插槽

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    onClick() {
      this.$dialog.alert({
        content: '触发了'
      });
    }
  }
};
</script>

<style lang="less">
.gree-example-child-field-0 {
  .gree-field-action {
    height: 26px;
    align-items: flex-end;

    .action-container {
      display: flex;
      align-items: center;

      .gree-icon {
        margin-left: 7px;
      }
    }
  }
}
</style>
