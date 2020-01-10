# 倒计时

倒计时组件

## 按需引入

```javascript
import { CountDown } from 'gree-ui';

Vue.component(CountDown.name, CountDown);
```

### 基础

:::demo

```html
<div
  class="gree-example-child gree-example-child-count-down gree-example-child-count-down-0"
>
  <gree-list>
    <gree-list-item>
      <gree-count-down :time="time" slot="title" />
    </gree-list-item>
  </gree-list>
</div>

<script>
  export default {
    data() {
      return {
        time: 30 * 60 * 60 * 1000
      };
    }
  };
</script>
```

:::

### 自定义格式

:::demo

```html
<div
  class="gree-example-child gree-example-child-count-down gree-example-child-count-down-1"
>
  <gree-list>
    <gree-list-item>
      <gree-count-down :time="time" :format="formatWithDay" slot="title" />
    </gree-list-item>
  </gree-list>
</div>

<script>
  export default {
    data() {
      return {
        time: 30 * 60 * 60 * 1000,
        formatWithDay: 'DD 天 HH 时 mm 分 ss 秒'
      };
    }
  };
</script>
```

:::

### 毫秒级渲染

:::demo

```html
<div
  class="gree-example-child gree-example-child-count-down gree-example-child-count-down-2"
>
  <gree-list>
    <gree-list-item>
      <gree-count-down
        millisecond
        :time="time"
        format="HH:mm:ss:SS"
        slot="title"
      />
    </gree-list-item>
  </gree-list>
</div>

<script>
  export default {
    data() {
      return {
        time: 30 * 60 * 60 * 1000
      };
    }
  };
</script>
```

:::

### 自定义样式

:::demo

```html
<div
  class="gree-example-child gree-example-child-count-down gree-example-child-count-down-3"
>
  <gree-list>
    <gree-list-item>
      <gree-count-down :time="time" slot="title">
        <template v-slot="currentTime">
          <span class="item">{{ currentTime.hours }}</span>:
          <span class="item">{{ currentTime.minutes }}</span>:
          <span class="item">{{ currentTime.seconds }}</span>
        </template>
      </gree-count-down>
    </gree-list-item>
  </gree-list>
</div>

<script>
  export default {
    data() {
      return {
        time: 30 * 60 * 60 * 1000
      };
    }
  };
</script>

<style lang="scss">
  .gree-example-child-count-down-3 {
    .gree-count-down {
      height: 69px;
      color: #333;
      .item {
        color: #333;
        font-size: 35px;
        display: inline-block;
        vertical-align: middle;
        margin: 0 12px;
        width: 69px;
        height: 69px;
        line-height: 69px;
        text-align: center;
        background: #fc0;
        border-radius: 12px;
      }
    }
  }
</style>
```

:::

### 手动控制

:::demo

```html
<div
  class="gree-example-child gree-example-child-count-down gree-example-child-count-down-4"
>
  <gree-list>
    <gree-list-item>
      <gree-count-down
        ref="countDown"
        millisecond
        :time="3000"
        :auto-start="false"
        format="ss:SSS"
        @finish="finish"
        slot="title"
      ></gree-count-down>
      <gree-row slot="after">
        <gree-col>
          <gree-button type="positive" icon="power" inline plain @click="start"
            >开始</gree-button
          >
          <gree-button type="assertive" icon="clock" inline plain @click="pause"
            >暂停</gree-button
          >
          <gree-button icon="refresh" inline plain @click="reset"
            >重置</gree-button
          >
        </gree-col>
      </gree-row>
    </gree-list-item>
  </gree-list>
</div>

<script>
  export default {
    methods: {
      start() {
        this.$refs.countDown.start();
      },
      pause() {
        this.$refs.countDown.pause();
      },
      reset() {
        this.$refs.countDown.reset();
      },
      finish() {
        Toast.info('倒计时结束');
      }
    }
  };
</script>

<style lang="scss">
  .gree-example-child-count-down-4 {
    .gree-button.inline {
      font-size: 37px;
      height: 80px;
      line-height: 80px;
    }
  }
</style>
```

:::

## API

### Props

| 属性        | 说明                 | 类型    | 默认值     |
| ----------- | -------------------- | ------- | ---------- |
| time        | 倒计时时长，单位毫秒 | Number  | `0`        |
| format      | 时间格式             | String  | `HH:mm:ss` |
| auto-start  | 是否自动开始倒计时   | Boolean | `true`     |
| millisecond | 是否开启毫秒级渲染   | Boolean | `false`    |

### format 格式

| 格式 | 说明         |
| ---- | ------------ |
| DD   | 天数         |
| HH   | 小时         |
| mm   | 分钟         |
| ss   | 秒数         |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） |

### Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| finish | 倒计时结束时触发 | \-       |

### Slots

| 名称    | 说明       | SlotProps |
| ------- | ---------- | --------- |
| default | 自定义内容 | timeData  |

### timeData 格式

| 名称         | 说明     | 类型   |
| ------------ | -------- | ------ |
| days         | 剩余天数 | Number |
| hours        | 剩余小时 | Number |
| minutes      | 剩余分钟 | Number |
| seconds      | 剩余秒数 | Number |
| milliseconds | 剩余毫秒 | Number |

### 方法

通过[ref](https://cn.vuejs.org/v2/api/#ref)可以获取到 CountDown 实例并调用实例方法

| 方法名 | 说明                                                       | 参数 | 返回值 |
| ------ | ---------------------------------------------------------- | ---- | ------ |
| start  | 开始倒计时                                                 | \-   | \-     |
| pause  | 暂停倒计时                                                 | \-   | \-     |
| reset  | 重设倒计时，若`auto-start`为`true`，重设后会自动开始倒计时 | \-   | \-     |

## 常见问题

### 在 iOS 系统上倒计时不生效？

如果你遇到了在 iOS 上倒计时不生效的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。

<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      formatWithDay: 'DD 天 HH 时 mm 分 ss 秒'
    };
  },
  methods: {
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      this.$toast.info('倒计时结束');
    }
  }
};
</script>

<style lang="less">
  .gree-example-child-count-down-3 {
    .gree-count-down {
      height: 34px;
      color: #333;
      .item {
        color: #333;
        font-size: 17px;
        display: inline-block;
        vertical-align: middle;
        margin: 0 6px;
        width: 34px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        background: #fc0;
        border-radius: 6px;
      }
    }
  }
  .gree-example-child-count-down-4 {
    /deep/.gree-button.inline {
      font-size: 17px;
      height: 40px;
      line-height: 40px;
      margin: 0 5px !important;
    }
  }
</style>
