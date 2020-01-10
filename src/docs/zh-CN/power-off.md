# 电源关闭

插件 - 关闭电源通用组件

## 按需引入

```javascript
import { PowerOff } from 'gree-ui';

Vue.component(PowerOff.name, PowerOff);
```

### 基础

:::demo

```html
<gree-toolbar position="bottom" no-hairline>
  <gree-row icon :options="options" @selected="selected"></gree-row>
</gree-toolbar>
<gree-page no-navbar>
  <div class="page-header">
    <gree-header theme="transparent" :right-options="{showMore: true}"
      >冷暖型冷风扇</gree-header
    >
  </div>
  <gree-power-off v-model="showPowerOff" text="已关机"></gree-power-off>
</gree-page>

<script>
  export default {
    data() {
      return {
        showPowerOff: true,
        options: [
          {
            icon: 'power',
            size: 'xl',
            class: '',
            text: '开关'
          },
          {
            icon: 'menu',
            size: 'xl',
            class: 'disabled',
            text: '功能'
          },
          {
            icon: 'voice',
            size: 'xl',
            class: '',
            text: '语音'
          }
        ]
      };
    },
    created() {
      this.toggleClass();
    },
    methods: {
      toggle() {
        this.showPowerOff = !this.showPowerOff;
        this.toggleClass();
      },
      toggleClass() {
        this.options[0].class = this.showPowerOff ? 'red' : '';
      },
      selected(index) {
        if (index === 0) {
          this.toggle();
        }
      }
    }
  };
</script>
```

:::

## Props

| 属性  | 说明       | 类型    | 默认值  | 备注 |
| ----- | ---------- | ------- | ------- | ---- |
| value | 选中项的值 | Boolean | `false` | \-   |
| text  | 提示文本   | String  | \-      | \-   |

<script>
export default {
  data() {
    return {
      showPowerOff: true,
      options: [
        {
          icon: 'power',
          size: 'xl',
          class: '',
          text: '开关'
        },
        {
          icon: 'menu',
          size: 'xl',
          class: 'disabled',
          text: '功能'
        },
        {
          icon: 'voice',
          size: 'xl',
          class: '',
          text: '语音'
        }
      ]
    };
  },
  created() {
    this.toggleClass();
  },
  methods: {
    toggle() {
      this.showPowerOff = !this.showPowerOff;
      this.toggleClass();
    },
    toggleClass() {
      this.options[0].class = this.showPowerOff ? 'red' : '';
    },
    selected(index) {
      if (index === 0) {
        this.toggle();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.source {
  position: relative;
  height: 960px;
}
.toolbar {
  position: absolute;
  height: 236px !important;
  background-color: transparent;
  /deep/ .gree-icon {
    &.red {
      color: #f3332a !important;
    }
  }
}
.page-header {
  position: relative;
  width: 100%;
  height: 576px;
  margin-bottom: 15px;
  background-image: url('../../assets/images/ac_bg_auto.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  overflow: hidden;
}
.gree-power-off {
  background-image: url('../../assets/images/bg_body.png');
}
</style>
