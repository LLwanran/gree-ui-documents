# 底部操作栏

可用于展示表单信息与提交按钮（位置默认底部固定）

## 按需引入

```javascript
import { ActionBar } from 'gree-ui';

Vue.component(ActionBar.name, ActionBar);
```

### 基础

:::demo

```html
<div
  class="gree-example-child gree-example-child-action-bar gree-example-child-action-bar-0"
>
  <gree-action-bar :actions="data1"></gree-action-bar>
</div>

<script>
  export default {
    data() {
      return {
        data1: [
          {
            text: '一个按钮',
            onClick: this.handleClick1
          }
        ]
      };
    },
    methods: {
      handleClick1() {
        Toast.info('一个按钮点击回调');
      }
    }
  };
</script>
```

:::

### 多按钮

:::demo

```html
<div
  class="gree-example-child gree-example-child-action-bar gree-example-child-action-bar-1"
>
  <gree-action-bar :actions="data2"></gree-action-bar>
</div>

<script>
  export default {
    data() {
      return {
        data2: [
          {
            text: '按钮一',
            onClick: this.handleClick2
          },
          {
            text: '按钮二',
            onClick: this.handleClick3
          }
        ]
      };
    },
    methods: {
      handleClick2() {
        Toast.info('按钮一点击回调');
      },
      handleClick3() {
        Toast.info('按钮二点击回调');
      }
    }
  };
</script>
```

:::

### 按钮禁用

:::demo

```html
<div
  class="gree-example-child gree-example-child-action-bar gree-example-child-action-bar-2"
>
  <gree-action-bar :actions="data3"></gree-action-bar>
</div>

<script>
  export default {
    data() {
      return {
        data3: [
          {
            text: '按钮一',
            disabled: true
          },
          {
            text: '按钮二',
            disabled: true
          }
        ]
      };
    },
    methods: {
      onBtnClick(event, action) {
        Toast.succeed(`${action.text}回调`);
      }
    }
  };
</script>
```

:::

### 使用插槽

:::demo

```html
<div
  class="gree-example-child gree-example-child-action-bar gree-example-child-action-bar-3"
>
  <gree-action-bar :actions="data4" @click="onBtnClick4">
    <span class="price">
      <span class="voice">
        &yen;语音助手
        <small>发送</small>
      </span>
    </span>
  </gree-action-bar>
</div>

<script>
  export default {
    data() {
      return {
        data4: [
          {
            text: '发送语音',
            round: true
          }
        ]
      };
    },
    methods: {
      onBtnClick4(event, action) {
        this.$set(action, 'loading', true);
        this.$set(action, 'inactive', true);
        Dialog.alert({
          content: `${action.text}点击`,
          onConfirm: () => {
            this.$set(action, 'loading', false);
            this.$set(action, 'inactive', false);
          }
        });
      }
    }
  };
</script>
```

:::

## API

### Props

| 属性    | 说明   | 类型  | 默认值 | 备注 |
| ------- | ------ | ----- | ------ | ---- |
| actions | 按钮组 | Array | \-     | \-   |

### Slots

#### default

左侧文案内容

### Events

#### @click(event, action)

按钮点击事件

| 属性   | 说明                                 | 类型             |
| ------ | ------------------------------------ | ---------------- |
| action | actions 列表中与被点击按钮对应的对象 | 参考组件`Button` |

#### 提示

默认使用`position: fixed`固定在页面底部，为避免遮挡内容区底部预留不小于`100px`的空白（iPhone 还需额外增加`constant(safe-area-inset-bottom)`）

<script>
  export default {
    data() {
      return {
        data1: [
        {
          text: '一个按钮',
          onClick: this.handleClick1
        }
      ],
      data2: [
        {
          text: '按钮一',
          onClick: this.handleClick2
        },
        {
          text: '按钮二',
          onClick: this.handleClick3
        }
      ],
      data3: [
        {
          text: '按钮一',
          disabled: true
        },
        {
          text: '按钮二',
          disabled: true
        }
      ],
      data4: [
        {
          text: '发送语音',
          round: true
        }
      ]
      }
    },
    methods: {
      handleClick1() {
      this.$toast.info('一个按钮点击回调');
    },
    handleClick2() {
      this.$toast.info('按钮一点击回调');
    },
    handleClick3() {
      this.$toast.info('按钮二点击回调');
    },
    onBtnClick(event, action) {
      this.$toast.succeed(`${action.text}回调`);
    },
    onBtnClick4(event, action) {
      this.$set(action, 'loading', true);
      this.$set(action, 'inactive', true);
      this.$dialog.alert({
        content: `${action.text}点击`,
        onConfirm: () => {
          this.$set(action, 'loading', false);
          this.$set(action, 'inactive', false);
        }
      });
    }
    }
  };
</script>

<style lang="less" scoped>
.gree-action-bar {
  position: static;
  width: 100%;
  .voice {
    color: #00aeff;
    font-size: 40px;
    small {
      color: #858b9c;
      font-size: 24px;
      margin-left: 10px;
    }
  }
}
</style>
