# 日历

用于在每日、每周或每月视图中显示信息

## 按需引入

```javascript
import { Calendar } from 'gree-ui';

Vue.component(Calendar.name, Calendar);
```

### 基础

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="warning" scrollable>
  为了更好的体验效果，建议在 iOS 或 Android 设备上体验！
</gree-notice-bar>

<div
  class="gree-example-child gree-example-child-calendar gree-example-child-calendar-0"
>
  <gree-list>
    <gree-list-item
      link
      title="选择单个日期"
      :text="formatFullDate(date.selectSingle)"
      @click.native="show('single', 'selectSingle')"
    ></gree-list-item>
    <gree-list-item
      link
      title="选择日期区间"
      :text="formatRange(date.selectRange)"
      @click.native="show('range', 'selectRange')"
    ></gree-list-item>
  </gree-list>
  <gree-calendar
    v-model="showCalendar"
    :type="type"
    :color="color"
    :round="round"
    :min-date="minDate"
    :max-date="maxDate"
    :position="position"
    :formatter="formatter"
    :show-confirm="showConfirm"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</div>

<script>
  export default {
    data() {
      return {
        date: {
          selectSingle: null,
          selectRange: []
        },
        showCalendar: false,
        type: 'single',
        color: undefined,
        round: true,
        minDate: undefined,
        maxDate: undefined,
        position: undefined,
        formatter: undefined,
        showConfirm: false
      };
    },
    methods: {
      resetSettings() {
        this.round = true;
        this.color = undefined;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.position = undefined;
        this.formatter = undefined;
        this.showConfirm = true;
      },
      show(type, id) {
        this.resetSettings();
        this.id = id;
        this.type = type;
        this.showCalendar = true;
      },
      formatDate(date) {
        if (date) {
          return `${date.getMonth() + 1}/${date.getDate()}`;
        }
      },
      formatFullDate(date) {
        if (date) {
          return `${date.getFullYear()}/${this.formatDate(date)}`;
        }
      },
      formatRange(dateRange) {
        if (dateRange.length) {
          const [start, end] = dateRange;
          return `${this.formatDate(start)} - ${this.formatDate(end)}`;
        }
      },
      onConfirm(date) {
        this.showCalendar = false;
        this.date[this.id] = date;
      },
      onCancel() {
        this.showCalendar = false;
      }
    }
  };
</script>
```

:::

### 平铺展示

:::demo

```html
<div
  class="gree-example-child gree-example-child-calendar gree-example-child-calendar-3"
>
  <gree-calendar
    title="日历"
    :poppable="false"
    :show-confirm="false"
    :min-date="tiledMinDate"
    :max-date="tiledMaxDate"
  />
</div>

<script>
  export default {
    data() {
      return {
        tiledMinDate: new Date(2008, 7, 8),
        tiledMaxDate: new Date(2008, 9, 8)
      };
    }
  };
</script>
```

:::

### 更多示例请查看[在线 Demo](http://167.88.176.153:8086/#/calendar)

## API

### Props

| 属性                   | 说明                                                        | 类型              | 默认值             |
| ---------------------- | ----------------------------------------------------------- | ----------------- | ------------------ |
| v-model                | 是否显示日历弹窗                                            | Boolean           | `false`            |
| type                   | 选择类型，`single`表示选择单个日期，`range`表示选择日期区间 | String            | `single`           |
| title                  | 日历标题                                                    | String            | `日期选择`         |
| color                  | 颜色，对选中日期生效                                        | String            | `#ff0202`          |
| min-date               | 最小日期                                                    | Date              | 当前日期           |
| max-date               | 最大日期                                                    | Date              | 当前日期的六个月后 |
| default-date           | 默认选中的日期                                              | [Date, Date\[\]]  | 今天               |
| row-height             | 日期行高                                                    | Number            | `64`               |
| formatter              | 日期格式化函数                                              | (day: Day) => Day | \-                 |
| position               | 弹出位置，可选值为`top`、`right`、`left`                    | String            | `bottom`           |
| poppable               | 是否以弹层的形式展示日历                                    | Boolean           | `true`             |
| lazy-render            | 是否只渲染可视区域的内容                                    | Boolean           | `true`             |
| round                  | 是否显示圆角弹窗                                            | Boolean           | `true`             |
| show-mark              | 是否显示月份背景水印                                        | Boolean           | `false`            |
| show-confirm           | 是否展示确认按钮                                            | Boolean           | `true`             |
| close-on-click-overlay | 是否在点击遮罩层后关闭                                      | Boolean           | `true`             |
| safe-area-inset-bottom | 是否开启底部安全区适配                                      | Boolean           | `true`             |

### Day 数据结构

日历中的每个日期都对应一个 Day 对象，通过`formatter`属性可以自定义 Day 对象的内容

| 键名       | 说明                                                               | 类型   |
| ---------- | ------------------------------------------------------------------ | ------ |
| date       | 日期对应的 Date 对象                                               | Date   |
| type       | 日期类型，可选值为`selected`、`start`、`middle`、`end`、`disabled` | String |
| text       | 中间显示的文字                                                     | String |
| topInfo    | 上方的提示信息                                                     | String |
| bottomInfo | 下方的提示信息                                                     | String |
| className  | 额外类名                                                           | String |

### Events

| 事件名  | 说明                                                               | 回调参数    |
| ------- | ------------------------------------------------------------------ | ----------- |
| select  | 点击任意日期时触发                                                 | value: Date | Date[] |
| confirm | 日期选择完成后触发，若`show-confirm`为`true`，则点击确认按钮后触发 | value: Date | Date[] |

### Slots

| 名称   | 说明               |
| ------ | ------------------ |
| title  | 自定义标题         |
| footer | 自定义底部区域内容 |

### 方法

通过[ref](https://cn.vuejs.org/v2/api/#ref)可以获取到 Calendar 实例并调用实例方法

| 方法名 | 说明                   | 参数 | 返回值 |
| ------ | ---------------------- | ---- | ------ |
| reset  | 重置选中的日期到默认值 | \-   | \-     |

## 常见问题

### 在 iOS 系统上初始化组件失败？

如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。

<script>
  export default {
    data() {
      return {
        date: {
          selectSingle: null,
          selectRange: [],
          tiledMinDate: new Date(2008, 7, 8),
          tiledMaxDate: new Date(2008, 9, 8)
        },
        showCalendar: false,
        type: 'single',
        color: undefined,
        round: true,
        minDate: undefined,
        maxDate: undefined,
        position: undefined,
        formatter: undefined,
        showConfirm: false
      };
    },
    methods: {
      resetSettings() {
        this.round = true;
        this.color = undefined;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.position = undefined;
        this.formatter = undefined;
        this.showConfirm = true;
      },
      show(type, id) {
        this.resetSettings();
        this.id = id;
        this.type = type;
        this.showCalendar = true;
      },
      formatDate(date) {
        if (date) {
          return `${date.getMonth() + 1}/${date.getDate()}`;
        }
      },
      formatFullDate(date) {
        if (date) {
          return `${date.getFullYear()}/${this.formatDate(date)}`;
        }
      },
      formatRange(dateRange) {
        if (dateRange.length) {
          const [start, end] = dateRange;
          return `${this.formatDate(start)} - ${this.formatDate(end)}`;
        }
      },
      onConfirm(date) {
        this.showCalendar = false;
        this.date[this.id] = date;
      },
      onCancel() {
        this.showCalendar = false;
      }
    }
  };
</script>
