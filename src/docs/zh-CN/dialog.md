# 模态窗

交互式模态窗口

## 按需引入

```javascript
import { Dialog } from 'gree-ui';

Dialog.alert({ content: '' });

this.$dialog.alert({ content: '' }); // 全量引入
```

### 基本

:::demo

```html
<gree-list>
  <gree-list-item
    link
    title="Alert"
    text="提示框"
    @click.native="showAlert()"
  ></gree-list-item>
  <gree-list-item
    link
    title="Confirm"
    text="确认框"
    @click.native="showConfirm()"
  ></gree-list-item>
  <gree-list-item
    link
    title="Succeed"
    text="成功框"
    @click.native="showSucceed()"
  ></gree-list-item>
  <gree-list-item
    link
    title="Failed"
    text="失败框"
    @click.native="showFailed()"
  ></gree-list-item>
  <gree-list-item
    link
    title="Async"
    text="异步操作"
    @click.native="asyncDialog.open = true"
  ></gree-list-item>
  <gree-list-item
    link
    title="Multi"
    text="多操作"
    @click.native="multiDialog.open = true"
  ></gree-list-item>
  <gree-list-item
    link
    title="Slot"
    text="插槽"
    @click.native="slotDialog.open = true"
  ></gree-list-item>
</gree-list>
<gree-dialog
  title="说爱你"
  :closable="true"
  v-model="asyncDialog.open"
  :btns="asyncDialog.btns"
  >一开始 我只顾着看你 装做不经意 心却飘过去 还窃喜 你没发现我 躲在角落 忙着快乐
  忙着感动 从彼此陌生到熟 会是我们从没想过 真爱到现在 不敢期待</gree-dialog
>
<gree-dialog
  title="布拉格广场"
  :closable="true"
  layout="column"
  v-model="multiDialog.open"
  :btns="multiDialog.btns"
  >琴键上透着光 彩绘的玻璃窗 装饰着歌特式教堂 谁谁谁弹 一段 一段 流浪 忧伤
  我顺着琴声方向看见蔷薇依附十八世纪的油画上</gree-dialog
>
<gree-dialog title="窗外" v-model="slotDialog.open" :btns="slotDialog.btns">
  <div class="dialog-banner" slot="header">
    <img
      src="https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2016/08/22/20160822-111603_U7195_M188332_419e.jpg"
      alt
    />
  </div>
  我望着窗外夜雨一直下 心开始有点慌 怕弄湿了眼眶 我站在人海不停地遥望
  等待着一道曙光 照亮未知的方向
</gree-dialog>

<script>
  export default {
    data() {
      return {
        asyncDialog: {
          open: false,
          btns: [
            {
              text: '立即播放',
              icon: 'power',
              handler: this.onAsyncConfirm
            }
          ]
        },
        multiDialog: {
          open: false,
          btns: [
            {
              text: '播放一',
              handler: this.onMultiConfirm
            },
            {
              text: '播放二',
              handler: this.onMultiConfirm,
              disabled: true
            },
            {
              text: '播放三',
              handler: this.onMultiConfirm
            }
          ]
        },
        slotDialog: {
          open: false,
          btns: [
            {
              text: '知道了'
            }
          ]
        }
      };
    },
    methods: {
      showAlert() {
        Dialog.alert({
          title: '警告',
          content: '您正在进行非法操作',
          cancelText: '取消',
          confirmText: '确定',
          onConfirm: () => console.log('[Dialog.alert] confirm clicked')
        });
      },
      showConfirm() {
        Dialog.confirm({
          title: '提示',
          content:
            '烹饪进行中，如果中途取消烹饪工作，<br>会影响烹饪效果。是否确定取消烹饪？',
          confirmText: '继续烹饪',
          onConfirm: () => console.log('[Dialog.confirm] confirm clicked'),
          cancelText: '取消烹饪',
          onCancel: () => console.log('[Dialog.confirm] cancel clicked')
        });
      },
      showSucceed() {
        Dialog.succeed({
          title: '成功',
          content: '恭喜您成功完成操作',
          confirmText: '确定',
          onConfirm: () => console.log('[Dialog.succeed] confirm clicked')
        });
      },
      showFailed() {
        Dialog.failed({
          title: '失败',
          content: '操作失败，请稍后重试',
          confirmText: '确定',
          onConfirm: () => console.log('[Dialog.failed] confirm clicked')
        });
      },
      onAsyncConfirm(btn) {
        this.$set(btn, 'loading', true);
        this.$set(btn, 'text', '播放中');
        setTimeout(() => {
          this.asyncDialog.open = false;
          this.$set(btn, 'loading', false);
          this.$set(btn, 'text', '立即播放');
          Toast({
            content: '播放成功'
          });
        }, 1500);
      },
      onMultiConfirm() {
        this.multiDialog.open = false;
      }
    }
  };
</script>
```

:::

## Props

| 属性          | 说明                              | 类型        | 默认值               |
| ------------- | --------------------------------- | ----------- | -------------------- |
| v-model       | 双向绑定是否显示窗口              | Boolean     | `false`              |
| title         | 窗口标题                          | String      | \-                   |
| icon          | Icon 组件图标名称                 | String      | \-                   |
| icon-svg      | svg 图标                          | Boolean     | `false`              |
| closable      | 是否显示关闭按钮                  | Boolean     | `false`              |
| layout        | 底部按钮组布局方式：`row, column` | String      | `row`                |
| btns          | 底部操作按钮组                    | Array       | `[]`                 |
| append-to     | 组件的挂载节点                    | HTMLElement | `document.body`      |
| has-mask      | 是否有蒙层                        | Boolean     | `true`               |
| mask-closable | 点击蒙层是否可关闭弹出层          | Boolean     | `false`              |
| transition    | 弹出层过度动画                    | String      | 参考组件`Transition` |

## DialogBtnOptions Props

| 属性     | 说明          | 类型                            | 默认值  |
| -------- | ------------- | ------------------------------- | ------- |
| text     | 按钮文案      | String                          | \-      |
| handler  | 点击回调      | Function(btn: DialogBtnOptions) | \-      |
| warning  | 警示按钮      | Boolean                         | `false` |
| disabled | 禁用按钮      | Boolean                         | `false` |
| loading  | 加载中按钮    | Boolean                         | `false` |
| icon     | 按钮图标      | String                          | \-      |
| icon-svg | 按钮 svg 图标 | Boolean                         | `false` |

## Slots

### default

组件子元素会被当做默认插槽内容使用，适合于不需要标题的自定义窗口内容的场景

### header

顶部插槽，一般用于放置图片等

## Dialog Instance Methods

### close()

隐藏弹窗

## Dialog Instance Events

### @show()

模态窗口显示后触发的事件

### @hide()

模态窗口隐藏后触发的事件

### Dialog.closeAll()

静态方法关闭所有动态创建的全局 Dialog

## Dialog Static Methods

### Dialog.confirm(props)

静态方法创建确认模态窗口, 返回 Dialog 实例

| 属性           | 说明                   | 类型     | 默认值  |
| -------------- | ---------------------- | -------- | ------- |
| icon           | 图标                   | String   | \-      |
| title          | 窗口标题               | String   | \-      |
| content        | 正文内容               | String   | \-      |
| cancelText     | 底部取消按钮文字       | String   | `取消`  |
| confirmText    | 底部确认按钮文字       | String   | `确认`  |
| cancelWarning  | 点击取消按钮为警示操作 | Boolean  | `false` |
| confirmWarning | 点击确认按钮为警示操作 | Boolean  | `false` |
| onConfirm      | 点击确认按钮回调函数   | Function | \-      |
| onCancel       | 点击取消按钮回调函数   | Function | \-      |
| onShow         | 窗口显示后回调函数     | Function | \-      |
| onHide         | 窗口隐藏后回调函数     | Function | \-      |

### Dialog.alert(props)

静态方法创建警告模态窗口, 返回 Dialog 实例

| 属性        | 说明                   | 类型     | 默认值  |
| ----------- | ---------------------- | -------- | ------- |
| icon        | 图标                   | String   | \-      |
| title       | 窗口标题               | String   | \-      |
| content     | 正文内容               | String   | \-      |
| confirmText | 底部确认按钮文字       | String   | `确认`  |
| warning     | 点击确认按钮为警示操作 | Boolean  | `false` |
| onConfirm   | 点击确认按钮回调函数   | Function | \-      |
| onShow      | 窗口显示后回调函数     | Function | \-      |
| onHide      | 窗口隐藏后回调函数     | Function | \-      |

### Dialog.succeed(props)

静态方法创建成功确认模态窗口, 返回 Dialog 实例

| 属性        | 说明                 | 类型     | 默认值 |
| ----------- | -------------------- | -------- | ------ |
| title       | 窗口标题             | String   | \-     |
| content     | 正文内容             | String   | \-     |
| confirmText | 底部确认按钮文字     | String   | `确认` |
| onConfirm   | 点击确认按钮回调函数 | Function | \-     |
| onCancel    | 点击取消按钮回调函数 | Function | \-     |
| onShow      | 窗口显示后回调函数   | Function | \-     |
| onHide      | 窗口隐藏后回调函数   | Function | \-     |

### Dialog.failed(props)

静态方法创建失败确认模态窗口, 返回 Dialog 实例

| 属性        | 说明                 | 类型     | 默认值 |
| ----------- | -------------------- | -------- | ------ |
| title       | 窗口标题             | String   | \-     |
| content     | 正文内容             | String   | \-     |
| confirmText | 底部确认按钮文字     | String   | `确认` |
| onConfirm   | 点击确认按钮回调函数 | Function | \-     |
| onCancel    | 点击取消按钮回调函数 | Function | \-     |
| onShow      | 窗口显示后回调函数   | Function | \-     |
| onHide      | 窗口隐藏后回调函数   | Function | \-     |

<script>
export default {
  data() {
    return {
      asyncDialog: {
        open: false,
        btns: [
          {
            text: '立即播放',
            icon: 'power',
            handler: this.onAsyncConfirm
          }
        ]
      },
      multiDialog: {
        open: false,
        btns: [
          {
            text: '播放一',
            handler: this.onMultiConfirm
          },
          {
            text: '播放二',
            handler: this.onMultiConfirm,
            disabled: true
          },
          {
            text: '播放三',
            handler: this.onMultiConfirm
          }
        ]
      },
      slotDialog: {
        open: false,
        btns: [
          {
            text: '知道了'
          }
        ]
      }
    };
  },
  methods: {
    showAlert() {
      this.$dialog.alert({
        title: '警告',
        content: '您正在进行非法操作',
        cancelText: '取消',
        confirmText: '确定',
        onConfirm: () => console.log('[Dialog.alert] confirm clicked')
      });
    },
    showConfirm() {
      this.$dialog.confirm({
        title: '提示',
        content:
          '烹饪进行中，如果中途取消烹饪工作，<br>会影响烹饪效果。是否确定取消烹饪？',
        confirmText: '继续烹饪',
        onConfirm: () => console.log('[Dialog.confirm] confirm clicked'),
        cancelText: '取消烹饪',
        onCancel: () => console.log('[Dialog.confirm] cancel clicked')
      });
    },
    showSucceed() {
      this.$dialog.succeed({
        title: '成功',
        content: '恭喜您成功完成操作',
        confirmText: '确定',
        onConfirm: () => console.log('[Dialog.succeed] confirm clicked')
      });
    },
    showFailed() {
      this.$dialog.failed({
        title: '失败',
        content: '操作失败，请稍后重试',
        confirmText: '确定',
        onConfirm: () => console.log('[Dialog.failed] confirm clicked')
      });
    },
    onAsyncConfirm(btn) {
      this.$set(btn, 'loading', true);
      this.$set(btn, 'text', '播放中');
      setTimeout(() => {
        this.asyncDialog.open = false;
        this.$set(btn, 'loading', false);
        this.$set(btn, 'text', '立即播放');
        Toast({
          content: '播放成功'
        });
      }, 1500);
    },
    onMultiConfirm() {
      this.multiDialog.open = false;
    }
  }
};
</script>

<style lang="less" scoped>
.dialog-banner {
  img {
    display: block;
    width: 100%;
  }
}
</style>
