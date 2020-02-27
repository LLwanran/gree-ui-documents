# 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。

- 图文信息内容较多的列表/卡片中。

- 只在第一次加载数据的时候使用。

- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## 按需引入

```javascript
import { Skeleton } from 'gree-ui';

Vue.component(Skeleton.name, Skeleton);
```

### 基础

:::demo

```html
<div
  class="gree-example-child gree-example-child-skeleton gree-example-child-skeleton-0"
>
  <gree-skeleton title :row="3" />
</div>
```

:::

### 显示头像

:::demo

```html
<div
  class="gree-example-child gree-example-child-skeleton gree-example-child-skeleton-1"
>
  <gree-skeleton title avatar :row="3" />
</div>
```

:::

### 显示子组件

:::demo

```html
<div
  class="gree-example-child gree-example-child-skeleton gree-example-child-skeleton-1"
>
  <gree-list>
    <gree-list-item title="加载正文">
      <gree-switch v-model="show" slot="after"></gree-switch>
    </gree-list-item>
  </gree-list>
  <gree-skeleton title avatar :row="3" :loading="!show">
    <gree-list media-list contacts-list>
      <gree-list-item
        link
        title="范特西"
        after="主打歌：爱在西元前"
        subtitle="发行日期： 2001 年 9 月 14 日"
        text="《范特西》是台湾歌手周杰伦第二张录音室专辑，由台湾博德曼音乐于2001年9月14日发行。专辑名《范特西》来自英文“Fantasy”音译。"
        media-item
      >
        <img slot="media" src="../../assets/images/fantasy.jpg" width="80" />
      </gree-list-item>
      <gree-list-item
        link
        title="叶惠美"
        after="主打歌：以父之名"
        subtitle="发行日期： 2003 年 7 月 29 日"
        text="《叶惠美》是台湾歌手周杰伦的第四张录音室专辑，由台湾新力音乐于2003年7月31日发行。"
        media-item
      >
        <img slot="media" src="../../assets/images/ukoo.jpg" width="80" />
      </gree-list-item>
      <gree-list-item
        link
        title="七里香"
        after="主打歌：我的地盘"
        subtitle="发行日期： 2004 年 8 月 3 日"
        text="《七里香》是台湾歌手周杰伦发行第五张国语专辑。由台湾新力音乐于2004年8月3日发行。"
        media-item
      >
        <img
          slot="media"
          src="../../assets/images/daphne-odera.jpg"
          width="80"
        />
      </gree-list-item>
    </gree-list>
  </gree-skeleton>
</div>
```

:::

### API

#### Props

| 属性         | 说明                                        | 类型                    | 默认值  |
| ------------ | ------------------------------------------- | ----------------------- | ------- |
| title        | 是否显示标题占位图                          | Boolean                 | `false` |
| avatar       | 是否显示头像占位图                          | Boolean                 | `false` |
| row          | 段落占位图行数                              | Number                  | `3`     |
| loading      | 是否显示占位图，传 false 时会展示子组件内容 | Boolean                 | `true`  |
| animate      | 是否开启动画                                | Boolean                 | `true`  |
| avatar-size  | 头像占位图大小                              | String                  | `64px`  |
| avatar-shape | 头像占位图形状，可选值为 `square`           | String                  | `round` |
| title-width  | 标题占位图宽度                              | [Number, String]        | `40%`   |
| row-width    | 段落占位图宽度，可传数组来设置每一行的宽度  | [Number, String, Array] | `100%`  |

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
