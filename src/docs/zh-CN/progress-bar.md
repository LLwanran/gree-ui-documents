# 进度条

展示操作或任务的当前进度

## 按需引入

```javascript
import { ProgressBar } from "gree-ui";

Vue.component(ProgressBar.name, ProgressBar);
```

## 基础

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-progress-bar gree-example-child-progress-bar-0"
  >
    <gree-progress-bar :percent="25"></gree-progress-bar>
    <gree-progress-bar :percent="45" status="active"></gree-progress-bar>
    <gree-progress-bar :percent="65" status="wrong"></gree-progress-bar>
    <gree-progress-bar :percent="100"></gree-progress-bar>
    <gree-progress-bar :percent="25" hide-info></gree-progress-bar>
  </div>
</gree-block>

<style lang="stylus">
  .gree-example-child-progress-bar-0
    .gree-progress-bar-outer
      width 'calc(100% - %s)' % 110px
</style>
```

:::

## 百分比内显

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-progress-bar gree-example-child-progress-bar-1"
  >
    <gree-progress-bar
      :percent="25"
      :stroke-width="20"
      text-inside
    ></gree-progress-bar>
    <gree-progress-bar
      :percent="45"
      :stroke-width="20"
      status="active"
      text-inside
    ></gree-progress-bar>
    <gree-progress-bar
      :percent="65"
      :stroke-width="20"
      status="wrong"
      text-inside
    ></gree-progress-bar>
    <gree-progress-bar
      :percent="100"
      :stroke-width="20"
      text-inside
    ></gree-progress-bar>
  </div>
</gree-block>

<style lang="stylus">
  .gree-example-child-progress-bar-1
    .gree-progress-bar
      margin-bottom 15px
</style>
```

:::

## 垂直方向

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-progress-bar gree-example-child-progress-bar-2"
  >
    <gree-progress-bar vertical :percent="67">
      <span>67%</span>
    </gree-progress-bar>
    <gree-progress-bar vertical :percent="45">
      <span>45%</span>
    </gree-progress-bar>
    <gree-progress-bar vertical :percent="90">
      <span>90%</span>
    </gree-progress-bar>
    <gree-progress-bar vertical :percent="15" status="wrong">
      <span>15%</span>
    </gree-progress-bar>
  </div>
</gree-block>

<style lang="stylus">
  .gree-example-child-progress-bar-2
    display flex
    align-items center
    justify-content space-around
    overflow hidden

    .gree-progress-bar-vertical
      height 415px

      .gree-progress-bar-inner
        background-color #fff
        border-radius 15px

        .gree-progress-bar-bg
          width 75px !important
          background-color #8cd3fc
          border-radius 15px
          border-top-left-radius 0
          border-top-right-radius 0

      .gree-progress-bar-text
        position absolute
        top 25px
        left 50%
        transform translateX(-50%)
        color #404657
        font-size 24px
        margin-left 0

    .gree-progress-bar-wrong
      .gree-progress-bar-bg
        background-color #ff7777 !important
</style>
```

:::

## 渐变色

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-progress-bar gree-example-child-progress-bar-3"
  >
    <gree-progress-bar
      :percent="90"
      :stroke-color="['#2d8cf0', '#19be6b']"
    ></gree-progress-bar>
  </div>
</gree-block>

<style lang="stylus">
  .gree-example-child-progress-bar-3
    .gree-progress-bar-outer
      width 'calc(100% - %s)' % 110px
</style>
```

:::

## 电池电量

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-progress-bar gree-example-child-progress-bar-4"
  >
    <div class="battery">
      <gree-progress-bar :percent="percent" hide-info></gree-progress-bar>
    </div>
  </div>
</gree-block>

<script>
  export default {
    data() {
      return {
        percent: 0
      };
    },
    mounted() {
      const intervalID = setInterval(() => {
        this.percent += 20;
        if (this.percent >= 100) {
          clearInterval(intervalID);
        }
      }, 2000);
    }
  };
</script>

<style lang="stylus">
  .gree-example-child-progress-bar-4
    display flex
    align-items center
    justify-content center

    .battery
      display inline-block
      position relative
      width 330px
      height 185px
      box-shadow 0 0 0 7px #666
      background #fff
      border-radius 12px

      &::before
        content ''
        position absolute
        top 50%
        right -30px
        transform translateY(-50%)
        height 85px
        width 30px
        background #666
        border-top-right-radius 10px
        border-bottom-right-radius 10px

      &::after
        content ''
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        border 10px solid transparent

      .gree-progress-bar
        .gree-progress-bar-outer
          width 'calc(100% - %s)' % 20px
          margin-top 12px
          margin-left 12px

          .gree-progress-bar-inner
            background-color #fff
            border-radius 10px

            .gree-progress-bar-bg
              height 160px !important
              background-color #93D894
              border-radius 10px
</style>
```

:::

## Props

| 属性            | 说明                                                 | 类型         | 默认值 |
| --------------- | ---------------------------------------------------- | ------------ | ------ |
| percent         | 百分比                                               | Number       | 0      |
| status          | 状态，可选值为`normal`、`active`、`wrong`、`success` | String       | normal |
| stroke-width    | 进度条的线宽，单位 px                                | Number       | 10     |
| stroke-color    | 进度条的颜色，支持传入数组，显示为渐变色             | String/Array | \-     |
| hide-info       | 隐藏数值或状态图标                                   | Boolean      | false  |
| vertical        | 是否在垂直方向显示                                   | Boolean      | false  |
| success-percent | 已完成的分段百分比                                   | Number       | 0      |
| text-inside     | 百分比是否置于进度条内                               | Boolean      | false  |

### Tips

- 处在不同状态下的进度条，当 `percent` 为 `100` 时，自动将状态置为 `success`
- 设置属性 `text-inside` 可以将百分比显示在进度条内部，需要通过属性 `stroke-width` 设置一个足够的高度
- 设置属性 `vertical` 将以垂直方向显示
- 通过数据的联动和逻辑控制，实现动态效果
- 设置属性 `stroke-color` 为数组时，可以显示为渐变色，数组只能设置为两项

<script>
  export default {
    data() {
      return {
        percent: 0
      };
    },
    mounted() {
      const intervalID = setInterval(() => {
        this.percent += 20;
        if (this.percent >= 100) {
          clearInterval(intervalID);
        }
      }, 2000);
    }
  };
</script>

<style lang="css">
.gree-example-child-progress-bar-0 .gree-progress-bar-outer {
	width: calc(100% - 110px);
}

.gree-example-child-progress-bar-1 .gree-progress-bar {
	margin-bottom: 15px;
}

.gree-example-child-progress-bar-2 {
	display: flex;
	align-items: center;
	justify-content: space-around;
	overflow: hidden;
}

.gree-example-child-progress-bar-2 .gree-progress-bar-vertical {
	height: 415px;
}

.gree-example-child-progress-bar-2 .gree-progress-bar-vertical .gree-progress-bar-inner {
	background-color: #fff;
	border-radius: 15px;
}

.gree-example-child-progress-bar-2 .gree-progress-bar-vertical .gree-progress-bar-inner .gree-progress-bar-bg {
	width: 75px !important;
	background-color: #8cd3fc;
	border-radius: 15px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}

.gree-example-child-progress-bar-2 .gree-progress-bar-vertical .gree-progress-bar-text {
	position: absolute;
	top: 25px;
	left: 50%;
	transform: translateX(-50%);
	color: #404657;
	font-size: 24px;
	margin-left: 0;
}

.gree-example-child-progress-bar-2 .gree-progress-bar-wrong .gree-progress-bar-bg {
	background-color: #f77 !important;
}

.gree-example-child-progress-bar-3 .gree-progress-bar-outer {
	width: calc(100% - 110px);
}

.gree-example-child-progress-bar-4 {
	display: flex;
	align-items: center;
	justify-content: center;
}

.gree-example-child-progress-bar-4 .battery {
	display: inline-block;
	position: relative;
	width: 330px;
	height: 185px;
	box-shadow: 0 0 0 7px #666;
	background: #fff;
	border-radius: 12px;
}

.gree-example-child-progress-bar-4 .battery::before {
	content: '';
	position: absolute;
	top: 50%;
	right: -30px;
	transform: translateY(-50%);
	height: 85px;
	width: 30px;
	background: #666;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}

.gree-example-child-progress-bar-4 .battery::after {
	content: '';
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	border: 10px solid transparent;
}

.gree-example-child-progress-bar-4 .battery .gree-progress-bar .gree-progress-bar-outer {
	width: calc(100% - 20px);
	margin-top: 12px;
	margin-left: 12px;
}

.gree-example-child-progress-bar-4 .battery .gree-progress-bar .gree-progress-bar-outer .gree-progress-bar-inner {
	background-color: #fff;
	border-radius: 10px;
}

.gree-example-child-progress-bar-4 .battery .gree-progress-bar .gree-progress-bar-outer .gree-progress-bar-inner .gree-progress-bar-bg {
	height: 160px !important;
	background-color: #93d894;
	border-radius: 10px;
}
</style>
