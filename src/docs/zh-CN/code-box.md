# 验证码输入框

验证码输入框

## 按需引入

```javascript
import { CodeBox } from 'gree-ui';

Vue.component(CodeBox.name, CodeBox);
```

### 基础

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="warning" scrollable>
  为了更好的体验效果，建议在 iOS 或 Android 设备上体验！
</gree-notice-bar>

<div class="gree-example-child gree-example-child-code-box gree-example-child-code-box-0">
  <gree-code-box v-model="code" />
</div>

<script>
export default {
  data() {
    return {
      code: ''
    };
  }
};
</script>
```

:::

### 自定义长度 + 明文展示

:::demo

```html
<div class="gree-example-child gree-example-child-code-box gree-example-child-code-box-1">
  <gree-code-box v-model="code" :maxlength="4" :mask="false" />
</div>

<script>
export default {
  data() {
    return {
      code: ''
    };
  }
};
</script>
```

:::

### 不限长度 + 系统键盘

:::demo

```html
<div class="gree-example-child gree-example-child-code-box gree-example-child-code-box-2">
  <gree-code-box v-model="code" :maxlength="-1" :mask="false" system />
</div>

<script>
export default {
  data() {
    return {
      code: ''
    };
  }
};
</script>
```

:::

## Props

| 属性      | 说明                                     | 类型             | 默认值  |
| --------- | ---------------------------------------- | ---------------- | ------- |
| value     | 验证码字符串                             | String           | \-      |
| maxlength | 字符最大输入长度, 若为-1则不限制输入长度 | [Number, String] | `6`     |
| autofocus | 是否直通聚焦拉起键盘, 对系统键盘不生效   | Boolean          | `false` |
| disabled  | 禁用输入                                 | Boolean          | `false` |
| justify   | 自动拉伸布局                             | Boolean          | `false` |
| mask      | 是否掩码                                 | Boolean          | `true`  |
| closable  | 点击输入框及键盘其他区域是否收起键盘     | Boolean          | `true`  |
| system    | 是否使用系统默认键盘                     | Boolean          | `false` |
| ok-text   | 键盘确认键文案                           | String           | \-      |
| disorder  | 数字键盘是否乱序                         | Boolean          | `false` |
| is-view   | 是否内嵌在页面内展示，否则以弹层形式     | Boolean          | `false` |

## Methods

### focus()

聚焦输入

### blur()

失焦隐藏键盘

## Events

### @submit(code)

用户提交输入内容事件

<script>
export default {
  data() {
    return {
      code: ''
    };
  }
};
</script>

<style lang="less">
.gree-number-keyboard-container .keyboard-number .keyboard-number-list .keyboard-number-item::after {
  width: 1px;
}

.gree-number-keyboard-container .keyboard-number .keyboard-number-list .keyboard-number-item::before,
.gree-number-keyboard-container::before,
.gree-code-box-box::after {
  height: 1px;
}
</style>
