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
  <gree-searchbar></gree-searchbar>
</gree-block>
```

:::

## 自定义右侧搜索按钮

:::demo

```html
<gree-block>
  <gree-searchbar
    place-text="请输入自定义文案"
    :has-search-button="false"
  ></gree-searchbar>
</gree-block>
```

:::

## 更多配置

:::demo

```html
<gree-block>
  <gree-searchbar
    place-text="请选择食物类别"
    :has-icon="true"
    :has-text-button="true"
    custom-class="my-search-class"
  ></gree-searchbar>
</gree-block>
```

:::

## 事件

:::demo

```html
<gree-block>
  <gree-searchbar
    place-text="请输入自定义文案"
    @focus="focusFun"
    @input="inputFun"
    @blur="blurFun"
    @submit="submitFun"
  ></gree-searchbar>
</gree-block>

<script>
  export default {
    methods: {
      focusFun() {
        console.log('获取焦点');
      },
      inputFun(value) {
        console.log(value);
      },
      blurFun(value) {
        console.log(value);
        console.log('失去焦点');
      },
      submitFun(value) {
        console.log(value);
      }
    }
  };
</script>
```

:::

## Props

| 属性              | 说明                         | 类型    | 默认值          | 备注 |
| ----------------- | ---------------------------- | ------- | --------------- | ---- |
| has-icon          | 是否显示输入框前面的 icon    | Boolean | `false`         | \-   |
| place-text        | 输入框 placeholder 内容      | String  | `请输入内容...` | \-   |
| has-search-button | 是否显示右侧搜索按钮         | Boolean | `true`          | \-   |
| has-text-button   | 右侧搜索按钮是否为文字按钮   | Boolean | `false`         | \-   |
| text-info         | 右侧文字搜索按钮文案         | String  | `搜索`          | \-   |
| animation         | 是否需要默认的搜索框显示动画 | Boolean | `false`         | \-   |
| custom-class      | 自定义 class                 | String  | \-              | \-   |

## Events

| 参数    | 说明                     |
| ------- | ------------------------ |
| @focus  | 输入框获取焦点时触发事件 |
| @input  | 输入框输入内容时触发事件 |
| @blur   | 输入框失去焦点时触发事件 |
| @submit | 默认提交事件             |

<script>
  export default {
    methods: {
      focusFun() {
        console.log('获取焦点');
      },
      inputFun(value) {
        console.log(value);
      },
      blurFun(value) {
        console.log(value);
        console.log('失去焦点');
      },
      submitFun(value) {
        console.log(value);
      }
    }
  };
</script>
