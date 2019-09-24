# 滚动区域/下拉刷新

用于模拟原生的滚动区域，并支持下拉刷新和加载更多

## 按需引入

```javascript
import { ScrollView, ScrollViewRefresh, ScrollViewMore } from 'gree-ui';

Vue.component(ScrollView.name, ScrollView);
Vue.component(ScrollViewRefresh.name, ScrollViewRefresh);
Vue.component(ScrollViewMore.name, ScrollViewMore);
```

### 纵向滚动

:::demo

```html
<div class="gree-example-child-scroll-view-1">
  <gree-scroll-view ref="scrollView1" :scrolling-x="false" @scroll="onScroll">
    <gree-list>
      <gree-list-item
        v-for="i in list"
        :key="i"
        :title="i"
        @click.native="onItemClick(i)"
      >
        <gree-icon name="home" slot="media"></gree-icon>
      </gree-list-item>
    </gree-list>
  </gree-scroll-view>
</div>

<script>
  export default {
    data() {
      return {
        list: 20
      };
    },
    methods: {
      onItemClick(i) {
        Toast.info(`Click ${i}`);
      },
      onScroll({ scrollLeft, scrollTop }) {
        console.log(
          `[Gree UI ScrollView - onScroll] scrollLeft: ${scrollLeft}, scrollTop: ${scrollTop}`
        );
      }
    }
  };
</script>
```

:::

### 横向滚动

:::demo

```html
<div class="gree-example-child-scroll-view-2">
  <gree-scroll-view
    ref="scrollView2"
    :scrolling-y="false"
    :touch-angle="80"
    :is-prevent="false"
  >
    <div class="scroll-view-list">
      <p v-for="i in list" :key="i" class="scroll-view-item">{{ i }}</p>
    </div>
  </gree-scroll-view>
</div>

<script>
  export default {
    data() {
      return {
        list: 20
      };
    }
  };
</script>
```

:::

### 下拉刷新

:::demo

```html
<div class="gree-example-child-scroll-view-3">
  <gree-scroll-view
    ref="scrollView3"
    :scrolling-x="false"
    @refreshing="onRefresh"
  >
    <gree-scroll-view-refresh
      slot="refresh"
      slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"
      :scroll-top="scrollTop"
      :is-refreshing="isRefreshing"
      :is-refresh-active="isRefreshActive"
    ></gree-scroll-view-refresh>
    <div v-for="i in list3" :key="i" class="scroll-view-list">
      <p class="scroll-view-item">{{i}}</p>
    </div>
  </gree-scroll-view>
</div>

<script>
  export default {
    data() {
      return {
        list3: 5
      };
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.list3 += 5;
          this.$refs.scrollView3.finishRefresh();
        }, 2000);
      }
    }
  };
</script>
```

:::

### 加载更多

:::demo

```html
<div class="gree-example-child-scroll-view-4">
  <gree-scroll-view
    ref="scrollView4"
    :scrolling-x="false"
    @end-reached="onEndReached"
  >
    <div v-for="i in list4" :key="i" class="scroll-view-list">
      <p class="scroll-view-item">{{i}}</p>
    </div>
    <gree-scroll-view-more
      slot="more"
      :is-finished="isFinished"
    ></gree-scroll-view-more>
  </gree-scroll-view>
</div>

<script>
  export default {
    data() {
      return {
        list4: 10,
        isFinished: false
      };
    },
    methods: {
      onEndReached() {
        if (this.isFinished) {
          return;
        }
        setTimeout(() => {
          this.list4 += 5;
          if (this.list4 >= 20) {
            this.isFinished = true;
          }
          this.$refs.scrollView4.finishLoadMore();
        }, 1000);
      }
    }
  };
</script>
```

:::

## ScrollView Props

| 属性                         | 说明                               | 类型    | 默认值  | 备注                                                                  |
| ---------------------------- | ---------------------------------- | ------- | ------- | --------------------------------------------------------------------- |
| scrolling-x                  | 水平滚动                           | Boolean | `true`  | \-                                                                    |
| scrolling-y                  | 垂直滚动                           | Boolean | `true`  | \-                                                                    |
| bouncing                     | 可回弹                             | Boolean | `true`  | \-                                                                    |
| auto-reflow                  | 内容发生变化时自动重置滚动区域尺寸 | Boolean | `false` | 当设置为`false`时，内容发生变化需手动调用`reflowScroller`             |
| manual-init                  | 手动初始化                         | Boolean | `false` | 一般用于异步初始化的场景，需手动调用`init`方法完成初始化              |
| end-reached-threshold        | 触发到达底部的提前量               | Number  | 0       | 单位`px`                                                              |
| immediate-check-end-reaching | 初始化时立即触发是否到达底部检查   | Boolean | `false` | \-                                                                    |
| touch-angle                  | 触发滚动的角度范围                 | Number  | 45      | 单位`deg`                                                             |
| is-prevent                   | 阻止浏览器默认滚动                 | Boolean | `true`  | 如果设置为`false`，当在非可滚动角度范围触发滚动时会触发浏览器默认滚动 |

## ScrollViewRefresh Props

| 属性                | 说明           | 类型    | 默认值      | 备注     |
| ------------------- | -------------- | ------- | ----------- | -------- |
| scroll-top          | 距离顶部距离   | Number  | `0`         | 单位`px` |
| is-refresh-active   | 释放可刷新状态 | Boolean | `false`     | \-       |
| is-refreshing       | 刷新中状态     | Boolean | `false`     | \-       |
| refresh-text        | 待刷新文案     | String  | `下拉刷新`  | \-       |
| refresh-active-text | 释放可刷新文案 | String  | `释放刷新`  | \-       |
| refreshing-text     | 刷新中文案     | String  | `刷新中...` | \-       |
| roller-color        | 进度条颜色     | String  | `#2f86f6`   |

## ScrollViewMore Props

| 属性          | 说明           | 类型    | 默认值          | 备注 |
| ------------- | -------------- | ------- | --------------- | ---- |
| is-finished   | 全部已加载     | Boolean | `false`         | \-   |
| loading-text  | 加载中文案     | String  | `更多加载中...` | \-   |
| finished-text | 全部已加载文案 | String  | `全部已加载`    |

## Methods

### init()

初始化滚动区域，当`manual-init`设置为`true`时使用

### reflowScroller()

重置滚动区域，一般滚动区域中的内容发生变化之后需调用

### scrollTo(left, top, animate = false)

滚动至指定位置

### triggerRefresh()

触发下拉刷新

### finishRefresh()

停止下拉刷新

### finishLoadMore()

停止加载更多

## Events

### @scroll({scrollLeft, scrollTop})

滚动事件

### @refreshActive()

释放可刷新事件

### @refreshing()

刷新中事件

### @end-reached()

滚动触底事件

<script>
export default {
  data() {
    return {
      list: 20,
      list3: 5,
      list4: 10,
      isFinished: false
    };
  },
  mounted() {
    window.ScrollViewTrigger = () => {
      this.addItems();
    };
  },
  methods: {
    onItemClick(i) {
      Toast.info(`Click ${i}`);
    },
    onScroll({ scrollLeft, scrollTop }) {
      console.log(
        `[Gree UI ScrollView - onScroll] scrollLeft: ${scrollLeft}, scrollTop: ${scrollTop}`
      );
    },
    addItems() {
      this.list += 10;
    },
    onRefresh() {
      setTimeout(() => {
        this.list3 += 5;
        this.$refs.scrollView3.finishRefresh();
      }, 2000);
    },
    onEndReached() {
      if (this.isFinished) {
        return;
      }
      setTimeout(() => {
        this.list4 += 5;
        if (this.list4 >= 20) {
          this.isFinished = true;
        }
        this.$refs.scrollView4.finishLoadMore();
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.gree-example-child-scroll-view-1 {
  width: 100%;
  height: 800px;
  background: #fff;
  .scroll-view-item {
    padding: 30px 0;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    border-bottom: 1px solid #efefef;
  }
  /deep/ .list .item-content .item-inner .item-title {
    width: 100%;
    text-align: center;
  }
}
.gree-example-child-scroll-view-2 {
  width: 100%;
  height: 100px;
  background: #fff;
  .gree-scroll-view {
    display: flex;
    align-items: center;
    .scroll-view-list {
      display: flex;
      width: 2000px;
      .scroll-view-item {
        flex: 1;
        text-align: center;
        font-size: 30px;
        font-weight: 500;
        border-right: 1px solid #efefef;
        margin-bottom: 0;
      }
    }
  }
}
.gree-example-child-scroll-view-3 {
  width: 100%;
  height: 800px;
  background: #fff;
  .scroll-view-item {
    padding: 30px 0;
    text-align: center;
    font-size: 28px;
    border-bottom: 1px solid #efefef;
  }
}
.gree-example-child-scroll-view-4 {
  width: 100%;
  height: 800px;
  background: #fff;
  .scroll-view-item {
    padding: 30px 0;
    text-align: center;
    font-size: 32px;
    border-bottom: 1px solid #efefef;
  }
}
/deep/ .gree-scroll-view-refresh {
  .gree-activity-indicator-rolling .gree-activity-indicator-svg {
    width: 32px !important;
    height: 32px !important;
  }
  .refresh-tip {
    margin-left: 15px;
    margin-bottom: 0;
    font-size: 24px;
  }
}
</style>
