# 时间轴

对一系列信息进行排序时，水平或垂直展示

## 按需引入

```javascript
import { Timeline, TimelineItem } from 'gree-ui';

Vue.component(Timeline.name, Timeline);
Vue.component(TimelineItem.name, TimelineItem);
```

### 基本

:::demo

```html
<gree-block>
  <gree-timeline>
    <gree-timeline-item>三杯两盏淡酒，怎敌他、晚来风急？</gree-timeline-item>
    <gree-timeline-item>雁过也，正伤心，却是旧时相识。</gree-timeline-item>
    <gree-timeline-item
      >满地黄花堆积。憔悴损，如今有谁堪摘？</gree-timeline-item
    >
    <gree-timeline-item>梧桐更兼细雨，到黄昏、点点滴滴。</gree-timeline-item>
  </gree-timeline>
</gree-block>
```

:::

### 右侧时间轴点

:::demo

```html
<gree-block>
  <gree-timeline mode="right">
    <gree-timeline-item>三杯两盏淡酒，怎敌他、晚来风急？</gree-timeline-item>
    <gree-timeline-item>雁过也，正伤心，却是旧时相识。</gree-timeline-item>
    <gree-timeline-item
      >满地黄花堆积。憔悴损，如今有谁堪摘？</gree-timeline-item
    >
    <gree-timeline-item>梧桐更兼细雨，到黄昏、点点滴滴。</gree-timeline-item>
  </gree-timeline>
</gree-block>
```

:::

### 圆圈颜色

:::demo

```html
<gree-block>
  <gree-timeline>
    <gree-timeline-item color="green"
      >红藕香残玉簟秋。轻解罗裳，独上兰舟。</gree-timeline-item
    >
    <gree-timeline-item color="red"
      >云中谁寄锦书来，雁字回时，月满西楼。</gree-timeline-item
    >
    <gree-timeline-item color="#ffbd17">
      <p>花自飘零水自流</p>
      <p>一种相思</p>
      <p>两处闲愁</p>
    </gree-timeline-item>
    <gree-timeline-item>
      <p>此情无计可消除</p>
      <p>才下眉头</p>
      <p>却上心头</p>
    </gree-timeline-item>
  </gree-timeline>
</gree-block>
```

:::

### 自定义时间轴点

:::demo

```html
<gree-block>
  <gree-timeline>
    <gree-timeline-item>昨夜雨疏风骤，浓睡不消残酒。</gree-timeline-item>
    <gree-timeline-item>试问卷帘人，却道海棠依旧。</gree-timeline-item>
    <gree-timeline-item color="red">
      <gree-icon slot="dot" name="clock"></gree-icon>知否，知否？
    </gree-timeline-item>
    <gree-timeline-item>应是绿肥红瘦。</gree-timeline-item>
  </gree-timeline>
</gree-block>
```

:::

### 交替展现

:::demo

```html
<gree-block>
  <gree-block-header>JavaScript 简史</gree-block-header>
  <gree-timeline mode="alternate">
    <gree-timeline-item>LiveScript 1995</gree-timeline-item>
    <gree-timeline-item>JavaScript / JScript 1996</gree-timeline-item>
    <gree-timeline-item>EcmaScript 1997</gree-timeline-item>
    <gree-timeline-item>ES3 2000</gree-timeline-item>
    <gree-timeline-item>IE6 2001</gree-timeline-item>
    <gree-timeline-item>Firefox 2004</gree-timeline-item>
    <gree-timeline-item>IE7 2005</gree-timeline-item>
    <gree-timeline-item color="green">jQuery 2006</gree-timeline-item>
    <gree-timeline-item>V8 / Chrome 2008</gree-timeline-item>
    <gree-timeline-item color="red">Node.js / ES5 2009</gree-timeline-item>
    <gree-timeline-item color="green">npm / Angular 2010</gree-timeline-item>
    <gree-timeline-item color="green">React 2013</gree-timeline-item>
    <gree-timeline-item color="green">Vue.js 2014</gree-timeline-item>
    <gree-timeline-item>Edge / ES6 2015</gree-timeline-item>
    <gree-timeline-item>ES7 2016</gree-timeline-item>
    <gree-timeline-item>ES8 2017</gree-timeline-item>
    <gree-timeline-item color="red">ES9 2018</gree-timeline-item>
  </gree-timeline>
</gree-block>
```

:::

## **timeline** Props

| 属性 | 说明                                                                             | 类型   | 默认值 |
| ---- | -------------------------------------------------------------------------------- | ------ | ------ |
| mode | 通过设置 mode 可以改变时间轴和内容的相对位置，可选值`left`、`right`、`alternate` | String | \-     |

## **timeline-item** Props

| 属性  | 说明                                                | 类型   | 默认值 |
| ----- | --------------------------------------------------- | ------ | ------ |
| color | 指定圆圈颜色 `blue`, `red`, `green`，或自定义的色值 | String | `blue` |
| dot   | 自定义时间轴点                                      | String | \-     |
