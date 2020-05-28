# 头像

用来代表用户或事物，支持图片、图标或字符展示

## 按需引入

```javascript
import { Avatar } from 'gree-ui';

Vue.component(Avatar.name, Avatar);
```

### 基础

:::demo

```html
<gree-notice-bar type="activity">
  头像有三种尺寸，两种形状可选；size 可以设置为数值。
</gree-notice-bar>
<div class="gree-example-child gree-example-child-avatar gree-example-child-avatar-0">
  <gree-block>
    <gree-row>
      <gree-col>
        <gree-avatar icon="user" size="large"></gree-avatar>
      </gree-col>
      <gree-col>
        <gree-avatar icon="user"></gree-avatar>
      </gree-col>
      <gree-col>
        <gree-avatar icon="user" size="small"></gree-avatar>
      </gree-col>
    </gree-row>
  </gree-block>
  <gree-block>
    <gree-row>
      <gree-col>
        <gree-avatar shape="square" icon="user" size="64"></gree-avatar>
      </gree-col>
      <gree-col>
        <gree-avatar shape="square" icon="user"></gree-avatar>
      </gree-col>
      <gree-col>
        <gree-avatar shape="square" icon="user" size="32"></gree-avatar>
      </gree-col>
    </gree-row>
  </gree-block>
</div>
```

:::

### 类型

:::demo

```html
<gree-notice-bar type="activity">
  支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
</gree-notice-bar>
<div class="gree-example-child gree-example-child-avatar gree-example-child-avatar-1">
  <gree-block>
    <gree-row>
      <gree-col>
        <gree-avatar icon="user"></gree-avatar>
      </gree-col>
      <gree-col>
        <gree-avatar>L</gree-avatar>
      </gree-col>
      <gree-col>
        <gree-avatar>Hello</gree-avatar>
      </gree-col>
    </gree-row>
  </gree-block>
  <gree-block>
    <gree-row>
      <gree-col>
        <gree-avatar src="https://tva1.sinaimg.cn/crop.0.0.180.180.180/65ee164fjw1e8qgp5bmzyj2050050aa8.jpg"></gree-avatar>
      </gree-col>
      <gree-col>
        <gree-avatar style="color: #f56a00;background-color: #ffbd17">L</gree-avatar>
      </gree-col>
      <gree-col>
        <gree-avatar style="background-color: #44cc00" icon="user"></gree-avatar>
      </gree-col>
    </gree-row>
  </gree-block>
</div>
```

:::

### 带徽标

:::demo

```html
<gree-notice-bar type="activity">
  对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。
</gree-notice-bar>
<div class="gree-example-child gree-example-child-avatar gree-example-child-avatar-2">
  <gree-block>
    <gree-row>
      <gree-col>
        <gree-avatar icon="user" size="large" dot></gree-avatar>
      </gree-col>
      <gree-col>
        <gree-avatar shape="square" icon="user" size="64" info="5"></gree-avatar>
      </gree-col>
      <gree-col>
        <gree-avatar shape="square" icon="user" size="78" info="99"></gree-avatar>
      </gree-col>
    </gree-row>
  </gree-block>
</div>
```

:::

## Props

| 属性  | 说明                                                             | 类型             | 默认值    |
| ----- | ---------------------------------------------------------------- | ---------------- | --------- |
| shape | 指定头像的形状，可选值为 circle、square                          | String           | `circle`  |
| size  | 设置头像的大小，可选值为 large、small、default，支持设置具体数值 | [String, Number] | `default` |
| src   | 图片类头像的资源地址                                             | String           | \-        |
| icon  | 设置头像的图标类型，参考 Icon 组件                               | String           | \-        |
| dot   | 是否显示右上角小红点                                             | Boolean          | `false`   |
| info  | 右上角徽标的内容                                                 | [Number, String] | \-        |

### Events

#### @on-error(event)

在设置 src 且图片加载不成功时触发
