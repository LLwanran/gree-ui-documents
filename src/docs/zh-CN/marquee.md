# 跑马灯

跑马灯效果、无缝滚动效果

## 按需引入

```javascript
import { Marquee, MarqueeItem } from 'gree-ui';

Vue.component(Marquee.name, Marquee);
Vue.component(MarqueeItem.name, MarqueeItem);
```

### 基本

:::demo

```html
<gree-block>
  <gree-marquee>
    <gree-marquee-item v-for="(item, index) in errors" :key="index"
      >{{ item }}</gree-marquee-item
    >
  </gree-marquee>
</gree-block>

<script>
  export default {
    data() {
      return {
        errors: [
          'PM2.5 传感器故障',
          '温湿度传感器故障',
          '甲醛传感器故障',
          'CO2 传感器故障',
          '与主控板通讯故障'
        ]
      };
    }
  };
</script>
```

:::

### 嵌入 List View

:::demo

```html
<gree-list>
  <gree-list-item title="故障名称：">
    <gree-marquee slot="after">
      <gree-marquee-item v-for="(item, index) in errors" :key="index"
        >{{ item }}</gree-marquee-item
      >
    </gree-marquee>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        errors: [
          'PM2.5 传感器故障',
          '温湿度传感器故障',
          '甲醛传感器故障',
          'CO2 传感器故障',
          '与主控板通讯故障'
        ]
      };
    }
  };
</script>
```

:::

### 嵌入 NoticeBar

:::demo

```html
<gree-notice-bar mode="closable" icon="warning">
  <gree-marquee>
    <gree-marquee-item v-for="(item, index) in errors" :key="index"
      >{{ item }}</gree-marquee-item
    >
  </gree-marquee>
</gree-notice-bar>

<script>
  export default {
    data() {
      return {
        errors: [
          'PM2.5 传感器故障',
          '温湿度传感器故障',
          '甲醛传感器故障',
          'CO2 传感器故障',
          '与主控板通讯故障'
        ]
      };
    }
  };
</script>
```

:::

## **marquee** Props

| 属性        | 说明                                                                       | 类型   | 默认值 |
| ----------- | -------------------------------------------------------------------------- | ------ | ------ |
| interval    | 切换时间间隙                                                               | Number | `2000` |
| duration    | 切换动画时间                                                               | Number | `300`  |
| direction   | 切换方向，可选['up', 'down']                                               | String | `up`   |
| item-height | 条目高度，当默认状态为隐藏时你需要设置值，否则组件渲染时会获取不到正确高度 | Number | \-     |

## **marquee** Slots

| 属性    | 说明     |
| ------- | -------- |
| default | 内容插槽 |

## **marquee-item** Slots

| 属性    | 说明     |
| ------- | -------- |
| default | 内容插槽 |

<script>
export default {
  data() {
    return {
      errors: [
        'PM2.5 传感器故障',
        '温湿度传感器故障',
        '甲醛传感器故障',
        'CO2 传感器故障',
        '与主控板通讯故障'
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.list {
  overflow: hidden;
}
</style>
