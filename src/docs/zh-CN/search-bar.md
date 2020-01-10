# 搜索栏

搜索框组件

## 按需引入

```javascript
import { SearchBar } from 'gree-ui';

Vue.component(SearchBar.name, SearchBar);
```

## 基础

:::demo

```html
<gree-block>
  <gree-search-bar
    placeholder="目的地/景点关键词"
    v-model="value"
  ></gree-search-bar>
</gree-block>
```

:::

## 事件监听

:::demo

```html
<gree-block>
  <form action="/">
    <gree-search-bar
      v-model="value"
      placeholder="目的地/景点关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    ></gree-search-bar>
  </form>
</gree-block>
```

:::

## 自定义按钮

:::demo

```html
<gree-block>
  <gree-search-bar
    v-model="value"
    placeholder="目的地/景点关键词"
    show-action
    shape="round"
    label="热搜"
    @search="onSearch"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
  >
    <div slot="action" style="color: #ff5257;" @click="onClick">出发</div>
  </gree-search-bar>
</gree-block>
```

:::

## API

### Props

| 属性        | 说明                                             | 类型    | 默认值   |
| ----------- | ------------------------------------------------ | ------- | -------- |
| value       | 绑定值                                           | String  | \-       |
| label       | 搜索框左侧文本                                   | String  | \-       |
| right-icon  | 输入框右侧图标名称或图片链接，可选值见 Icon 组件 | String  | \-       |
| action-text | 取消按钮文字                                     | String  | `取消`   |
| show-action | 是否在搜索框右侧显示取消按钮                     | Boolean | `false`  |
| shape       | 搜索框形状，可选值为 round                       | String  | `square` |
| clearable   | 是否启用清除控件                                 | Boolean | `true`   |
| background  | 搜索框背景色                                     | String  | `#fff`   |
| left-icon   | 输入框左侧图标名称或图片链接，可选值见 Icon 组件 | String  | `search` |
| placeholder | 占位提示文字                                     | String  | \-       |

#### Events

| 参数    | 说明                     |
| ------- | ------------------------ |
| @search | 确定搜索时触发事件       |
| @input  | 输入框内容变化时触发事件 |
| @focus  | 输入框获得焦点时触发事件 |
| @blur   | 输入框失去焦点时触发事件 |
| @cancel | 点击取消按钮时触发事件   |

#### Slots

| 名称       | 说明                                              |
| ---------- | ------------------------------------------------- |
| label      | 自定义搜索框左侧文本                              |
| action     | 自定义搜索框右侧按钮，设置`show-action`属性后展示 |
| left-icon  | 自定义输入框左侧图标                              |
| right-icon | 自定义输入框右侧图标                              |

<script>
  export default {
    data() {
      return {
        value: ''
      };
    },
    methods: {
      onSearch() {
        this.$toast.info(this.value);
      },
      onCancel() {
        this.$toast.info('取消');
      },
      onInput() {
        console.log(this.value);
      },
      onFocus() {
        console.log('onFocus');
      },
      onBlur() {
        console.log('onBlur');
      },
      onClick() {
        this.$toast.info(this.value);
      }
    }
  };
</script>
