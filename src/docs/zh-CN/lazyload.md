# 图片懒加载

缓冲加载图片，减少服务器的压力，避免不必要的资源下载。网站性能优化，提高用户体验。

## 引入

`Lazyload`是`Vue`指令，使用前需要对指令进行注册

```js
import Vue from 'vue';
import { Lazyload } from 'gree-ui';

// options 为可选参数，无则不传
Vue.use(Lazyload, options);
```

### 基础

#### 将`v-lazy`指令的值设置为你需要懒加载的图片

:::demo

```html
<div
  class="gree-example-child gree-example-child-lazyload gree-example-child-lazyload-0"
>
  <img v-for="img in imageList" v-lazy="img" />
</div>

<script>
  export default {
    data() {
      return {
        imageList: [
          'https://i.loli.net/2020/01/04/fET9ISFnUxjtCyu.jpg',
          'https://i.loli.net/2020/01/04/OPBK1uASsUMynWC.jpg'
        ]
      };
    }
  };
</script>

<style lang="scss">
  .gree-example-child-lazyload {
    img,
    div[lazy] {
      box-sizing: border-box;
      width: 100%;
      height: 500px;
      margin-bottom: 23px;
      padding: 23px;
      background-color: white;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 100% 100%;
      box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2);
    }
  }
</style>
```

:::

### 背景图懒加载

#### 和图片懒加载不同，背景图懒加载需要使用`v-lazy:background-image`，值设置为背景图片的地址，需要注意的是必须声明容器高度。

:::demo

```html
<div
  class="gree-example-child gree-example-child-lazyload gree-example-child-lazyload-1"
>
  <div v-for="img in backgroundImageList" v-lazy:background-image="img" />
</div>

<script>
  export default {
    data() {
      return {
        backgroundImageList: [
          'https://i.loli.net/2020/01/04/6vhlFgA9qPm7YZ5.jpg',
          'https://i.loli.net/2020/01/04/AIgsRBqbNiejpfQ.jpg'
        ]
      };
    }
  };
</script>
```

:::

### 懒加载模块

#### 将需要懒加载的组件放在`lazy-component`标签中，即可实现组件懒加载。

```js
// 注册时设置`lazyComponent`选项
Vue.use(Lazyload, {
  lazyComponent: true
});
```

:::demo

```html
<div
  class="gree-example-child gree-example-child-lazyload gree-example-child-lazyload-2"
>
  <lazy-component v-for="(item, index) in componentImageList" :key="index">
    <img :src="item" width="100%" height="400" />
  </lazy-component>
</div>

<script>
  export default {
    data() {
      return {
        componentImageList: [
          'https://i.loli.net/2020/01/04/HzRIb6lu7LAy3WP.jpg'
        ]
      };
    }
  };
</script>
```

:::

## API

### Props

| 属性          | 说明             | 类型     | 默认值     |
| ------------- | ---------------- | -------- | ---------- |
| loading       | 加载时的图片     | String   | \-         |
| error         | 错误时的图片     | String   | \-         |
| preload       | 预加载高度的比例 | String   | \-         |
| attempt       | 尝试次数         | Number   | `3`        |
| listenEvents  | 监听的事件       | String[] | `scroll`等 |
| adapter       | 适配器           | Object   | \-         |
| filter        | 图片 URL 过滤    | Object   | \-         |
| lazyComponent | 是否能懒加载模块 | Boolean  | `false`    |

更多内容请参照：[vue-lazyload 官方文档](https://github.com/hilongjw/vue-lazyload)

<script>
  export default {
    data() {
      return {
        imageList: [
          'https://i.loli.net/2020/01/04/fET9ISFnUxjtCyu.jpg',
          'https://i.loli.net/2020/01/04/OPBK1uASsUMynWC.jpg'
        ],
        backgroundImageList: [
          'https://i.loli.net/2020/01/04/6vhlFgA9qPm7YZ5.jpg',
          'https://i.loli.net/2020/01/04/AIgsRBqbNiejpfQ.jpg'
        ],
        componentImageList: ['https://i.loli.net/2020/01/04/HzRIb6lu7LAy3WP.jpg']
      };
    }
  };
</script>

<style lang="less">
.gree-example-child-lazyload {
  img,
  div[lazy] {
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    margin-bottom: 12px;
    padding: 12px;
    background-color: white;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
}
</style>
