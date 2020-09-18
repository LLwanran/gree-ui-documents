# 滑动单元格

列表元素向左滑出现删除等按钮

## 按需引入

```javascript
import { SwipeCell } from 'gree-ui';

Vue.component(SwipeCell.name, SwipeCell);
```

### 基础

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="warning" scrollable>
  为了更好的体验效果，建议在 iOS 或 Android 设备上体验！
</gree-notice-bar>
<section class="gree-example-child gree-example-child-swipe-cell gree-example-child-swipe-cell-0">
  <gree-swipe-cell>
    <template #left>
      <gree-button square type="primary" text="选择" />
    </template>
    <gree-list contacts-list no-hairlines no-hairlines-between>
      <gree-list-item title="标题" text="内容" />
    </gree-list>
    <template #right>
      <gree-button square type="danger" text="删除" />
      <gree-button square type="primary" text="收藏" />
    </template>
  </gree-swipe-cell>
</section>
```

:::

### 自定义内容

:::demo

```html
<section class="gree-example-child gree-example-child-swipe-cell gree-example-child-swipe-cell-1">
  <gree-swipe-cell>
    <gree-list media-list>
      <gree-list-item
        link
        title="范特西"
        after="主打歌：爱在西元前"
        subtitle="发行日期： 2001 年 9 月 14 日"
        text="《范特西》是台湾歌手周杰伦第二张录音室专辑，由台湾博德曼音乐于2001年9月14日发行。专辑名《范特西》来自英文“Fantasy”音译。"
        media-item
      >
        <img slot="media" src="https://static01.imgkr.com/temp/c95a85e58c5842d2a78bf896c7adc6c9.jpg" width="80" />
      </gree-list-item>
    </gree-list>
    <template #right>
      <gree-button square text="删除" type="danger" class="delete-button" />
    </template>
  </gree-swipe-cell>
</section>

<style lang="scss">
.gree-example-child-swipe-cell-1 {
  .delete-button {
    height: 100%;
  }
}
</style>
```

:::

### 异步关闭

:::demo

```html
<section class="gree-example-child gree-example-child-swipe-cell gree-example-child-swipe-cell-0">
  <gree-swipe-cell :before-close="beforeClose">
    <template #left>
      <gree-button square type="primary" text="选择" />
    </template>
    <gree-list contacts-list no-hairlines no-hairlines-between>
      <gree-list-item title="标题" text="内容" />
    </gree-list>
    <template #right>
      <gree-button square type="danger" text="删除" />
    </template>
  </gree-swipe-cell>
</section>

<script>
export default {
  methods: {
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            title: '提示',
            content: '确定删除吗？',
            confirmText: '确认',
            onConfirm: () => {
              instance.close();
            },
            cancelText: '取消'
          });
          break;
      }
    }
  }
};
</script>
```

:::

## Props

| 属性             | 说明                           | 类型             | 默认值  |
| ---------------- | ------------------------------ | ---------------- | ------- |
| disabled         | 是否禁用滑动                   | Boolean          | `false` |
| left-width       | 指定左侧滑动区域宽度，单位为px | [Number, String] | `auto`  |
| right-width      | 指定右侧滑动区域宽度，单位为px | [Number, String] | `auto`  |
| before-close     | 关闭前的回调函数               | Function         | \-      |
| stop-propagation | 是否阻止滑动事件冒泡           | Boolean          | `false` |
| name             | 标识符，可以在事件参数中获取到 | [Number, String] | \-      |

## Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义显示内容 |
| left    | 左侧滑动内容   |
| right   | 右侧滑动内容   |

## Events

| 事件名 | 说明       | 回调参数                                        |
| ------ | ---------- | ----------------------------------------------- |
| click  | 点击时触发 | 关闭时的点击位置 (`left``right``cell``outside`) |
| open   | 打开时触发 | { position: 'left'                              | 'right' , name: string } |
| close  | 关闭时触发 | { position: string , name: string }             |

## beforeClose 参数

beforeClose 的第一个参数为对象，对象中包含以下属性：

| 参数名   | 说明                                            | 类型        |
| -------- | ----------------------------------------------- | ----------- |
| name     | 标识符                                          | *string*    |
| position | 关闭时的点击位置 (`left``right``cell``outside`) | *string*    |
| instance | SwipeCell 实例，用于调用实例方法                | *SwipeCell* |

## 方法

通过 ref 可以获取到 SwipeCell 实例并调用实例方法

| 方法名 | 说明             | 参数                    | 返回值 |
| ------ | ---------------- | ----------------------- | ------ |
| open   | 打开单元格侧边栏 | position:`left | right` | \-     |
| close  | 收起单元格侧边栏 | \-                      | \-     |

<script>
export default {
  methods: {
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            title: '提示',
            content: '确定删除吗？',
            confirmText: '确认',
            onConfirm: () => {
              instance.close();
            },
            cancelText: '取消'
          });
          break;
      }
    }
  }
};
</script>

<style lang="less">
.gree-example-child-swipe-cell-1 {
  .delete-button {
    height: 100%;
  }
}
</style>
