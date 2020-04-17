# 文件上传

通过点击上传文件

## 按需引入

```javascript
import { Uploader } from 'gree-ui';

Vue.component(Uploader.name, Uploader);
```

### 基础

:::demo

```html
<div class="gree-example-child gree-example-child-uploader gree-example-child-uploader-0">
  <gree-uploader :after-read="afterRead" />
</div>

<script>
  export default {
    methods: {
      afterRead(file, detail) {
        console.log(file, detail);
      }
    }
  };
</script>
```

:::

### 文件预览

:::demo

```html
<div class="gree-example-child gree-example-child-uploader gree-example-child-uploader-1">
  <gree-uploader v-model="fileList" multiple accept="*" @click-per-image="onClickImage(arguments)" @click-preview="onClickPreview(arguments)"></gree-uploader>
  <gree-image-preview :is-open="isOpen" :items="fileList" :options="options" @close="hidePhotoSwipe"></gree-image-preview>
</div>

<script>
  const IMG_WIDTH = 750;
  const IMG_HEIGHT = 750;

  export default {
    data() {
      return {
        isOpen: false,
        options: {
          index: 0
        },
        fileList: [
          {
            src:
              'https://img14.360buyimg.com/mobilecms/s180x180_jfs/t1/103756/7/7543/176723/5dfc8d1cEdff7b967/814474968dbcd57d.jpg',
            w: IMG_WIDTH,
            h: IMG_HEIGHT
          },
          {
            src:
              'https://img13.360buyimg.com/mobilecms/s180x180_jfs/t1/86788/38/7213/357800/5df98a0eE1c60e614/f2d40d64034b1579.jpg',
            w: IMG_WIDTH,
            h: IMG_HEIGHT
          }
        ]
      };
    },
    methods: {
      onClickImage(value) {
        this.fileList.map((item, index) => {
          if (item.src === undefined) {
            this.fileList[index].src = value[0][index];
            this.fileList[index].w = IMG_WIDTH;
            this.fileList[index].h = IMG_HEIGHT;
          }
        });
      },
      onClickPreview(value) {
        this.isOpen = true;
        this.$set(this.options, 'index', value[1].index);
      },
      hidePhotoSwipe() {
        this.isOpen = false;
      }
    }
  };
</script>
```

:::

### 限制上传数量

:::demo

```html
<div class="gree-example-child gree-example-child-uploader gree-example-child-uploader-2">
  <gree-uploader v-model="fileList3" multiple :max-count="2" />
</div>

<script>
  export default {
    data() {
      return {
        fileList3: [
          {
            src:
              'https://img12.360buyimg.com/mobilecms/s180x180_jfs/t1/96875/32/10396/281708/5e1d162dE5c8f694d/509523c81ba037a7.jpg'
          }
        ]
      };
    }
  };
</script>
```

:::

### 自定义上传样式

:::demo

```html
<div class="gree-example-child gree-example-child-uploader gree-example-child-uploader-3">
  <gree-uploader>
    <gree-button type="primary" icon="photo">上传文件</gree-button>
  </gree-uploader>
</div>
```

:::

### 自定义上传样式

:::demo

```html
<div class="gree-example-child gree-example-child-uploader gree-example-child-uploader-4">
  <gree-uploader v-model="fileList4" :before-read="beforeRead" />
</div>

<script>
export default {
  data() {
    return {
      fileList4: []
    };
  },
  methods: {
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        Toast.failed('请上传 jpg 格式图片');
        return false;
      }
      return true;
    }
  }
};
</script>
```

:::

### API

#### Props

| 属性               | 说明                                                           | 类型             | 默认值             |
| ------------------ | -------------------------------------------------------------- | ---------------- | ------------------ |
| value              | 双向绑定的值                                                   | Array            | `[]`               |
| multiple           | 是否开启图片多选，部分安卓机型不支持                           | Boolean          | `false`            |
| disabled           | 是否禁用文件上传                                               | Boolean          | `false`            |
| upload-text        | 上传区域文字提示                                               | String           | \-                 |
| after-read         | 文件读取完成后的回调函数                                       | Function         | \-                 |
| before-read        | 文件读取前的回调函数，返回false可终止文件读取，支持返回Promise | Function         | \-                 |
| before-delete      | 文件删除前的回调函数，返回false可终止文件读取，支持返回Promise | Function         | \-                 |
| preview-size       | 预览图和上传区域的尺寸，默认单位为px                           | [Number, String] | \-                 |
| name               | 标识符，可以在回调函数的第二项参数中获取                       | [Number, String] | \-                 |
| accept             | 接受的文件类型                                                 | String           | `image/*`          |
| max-size           | 文件大小限制，单位为byte                                       | Number           | `Number.MAX_VALUE` |
| max-count          | 文件上传数量限制                                               | Number           | `Number.MAX_VALUE` |
| deletable          | 是否展示删除按钮                                               | Boolean          | `true`             |
| preview-image      | 是否在上传完成后展示预览图                                     | Boolean          | `true`             |
| preview-full-image | 是否在点击预览图后展示全屏图片预览                             | Boolean          | `true`             |
| image-fit          | 预览图裁剪模式，可选值见 Image 组件                            | String           | `cover`            |
| result-type        | 文件读取结果类型，可选值为file text                            | String           | `dataUrl`          |

#### Events

| 参数           | 说明                   |
| -------------- | ---------------------- |
| @oversize      | 文件大小超过限制时触发 |
| @click-preview | 点击预览图时触发       |
| @delete        | 删除文件预览时触发     |

<script>
const IMG_WIDTH = 750;
const IMG_HEIGHT = 750;

export default {
  data() {
    return {
      isOpen: false,
      options: {
        index: 0
      },
      fileList: [
        {
          src:
            'https://img14.360buyimg.com/mobilecms/s180x180_jfs/t1/103756/7/7543/176723/5dfc8d1cEdff7b967/814474968dbcd57d.jpg',
          w: IMG_WIDTH,
          h: IMG_HEIGHT
        },
        {
          src:
            'https://img13.360buyimg.com/mobilecms/s180x180_jfs/t1/86788/38/7213/357800/5df98a0eE1c60e614/f2d40d64034b1579.jpg',
          w: IMG_WIDTH,
          h: IMG_HEIGHT
        }
      ],
      fileList3: [
        {
          src:
            'https://img12.360buyimg.com/mobilecms/s180x180_jfs/t1/96875/32/10396/281708/5e1d162dE5c8f694d/509523c81ba037a7.jpg'
        }
      ],
      fileList4: []
    };
  },
  methods: {
    afterRead(file, detail) {
      console.log(file, detail);
    },
    onClickImage(value) {
      this.fileList.map((item, index) => {
        if (item.src === undefined) {
          this.fileList[index].src = value[0][index];
          this.fileList[index].w = IMG_WIDTH;
          this.fileList[index].h = IMG_HEIGHT;
        }
      });
    },
    onClickPreview(value) {
      this.isOpen = true;
      this.$set(this.options, 'index', value[1].index);
    },
    hidePhotoSwipe() {
      this.isOpen = false;
    },
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        this.$toast.failed('请上传 jpg 格式图片');
        return false;
      }
      return true;
    }
  }
};
</script>
