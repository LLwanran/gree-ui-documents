# 弹出层

由其他控件触发，屏幕滑出或弹出一块自定义内容区域

## 按需引入

```javascript
import { Popup } from 'gree-ui';

Vue.component(Popup.name, Popup);
```

### 示例 1

:::demo

```html
<div class="page-header">
  <gree-header theme="transparent" :right-options="{showMore: true}"
    >IH电饭煲GDCF-40X61CIH</gree-header
  >
  <div class="wrapper">
    <label @click="showPopUpCenter('center')">
      长粒米&emsp;适中
      <i class="arrow"></i>
    </label>
  </div>
</div>
<gree-popup v-model="isPopupShowCenter.center" position="center">
  <div class="popup-center">
    <div class="title">精煮饭约50分钟</div>
    <gree-list>
      <gree-list-item media-item>
        <label slot="media">米种</label>
        <gree-row slot="title">
          <gree-radio
            :name="1"
            v-model="rice"
            icon
            icon-inverse
            icon-disabled
            label="长粒米"
            inline
          ></gree-radio>
          <gree-radio
            :name="2"
            v-model="rice"
            icon
            icon-inverse
            icon-disabled
            label="短粒米"
            inline
            disabled
          ></gree-radio>
          <gree-radio
            :name="3"
            v-model="rice"
            icon
            icon-inverse
            icon-disabled
            label="糙米"
            inline
          ></gree-radio>
        </gree-row>
      </gree-list-item>
      <gree-list-item media-item>
        <label slot="media">口感</label>
        <gree-row slot="title">
          <gree-radio
            name="1"
            v-model="taste"
            icon
            icon-inverse
            icon-disabled
            label="稍软"
            inline
          ></gree-radio>
          <gree-radio
            name="2"
            v-model="taste"
            icon
            icon-inverse
            icon-disabled
            label="适中"
            inline
          ></gree-radio>
          <gree-radio
            name="3"
            v-model="taste"
            icon
            icon-inverse
            icon-disabled
            label="稍硬"
            inline
          ></gree-radio>
        </gree-row>
      </gree-list-item>
    </gree-list>
    <footer class="actions">
      <div class="popup-btn" @click="hidePopUpCenter('center')">取消</div>
      <div class="popup-btn" @click="hidePopUpCenter('center')">开始</div>
    </footer>
  </div>
</gree-popup>

<script>
  export default {
    data() {
      return {
        isPopupShowCenter: {},
        rice: 1,
        taste: '2'
      };
    },
    methods: {
      showPopUpCenter(type) {
        this.$set(this.isPopupShowCenter, type, true);
      },
      hidePopUpCenter(type) {
        this.$set(this.isPopupShowCenter, type, false);
      }
    }
  };
</script>
```

:::

### 示例 2

:::demo

```html
<gree-block>
  <gree-row icon :options="options" @selected="selectedDemo"></gree-row>
</gree-block>
<gree-popup v-model="isPopupShowBottom.bottom" position="bottom">
  <div class="popup-bottom">
    <div class="arrow-down" @touchend.stop="hidePopUpDemo('bottom')"></div>
    <gree-row
      icon
      :options="optionsPopupBottom"
      @selected="selectedPopup"
    ></gree-row>
  </div>
</gree-popup>

<script>
  export default {
    data() {
      return {
        options: [
          {
            icon: 'power',
            size: 'xl',
            class: 'disabled',
            text: '开关'
          },
          {
            icon: 'menu',
            size: 'xl',
            class: '',
            text: '功能'
          },
          {
            icon: 'voice',
            size: 'xl',
            class: 'disabled',
            text: '语音'
          }
        ],
        isPopupShowBottom: {},
        optionsPopupBottom: [
          {
            icon: 'home',
            size: 'xl',
            class: '',
            text: '精煮饭',
            width: 25
          },
          {
            icon: 'warning',
            size: 'xl',
            class: '',
            text: '快煮饭',
            width: 25
          },
          {
            icon: 'share',
            size: 'xl',
            class: '',
            text: '发芽饭',
            width: 25
          },
          {
            icon: 'search',
            size: 'xl',
            class: 'triangle-down-right',
            text: '煮粥',
            width: 25
          },
          {
            icon: 'question',
            size: 'xl',
            class: 'triangle-down-right',
            text: '糙米饭',
            width: 25
          }
        ]
      };
    },
    methods: {
      showPopUpDemo(type) {
        this.$set(this.isPopupShowBottom, type, true);
      },
      hidePopUpDemo(type) {
        this.$set(this.isPopupShowBottom, type, false);
      },
      selectedPopup(index) {
        console.log(index);
      }
    }
  };
</script>
```

:::

### 顶部弹出

:::demo

```html
<gree-block>
  <gree-button @click="showPopUp('top')">顶部弹出</gree-button>
</gree-block>
<gree-popup v-model="isPopupShow.top" :hasMask="false" position="top">
  <div class="gree-example-popup gree-example-popup-top">
    Popup Top
    <gree-icon name="close" @click.native="hidePopUp('top')"></gree-icon>
  </div>
</gree-popup>

<script>
  export default {
    data() {
      return {
        isPopupShow: {}
      };
    },
    methods: {
      showPopUp(type) {
        this.$set(this.isPopupShow, type, true);
      },
      hidePopUp(type) {
        this.$set(this.isPopupShow, type, false);
      }
    }
  };
</script>
```

:::

### 底部弹出

:::demo

```html
<gree-block>
  <gree-button @click="showPopUp('bottom')">底部弹出</gree-button>
</gree-block>
<gree-popup
  v-model="isPopupShow.bottom"
  position="bottom"
  :mask-closable="false"
>
  <gree-popup-title-bar
    title="标题"
    describe="描述"
    ok-text="确认"
    cancel-text="取消"
    large-radius
    @confirm="hidePopUp('bottom')"
    @cancel="hidePopUp('bottom')"
  ></gree-popup-title-bar>
  <div class="gree-example-popup gree-example-popup-align">
    <gree-scroll-view :scrolling-x="false">
      <p>滚动区域视图</p>
    </gree-scroll-view>
  </div>
</gree-popup>

<script>
  export default {
    data() {
      return {
        isPopupShow: {}
      };
    },
    methods: {
      showPopUp(type) {
        this.$set(this.isPopupShow, type, true);
      },
      hidePopUp(type) {
        this.$set(this.isPopupShow, type, false);
      }
    }
  };
</script>
```

:::

### 左侧弹出

:::demo

```html
<gree-block>
  <gree-button @click="showPopUp('left')">左侧弹出</gree-button>
</gree-block>
<gree-popup v-model="isPopupShow.left" position="left">
  <div class="gree-example-popup gree-example-popup-left">Popup Left</div>
</gree-popup>

<script>
  export default {
    data() {
      return {
        isPopupShow: {}
      };
    },
    methods: {
      showPopUp(type) {
        this.$set(this.isPopupShow, type, true);
      }
    }
  };
</script>
```

:::

### 右侧弹出

:::demo

```html
<gree-block>
  <gree-button @click="showPopUp('right')">右侧弹出</gree-button>
</gree-block>
<gree-popup v-model="isPopupShow.right" position="right">
  <div class="gree-example-popup gree-example-popup-right">Popup Right</div>
</gree-popup>

<script>
  export default {
    data() {
      return {
        isPopupShow: {}
      };
    },
    methods: {
      showPopUp(type) {
        this.$set(this.isPopupShow, type, true);
      }
    }
  };
</script>
```

:::

## Props

| 属性          | 说明                     | 类型    | 默认值   | 备注                                   |
| ------------- | ------------------------ | ------- | -------- | -------------------------------------- |
| v-model       | 弹出层是否可见           | Boolean | `false`  | \-                                     |
| has-mask      | 是否有蒙层               | Boolean | `true`   | \-                                     |
| mask-closable | 点击蒙层是否可关闭弹出层 | Boolean | `true`   | \-                                     |
| position      | 弹出层位置               | String  | `center` | `center`,`top`,`bottom`,`left`,`right` |
| transition    | 弹出层过度动画           | String  | \-       | 参考组件`Transition`                   |

## PopupTitleBar Props

| 属性         | 说明             | 类型    | 默认值   | 备注                                        |
| ------------ | ---------------- | ------- | -------- | ------------------------------------------- |
| title        | 标题             | String  | \-       | \-                                          |
| describe     | 描述             | String  | \-       | \-                                          |
| ok-text      | 确认按钮文案     | String  | \-       | 为空则没有确认按钮                          |
| cancel-text  | 取消按钮文案     | String  | \-       | 为空则没有取消按钮                          |
| large-radius | 大圆角模式       | Boolean | `false`  | \-                                          |
| only-close   | 只有右侧关闭按钮 | Boolean | `false`  | \-                                          |
| title-align  | 标题和描述位置   | String  | `center` | 注意`left`和`right`时会分别隐藏左右两侧按钮 |

## Events

### @beforeShow()

弹出层即将展示事件

### @show()

弹出层展示事件

### @beforeHide()

弹出层即将隐藏事件

### @hide()

弹出层隐藏事件

## PopupTitleBar Events

### @confirm()

确认选择事件

### @cancel()

取消选择事件

<script>
export default {
  data() {
    return {
      options: [
        {
          icon: 'power',
          size: 'xl',
          class: 'disabled',
          text: '开关'
        },
        {
          icon: 'menu',
          size: 'xl',
          class: '',
          text: '功能'
        },
        {
          icon: 'voice',
          size: 'xl',
          class: 'disabled',
          text: '语音'
        }
      ],
      isPopupShowBottom: {},
      optionsPopupBottom: [
        {
          icon: 'home',
          size: 'xl',
          class: '',
          text: '精煮饭',
          width: 25
        },
        {
          icon: 'warning',
          size: 'xl',
          class: '',
          text: '快煮饭',
          width: 25
        },
        {
          icon: 'share',
          size: 'xl',
          class: '',
          text: '发芽饭',
          width: 25
        },
        {
          icon: 'search',
          size: 'xl',
          class: 'triangle-down-right',
          text: '煮粥',
          width: 25
        },
        {
          icon: 'question',
          size: 'xl',
          class: 'triangle-down-right',
          text: '糙米饭',
          width: 25
        }
      ],
      isPopupShowCenter: {},
      rice: 1,
      taste: '2',
      isPopupShow: {}
    };
  },
  methods: {
    showPopUpDemo(type) {
      this.$set(this.isPopupShowBottom, type, true);
    },
    hidePopUpDemo(type) {
      this.$set(this.isPopupShowBottom, type, false);
    },
    showPopUpCenter(type) {
      this.$set(this.isPopupShowCenter, type, true);
    },
    hidePopUpCenter(type) {
      this.$set(this.isPopupShowCenter, type, false);
    },
    showPopUp(type) {
      this.$set(this.isPopupShow, type, true);
    },
    hidePopUp(type) {
      this.$set(this.isPopupShow, type, false);
    },
    selectedDemo(index) {
      if (index === 1) {
        this.showPopUpDemo('bottom');
      }
    },
    selectedPopup(index) {
      console.log(index);
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .gree-radio {
  &.is-inline {
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    width: 73px;
    height: 42px;
    justify-content: center;
    &.is-checked {
      border-color: #f2da7c;
      background-color: #f2da7c;
    }
  }
}
.page-header {
  position: relative;
  width: 100%;
  height: 288px;
  margin-bottom: 7px;
  background-image: url('../../assets/images/ac_bg_auto.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  overflow: hidden;
  .wrapper {
    padding: 67px 21px 0;
    label {
      color: #fff;
      font-size: 22px;
      .arrow {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 5px;
        border-top: 3px transparent solid;
        border-right: 3px #fff solid;
        border-left: 3px transparent solid;
        border-bottom: 3px #fff solid;
      }
    }
  }
  .bar-top {
    position: absolute;
    top: 56px;
    left: 15px;
    width: 100%;
    z-index: 998;
    .col {
      text-align: left;
      i.icon-font {
        color: #fff;
      }
    }
  }
}
/deep/ .popup-center, .popup-bottom {
  position: relative;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  .arrow-down {
    text-align: center;
    position: relative;
    margin-bottom: 5px;
    &::after {
      content: '';
      width: 19px;
      height: 8px;
      display: inline-block;
      background: url('../../assets/images/ic_pulldown.png') no-repeat;
      background-size: 100%;
    }
  }
}
/deep/ .popup-center {
  width: 475px;
  text-align: center;
  border-radius: 5px;
  color: #404657;
  background-color: #fff;
  box-shadow: #dbdbdb 0 0 2px 0;
  padding-bottom: 0;
  .title {
    font-size: 26px;
  }
  .list {
    ul {
      &:before,
      &:after {
        background-color: transparent;
      }
      li {
        .item-media {
          font-size: 21px;
        }
        .item-inner::after {
          background-color: transparent;
        }
        .item-title {
          .row {
            margin-left: 0;
            margin-right: 0;
          }
        }
        .gree-radio {
          &.is-inline {
            border: 1px solid #e4e4e4;
            border-radius: 2px;
            &.is-checked {
              border-color: #f2da7c;
              background-color: #f2da7c;
            }
          }
        }
      }
    }
  }
  .actions {
    position: relative;
    display: flex;
    &::after {
      content: '';
      position: absolute;
      z-index: 2;
      background-color: #c8c7cc;
      transform-origin: 100% 50%;
      transform: scaleY(0.5) translateY(-100%);
      top: 0;
      left: 0;
      right: auto;
      bottom: auto;
      width: 100%;
      height: 1px;
      transform-origin: 50% 0;
    }
    .popup-btn {
      position: relative;
      flex: 1 1 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      font-size: 20px;
      font-weight: 500;
      color: #666f83;
      text-align: center;
      transition: background-color 0.3s;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      &::before {
        content: '';
        position: absolute;
        z-index: 2;
        background-color: #c8c7cc;
        transform: scaleX(0.5) translateX(100%);
        top: 0;
        right: 0;
        left: auto;
        bottom: auto;
        width: 1px;
        height: 100%;
        transform-origin: 100% 50%;
      }
      &:last-child::before {
        display: none;
      }
    }
  }
}
.gree-example-popup {
  position: relative;
  color: #ff0202;
  font-size: 18px;
  box-sizing: border-box;
  text-align: center;
  background-color: #fff;
  &.gree-example-popup-top {
    width: 100%;
    height: 75px;
    line-height: 75px;
    background: #4a4c5b;
    color: #fff;
    .gree-icon {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.gree-example-popup-align {
    padding: 30px;
    .gree-scroll-view {
      height: 500px;
      background: #eee;
      p {
        line-height: 500px;
        font-size: 64px;
        font-weight: 200;
        color: #999;
      }
    }
  }
  &.gree-example-popup-left,
  &.gree-example-popup-right {
    height: 100%;
    padding: 0 100px;
    display: flex;
    align-items: center;
  }
}
</style>
