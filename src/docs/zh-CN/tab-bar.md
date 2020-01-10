# 标签栏

用于创建标签页

## 按需引入

```javascript
import { TabBar } from 'gree-ui';

Vue.component(TabBar.name, TabBar);
```

## 蒸烤一体机 Demo

:::demo

```html
<div
  class="gree-example-child gree-example-child-tab-bar gree-example-child-tab-bar-0"
>
  <gree-tab-bar
    class="all-in-one"
    v-model="current1"
    :items="items1"
    :has-ink="false"
    @change="onChange"
  ></gree-tab-bar>
</div>

<script>
  export default {
    data() {
      return {
        current1: 1,
        items1: [
          { name: 1, label: '智能菜单' },
          { name: 2, label: '专业烘焙' },
          { name: 3, label: '专业蒸制' },
          { name: 4, label: '辅助功能' }
        ]
      };
    },
    methods: {
      onChange(item, index, prevIndex) {
        console.log(
          `currentIndex: ${index}, prevIndex: ${prevIndex}, label: ${item.label}`
        );
      }
    }
  };
</script>

<style lang="scss">
  .gree-example-child-tab-bar-0 {
    width: 80%;
    color: #666f83;

    .gree-tab-bar.all-in-one {
      padding: 0;
      background-color: #212127;
      .gree-tab-bar-list {
        .gree-tab-bar-item {
          color: #bcbcbd;
          font-size: 19px;
          min-height: 65px;
          flex: 1;
          &:not(.is-active):before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: auto;
            bottom: auto;
            width: 200%;
            height: 200%;
            border-left: 1px solid #36363c;
            box-sizing: border-box;
            transform-origin: 0 0;
            transform: scale(0.5);
            z-index: 2;
          }
          &.is-active {
            color: #fff !important;
            background-color: #f1ae26;
          }
        }
      }
    }
  }
</style>
```

:::

## 校园租赁 Demo

:::demo

```html
<div
  class="gree-example-child gree-example-child-tabs gree-example-child-tab-bar-1"
>
  <gree-tab-bar v-model="current2" :items="items2"></gree-tab-bar>
</div>

<script>
  export default {
    data() {
      return {
        current2: 1,
        items2: [
          { name: 1, label: '租赁' },
          { name: 2, label: '续租' },
          { name: 3, label: '报修' },
          { name: 4, label: '退租' }
        ]
      };
    }
  };
</script>
```

:::

## 横向滚动

:::demo

```html
<div
  class="gree-example-child gree-example-child-tabs gree-example-child-tab-bar-2"
>
  <gree-tab-bar
    v-model="current3"
    :items="items3"
    :maxLength="5"
  ></gree-tab-bar>
</div>

<script>
  export default {
    data() {
      return {
        current3: 1,
        items3: [
          { name: 1, label: '天猫超市' },
          { name: 2, label: '天猫国际' },
          { name: 3, label: '天猫会员' },
          { name: 4, label: '电器城' },
          { name: 5, label: '喵鲜生' },
          { name: 6, label: '医药馆' },
          { name: 7, label: '营业厅' },
          { name: 8, label: '魅力惠' },
          { name: 9, label: '飞猪旅行' },
          { name: 10, label: '苏宁易购' }
        ]
      };
    }
  };
</script>
```

:::

### 手势切换

:::demo

```html
<div
  class="gree-example-child gree-example-child-tabs gree-example-child-tab-bar-4"
>
  <gree-tab-bar
    v-model="current4"
    :items="items4"
    :has-ink="false"
    @change="onTabChange"
  >
    <template slot="item" slot-scope="{ item }">
      <div class="top-item">
        <div class="text">
          <span v-text="item.time"></span>
        </div>
        <div class="text">
          <span v-text="item.text"></span>
        </div>
      </div>
    </template>
  </gree-tab-bar>
  <gree-swiper
    ref="swiper"
    :autoplay="0"
    :is-prevent="false"
    :is-loop="false"
    :has-dots="false"
    @before-change="onSwiperChange"
  >
    <gree-swiper-item>
      <gree-list media-list no-hairlines>
        <gree-list-item
          link
          title="范特西"
          after="主打歌：爱在西元前"
          subtitle="发行日期： 2001 年 9 月 14 日"
          text="《范特西》是台湾歌手周杰伦第二张录音室专辑，由台湾博德曼音乐于2001年9月14日发行。专辑名《范特西》来自英文“Fantasy”音译。"
          media-item
        >
          <img slot="media" src="../../assets/images/fantasy.jpg" width="80" />
        </gree-list-item>
      </gree-list>
    </gree-swiper-item>
    <gree-swiper-item>
      <gree-list media-list no-hairlines>
        <gree-list-item
          link
          title="叶惠美"
          after="主打歌：以父之名"
          subtitle="发行日期： 2003 年 7 月 29 日"
          text="《叶惠美》是台湾歌手周杰伦的第四张录音室专辑，由台湾新力音乐于2003年7月31日发行。"
          media-item
        >
          <img slot="media" src="../../assets/images/ukoo.jpg" width="80" />
        </gree-list-item>
      </gree-list>
    </gree-swiper-item>
    <gree-swiper-item>
      <gree-list media-list no-hairlines>
        <gree-list-item
          link
          title="七里香"
          after="主打歌：我的地盘"
          subtitle="发行日期： 2004 年 8 月 3 日"
          text="《七里香》是台湾歌手周杰伦发行第五张国语专辑。由台湾新力音乐于2004年8月3日发行。"
          media-item
        >
          <img
            slot="media"
            src="../../assets/images/daphne-odera.jpg"
            width="80"
          />
        </gree-list-item>
      </gree-list>
    </gree-swiper-item>
  </gree-swiper>
</div>

<script>
  export default {
    data() {
      return {
        current4: 0,
        items4: [
          { name: 0, time: '17:00', text: '开抢中' },
          { name: 1, time: '20:00', text: '即将开始' },
          { name: 2, time: '00:00', text: '即将开始' }
        ]
      };
    },
    methods: {
      onSwiperChange(from, to) {
        this.current4 = to;
      },
      onTabChange(item, index) {
        this.$refs.swiper.goto(index);
      }
    }
  };
</script>

<style lang="scss">
  .gree-example-child-tab-bar-4 {
    .gree-tab-bar {
      padding: 0;
      background: #333;

      .gree-scroll-view {
        overflow: visible;
      }
      .gree-tab-bar-item {
        min-height: 144px;
        background: #333;
        color: #fff !important;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        &.is-active {
          background: linear-gradient(-45deg, #df3348, #fb4056);
          position: relative;

          &::after {
            content: '';
            height: 0;
            width: 0;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -43px;
            border-top: 23px solid #df3348;
            border-left: 23px solid transparent;
            border-right: 23px solid transparent;
            border-bottom: 23px solid transparent;
            z-index: 5;
          }
        }
      }
    }
    .gree-swiper-item {
      background: #fff;
    }
  }
</style>
```

:::

### 底部标签栏

:::demo

```html
<div
  class="gree-example-child gree-example-child-tabs gree-example-child-tab-bar-3"
>
  <gree-toolbar position="bottom" no-hairline>
    <gree-tab-bar v-model="current5" :items="items5" :has-ink="false">
      <template slot="item" slot-scope="{ item }">
        <div class="custom-item">
          <div class="icon">
            <gree-icon :name="item.icon"></gree-icon>
          </div>
          <div class="text">
            <span v-text="item.label"></span>
          </div>
        </div>
      </template>
    </gree-tab-bar>
  </gree-toolbar>
</div>

<script>
  export default {
    data() {
      return {
        current5: 1,
        items5: [
          { name: 1, label: '首页', icon: 'home' },
          { name: 2, label: '我的', icon: 'voice' }
        ]
      };
    }
  };
</script>
```

:::

## Props

| 属性       | 说明                     | 类型    | 默认值 | 备注                    |
| ---------- | ------------------------ | ------- | ------ | ----------------------- |
| v-model    | 双向绑定的标签对象`name` | String  | \-     | \-                      |
| items      | 标签标题数组             | Array   | \-     | \-                      |
| has-ink    | 是否显示下划线           | Boolean | `true` | \-                      |
| ink-length | 下划线宽度               | Number  | `100`  | 百分比，须在`0-100`之间 |

## Events

### @change(item, index, prevIndex)

标签索引发生变化事件

| 属性      | 说明           | 类型   |
| --------- | -------------- | ------ |
| item      | 选中的标签对象 | Object |
| index     | 选中的标签索引 | Number |
| prevIndex | 上一标签索引   | Number |

<script>
export default {
  data() {
    return {
      current1: 1,
      items1: [
        { name: 1, label: '智能菜单' },
        { name: 2, label: '专业烘焙' },
        { name: 3, label: '专业蒸制' },
        { name: 4, label: '辅助功能' }
      ],
      current2: 1,
      items2: [
        { name: 1, label: '租赁' },
        { name: 2, label: '续租' },
        { name: 3, label: '报修' },
        { name: 4, label: '退租' }
      ],
      current3: 1,
      items3: [
        { name: 1, label: '天猫超市' },
        { name: 2, label: '天猫国际' },
        { name: 3, label: '天猫会员' },
        { name: 4, label: '电器城' },
        { name: 5, label: '喵鲜生' },
        { name: 6, label: '医药馆' },
        { name: 7, label: '营业厅' },
        { name: 8, label: '魅力惠' },
        { name: 9, label: '飞猪旅行' },
        { name: 10, label: '苏宁易购' }
      ],
      current4: 0,
      items4: [
        { name: 0, time: '17:00', text: '开抢中' },
        { name: 1, time: '20:00', text: '即将开始' },
        { name: 2, time: '00:00', text: '即将开始' }
      ],
      current5: 1,
      items5: [
        { name: 1, label: '首页', icon: 'home' },
        { name: 2, label: '我的', icon: 'voice' }
      ]
    };
  },
  methods: {
    onChange(item, index, prevIndex) {
      console.log(
        `currentIndex: ${index}, prevIndex: ${prevIndex}, label: ${item.label}`
      );
    },
    onSwiperChange(from, to) {
      this.current4 = to;
    },
    onTabChange(item, index) {
      this.$refs.swiper.goto(index);
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .gree-tab-bar-item.is-active {
  color: #00aeff !important;
}
.gree-example-child-tab-bar-0 {
  width: 80%;
  color: #666f83;
  /deep/ .gree-tab-bar.all-in-one {
    padding: 0;
    background-color: #212127;
    .gree-tab-bar-list {
      .gree-tab-bar-item {
        color: #bcbcbd;
        font-size: 19px;
        min-height: 65px;
        flex: 1;
        &:not(.is-active):before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: auto;
          bottom: auto;
          width: 200%;
          height: 200%;
          border-left: 1px solid #36363c;
          box-sizing: border-box;
          transform-origin: 0 0;
          transform: scale(0.5);
          z-index: 2;
        }
        &.is-active {
          color: #fff !important;
          background-color: #f1ae26;
        }
      }
    }
  }
}
.gree-example-child-tab-bar-3 {
  /deep/ .gree-tab-bar {
    width: 100%;
    .custom-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex: 1;
      .text {
        font-size: 18px;
      }
    }
  }
}

.gree-example-child-tab-bar-4 {
  /deep/.gree-tab-bar {
    padding: 0;
    background: #333;

    .gree-scroll-view {
      overflow: visible;
    }
    .gree-tab-bar-item {
      min-height: 72px;
      background: #333;
      color: #fff !important;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &.is-active {
        background: linear-gradient(-45deg, #df3348, #fb4056);
        position: relative;

        &::after {
          content: '';
          height: 0;
          width: 0;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -21px;
          border-top: 12px solid #df3348;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-bottom: 12px solid transparent;
          z-index: 5;
        }
      }
    }
  }
  .gree-swiper-item {
    background: #fff;
  }
}
</style>
