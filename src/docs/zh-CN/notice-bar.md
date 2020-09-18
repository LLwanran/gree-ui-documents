# 通告栏

通常用于系统提醒、活动提醒等通知

## 按需引入

```javascript
import { NoticeBar } from 'gree-ui';

Vue.component(NoticeBar.name, NoticeBar);
```

### 基础用法

:::demo

```html
<gree-notice-bar icon="warning">水箱缺水，请及时加水。</gree-notice-bar>
```

:::

### 设置图标

:::demo

```html
<gree-notice-bar mode="closable" icon="warning" @close="close"
  >您的冷风扇已缺水，请加水。</gree-notice-bar
>
<script>
  export default {
    methods: {
      close() {
        Toast.info('关闭事件回调');
      }
    }
  };
</script>
```

:::

### 设置时间

:::demo

```html
<gree-notice-bar :time="5000">5秒后隐藏</gree-notice-bar>
```

:::

### 圆角

:::demo

```html
<gree-notice-bar type="activity" round>水箱缺水，请及时加水。</gree-notice-bar>
```

:::

### 多行显示

:::demo

```html
<gree-notice-bar mode="link" type="warning" icon="security" multi-rows>
  您的冷风扇已缺水，请加水。您的冷风扇已缺水，请加水。您的冷风扇已缺水，请加水。您的冷风扇已缺水，请加水。您的冷风扇已缺水，请加水。
</gree-notice-bar>
```

:::

### 滚动播放

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="voice" scrollable>
  您的冷风扇已缺水，请加水。您的冷风扇已缺水，请加水。您的冷风扇已缺水，请加水。您的冷风扇已缺水，请加水。您的冷风扇已缺水，请加水。
</gree-notice-bar>
```

:::

### 使用插槽自定义

:::demo

```html
<gree-notice-bar class="custom-notice-bar">
  <gree-icon slot="left" name="bell"></gree-icon>
  您的冷风扇已缺水，请加水。
</gree-notice-bar>
```

:::

### 垂直滚动

:::demo

```html
<div class="gree-example-child gree-example-child-notice-bar gree-example-child-notice-bar-7">
  <gree-notice-bar icon="warning">
    <gree-swiper transition="slideY" :autoplay="3000" :is-loop="true" :has-dots="false" :is-prevent="false">
      <gree-swiper-item>1、水箱已满，除湿模式不可用，请及时清空。</gree-swiper-item>
      <gree-swiper-item>2、水箱已满，除湿模式不可用，请及时清空。</gree-swiper-item>
      <gree-swiper-item>3、水箱已满，除湿模式不可用，请及时清空。</gree-swiper-item>
    </gree-swiper>
  </gree-notice-bar>
</div>

<style lang="scss">
.gree-example-child-notice-bar-7 {
  .gree-swiper {
    height: 92px;
    line-height: 92px;
  }
}
</style>
```

:::

## Props

| 属性       | 说明             | 类型    | 默认值    | 备注                                    |
| ---------- | ---------------- | ------- | --------- | --------------------------------------- |
| mode       | 右边提示类型     | String  | \-        | `closable`,`link`                       |
| type       | 主题样式         | String  | `default` | `default`,`activity`,`warning`          |
| time       | 显示时长         | Number  | `0`       | 单位为`ms`，不需要自动消失可将其置为`0` |
| round      | 圆角展示         | Boolean | `false`   | \-                                      |
| multi-rows | 内容超出多行展示 | Boolean | `false`   | 优先级高于 scrollable                   |
| scrollable | 内容超出滚动展示 | Boolean | `false`   | 优先级低于 multiRows                    |
| icon       | 左侧图标         | String  | \-        | \-                                      |

## Slots

### default

默认内容插槽

### left

左侧插槽，一般用于放置图标等

### right

右侧插槽，一般用于放置图标等

## Events

### @close()

通告栏关闭事件（设置`mode`为`closable`）

<script>
export default {
  methods: {
    close() {
      this.$toast.info('关闭事件回调');
    }
  }
};
</script>

<style lang="less" scoped>
.custom-notice-bar {
  flex: 1;
  width: 100%;
  background-color: rgba(89, 158, 248, 0.08);
  color: #2f86f6;
}
.gree-example-child-notice-bar-7 {
  .gree-swiper {
    height: 46px;
    line-height: 46px;
  }
}
</style>
