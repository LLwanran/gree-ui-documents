# 开关

开关按钮，用于表示开关状态/两种状态之间的切换

## 按需引入

```javascript
import { Switch } from 'gree-ui';

Vue.component(Switch.name, Switch);
```

### 基础

:::demo

```html
<gree-list class="gree-example-child gree-example-child-switch gree-example-child-switch-0">
  <gree-list-item title="开启状态">
    <gree-switch v-model="checked1" slot="after"></gree-switch>
  </gree-list-item>
  <gree-list-item title="禁用状态">
    <gree-switch v-model="checked2" disabled slot="after"></gree-switch>
  </gree-list-item>
  <gree-list-item title="加载状态">
    <gree-switch v-model="checked3" loading slot="after"></gree-switch>
  </gree-list-item>
  <gree-list-item title="自定义大小">
    <gree-switch v-model="checked4" size="24px" slot="after"></gree-switch>
  </gree-list-item>
  <gree-list-item title="自定义颜色">
    <gree-switch v-model="checked5" active-color="#4caf50" inactive-color="#e91e63" slot="after"></gree-switch>
  </gree-list-item>
  <gree-list-item title="异步控制">
    <gree-switch :value="checked6" :loading="loading" @click="onClick" @input="onInput" slot="after"></gree-switch>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        checked1: true,
        checked2: true,
        checked3: true,
        checked4: true,
        checked5: true,
        checked6: true,
        loading: false
      };
    },
    methods: {
      onClick() {
        this.loading = true;
      },
      onInput(checked) {
        Dialog.confirm({
          title: '提示',
          content: '是否切换开关？',
          onConfirm: () => {
            this.checked6 = checked;
            this.loading = false;
          },
          onCancel: () => {
            this.loading = false;
          }
        });
      }
    }
  };
</script>
```

:::

## Props

| 属性           | 说明                   | 类型             | 默认值  |
| -------------- | ---------------------- | ---------------- | ------- |
| size           | 开关尺寸，默认单位为px | [Number, String] | \-      |
| v-model        | 开关选中状态           | any              | `false` |
| loading        | 是否为加载状态         | Boolean          | `false` |
| disabled       | 是否为禁用状态         | Boolean          | `false` |
| active-color   | 打开时的背景色         | String           | \-      |
| inactive-color | 关闭时的背景色         | String           | \-      |
| active-value   | 打开时对应的值         | any              | `true`  |
| inactive-value | 关闭时对应的值         | any              | `false` |

## Events

| 事件名 | 说明               | 回调参数       |
| ------ | ------------------ | -------------- |
| change | 开关状态切换时触发 | *value: any*   |
| click  | 点击时触发         | *event: Event* |

<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      loading: false
    };
  },
  methods: {
    onClick() {
      this.loading = true;
    },
    onInput(checked) {
      this.$dialog.confirm({
        title: '提示',
        content: '是否切换开关？',
        onConfirm: () => {
          this.checked6 = checked;
          this.loading = false;
        },
        onCancel: () => {
          this.loading = false;
        }
      });
    }
  }
};
</script>
