# 拖动验证

滑动解锁组件，一般目的是为了减少一些恶意注册、频繁登录等

## 按需引入

```javascript
import { DragVerify } from 'gree-ui';

Vue.component(DragVerify.name, DragVerify);
```

### 基本

:::demo

```html
<gree-block>
  <gree-drag-verify :width="300" :height="50"></gree-drag-verify>
</gree-block>
```

:::

### 仿阿里滑动验证

:::demo

```html
<gree-block>
  <gree-drag-verify
    class="custom-drag-verify"
    :class="{'gree-handler-success': dragVerifySuccess}"
    :width="300"
    :height="34"
    text="请按住滑块，拖动到最右边"
    text-size="13px"
    success-text="验证通过"
    :circle="false"
    handler-icon="arrow-right"
    success-icon="success"
    background="#e8e8e8"
    progress-bar-bg="#7ac23b"
    @passcallback="dragVerifyCallBack"
  ></gree-drag-verify>
</gree-block>

<script>
  export default {
    data() {
      return {
        dragVerifySuccess: false
      };
    },
    methods: {
      dragVerifyCallBack() {
        this.dragVerifySuccess = true;
      }
    }
  };
</script>
```

:::

## Props

| 属性            | 说明                              | 类型    | 默认值     |
| --------------- | --------------------------------- | ------- | ---------- |
| width           | 宽度                              | Number  | `200`      |
| height          | 高度                              | Number  | `60`       |
| text            | 文本                              | String  | `向右滑动` |
| success-text    | 成功状态文本                      | String  | `成功`     |
| background      | 背景色                            | String  | `#ccc`     |
| progress-bar-bg | 进度背景色                        | String  | `#ffff99`  |
| completed-bg    | 当按钮拖到右侧完成时背景色        | String  | `#66cc66`  |
| circle          | 是否展示为圆形                    | Boolean | `true`     |
| handler-icon    | handler Icon 图标                 | String  | \-         |
| success-icon    | 当按钮拖到右侧完成时 handler 图标 | String  | \-         |
| handler-bg      | handler 背景色                    | String  | `#fff`     |
| text-size       | 提示信息字体大小                  | String  | `20px`     |

## Events

### @passcallback

当按钮拖到右侧完成时触发回调

<script>
export default {
  data() {
    return {
      dragVerifySuccess: false
    };
  },
  methods: {
    dragVerifyCallBack() {
      this.dragVerifySuccess = true;
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .drag-verify {
  margin: 0 auto;
  &.custom-drag-verify {
    &.gree-handler-success {
      .gree-text {
        -webkit-text-fill-color: white;
      }
    }
    .gree-text {
      background: -webkit-gradient(linear, left top, right top, color-stop(0, #4d4d4d), color-stop(0.4, #4d4d4d), color-stop(0.5, #fff), color-stop(0.6, #4d4d4d), color-stop(1, #4d4d4d));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: slidetounlock 3s infinite;
    }
    .gree-handler {
      position: absolute;
      left: 0;
      width: 40px !important;
      height: 34px !important;
      color: #9c9c9c;
      line-height: 34px;
      text-align: center;
      border: 1px solid #ccc;
      color: #737383;
      background-image: none;
      &.gree-handler-ok-bg {
        i {
          color: #76c61d;
        }
      }
    }
  }
}
@keyframes slidetounlock {
  0% {
    background-position: -131px 0;
  }
  100% {
    background-position: 131px 0;
  }
}
</style>
