# 图片预览

图片放大预览

## 按需引入

```javascript
import { ImagePreview } from 'gree-ui';

Vue.component(ImagePreview.name, ImagePreview);
```

### 基础

:::demo

```html
<div
  class="gree-example-child gree-example-child-image-preview gree-example-child-image-preview-0"
>
  <gree-row>
    <gree-col v-for="(item, index) in items" :key="index">
      <gree-image
        width="75"
        height="75"
        :src="item.src"
        @click="showPhotoSwipe(index)"
      />
    </gree-col>
  </gree-row>
  <gree-image-preview
    :is-open="isOpen"
    :items="items"
    :options="options"
    @close="hidePhotoSwipe"
  />
</div>

<script>
  export default {
    data() {
      const IMG_WIDTH = 750;
      const IMG_HEIGHT = 750;
      return {
        isOpen: false,
        options: {
          index: 0
        },
        items: [
          {
            src:
              'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/92097/26/9001/90016/5e09c2a6E6b432149/bb3cc4b76f94594e.jpg',
            w: IMG_WIDTH,
            h: IMG_HEIGHT,
            title:
              '格力(GREE) 正1.5匹 变频 俊越 E享模式 分体式 壁挂式卧室冷暖空调挂机(清爽白) KFR-35GW/(35559)FNhAb-A3'
          },
          {
            src:
              'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/110655/10/1133/100534/5dfb16e4Ef5ac4e94/d078697cc5105ab9.jpg',
            w: IMG_WIDTH,
            h: IMG_HEIGHT,
            title:
              '格力（GREE）加湿器红点设计奖 大容量 智能恒湿 静音加湿 上加水 空气加湿办公室家用卧室带香薰盒 SC-40X65'
          },
          {
            src:
              'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/86788/38/7213/357800/5df98a0eE1c60e614/f2d40d64034b1579.jpg',
            w: IMG_WIDTH,
            h: IMG_HEIGHT,
            title:
              '格力（GREE）1.5匹定频冷暖一拖一风管机 超薄静音 标配液晶线控 家用中央空调 FGR3.5/C1Na'
          },
          {
            src:
              'https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/4058/40/5241/486093/5b9f6de2Ec3d15804/a2d8635eecf2aff5.jpg',
            w: IMG_WIDTH,
            h: IMG_HEIGHT,
            title:
              '格力 （GREE）取暖器/电暖器/电暖气家用电热膜  静音速热白色电热膜 NDYN-X6021'
          }
        ]
      };
    },
    methods: {
      showPhotoSwipe(index) {
        document.querySelector('.gree-header').style.visibility = 'hidden';
        this.isOpen = true;
        this.$set(this.options, 'index', index);
      },
      hidePhotoSwipe() {
        document.querySelector('.gree-header').style.visibility = 'visible';
        this.isOpen = false;
      }
    }
  };
</script>

<style lang="scss">
  .gree-example-child-image-preview-0 {
    .row {
      text-align: center;
    }
  }
</style>
```

:::

更多内容请参照：[PhotoSwipe 官方文档](https://photoswipe.com/documentation/getting-started.html)

<script>
export default {
  data() {
    const IMG_WIDTH = 750;
    const IMG_HEIGHT = 750;
    return {
      isOpen: false,
      options: {
        index: 0
      },
      items: [
        {
          src:
            'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/92097/26/9001/90016/5e09c2a6E6b432149/bb3cc4b76f94594e.jpg',
          w: IMG_WIDTH,
          h: IMG_HEIGHT,
          title:
            '格力(GREE) 正1.5匹 变频 俊越 E享模式 分体式 壁挂式卧室冷暖空调挂机(清爽白) KFR-35GW/(35559)FNhAb-A3'
        },
        {
          src:
            'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/110655/10/1133/100534/5dfb16e4Ef5ac4e94/d078697cc5105ab9.jpg',
          w: IMG_WIDTH,
          h: IMG_HEIGHT,
          title:
            '格力（GREE）加湿器红点设计奖 大容量 智能恒湿 静音加湿 上加水 空气加湿办公室家用卧室带香薰盒 SC-40X65'
        },
        {
          src:
            'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/86788/38/7213/357800/5df98a0eE1c60e614/f2d40d64034b1579.jpg',
          w: IMG_WIDTH,
          h: IMG_HEIGHT,
          title:
            '格力（GREE）1.5匹定频冷暖一拖一风管机 超薄静音 标配液晶线控 家用中央空调 FGR3.5/C1Na'
        },
        {
          src:
            'https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/4058/40/5241/486093/5b9f6de2Ec3d15804/a2d8635eecf2aff5.jpg',
          w: IMG_WIDTH,
          h: IMG_HEIGHT,
          title:
            '格力 （GREE）取暖器/电暖器/电暖气家用电热膜  静音速热白色电热膜 NDYN-X6021'
        }
      ]
    };
  },
  methods: {
    showPhotoSwipe(index) {
      this.isOpen = true;
      this.$set(this.options, 'index', index);
    },
    hidePhotoSwipe() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="less">
.gree-example-child-image-preview-0 {
  .pswp {
    z-index: 15000;
  }
  .row {
    text-align: center;
  }
}
</style>
