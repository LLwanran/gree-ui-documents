# 索引栏

点击索引栏时，会自动跳转到对应的IndexAnchor锚点位置

## 按需引入

```javascript
import { IndexBar, IndexAnchor } from 'gree-ui';

Vue.component(IndexBar.name, IndexBar);
Vue.component(IndexAnchor.name, IndexAnchor);
```

### 基础

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="warning" scrollable>
  为了更好的体验效果，建议在 iOS 或 Android 设备上体验！
</gree-notice-bar>

<div class="gree-example-child gree-example-child-index-bar gree-example-child-index-bar-0">
  <gree-index-bar :index-list="customIndexList">
    <div v-for="(item, index) in customIndexList" :key="index">
      <gree-index-anchor :index="item">{{ index === 0 ? '定位城市' : (index === 1 ? '热门城市' : item) }}</gree-index-anchor>
      <ul class="celllist" v-if="index === 0">
        <li class="cellitem">
          <p>珠海市</p>
        </li>
      </ul>
      <ul class="celllist" v-if="index === 1">
        <li class="cellitem" v-for="(v, k) in simple.HotCities" :key="k">
          <p>{{ v.District }}</p>
        </li>
      </ul>
      <div class="demo-cell" v-for="(v, k) in simple.Area[item]" :key="k" v-else>
        <div class="demo-cell__title">
          <span>{{ v.District }}</span>
          <sub>{{ v.PinYin }} - {{ v.Province }}</sub>
        </div>
      </div>
    </div>
  </gree-index-bar>
</div>

<script>
import simple from '../data/simple';

export default {
  data() {
    return {
      simple,
      customIndexList: []
    };
  },
  created() {
    this.customIndexList = Object.keys(simple.Area);
    this.customIndexList.unshift('定', '热');
  }
};
</script>

<style lang="less">
.gree-example-child-index-bar-0 {
  .celllist {
    overflow: hidden;
    padding: 15px 25px;

    .cellitem {
      padding: 9px;
      width: 33.33333%;
      float: left;
      box-sizing: border-box;

      >p {
        border: 1px solid #e0e0e0;
        background-color: #fff;
        color: #141719;
        font-size: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 86px;
      }
    }
  }

  .demo-cell {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 29px 46px;
    overflow: hidden;
    color: #323233;
    font-size: 40px;
    line-height: 69px;
    background-color: #fff;

    &:not(:last-child)::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      right: 0;
      bottom: 0;
      left: 16px;
      border-bottom: 1px solid rgba(32, 35, 37, 0.15);
      transform: scaleY(0.5);
    }

    .demo-cell__title {
      flex: 1;

      sub {
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        padding-left: 29px;
        color: #e0e0e0;
      }
    }
  }
}
</style>
```

:::

## API

### IndexBar Props

| 属性              | 说明                       | 类型    | 默认值    |
| ----------------- | -------------------------- | ------- | --------- |
| sticky            | 是否开启锚点自动吸顶       | Boolean | `true`    |
| z-index           | z-index 层级               | Number  | `1`       |
| highlight-color   | 索引字符高亮颜色           | String  | `#00aeff` |
| sticky-offset-top | 锚点自动吸顶时与顶部的距离 | Number  | `0`       |
| index-list        | 索引字符列表               | Array   | \-        |

### IndexAnchor Props

| 属性  | 说明     | 类型             | 默认值 |
| ----- | -------- | ---------------- | ------ |
| index | 索引字符 | [Number, String] | \-     |

### IndexBar Events

| 事件名 | 说明           | 回调参数        |
| ------ | -------------- | --------------- |
| select | 选中字符时触发 | index: 索引字符 |

### IndexAnchor Slots

| 名称    | 说明                             |
| ------- | -------------------------------- |
| default | 锚点位置显示内容，默认为索引字符 |

<script>
import simple from '../../configs/simple';

export default {
  data() {
    return {
      simple,
      customIndexList: []
    };
  },
  created() {
    this.customIndexList = Object.keys(simple.Area);
    this.customIndexList.unshift('定', '热');
  }
};
</script>

<style lang="less">
.gree-example-child-index-bar-0 {
  .celllist {
    overflow: hidden;
    padding: 7px 12px;

    .cellitem {
      padding: 9px;
      width: 33.33333%;
      float: left;
      box-sizing: border-box;

      >p {
        border: 1px solid #e0e0e0;
        background-color: #fff;
        color: #141719;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 43px;
      }
    }
  }

  .demo-cell {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 14px 23px;
    overflow: hidden;
    color: #323233;
    font-size: 20px;
    line-height: 34px;
    background-color: #fff;

    &:not(:last-child)::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      right: 0;
      bottom: 0;
      left: 8px;
      border-bottom: 1px solid rgba(32, 35, 37, 0.15);
      transform: scaleY(0.5);
    }

    .demo-cell__title {
      flex: 1;

      sub {
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        padding-left: 14px;
        color: #e0e0e0;
      }
    }
  }
}
</style>
