# 气泡提示

点击元素，弹出气泡式的卡片浮层

## 按需引入

```javascript
import { Popover } from 'gree-ui';

Vue.component(Popover.name, Popover);
```

### 上方

:::demo

```html
<div class="gree-example-child gree-example-child-popover gree-example-child-popover-0">
  <gree-popover content="哎哟，不错哦" placement="top">
    <gree-button block>点击我</gree-button>
  </gree-popover>
</div>
```

:::

### 下方

:::demo

```html
<div class="gree-example-child gree-example-child-popover gree-example-child-popover-1">
  <gree-popover content="哎哟，不错哦" placement="bottom">
    <gree-button block>点击我</gree-button>
  </gree-popover>
</div>
```

:::

### 左侧

:::demo

```html
<div class="gree-example-child gree-example-child-popover gree-example-child-popover-2">
  <gree-popover content="哎哟，不错哦" placement="left">
    <gree-button>点击我</gree-button>
  </gree-popover>
</div>
```

:::

### 右侧

:::demo

```html
<div class="gree-example-child gree-example-child-popover gree-example-child-popover-3">
  <gree-popover content="哎哟，不错哦" placement="right">
    <gree-button>点击我</gree-button>
  </gree-popover>
</div>
```

:::

### 自定义

:::demo

```html
<div class="gree-example-child gree-example-child-popover gree-example-child-popover-4">
  <gree-popover
    name="gree-popover-4"
    icon="warning"
    content="浏览并分享一篇新闻奖励10积分"
    :offset="{top: -10}"
    fill
    @show="onShow"
    @hide="onHide"
  >
    <gree-button block>点击我</gree-button>
  </gree-popover>
</div>

<script>
export default {
  methods: {
    onShow(name) {
      Dialog.alert({
        content: `当前显示name：${name}`,
        confirmText: '知道了'
      });
    },
    onHide(name) {
      Dialog.alert({
        content: `当前隐藏name：${name}`,
        confirmText: '知道了'
      });
    }
  }
};
</script>

<style lang="scss">
.gree-popover-4 {
  .gree-popover-bg {
    background-color: #1890ff;

    &:after {
      border-width: 20px 20px 0 20px;
      border-color: #1890ff transparent transparent transparent;
    }
  }

  .gree-popover-content {
    color: #fff;
  }

  .gree-popover-bg {
    box-shadow: none;
    opacity: 1;
  }
}
</style>
```

:::

## Props

| 属性      | 说明             | 类型             | 默认值  | 备注                   |
| --------- | ---------------- | ---------------- | ------- | ---------------------- |
| placement | 位置             | String           | \-      | \-                     |
| closable  | 是否显示关闭按钮 | Boolean          | `true`  | \-                     |
| icon      | 图标             | String           | \-      | 可选值请参考组件`Icon` |
| icon-svg  | 使用svg图标      | Boolean          | `false` | \-                     |
| content   | 提示文本内容     | [String, Number] | \-      | \-                     |
| name      | 提示名称         | [String, Number] | \-      | \-                     |

## Events

### @show()

提示框显示后触发的事件

### @hide()

提示框隐藏后触发的事件

<script>
export default {
  methods: {
    onShow(name) {
      this.$dialog.alert({
        content: `当前显示name：${name}`,
        confirmText: '知道了'
      });
    },
    onHide(name) {
      this.$dialog.alert({
        content: `当前隐藏name：${name}`,
        confirmText: '知道了'
      });
    }
  }
};
</script>

<style lang="less">
.gree-popover-4 {
  .gree-popover-bg {
    background-color: #1890ff;

    &:after {
      border-width: 20px 20px 0 20px;
      border-color: #1890ff transparent transparent transparent;
    }
  }

  .gree-popover-content {
    color: #fff;
  }

  .gree-popover-bg {
    box-shadow: none;
    opacity: 1;
  }
}
</style>
