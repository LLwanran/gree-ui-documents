# 输入框

单行文本输入框，支持特殊场景文本格式化

## 按需引入

```javascript
import { Field, InputItem } from 'gree-ui';

Vue.component(Field.name, Field);
Vue.component(InputItem.name, InputItem);
```

### 普通输入框

:::demo

```html
<gree-field title="普通输入框">
  <gree-input-item
    title="普通文本"
    placeholder="最大长度为10"
    is-amount
    :maxlength="10"
  ></gree-input-item>
  <gree-input-item title="禁用表单" value="不可输入" disabled></gree-input-item>
  <gree-input-item title="只读表单" value="readonly" readonly></gree-input-item>
  <gree-input-item
    title="高亮表单"
    placeholder="高亮表单"
    is-highlight
    clearable
  ></gree-input-item>
  <gree-input-item
    title="文本居中"
    placeholder="文本居中"
    align="center"
  ></gree-input-item>
  <gree-input-item
    title="文本居右"
    placeholder="文本居右"
    align="right"
  ></gree-input-item>
</gree-field>
```

:::

### 标题浮动输入框

:::demo

```html
<gree-field title="标题浮动输入框">
  <gree-input-item
    title="请输入手机号/邮箱/用户名"
    placeholder="手机号/邮箱/用户名"
    is-title-latent
    clearable
  ></gree-input-item>
  <gree-input-item
    title="请输入密码"
    placeholder="密码"
    is-title-latent
    clearable
  ></gree-input-item>
</gree-field>
```

:::

### 业务场景输入框

:::demo

```html
<gree-field title="业务场景输入框">
  <gree-input-item
    title="手机号"
    type="phone"
    placeholder="152 **** 4522"
  ></gree-input-item>
  <gree-input-item
    title="数字"
    type="digit"
    placeholder="0123456789"
  ></gree-input-item>
  <gree-input-item
    title="密码"
    type="password"
    placeholder="*********"
  ></gree-input-item>
  <gree-input-item
    title="邮箱"
    type="email"
    placeholder="ipen******25@gmail.com"
  ></gree-input-item>
  <gree-input-item
    title="金额"
    type="money"
    placeholder="**, ***.****"
  ></gree-input-item>
  <gree-input-item
    title="银行卡"
    type="bankCard"
    placeholder="**** **** **** ****"
  ></gree-input-item>
  <gree-input-item placeholder="自定义左右插槽">
    <gree-icon name="question" slot="left"></gree-icon>
    <gree-icon name="warning" slot="right"></gree-icon>
  </gree-input-item>
</gree-field>
```

:::

## Props

| 属性                                                    | 说明                             | 类型                                                               | 默认值                                                        | 备注                                                                                 |
| ------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| type                                                    | 表单类型，特殊类型自带文本格式化 | String                                                             | `text`                                                        | 其他可选 `bankCard`,`phone`,`money`,`digit`,`password`以及其他的标准 Html Input 类型 |
| name                                                    | 表单名称                         | String                                                             | \-                                                            | 事件入参之一，可用于区分表单组件                                                     |
| v-model                                                 | 表单值                           | String                                                             | \-                                                            | \-                                                                                   |
| title                                                   | 表单左侧标题                     | String                                                             | \-                                                            | 可直接使用`slot left`代替                                                            |
| solid                                                   | 是否固定标题宽度，超出会自动换行 | Boolean                                                            | `true`                                                        | \-                                                                                   |
| placeholder                                             | 表单占位符                       | String                                                             | \-                                                            | \-                                                                                   |
| brief                                                   | 表单描述                         | String                                                             | \-                                                            | \-                                                                                   |
| maxlength                                               | 表单最大字符数                   | String/Number                                                      | \-                                                            | `phone`类型固定为 11                                                                 |
| size                                                    | 表单尺寸                         | String                                                             | `normal`                                                      | `large`,`normal`                                                                     |
| align                                                   | 表单文本对齐方式                 | String                                                             | `left`                                                        | `left`,`center`,`right`                                                              |
| error                                                   | 表单错误提示信息                 | String                                                             | \-                                                            | \-                                                                                   |
| readonly                                                | 表单是否只读                     | Boolean                                                            | `false`                                                       | \-                                                                                   |
| disabled                                                | 表单是否禁用                     | Boolean                                                            | `false`                                                       | \-                                                                                   |
| is-title-latent                                         | 表单标题是否隐藏                 | Boolean                                                            | `false`                                                       | 表单获得焦点或内容不为空时展示                                                       |
| is-highlight                                            | 表单是否高亮                     | Boolean                                                            | `false`                                                       | 表单获得焦点边框高亮                                                                 |
| is-formative                                            | 表单文本是否根据类型自动格式化   | Boolean                                                            | `type`为`bankCard`,`phone`,`money`默认为`true`，否则为`false` | \-                                                                                   |
| is-amount                                               | 表单内容为金融数字               | Boolean                                                            | `false`                                                       | \-                                                                                   |
| formation                                               | 表单文本格式化回调方法           | Function(name, curValue, curPos): {value: curValue, range: curPos} | \-                                                            | 传入参数`name`为表单名称，`curValue`为表单值，`curPos`为表单光标当前所在位置         |
| 返回参数`value`格式化值,`range`表单光标格式化后所在位置 |
| clearable                                               | 表单是否使用清除控件             | Boolean                                                            | `false`                                                       | \-                                                                                   |

## Slots

### left

左侧插槽，一般用于放置图标等

### right

右侧插槽，一般用于放置图标等

## Methods

### focus()

表单获得焦点

### blur()

表单失去焦点

### getValue()

获取表单值

## Events

### @focus(name)

表单获得焦点事件

### @blur(name)

表单失去焦点事件

### @change(name, value)

表单值变化事件

### @confirm(name, value)

表单值确认事件， 仅使用金融数字键盘或组件在`form`元素内时有效
