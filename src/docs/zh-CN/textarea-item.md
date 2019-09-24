# 多行输入框

多行文本输入框

## 按需引入

```javascript
import { TextareaItem } from 'gree-ui';

Vue.component(TextareaItem.name, TextareaItem);
```

### 普通文本域

:::demo

```html
<gree-block>
  <gree-field>
    <gree-textarea-item
      title="普通"
      autosize
      v-model="value"
      placeholder="普通文本域"
    ></gree-textarea-item>
    <gree-textarea-item
      title="自动适应"
      v-model="value"
      :autosize="true"
      :rows="1"
      placeholder="最大高度100px 超过出现滚动条"
      :max-height="100"
    ></gree-textarea-item>
    <gree-textarea-item
      title="禁用"
      :autosize="true"
      value="禁用文本域"
      placeholder="500字以内"
      :max-height="100"
      disabled
    ></gree-textarea-item>
    <gree-textarea-item
      title="只读"
      :autosize="true"
      value="只读文本域"
      placeholder="500字以内"
      :max-height="100"
      readonly
    ></gree-textarea-item>
  </gree-field>
</gree-block>
```

:::

### 插槽

:::demo

```html
<gree-block>
  <gree-field class="gree-example-child-textarea">
    <gree-textarea-item
      :autosize="true"
      v-model="value2"
      :max-length="100"
      :max-height="100"
      placeholder="有什么新鲜事想告诉大家？"
    >
      <template slot="footer">
        <p class="demo-footer">
          <span class="demo-footer-left" v-if="value2.length"
            >{{ value2.length }}/100</span
          >
          <span v-else></span>
          <span class="demo-footer-right">页脚文案</span>
        </p>
      </template>
    </gree-textarea-item>
  </gree-field>
</gree-block>
```

:::

## Props

| 属性        | 说明                                             | 类型          | 默认值  | 备注           |
| ----------- | ------------------------------------------------ | ------------- | ------- | -------------- |
| title       | 标题                                             | String        | \-      | \-             |
| placeholder | 占位符                                           | String        | \-      | \-             |
| v-model     | 输入内容                                         | String        | \-      |                |
| max-length  | 可输入的字符长度                                 | String/Number | \-      | \-             |
| autosize    | 是否可自动适应高度                               | Boolean       | `false` | \-             |
| max-height  | 在`autosize=true`的情况, 文本域最长的高度        | String/Number | `'40'`  | 依赖`autosize` |
| solid       | title 的宽度是否固定                             | Boolean       | `true`  |                |
| readonly    | 是否只读                                         | Boolean       | `false` | \-             |
| disabled    | 是否禁用                                         | Boolean       | `false` | \-             |
| rows        | 开始显示的行数                                   | String/Number | `'3'`   | \-             |
| error       | 是否显示错误, 如果有内容就认定是出错, 并显示出来 | String        | \-      | \-             |

## Slots

### footer

文本域在分隔线上面部分的 slot

## TextareaItem Events

### focus()

文本域获得焦点

### blur()

文本域失去焦点

### getValue()

获取文本域值

## TextItem Events

### @focus(name)

文本域获得焦点事件

### @blur(name)

文本域失去焦点事件

### @change(name, value)

文本域值变化事件

### @keyup(name, event)

文本域按键按下事件

### @keydown(name, event)

文本域按键释放事件

<script>
export default {
  data() {
    return {
      value: '',
      value2: ''
    };
  }
};
</script>

<style lang="less" scoped>
.gree-example-child-textarea {
  .demo-footer {
    display: flex;
    justify-content: space-between;
    color: #999;
    font-size: 18px;
  }
}
</style>
