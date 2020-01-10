# 轻提示

弹出式消息提示

## 按需引入

```javascript
import { Toast } from 'gree-ui';

Toast.succeed('操作成功');

this.$toast.info('提示'); // 全量引入

Vue.component(Toast.component.name, Toast.component); // 组件引入
```

### 基础

:::demo

```html
<div
  class="gree-example-child gree-example-child-toast gree-example-child-toast-0"
>
  <gree-list>
    <gree-list-item
      link
      title="纯文字"
      @click.native="showTextToast()"
    ></gree-list-item>
    <gree-list-item
      link
      title="长文字"
      @click.native="showLongTextToast()"
    ></gree-list-item>
    <gree-list-item
      link
      title="成功"
      @click.native="showTextToastSuccess()"
    ></gree-list-item>
    <gree-list-item
      link
      title="失败"
      @click.native="showTextToastFail()"
    ></gree-list-item>
    <gree-list-item
      link
      title="顶部展示"
      @click.native="showTextToastTop()"
    ></gree-list-item>
    <gree-list-item
      link
      title="底部展示"
      @click.native="showTextToastBottom()"
    ></gree-list-item>
    <gree-list-item
      link
      title="Loading"
      @click.native="showLoading()"
    ></gree-list-item>
    <gree-list-item
      link
      title="自定义"
      @click.native="showCustom()"
    ></gree-list-item>
  </gree-list>
  <gree-toast ref="toast">
    <gree-activity-indicator
      type="bars"
      :size="20"
      :text-size="16"
      color="#07c160"
      text-color="white"
      >加载中...</gree-activity-indicator
    >
  </gree-toast>
</div>

<script>
  export default {
    methods: {
      showTextToast() {
        Toast.info('白日依山尽，黄河入海流');
      },
      showLongTextToast() {
        Toast.info('这是一条长文字提示，超过一定字数则溢出文本显示省略号');
      },
      showTextToastSuccess() {
        Toast.succeed('发送成功');
      },
      showTextToastFail() {
        Toast.failed('发送失败');
      },
      showTextToastTop() {
        Toast({
          content: '在顶部出现',
          position: 'top'
        });
      },
      showTextToastBottom() {
        Toast({
          content: '在底部出现',
          position: 'bottom'
        });
      },
      showLoading() {
        Toast.loading('载入中');
        setTimeout(() => {
          Toast.hide();
        }, 3000);
      },
      showCustom() {
        this.$refs.toast.show();
        this.isShow = true;
        setTimeout(() => {
          this.$refs.toast.hide();
          this.isShow = false;
        }, 3000);
      }
    }
  };
</script>
```

:::

### 垂直布局

:::demo

```html
<div
  class="gree-example-child gree-example-child-toast gree-example-child-toast-1"
>
  <gree-list>
    <gree-list-item
      link
      title="长文字"
      @click.native="showLongTextToast2()"
    ></gree-list-item>
    <gree-list-item
      link
      title="成功"
      @click.native="showTextToastSuccess2()"
    ></gree-list-item>
    <gree-list-item
      link
      title="失败"
      @click.native="showTextToastFail2()"
    ></gree-list-item>
    <gree-list-item
      link
      title="Loading"
      @click.native="showLoading2()"
    ></gree-list-item>
  </gree-list>
</div>

<script>
  export default {
    methods: {
      showLongTextToast2() {
        Toast.info(
          '这是一条长文字提示，超过一定字数则溢出文本显示省略号',
          1500,
          true,
          true
        );
      },
      showTextToastSuccess2() {
        Toast.succeed('发送成功', 1500, true, true);
      },
      showTextToastFail2() {
        Toast.failed('发送失败', 1500, true, true);
      },
      showLoading2() {
        Toast.loading('载入中', 0, true, true);
        setTimeout(() => {
          Toast.hide();
        }, 3000);
      }
    }
  };
</script>
```

:::

## API

### Static Methods

#### Toast({content, icon, iconSvg, duration, position, hasMask, isVertical, parentNode})

自定义提示

| 属性        | 说明                                      | 类型        | 默认值          | 备注                |
| ----------- | ----------------------------------------- | ----------- | --------------- | ------------------- |
| icon        | Icon 组件图标名称                         | String      | \-              | \-                  |
| content     | 提示内容文本                              | String      | \-              | \-                  |
| duration    | 显示多少毫秒后自动消失, 若为`0`则一直显示 | Number      | `1500`          | \-                  |
| position    | 展示位置                                  | String      | `center`        | `top|center|bottom` |
| has-mask    | 是否显示透明遮罩, 以此防止用户点击        | Boolean     | `true`          | \-                  |
| is-vertical | 是否垂直布局                              | Boolean     | `false`         | \-                  |
| parentNode  | 组件挂载节点                              | HTMLElement | `document.body` | \-                  |

#### `Toast.info(content, duration, hasMask, isVertical, parentNode)`

纯文本提示

| 属性        | 说明                                      | 类型        | 默认值          |
| ----------- | ----------------------------------------- | ----------- | --------------- |
| content     | 提示内容文本                              | String      | \-              |
| duration    | 显示多少毫秒后自动消失, 若为`0`则一直显示 | Number      | `1500`          |
| has-mask    | 是否显示透明遮罩, 以此防止用户点击        | Boolean     | `true`          |
| is-vertical | 是否垂直布局                              | Boolean     | `false`         |
| parentNode  | 组件挂载节点                              | HTMLElement | `document.body` |

#### Toast.succeed(content, duration, hasMask, isVertical, parentNode)

成功提示

| 属性        | 说明                                      | 类型        | 默认值          |
| ----------- | ----------------------------------------- | ----------- | --------------- |
| content     | 提示内容文本                              | String      | \-              |
| duration    | 显示多少毫秒后自动消失, 若为`0`则一直显示 | Number      | `1500`          |
| hasMask     | 是否显示透明遮罩, 以此防止用户点击        | Boolean     | `true`          |
| is-vertical | 是否垂直布局                              | Boolean     | `false`         |
| parentNode  | 组件挂载节点                              | HTMLElement | `document.body` |

#### Toast.failed(content, duration, hasMask, isVertical, parentNode)

失败提示

| 属性        | 说明                                      | 类型        | 默认值          |
| ----------- | ----------------------------------------- | ----------- | --------------- |
| content     | 提示内容文本                              | String      | \-              |
| duration    | 显示多少毫秒后自动消失, 若为`0`则一直显示 | Number      | `1500`          |
| hasMask     | 是否显示透明遮罩, 以此防止用户点击        | Boolean     | `true`          |
| is-vertical | 是否垂直布局                              | Boolean     | `false`         |
| parentNode  | 组件挂载节点                              | HTMLElement | `document.body` |

#### Toast.loading(content, duration, hasMask, isVertical, parentNode)

载入提示

| 属性        | 说明                                      | 类型           | 默认值          |
| ----------- | ----------------------------------------- | -------------- | --------------- |
| content     | 提示内容文本                              | String, Number | \-              |
| duration    | 显示多少毫秒后自动消失, 若为`0`则一直显示 | Number         | `0`             |
| hasMask     | 是否显示透明遮罩, 以此防止用户点击        | Boolean        | `true`          |
| is-vertical | 是否垂直布局                              | Boolean        | `false`         |
| parentNode  | 组件挂载节点                              | HTMLElement    | `document.body` |

#### Toast.hide()

隐藏提示

<script>
import { Toast } from 'gree-ui';

export default {
  components: {
    [Toast.component.name]: Toast.component
  },
  methods: {
    showTextToast() {
      this.$toast.info('白日依山尽，黄河入海流');
    },
    showLongTextToast() {
      this.$toast.info('这是一条长文字提示，超过一定字数则溢出文本显示省略号');
    },
    showTextToastSuccess() {
      this.$toast.succeed('发送成功');
    },
    showTextToastFail() {
      this.$toast.failed('发送失败');
    },
    showTextToastTop() {
      this.$toast({
        content: '在顶部出现',
        position: 'top'
      });
    },
    showTextToastBottom() {
      this.$toast({
        content: '在底部出现',
        position: 'bottom'
      });
    },
    showLoading() {
      this.$toast.loading('载入中');
      setTimeout(() => {
        this.$toast.hide();
      }, 3000);
    },
    showCustom() {
      this.$refs.toast.show();
      this.isShow = true;
      setTimeout(() => {
        this.$refs.toast.hide();
        this.isShow = false;
      }, 3000);
    },
    showLongTextToast2() {
      Toast.info(
        '这是一条长文字提示，超过一定字数则溢出文本显示省略号',
        1500,
        true,
        true
      );
    },
    showTextToastSuccess2() {
      Toast.succeed('发送成功', 1500, true, true);
    },
    showTextToastFail2() {
      Toast.failed('发送失败', 1500, true, true);
    },
    showLoading2() {
      Toast.loading('载入中', 0, true, true);
      setTimeout(() => {
        Toast.hide();
      }, 3000);
    }
  }
};
</script>
