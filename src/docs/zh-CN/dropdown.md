# 折叠展开

可切换的上下文覆盖，用于下拉菜单显示和操作列表

## 按需引入

```javascript
import { Dropdown } from 'gree-ui';

Vue.component(Dropdown.name, Dropdown);
```

### 基础

:::demo

```html
<gree-block>
  <gree-dropdown @active-change="activeChange">
    <gree-button type="positive" inline slot="trigger">点我啊！</gree-button>
    <gree-dropdown-item>NO.1 詹姆斯(热火)</gree-dropdown-item>
    <gree-dropdown-item>NO.2 杜兰特(雷霆)</gree-dropdown-item>
    <gree-dropdown-item>NO.3 科比(湖人)</gree-dropdown-item>
  </gree-dropdown>
  <gree-overlay v-show="showOverlay" />
</gree-block>

<script>
  export default {
    data() {
      return {
        showOverlay: false
      };
    },
    methods: {
      activeChange() {
        this.showOverlay = !this.showOverlay;
      }
    }
  };
</script>
```

:::

### 自定义内容和位置

:::demo

```html
<gree-block class="flex">
  <gree-dropdown v-model="navigation" position="is-bottom-left">
    <a class="navbar-item" slot="trigger">
      <span>点我啊！</span>
      <gree-icon name="arrow-down"></gree-icon>
    </a>
    <gree-dropdown-item value="home">
      <gree-icon name="home"></gree-icon>Home
    </gree-dropdown-item>
    <gree-dropdown-item value="power" disabled>
      <gree-icon name="power"></gree-icon>Power
    </gree-dropdown-item>
    <gree-dropdown-item value="voice">
      <gree-icon name="voice"></gree-icon>Voice
    </gree-dropdown-item>
  </gree-dropdown>
</gree-block>

<style lang="scss" scoped>
  .flex {
    display: flex !important;
    justify-content: flex-end;
  }
  .block {
    display: inline-block;

    .navbar-item {
      position: relative;
      display: flex;
      align-items: center;
      flex-grow: 0;
      flex-shrink: 0;
      color: #4a4a4a;
      padding: 8px 12px;

      span {
        font-size: 16px;
      }
    }
  }
</style>
```

:::

### 多选

:::demo

```html
<gree-block>
  <gree-dropdown v-model="selectedOptions" multiple>
    <gree-button type="assertive" slot="trigger">
      <span>已选择： ({{ selectedOptions.length }}) 个</span>
    </gree-button>
    <gree-dropdown-item value="option1">
      <span>选项 1</span>
    </gree-dropdown-item>
    <gree-dropdown-item value="option2">
      <span>选项 2</span>
    </gree-dropdown-item>
    <gree-dropdown-item value="option3">
      <span>选项 3</span>
    </gree-dropdown-item>
  </gree-dropdown>
</gree-block>
```

:::

## Props

| 属性           | 说明                               | 类型                                                        | 默认值  |
| -------------- | ---------------------------------- | ----------------------------------------------------------- | ------- |
| v-model        | 双向绑定值                         | any                                                         | `null`  |
| disabled       | 禁用下拉菜单                       | Boolean                                                     | \-      |
| position       | 下拉菜单相对于触发器的位置         | String（可选值：is-top-right，is-top-left，is-bottom-left） | `false` |
| multiple       | 允许多个选择                       | Boolean                                                     | `false` |
| close-on-click | 是否点击关闭（针对 multiple 模式） | Boolean                                                     | `true`  |

## Events

### @change()

当 Item 被选中时触发

### @active-change()

下拉菜单激活或停用时触发

## Item Props

| 属性        | 说明                        | 类型    | 默认值  |
| ----------- | --------------------------- | ------- | ------- |
| v-model     | 双向绑定值                  | any     | `null`  |
| separator   | 设置分隔线                  | Boolean | `false` |
| disabled    | 禁用 Item                   | Boolean | `false` |
| custom      | Item 不可单击               | Boolean | `false` |
| paddingless | 移除间距                    | Boolean | `false` |
| has-link    | 锚标记或 router-link 时使用 | Boolean | `false` |

## Events

### @click()

单击 Item 时触发

<script>
export default {
  data() {
    return {
      navigation: 'home',
      selectedOptions: [],
      showOverlay: false
    };
  },
  methods: {
    activeChange() {
      this.showOverlay = !this.showOverlay;
    }
  }
};
</script>

<style lang="less" scoped>
.flex {
  display: flex !important;
  justify-content: flex-end;
}
.block {
  display: inline-block;

  .navbar-item {
    position: relative;
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    color: #4a4a4a;
    padding: 8px 12px;

    span {
      font-size: 16px;
    }
  }
  .dropdown {
    color: #404657;
  }
}
</style>
