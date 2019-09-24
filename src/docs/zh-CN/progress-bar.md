# 进度条

为当前工作流程和动作提供实时反馈

## 按需引入

```javascript
import { ProgressBar } from 'gree-ui';

Vue.component(ProgressBar.name, ProgressBar);
```

## 基础用法

:::demo

```html
<gree-block>
  <gree-block-title>默认主题</gree-block-title>
  <gree-progress-bar :percent="45"></gree-progress-bar>
  <gree-block-title>danger主题</gree-block-title>
  <gree-progress-bar :percent="30" type="danger"></gree-progress-bar>
  <gree-block-title>warning主题</gree-block-title>
  <gree-progress-bar :percent="50" type="warning"></gree-progress-bar>
  <gree-block-title>success主题</gree-block-title>
  <gree-progress-bar :percent="65" type="success"></gree-progress-bar>
</gree-block>
```

:::

## 高级

:::demo

```html
<gree-block>
  <gree-block-title>彩带样式</gree-block-title>
  <gree-progress-bar :percent="45" :striped="true"></gree-progress-bar>
  <gree-block-title>动态进度条</gree-block-title>
  <gree-progress-bar
    :percent="30"
    type="info"
    :striped="true"
    :animated="true"
  ></gree-progress-bar>
  <gree-block-title>当前进度数值</gree-block-title>
  <gree-progress-bar
    :percent="50"
    type="success"
    :showinfo="true"
  ></gree-progress-bar>
  <gree-block-title>进度信息在进度条外</gree-block-title>
  <gree-progress-bar
    :percent="50"
    type="warning"
    size="small"
    :showinfo="true"
    :info-inside="false"
  ></gree-progress-bar>
  <gree-block-title>large 尺寸</gree-block-title>
  <gree-progress-bar
    :percent="60"
    type="danger"
    size="large"
    :showinfo="true"
    :format="percentFormat"
  ></gree-progress-bar>
  <gree-block-title>自定义信息显示内容</gree-block-title>
  <gree-progress-bar
    :percent="percent"
    type="info"
    :showinfo="true"
    :striped="true"
    :animated="true"
  ></gree-progress-bar>
  <gree-row>
    <gree-col>
      <gree-button size="small" inline @click="percentPlus">增加</gree-button>
    </gree-col>
    <gree-col>
      <gree-button size="small" inline @click="percentMinus">减少</gree-button>
    </gree-col>
  </gree-row>
</gree-block>

<script>
  export default {
    data() {
      return {
        percent: 10
      };
    },
    methods: {
      percentFormat(val) {
        return `Completed ${val}%`;
      },
      percentPlus() {
        if (this.percent < 100) {
          this.percent += 10;
        }
      },
      percentMinus() {
        if (this.percent > 0) {
          this.percent -= 10;
        }
      }
    }
  };
</script>
```

:::

## Props

| 属性        | 说明                                             | 类型              | 默认值                     |
| ----------- | ------------------------------------------------ | ----------------- | -------------------------- |
| type        | 主题颜色，可选值为`danger`、`warning`、`success` | String            | \-                         |
| size        | 大小，可选值为`small`、`medium`、`large`         | String            | \-                         |
| percent     | 百分比                                           | Number            | 0                          |
| striped     | 是否显示彩带样式                                 | Boolean           | \-                         |
| animated    | 是否显示动态进度条                               | Boolean           | \-                         |
| showinfo    | 是否显示进度数值                                 | Boolean           | false                      |
| info-inside | 进度信息的显示是否在进度条内部                   | Boolean           | true                       |
| format      | 显示信息的模板函数                               | function(percent) | `percent => percent + '%'` |

### Tips

- 默认有四种主题颜色，包括默认蓝色和`danger`、`warning`、`success`，通过`type`来设置
- `striped`设置为 true，显示彩带样式
- `animated`设置为 true，显示动态进度条
- `showinfo`设置为 true，显示当前进度数值
- `info-inside`设置为 false，进度信息会显示在进度条外
- 通过`size`设置 progress bar 的宽度，除了默认值外有`small`、`medium`、`large`
- 通过设置 format 内容模板函数，自定义信息显示的内容

<script>
  export default {
    data() {
      return {
        percent: 10
      };
    },
    methods: {
      percentFormat(val) {
        return `Completed ${val}%`;
      },
      percentPlus() {
        if (this.percent < 100) {
          this.percent += 10;
        }
      },
      percentMinus() {
        if (this.percent > 0) {
          this.percent -= 10;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
.block {
  /deep/ .progress-wrap .progress .progress-bar.is-large {
    line-height: 1.4;
  }
}
</style>
