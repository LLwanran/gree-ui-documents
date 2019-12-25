# 侧边导航

支持菜单切换的侧边栏

## 按需引入

```javascript
import { Sidebar, SidebarItem } from 'gree-ui';

Vue.component(Sidebar.name, Sidebar);
Vue.component(SidebarItem.name, SidebarItem);
```

### 基础

:::demo

```html
<gree-block>
  <gree-sidebar v-model="activeKey">
    <gree-sidebar-item title="女装"></gree-sidebar-item>
    <gree-sidebar-item title="男装"></gree-sidebar-item>
    <gree-sidebar-item title="男女内衣"></gree-sidebar-item>
  </gree-sidebar>
</gree-block>

<script>
  export default {
    data() {
      return {
        activeKey: 0
      };
    }
  };
</script>
```

:::

### 提示信息

:::demo

```html
<gree-block>
  <gree-sidebar v-model="activeKey">
    <gree-sidebar-item title="箱包皮具" dot></gree-sidebar-item>
    <gree-sidebar-item title="手表配饰" info="5"></gree-sidebar-item>
    <gree-sidebar-item title="护肤彩妆" info="99+"></gree-sidebar-item>
  </gree-sidebar>
</gree-block>

<script>
  export default {
    data() {
      return {
        activeKey: 0
      };
    }
  };
</script>
```

:::

### 禁用选项

:::demo

```html
<gree-block>
  <gree-sidebar v-model="activeKey">
    <gree-sidebar-item title="运动户外"></gree-sidebar-item>
    <gree-sidebar-item title="手机数码" disabled></gree-sidebar-item>
    <gree-sidebar-item title="家用电器"></gree-sidebar-item>
  </gree-sidebar>
</gree-block>

<script>
  export default {
    data() {
      return {
        activeKey: 0
      };
    }
  };
</script>
```

:::

### 监听切换事件

:::demo

```html
<gree-block>
  <gree-sidebar v-model="activeKey" @change="onChange">
    <gree-sidebar-item title="家用电器"></gree-sidebar-item>
    <gree-sidebar-item title="家居家纺"></gree-sidebar-item>
    <gree-sidebar-item title="家具家装"></gree-sidebar-item>
  </gree-sidebar>
</gree-block>

<script>
  export default {
    data() {
      return {
        activeKey: 0
      };
    },
    methods: {
      onChange(index) {
        this.$toast.info(`切换至：${index}`);
      }
    }
  };
</script>
```

:::

## Sidebar Props

| 属性    | 说明             | 类型             | 默认值 |
| ------- | ---------------- | ---------------- | ------ |
| v-model | 当前导航项的索引 | [String, Number] | `0`    |

## Sidebar Events

| 事件名 | 说明             | 回调参数                |
| ------ | ---------------- | ----------------------- |
| change | 切换导航项时触发 | index: 当前导航项的索引 |

## SidebarItem Props

| 属性     | 说明                                               | 类型             | 默认值  |
| -------- | -------------------------------------------------- | ---------------- | ------- |
| url      | 点击后跳转的链接地址                               | String           | \-      |
| replace  | 是否在跳转时替换当前页面历史                       | Boolean          | `false` |
| to       | 点击后跳转的目标路由对象，同 vue-router 的 to 属性 | [String, Object] | \-      |
| dot      | 是否显示右上角小红点                               | Boolean          | `false` |
| info     | 右上角徽标的内容                                   | [Number, String] | \-      |
| title    | 内容                                               | String           | \-      |
| disabled | 是否禁用该项                                       | Boolean          | `false` |

## SidebarItem Events

| 事件名 | 说明       | 回调参数                |
| ------ | ---------- | ----------------------- |
| click  | 点击时触发 | index: 当前导航项的索引 |

<script>
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onChange(index) {
      this.$toast.info(`切换至：${index}`);
    }
  }
};
</script>

<style lang="less">
.gree-sidebar-item--disabled {
  color: #c5cad5 !important;
}
</style>
