# 图片

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示

## 按需引入

```javascript
import { Image } from 'gree-ui';

Vue.component(Image.name, Image);
```

### 基础

#### 基础用法与原生`img`标签一致，可以设置`src`、`width`、`height`、`alt`等原生属性

:::demo

```html
<div
  class="gree-example-child gree-example-child-image gree-example-child-image-0"
>
  <gree-image
    width="100"
    height="100"
    src="https://i.loli.net/2019/12/30/LZCGvt61MiAOhXN.jpg"
  />
</div>
```

:::

### 填充模式

#### 通过`fit`属性可以设置图片填充模式，可选值见下方表格

:::demo

```html
<div
  class="gree-example-child gree-example-child-image gree-example-child-image-1"
>
  <gree-row>
    <gree-col width="33" v-for="fit in fits" :key="fit">
      <gree-image :fit="fit" width="7vw" height="7vw" :src="image"></gree-image>
      <div class="text">{{ fit }}</div>
    </gree-col>
  </gree-row>
</div>

<script>
  export default {
    data() {
      return {
        image: 'https://i.loli.net/2019/12/30/LZCGvt61MiAOhXN.jpg',
        fits: ['contain', 'cover', 'fill', 'none', 'scale-down']
      };
    }
  };
</script>

<style lang="scss">
  .gree-example-child-image-1 {
    .row {
      .col-33 {
        text-align: center;
        margin-bottom: 58px;

        .text {
          margin-top: 14px;
          color: #646566;
          font-size: 40px;
          text-align: center;
        }
      }
    }
  }
</style>
```

:::

### 圆形图片

#### 通过`round`属性可以设置图片变圆，注意当图片宽高不相等且`fit`为`contain`或`scale-down`时，将无法填充一个完整的圆形。

:::demo

```html
<div
  class="gree-example-child gree-example-child-image gree-example-child-image-2"
>
  <gree-row>
    <gree-col width="33" v-for="fit in fits" :key="fit">
      <gree-image
        round
        :fit="fit"
        width="7vw"
        height="7vw"
        :src="image"
      ></gree-image>
      <div class="text">{{ fit }}</div>
    </gree-col>
  </gree-row>
</div>

<script>
  export default {
    data() {
      return {
        image: 'https://i.loli.net/2019/12/30/LZCGvt61MiAOhXN.jpg',
        fits: ['contain', 'cover', 'fill', 'none', 'scale-down']
      };
    }
  };
</script>

<style lang="scss">
  .gree-example-child-image-2 {
    .row {
      .col-33 {
        text-align: center;
        margin-bottom: 58px;

        .text {
          margin-top: 14px;
          color: #646566;
          font-size: 40px;
          text-align: center;
        }
      }
    }
  }
</style>
```

:::

### 图片懒加载 && 加载中提示

#### 设置`lazy-load`属性来开启图片懒加载，需要搭配`Lazyload`组件使用

#### `Image`组件提供了默认的加载中提示，支持通过`loading`插槽自定义内容

:::demo

```html
<div
  class="gree-example-child gree-example-child-image gree-example-child-image-3"
>
  <gree-row>
    <gree-col width="33">
      <gree-image width="7vw" height="7vw"></gree-image>
      <div class="text">默认提示</div>
    </gree-col>
    <gree-col width="33">
      <gree-image width="7vw" height="7vw">
        <template v-slot:loading>
          <gree-activity-indicator type="spinner" :size="30" />
        </template>
      </gree-image>
      <div class="text">自定义提示</div>
    </gree-col>
  </gree-row>
</div>

<style lang="scss">
  .gree-example-child-image-3 {
    .row {
      .col-33 {
        text-align: center;
        margin-bottom: 58px;

        .text {
          margin-top: 14px;
          color: #646566;
          font-size: 40px;
          text-align: center;
        }
      }
    }
  }
</style>
```

:::

### 加载失败提示

#### `Image`组件提供了默认的加载失败提示，支持通过`error`插槽自定义内容

:::demo

```html
<div
  class="gree-example-child gree-example-child-image gree-example-child-image-4"
>
  <gree-row>
    <gree-col width="33">
      <gree-image width="7vw" height="7vw" src="x"></gree-image>
      <div class="text">默认提示</div>
    </gree-col>
    <gree-col width="33">
      <gree-image width="7vw" height="7vw" src="x">
        <template v-slot:error>加载失败</template>
      </gree-image>
      <div class="text">自定义提示</div>
    </gree-col>
  </gree-row>
</div>

<style lang="scss">
  .gree-example-child-image-4 {
    .row {
      .col-33 {
        text-align: center;
        margin-bottom: 58px;

        .text {
          margin-top: 14px;
          color: #646566;
          font-size: 40px;
          text-align: center;
        }
      }
    }
  }
</style>
```

:::

## API

### Props

| 属性         | 说明                                               | 类型             | 默认值    |
| ------------ | -------------------------------------------------- | ---------------- | --------- |
| src          | 图片链接                                           | String           | \-        |
| fit          | 图片填充模式                                       | String           | `fill`    |
| alt          | 替代文本                                           | String           | \-        |
| width        | 宽度，默认单位为`px`                               | [String, Number] | \-        |
| height       | 高度，默认单位为`px`                               | [String, Number] | \-        |
| radius       | 圆角大小，默认单位为`px`                           | [String, Number] | `0`       |
| round        | 是否显示为圆形                                     | Boolean          | `false`   |
| lazy-load    | 是否开启图片懒加载，须配合`Lazyload`组件使用       | Boolean          | `false`   |
| show-error   | 是否展示图片加载失败提示                           | Boolean          | `true`    |
| show-loading | 是否展示图片加载中提示                             | Boolean          | `true`    |
| error-icon   | 失败时提示的图标名称或图片链接，可选值见`Icon`组件 | String           | `warning` |
| loading-icon | 加载时提示的图标名称或图片链接，可选值见`Icon`组件 | String           | `photo`   |

### 图片填充模式

| 名称       | 含义                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                               |
| none       | 保持图片原有尺寸                                       |
| scale-down | 取`none`或`contain`中较小的一个                        |

### Events

| 事件名 | 说明               | 回调参数     |
| ------ | ------------------ | ------------ |
| click  | 点击图片时触发     | event: Event |
| load   | 图片加载完毕时触发 | \-           |
| error  | 图片加载失败时触发 | \-           |

### Slots

| 名称    | 说明                       |
| ------- | -------------------------- |
| loading | 自定义加载中的提示内容     |
| error   | 自定义加载失败时的提示内容 |

<script>
  export default {
    data() {
      return {
        image: 'https://i.loli.net/2019/12/30/LZCGvt61MiAOhXN.jpg',
        fits: ['contain', 'cover', 'fill', 'none', 'scale-down']
      };
    }
  };
</script>

<style lang="less">
.gree-example-child-image-1,
.gree-example-child-image-2,
.gree-example-child-image-3,
.gree-example-child-image-4 {
  .row {
    .col-33 {
      text-align: center;
      margin-bottom: 29px;

      .text {
        margin-top: 7px;
        color: #646566;
        font-size: 20px;
        text-align: center;
      }
    }
  }
}
</style>
