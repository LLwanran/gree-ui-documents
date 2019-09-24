# 轻提示

弹出式消息提示

## 按需引入

```javascript
import { Toast } from 'gree-ui';

Toast.succeed('操作成功');

this.$toast.info('提示'); // 全量引入

Vue.component(Toast.name, Toast); // 组件引入
```

### 基本

:::demo

```html
<gree-list>
  <gree-list-item
    link
    title="纯文字"
    @click.native="showTextToast()"
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
</gree-list>
<gree-list>
  <gree-list-item
    link
    title="Loading"
    @click.native="showLoading()"
  ></gree-list-item>
</gree-list>

<script>
  export default {
    methods: {
      showTextToast() {
        Toast.info('白日依山尽，黄河入海流');
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
      }
    }
  };
</script>
```

:::

## Props

| 属性       | 说明                                      | 类型        | 默认值          | 备注                |
| ---------- | ----------------------------------------- | ----------- | --------------- | ------------------- |
| icon       | Icon 组件图标名称                         | String      | \-              | \-                  |
| content    | 提示内容文本                              | String      | \-              | \-                  |
| duration   | 显示多少毫秒后自动消失, 若为`0`则一直显示 | Number      | `1500`          | \-                  |
| position   | 展示位置                                  | String      | `center`        | `top|center|bottom` |
| hasMask    | 是否显示透明遮罩, 以此防止用户点击        | Boolean     | `true`          | \-                  |
| parentNode | 组件挂载节点                              | HTMLElement | `document.body` | \-                  |

## API

### Toast.info(content, duration, hasMask, parentNode)

纯文本提示

| 属性       | 说明                                      | 类型        | 默认值          |
| ---------- | ----------------------------------------- | ----------- | --------------- |
| content    | 提示内容文本                              | String      | \-              |
| duration   | 显示多少毫秒后自动消失, 若为`0`则一直显示 | Number      | `1500`          |
| hasMask    | 是否显示透明遮罩, 以此防止用户点击        | Boolean     | `true`          |
| parentNode | 组件挂载节点                              | HTMLElement | `document.body` |

### Toast.succeed(content, duration, hasMask, parentNode)

成功提示

| 属性       | 说明                                      | 类型        | 默认值          |
| ---------- | ----------------------------------------- | ----------- | --------------- |
| content    | 提示内容文本                              | String      | \-              |
| duration   | 显示多少毫秒后自动消失, 若为`0`则一直显示 | Number      | `1500`          |
| hasMask    | 是否显示透明遮罩, 以此防止用户点击        | Boolean     | `true`          |
| parentNode | 组件挂载节点                              | HTMLElement | `document.body` |

### Toast.failed(content, duration, hasMask, parentNode)

失败提示

| 属性       | 说明                                      | 类型        | 默认值          |
| ---------- | ----------------------------------------- | ----------- | --------------- |
| content    | 提示内容文本                              | String      | \-              |
| duration   | 显示多少毫秒后自动消失, 若为`0`则一直显示 | Number      | `1500`          |
| hasMask    | 是否显示透明遮罩, 以此防止用户点击        | Boolean     | `true`          |
| parentNode | 组件挂载节点                              | HTMLElement | `document.body` |

### Toast.loading(content, duration, hasMask, parentNode)

载入提示

| 属性       | 说明                                      | 类型           | 默认值          |
| ---------- | ----------------------------------------- | -------------- | --------------- |
| content    | 提示内容文本                              | String, Number | \-              |
| duration   | 显示多少毫秒后自动消失, 若为`0`则一直显示 | Number         | `0`             |
| hasMask    | 是否显示透明遮罩, 以此防止用户点击        | Boolean        | `true`          |
| parentNode | 组件挂载节点                              | HTMLElement    | `document.body` |

### Toast.hide()

隐藏提示

<script>
export default {
  methods: {
    showTextToast() {
      this.$toast.info('白日依山尽，黄河入海流');
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
    }
  }
};
</script>
