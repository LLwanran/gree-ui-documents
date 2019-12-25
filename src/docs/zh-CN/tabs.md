# 标签页

用于创建包含内容区域的标签页

## 按需引入

```javascript
import { Tabs, TabPane } from 'gree-ui';

Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
```

### 基础

:::demo

```html
<gree-block class="gree-example-child-tabs-0">
  <gree-tabs>
    <gree-tab-pane class="content" name="p1" label="李白">
      <p>君不见黄河之水天上来，奔流到海不复回。</p>
      <p>君不见高堂明镜悲白发，朝如青丝暮成雪。</p>
      <p>人生得意须尽欢，莫使金樽空对月。</p>
      <p>天生我材必有用，千金散尽还复来。</p>
      <p>烹羊宰牛且为乐，会须一饮三百杯。</p>
      <p>岑夫子，丹丘生，将进酒，杯莫停。</p>
      <p>与君歌一曲，请君为我侧耳听。</p>
      <p>钟鼓馔玉不足贵，但愿长醉不复醒。</p>
      <p>古来圣贤皆寂寞，惟有饮者留其名。</p>
      <p>陈王昔时宴平乐，斗酒十千恣欢谑。</p>
      <p>主人何为言少钱，径须沽取对君酌。</p>
      <p>五花马，千金裘，</p>
      <p>呼儿将出换美酒，与尔同销万古愁。</p>
    </gree-tab-pane>
    <gree-tab-pane class="content" name="p2" label="杜甫">
      <p>风急天高猿啸哀，渚清沙白鸟飞回。</p>
      <p>无边落木萧萧下，不尽长江滚滚来。</p>
      <p>万里悲秋常作客，百年多病独登台。</p>
      <p>艰难苦恨繁霜鬓，潦倒新停浊酒杯。</p>
    </gree-tab-pane>
    <gree-tab-pane class="content" name="p3" label="白居易">
      <p>江南好，风景旧曾谙。</p>
      <p>日出江花红胜火，春来江水绿如蓝，能不忆江南。</p>
    </gree-tab-pane>
  </gree-tabs>
</gree-block>
```

:::

## Tabs Props

| 属性      | 说明                               | 类型    | 默认值  |
| --------- | ---------------------------------- | ------- | ------- |
| v-model   | 双向绑定的标签对象`name`           | String  | \-      |
| immediate | 初始化后立即就触发一次`change`事件 | Boolean | `false` |

## TabPane Props

| 属性     | 说明     | 类型    | 默认值  | 备注 |
| -------- | -------- | ------- | ------- | ---- |
| name     | 唯一键名 | String  | \-      | 必须 |
| label    | 菜单标题 | String  | \-      | 必须 |
| disabled | 是否禁用 | Boolean | `false` | \-   |

## Tabs Methods

### reflowTabBar()

重新计算`TabBar`样式布局

## Tabs Events

### @change(tab)

当用户选择标签触发

| 属性 | 说明               | 类型                                                    |
| ---- | ------------------ | ------------------------------------------------------- |
| tab  | 选中的标签菜单对象 | Object:{name: String, label: String, disabled: Boolean} |

<style lang="less">
.gree-example-child-tabs-0 {
  .content {
    font-size: 23px;
    background: #fff;
    padding: 50px;
  }
}
</style>
