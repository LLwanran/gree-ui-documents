# 轮播

走马灯，用于一组图片或卡片轮播

## 按需引入

```javascript
import { Swiper, SwiperItem } from 'gree-ui';

Vue.component(Swiper.name, Swiper);
Vue.component(SwiperItem.name, SwiperItem);
```

### 横向轮播

:::demo

```html
<div
  class="gree-example-child gree-example-child-swiper gree-example-child-swiper-0"
>
  <gree-swiper ref="swiper1" :use-native-driver="false">
    <gree-swiper-item :key="$index" v-for="(item, $index) in swiper">
      <div class="banner-item" :style="{'background': `${item.color}`}">
        {{ item.text }}
      </div>
    </gree-swiper-item>
  </gree-swiper>
</div>

<script>
  import swiper from '../../configs/swiper';

  export default {
    data() {
      return {
        swiper
      };
    }
  };
</script>

<style lang="scss">
  .gree-example-child-swiper-0 {
    height: 360px;

    .banner-item {
      display: flex;
      width: 100%;
      height: 100%;
      line-height: 360px;
      text-align: center;
      font-size: 40px;
      color: #fff;
      box-align: center;
      align-items: center;
      box-pack: center;
      justify-content: center;
      text-decoration-line: none;
    }
  }
</style>
```

:::

### 纵向轮播

:::demo

```html
<div
  class="gree-example-child gree-example-child-swiper gree-example-child-swiper-1"
>
  <gree-swiper
    ref="swiper2"
    transition="slideY"
    :default-index="2"
    :autoplay="0"
    :is-loop="true"
    :is-prevent="false"
    @after-change="afterChange"
  >
    <gree-swiper-item :key="$index" v-for="(item, $index) in swiper">
      <div class="banner-item" :style="{'background': `${item.color}`}">
        {{ item.text }}
      </div>
    </gree-swiper-item>
  </gree-swiper>
</div>

<script>
  import swiper from '../../configs/swiper';

  export default {
    data() {
      return {
        swiper
      };
    },
    methods: {
      afterChange() {
        const index = this.$refs.swiper2.getIndex();
        Toast({
          content: `当前 Swiper 索引： ${index}`,
          position: 'bottom',
          hasMask: false
        });
      }
    }
  };
</script>
```

:::

### 渐隐轮播

:::demo

```html
<div
  class="gree-example-child gree-example-child-swiper gree-example-child-swiper-2"
>
  <gree-swiper ref="swiper3" transition="fade">
    <gree-swiper-item :key="$index" v-for="(item, $index) in swiper">
      <div class="banner-item" :style="{'background': `${item.color}`}">
        {{ item.text }}
      </div>
    </gree-swiper-item>
  </gree-swiper>
</div>

<script>
  export default {
    data() {
      return {
        swiper
      };
    }
  };
</script>
```

:::

## API

### Props

| 属性                | 说明                                    | 类型    | 默认值  | 可选值/备注                                    |
| ------------------- | --------------------------------------- | ------- | ------- | ---------------------------------------------- |
| autoplay            | 自动切换间隔时长(毫秒), 禁用可设置为`0` | Number  | `3000`  | `0`,`[500, +Int.Max)`                          |
| transition          | 面板切换动画效果                        | String  | `slide` | `slide`,`slideY`,`fade`                        |
| transition-duration | 面板切换动画时长                        | Number  | `250`   | 单位`ms`                                       |
| default-index       | 第一屏面板索引值                        | Number  | `0`     | `[0, length - 1]`                              |
| has-dots            | 控制面板指示点                          | Boolean | `true`  | \-                                             |
| is-prevent          | 阻止默认的事件，如页面滚动事件          | Boolean | `true`  | 为`swiper-item`绑定点击事件需将其设置为`false` |
| is-loop             | 循环播放                                | Boolean | `true`  | \-                                             |
| dragable            | 禁用触摸滑动                            | Boolean | `true`  | \-                                             |
| use-native-driver   | 开启 3D 加速                            | Boolean | `true`  | \-                                             |

### Methods

#### play(autoplay)

打开自动切换

| 参数     | 说明                   | 类型   | 默认值 | 可选值            |
| -------- | ---------------------- | ------ | ------ | ----------------- |
| autoplay | 自动切换间隔时长(毫秒) | Number | `3000` | `[500, +Int.Max)` |

```js
vm.$refs.swiper.play(5000);
```

#### stop()

停止自动切换

```js
vm.$refs.swiper.stop();
```

#### prev()

前一个 item

```js
vm.$refs.swiper.prev();
```

#### next()

后一个 item

```js
vm.$refs.swiper.next();
```

#### goto(index)

切换到某一个 index

| 参数  | 说明       | 类型   | 默认值 | 可选值            |
| ----- | ---------- | ------ | ------ | ----------------- |
| index | 面板索引值 | Number | `0`    | `[0, length - 1]` |

```js
vm.$refs.swiper.goto(2);
```

##### getIndex()

获取当前显示的 index

| 参数  | 说明             | 类型   |
| ----- | ---------------- | ------ |
| index | 当前显示的 index | Number |

```js
var index = vm.$refs.swiper.getIndex();
```

### Events

#### @beforeChange(from, to)

轮播器将要切换前的事件

| 参数 | 说明                     | 类型   |
| ---- | ------------------------ | ------ |
| from | 轮播器当前展示的索引值   | Number |
| to   | 轮播器下一屏展示的索引值 | Number |

#### @afterChange(from, to)

轮播器切换完成时的事件

| 参数 | 说明                     | 类型   |
| ---- | ------------------------ | ------ |
| from | 轮播器当前展示的索引值   | Number |
| to   | 轮播器下一屏展示的索引值 | Number |

<script>
  import { Toast } from 'gree-ui';
  import swiper from '../../configs/swiper';

  export default {
    data() {
      return {
        swiper
      };
    },
    methods: {
      afterChange() {
        const index = this.$refs.swiper2.getIndex();
        Toast({
          content: `当前 Swiper 索引： ${index}`,
          position: 'bottom',
          hasMask: false
        });
      }
    }
  };
</script>

<style lang="less">
.gree-example-child-swiper {
  height: 180px;

  .banner-item {
    display: flex;
    width: 100%;
    height: 100%;
    line-height: 180px;
    text-align: center;
    font-size: 40px;
    color: #fff;
    box-align: center;
    align-items: center;
    box-pack: center;
    justify-content: center;
    text-decoration-line: none;
  }
}
</style>
