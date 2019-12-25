# 活动弹窗

用于在浮层中显示广告或说明

## 按需引入

```javascript
import { PopupActivity } from 'gree-ui';

Vue.component(PopupActivity.name, PopupActivity);
```

### 基础

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="warning" scrollable>
  为了更好的体验效果，建议在 iOS 或 Android 设备上体验！
</gree-notice-bar>
<gree-block class="gree-example-child gree-example-child-popup-activity">
  <gree-list>
    <gree-list-item
      link
      title="默认"
      @click.native="showNormal=true"
    ></gree-list-item>
    <gree-list-item
      link
      title="点击遮罩关闭"
      @click.native="showMaskClosable=true"
    ></gree-list-item>
    <gree-list-item
      link
      title="全屏"
      @click.native="showFullScreen=true"
    ></gree-list-item>
    <gree-list-item
      link
      title="无遮罩"
      @click.native="showNoMask=true"
    ></gree-list-item>
  </gree-list>

  <gree-popup-activity v-model="showNormal">
    <img
      src="https://gw.alicdn.com/tfs/TB1BKOXgbH1gK0jSZFwXXc7aXXa-618-890.png"
    />
  </gree-popup-activity>

  <gree-popup-activity v-model="showMaskClosable" :mask-closable="true">
    <img
      src="https://gw.alicdn.com/tfs/TB1BKOXgbH1gK0jSZFwXXc7aXXa-618-890.png"
    />
  </gree-popup-activity>

  <gree-popup-activity v-model="showFullScreen" full-screen>
    <p>赵客缦胡缨，吴钩霜雪明。</p>
    <p>银鞍照白马，飒沓如流星。</p>
    <p>十步杀一人，千里不留行。</p>
    <p>事了拂衣去，深藏身与名。</p>
    <p>闲过信陵饮，脱剑膝前横。</p>
    <p>将炙啖朱亥，持觞劝侯嬴。</p>
    <p>三杯吐然诺，五岳倒为轻。</p>
    <p>眼花耳热后，意气素霓生。</p>
    <p>救赵挥金槌，邯郸先震惊。</p>
    <p>千秋二壮士，煊赫大梁城。</p>
    <p>纵死侠骨香，不惭世上英。</p>
    <p>谁能书閤下，白首太玄经。</p>
  </gree-popup-activity>

  <gree-popup-activity v-model="showNoMask" :has-mask="false">
    <img
      src="https://gw.alicdn.com/tfs/TB1BKOXgbH1gK0jSZFwXXc7aXXa-618-890.png"
    />
  </gree-popup-activity>
</gree-block>

<script>
  export default {
    data() {
      return {
        showNormal: false,
        showMaskClosable: false,
        showFullScreen: false,
        showNoMask: false
      };
    }
  };
</script>
```

:::

## Props

| 属性          | 说明                     | 类型    | 默认值  |
| ------------- | ------------------------ | ------- | ------- |
| v-model       | 是否展示                 | Boolean | `false` |
| has-mask      | 是否有蒙层               | Boolean | `true`  |
| mask-closable | 是否可以通过点击蒙层关闭 | Boolean | `false` |
| full-screen   | 是否全屏                 | Boolean | `false` |

## Events

### @show()

弹出层展示事件

### @hide()

弹出层隐藏事件

<script>
export default {
  data() {
    return {
      showNormal: false,
      showMaskClosable: false,
      showFullScreen: false,
      showNoMask: false
    };
  }
};
</script>

<style lang="less">
.gree-example-child-popup-activity {
  .gree-button {
    margin-bottom: 20px;
  }
}
.gree-popup-activity-content {
  padding: 30px;
  font-size: 30px;
  line-height: 1.5;
  color: #666;

  p {
    margin-bottom: 30px;
  }
}
.gree-popup-activity.is-full {
  .gree-popup {
    top: 113px !important;
  }
}
</style>
