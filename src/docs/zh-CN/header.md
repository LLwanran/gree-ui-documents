# 头部导航

顶部导航栏

## 按需引入

```javascript
import { Header } from 'gree-ui';

Vue.component(Header.name, Header);
```

### 常用示例

:::demo

```html
<gree-row>
  <gree-block-title>示例1</gree-block-title>
  <gree-header :left-options="{backText: '返回'}">自定义左侧文本</gree-header>

  <gree-block-title>示例2</gree-block-title>
  <gree-header :right-options="{showMore: true}"
    >我是长文本我是长文本我是长文本我是长文本我是长文本</gree-header
  >

  <gree-block-title>示例3</gree-block-title>
  <gree-header
    :left-options="{preventGoBack: true}"
    @on-click-back="clickBack"
    :right-options="{showMore: true}"
    @on-click-more="clickMore"
    >显示右侧更多</gree-header
  >

  <gree-block-title>示例4</gree-block-title>
  <gree-header>
    <gree-icon
      slot="overwrite-left"
      name="cancel"
      @click="clickBack"
    ></gree-icon
    >自定义左右侧插槽
    <a slot="right" @click="clickMore">语音</a>
  </gree-header>

  <gree-block-title>示例5</gree-block-title>
  <gree-header style="background-color: chartreuse;">自定义颜色</gree-header>

  <gree-block-title>示例6</gree-block-title>
  <gree-header :left-options="{showBack: false}">左右侧不显示</gree-header>

  <gree-block-title>示例7</gree-block-title>
  <gree-header title="slot:overwrite-title">
    <section slot="overwrite-title">
      <gree-button type="primary" block round slot="overwrite-title">自定义Title插槽</gree-button>
    </section>
  </gree-header>
</gree-row>
```

:::

## Props

| 属性                       | 说明                   | 类型    | 默认值  | 备注 |
| -------------------------- | ---------------------- | ------- | ------- | ---- |
| left-options.showBack      | 是否显示返回文字       | Boolean | `true`  | \-   |
| left-options.backText      | 返回文字               | String  | `返回`  | \-   |
| left-options.preventGoBack | 是否阻止返回           | Boolean | `false` | \-   |
| title                      | 标题                   | String  | \-      | \-   |
| transition                 | 标题出现的动画         | String  | \-      | \-   |
| right-options.showMore     | 是否显示右侧的更多图标 | Boolean | `false` | \-   |

## Events

| 参数            | 说明                                                     |
| --------------- | -------------------------------------------------------- |
| @on-click-more  | 点击右侧更多时触发                                       |
| @on-click-back  | 当 left-options.preventGoBack 为 true,点击左边返回时触发 |
| @on-click-title | 点击标题时触发                                           |

## Slots

| 属性            | 说明                                             |
| --------------- | ------------------------------------------------ |
| 默认插槽        | 标题                                             |
| left            | 左侧部分插槽，在返回文字后，不会影响到原有的图标 |
| overwrite-left  | 重写左侧部分的返回文字及图标                     |
| right           | 右侧部分插槽                                     |
| overwrite-title | 标题插槽，用于自定义标题位置内容                 |

<script>
export default {
  methods: {
    clickBack() {
      this.$toast.info('you click back btn');
    },
    clickMore() {
      this.$toast.info('you click more btn');
    }
  }
};
</script>

<style lang="less" scoped>
.row {
  width: 100%;
  .gree-header {
    position: relative;
    margin: 30px 0;
    .gree-button.block {
      margin-top: 3px;
    }
  }
}
</style>
