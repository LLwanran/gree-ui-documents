# 下拉菜单

展示一组折叠的下拉菜单

## 按需引入

```javascript
import { DropdownMenu, DropdownMenuItem } from 'gree-ui';

Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownMenuItem.name, DropdownMenuItem);
```

### 基础

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="warning" scrollable>
  为了更好的体验效果，建议在 iOS 或 Android 设备上体验！
</gree-notice-bar>
<gree-block>
  <gree-dropdown-menu>
    <gree-dropdown-menu-item
      v-model="value1"
      :options="option1"
    ></gree-dropdown-menu-item>
    <gree-dropdown-menu-item
      v-model="value2"
      :options="option2"
    ></gree-dropdown-menu-item>
  </gree-dropdown-menu>
</gree-block>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 1,
        option1: [
          { text: '综合排序', value: 0 },
          { text: '好评优先', value: 1 },
          { text: '销量最高', value: 2 },
          { text: '起送价最低', value: 3 },
          { text: '配送最快', value: 4 },
          { text: '配送费最低', value: 5 },
          { text: '人均从低到高', value: 6 },
          { text: '人均从高到低', value: 7 },
          { text: '通用排序', value: 8 }
        ],
        option2: [
          { text: '欢迎度排序', value: 0 },
          { text: '好评优先', value: 1 },
          { text: '低价优先', value: 2 },
          { text: '高价优先', value: 3 },
          { text: '距离优先', value: 4 }
        ]
      };
    }
  };
</script>
```

:::

### 自定义菜单内容 + 禁用

:::demo

```html
<gree-block>
  <gree-dropdown-menu>
    <gree-dropdown-menu-item
      title="位置距离"
      disabled
    ></gree-dropdown-menu-item>
    <gree-dropdown-menu-item
      title="星级/价格"
      disabled
    ></gree-dropdown-menu-item>
    <gree-dropdown-menu-item title="筛选" ref="item">
      <gree-list>
        <gree-list-item title="蜂鸟专送">
          <gree-switch v-model="switch1" slot="after"></gree-switch>
        </gree-list-item>
        <gree-list-item title="开发票">
          <gree-switch v-model="switch2" slot="after"></gree-switch>
        </gree-list-item>
      </gree-list>
      <gree-button type="primary" block square @click="onConfirm">确认</gree-button>
    </gree-dropdown-menu-item>
  </gree-dropdown-menu>
</gree-block>

<script>
  export default {
    data() {
      return {
        switch1: true,
        switch2: false
      };
    },
    methods: {
      onConfirm() {
        this.$refs.item.toggle();
      }
    }
  };
</script>
```

:::

### 自定义选中项颜色

:::demo

```html
<gree-block>
  <gree-dropdown-menu active-color="#ff0202">
    <gree-dropdown-menu-item
      v-model="value3"
      :options="option3"
    ></gree-dropdown-menu-item>
    <gree-dropdown-menu-item
      v-model="value4"
      :options="option4"
    ></gree-dropdown-menu-item>
  </gree-dropdown-menu>
</gree-block>

<script>
  export default {
    data() {
      return {
        value3: 0,
        value4: 0,
        option3: [
          { text: '推荐', value: 0 },
          { text: '国际奢品', value: 1 },
          { text: '潮流运动', value: 2 },
          { text: '低至3折', value: 3 },
          { text: '型格男装', value: 4 }
        ],
        option4: [
          { text: '我的频道', value: 0 },
          { text: 'PLUS尊享', value: 1 },
          { text: '全民PICK', value: 2 }
        ]
      };
    }
  };
</script>
```

:::

### 向上展开

:::demo

```html
<gree-block>
  <gree-dropdown-menu direction="up">
    <gree-dropdown-menu-item
      v-model="value5"
      :options="option5"
    ></gree-dropdown-menu-item>
    <gree-dropdown-menu-item
      v-model="value6"
      :options="option6"
    ></gree-dropdown-menu-item>
  </gree-dropdown-menu>
</gree-block>

<script>
  export default {
    data() {
      return {
        value5: 0,
        value6: 0,
        option5: [
          { text: '推荐', value: 0 },
          { text: '国际奢品', value: 1 },
          { text: '潮流运动', value: 2 },
          { text: '低至3折', value: 3 },
          { text: '型格男装', value: 4 }
        ],
        option6: [
          { text: '我的频道', value: 0 },
          { text: 'PLUS尊享', value: 1 },
          { text: '全民PICK', value: 2 }
        ]
      };
    }
  };
</script>
```

:::

## DropdownMenu Props

| 属性                   | 说明                       | 类型    | 默认值    |
| ---------------------- | -------------------------- | ------- | --------- |
| active-color           | 菜单标题和选项的选中态颜色 | String  | `#00aeff` |
| overlay                | 是否显示遮罩层             | Boolean | `true`    |
| z-index                | 菜单栏 z-index 层级        | Number  | `10`      |
| direction              | 菜单展开方向，可选值为 up  | String  | `down`    |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单 | Boolean | `true`    |

## DropdownItem Props

| 属性        | 说明                                              | 类型             | 默认值         |
| ----------- | ------------------------------------------------- | ---------------- | -------------- |
| value       | 当前选中项对应的 value，可以通过 v-model 双向绑定 | [String, Number] | \-             |
| title       | 菜单项标题                                        | String           | 当前选中项文字 |
| disabled    | 是否禁用菜单                                      | Boolean          | `false`        |
| title-class | 标题额外类名                                      | String           | \-             |
| options     | 选项数组                                          | Array            | `[]`           |

### DropdownItem Events

| 事件名 | 说明                          | 回调参数 |
| ------ | ----------------------------- | -------- |
| change | 点击选项导致 value 变化时触发 | value    |
| open   | 打开菜单栏时触发              | \-       |
| opened | 打开菜单栏且动画结束后触发    | \-       |
| close  | 关闭菜单栏时触发              | \-       |
| opened | 关闭菜单栏且动画结束后触发    | \-       |

### options 数据结构

| 键名  | 说明                                        | 类型             |
| ----- | ------------------------------------------- | ---------------- |
| text  | 文字                                        | String           |
| value | 标识符                                      | [String, Number] |
| icon  | 左侧图标名称或图片链接，可选值见[Icon 组件] | String           |

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 1,
      option1: [
        { text: '综合排序', value: 0 },
        { text: '好评优先', value: 1 },
        { text: '销量最高', value: 2 },
        { text: '起送价最低', value: 3 },
        { text: '配送最快', value: 4 },
        { text: '配送费最低', value: 5 },
        { text: '人均从低到高', value: 6 },
        { text: '人均从高到低', value: 7 },
        { text: '通用排序', value: 8 }
      ],
      option2: [
        { text: '欢迎度排序', value: 0 },
        { text: '好评优先', value: 1 },
        { text: '低价优先', value: 2 },
        { text: '高价优先', value: 3 },
        { text: '距离优先', value: 4 }
      ],
      switch1: true,
      switch2: false,
      value3: 0,
      value4: 0,
      option3: [
        { text: '推荐', value: 0 },
        { text: '国际奢品', value: 1 },
        { text: '潮流运动', value: 2 },
        { text: '低至3折', value: 3 },
        { text: '型格男装', value: 4 }
      ],
      option4: [
        { text: '我的频道', value: 0 },
        { text: 'PLUS尊享', value: 1 },
        { text: '全民PICK', value: 2 }
      ],
      value5: 0,
        value6: 0,
        option5: [
          { text: '推荐', value: 0 },
          { text: '国际奢品', value: 1 },
          { text: '潮流运动', value: 2 },
          { text: '低至3折', value: 3 },
          { text: '型格男装', value: 4 }
        ],
        option6: [
          { text: '我的频道', value: 0 },
          { text: 'PLUS尊享', value: 1 },
          { text: '全民PICK', value: 2 }
        ]
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>
