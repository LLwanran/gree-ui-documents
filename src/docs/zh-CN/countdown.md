# 倒计时

通常用于活动倒计时

## 按需引入

```javascript
import { Countdown } from 'gree-ui';

Vue.component(Countdown.name, Countdown);
```

### 基本

:::demo

```html
<gree-list>
  <gree-list-item>
    <gree-countdown
      slot="title"
      :end-time="end"
      @on-end="onend"
    ></gree-countdown>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        end: Date.now() + 60 * 1000
      };
    },
    methods: {
      onend() {
        console.log('countdown: ended');
      }
    }
  };
</script>
```

:::

### 显示天

:::demo

```html
<gree-list>
  <gree-list-item>
    <gree-countdown slot="title" :end-time="end" show-days></gree-countdown>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        end: Date.now() + 60 * 1000
      };
    }
  };
</script>
```

:::

### 以服务端的时间为准

:::demo

```html
<gree-list>
  <gree-list-item>
    <gree-countdown
      slot="title"
      :start-time="serverTime"
      :end-time="end"
    ></gree-countdown>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        serverTime: Date.now() - 30 * 1000
      };
    }
  };
</script>
```

:::

### 显示为 天时分秒

:::demo

```html
<gree-list>
  <gree-list-item>
    <gree-countdown
      slot="title"
      show-days
      show-plain-text
      :end-time="end"
    ></gree-countdown>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        end: Date.now() + 60 * 1000
      };
    }
  };
</script>
```

:::

### 控制开始和暂停的倒计时

:::demo

```html
<gree-list>
  <gree-list-item>
    <gree-countdown
      slot="title"
      :end-time="end"
      :paused="paused"
      @on-paused="onpaused"
      @on-restart="onrestart"
    ></gree-countdown>
    <div slot="after">
      <gree-button size="small" inline round @click="toggle">
        <strong>{{ paused ? '开始': '暂停' }}</strong>
      </gree-button>
    </div>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        end: Date.now() + 60 * 1000,
        paused: false
      };
    },
    methods: {
      toggle() {
        this.paused = !this.paused;
      },
      onpaused(v) {
        console.log('paused: ', v);
      },
      onrestart(v) {
        console.log('restart: ', v);
      }
    }
  };
</script>
```

:::

## Props

| 属性          | 说明         | 类型           | 默认值       |
| ------------- | ------------ | -------------- | ------------ |
| startTime     | 开始时间     | String, Number | `Date.now()` |
| endTime       | 结束时间     | String, Number | `Date.now()` |
| showDays      | 是否显示天   | Boolean        | `false`      |
| showPlainText | 显示为纯文本 | Boolean        | `false`      |
| paused        | 是否暂停     | Boolean        | `false`      |

## Events

| 属性       | 说明           | 回调参数   |
| ---------- | -------------- | ---------- |
| on-end     | 倒计时结束时   | 剩余时间戳 |
| on-paused  | 暂停时         | 剩余时间戳 |
| on-restart | 暂停重新开始时 | 剩余时间戳 |

<script>
export default {
  data() {
    return {
      serverTime: Date.now() - 30 * 1000,
      end: Date.now() + 60 * 1000,
      paused: false
    };
  },
  methods: {
    toggle() {
      this.paused = !this.paused;
    },
    onend() {
      console.log('countdown: ended');
    },
    onpaused(v) {
      console.log('paused: ', v);
    },
    onrestart(v) {
      console.log('restart: ', v);
    }
  }
};
</script>
