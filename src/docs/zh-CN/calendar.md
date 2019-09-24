# 日历

用于在每日、每周或每月视图中显示信息

## 按需引入

```javascript
import { Calendar } from 'gree-ui';

Vue.component(Calendar.name, Calendar);
```

### 基本

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="warning" scrollable>
  为了更好的体验效果，建议在 iOS 或 Android 设备上体验！
</gree-notice-bar>
<gree-list>
  <gree-list-item
    link
    title="日期选择（无默认日期）"
    @click.native="switchPicker('isVisible1')"
  >
    <div slot="after">
      <p>{{ date1 ? `${date1} ${dateWeek}` : '请选择日期' }}</p>
    </div>
  </gree-list-item>
  <gree-list-item
    link
    title="日期选择（有默认日期，选择后自动回填）"
    @click.native="switchPicker('isVisible2')"
  >
    <div slot="after">
      <p>{{ date2 ? date2 : '请选择日期' }}</p>
    </div>
  </gree-list-item>
  <gree-list-item
    link
    title="日期区间选择（有默认日期）"
    @click.native="switchPicker('isVisible3')"
  >
    <div slot="after">
      <p>{{ date3 ? `${date3[0]}至${date3[1]}` : '请选择日期' }}</p>
    </div>
  </gree-list-item>
  <gree-list-item
    link
    title="日期区间选择（不限制开始结束时间）"
    @click.native="switchPicker('isVisible4')"
  >
    <div slot="after">
      <p>{{ date4 ? `${date4[0]}至${date4[1]}` : '请选择日期' }}</p>
    </div>
  </gree-list-item>
</gree-list>
<gree-calendar
  :is-visible="isVisible1"
  :default-value="date1"
  @close="switchPicker('isVisible1')"
  @choose="setChooseValue1"
  :start-date="`2019-03-25`"
  :end-date="`2019-10-25`"
></gree-calendar>
<gree-calendar
  :is-visible="isVisible2"
  :default-value="date2"
  :is-auto-back-fill="true"
  @close="switchPicker('isVisible2')"
  @choose="setChooseValue2"
></gree-calendar>
<gree-calendar
  :is-visible="isVisible3"
  :default-value="date3"
  type="range"
  :start-date="null"
  :end-date="null"
  @close="switchPicker('isVisible3')"
  @choose="setChooseValue3"
></gree-calendar>
<gree-calendar
  :is-visible="isVisible4"
  :default-value="date4"
  type="range"
  :start-date="null"
  :end-date="null"
  @close="switchPicker('isVisible4')"
  @choose="setChooseValue4"
></gree-calendar>

<script>
  Date.prototype.format = function(fmt) {
    var o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (this.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  };

  export default {
    data() {
      return {
        isVisible1: false,
        isVisible2: false,
        isVisible3: false,
        isVisible4: false,
        date1: null,
        date2: new Date().format('yyyy-MM-dd'),
        date3: ['2019-08-05', '2019-08-25'],
        date4: null,
        dateWeek: null
      };
    },
    methods: {
      switchPicker(param) {
        this[`${param}`] = !this[`${param}`];
      },
      setChooseValue1(param) {
        this.date1 = param[3];
        this.dateWeek = param[4];
      },
      setChooseValue2(param) {
        this.date2 = param[3];
      },
      setChooseValue3(param) {
        this.date3 = [...[param[0][3], param[1][3]]];
      },
      setChooseValue4(param) {
        this.date4 = [...[param[0][3], param[1][3]]];
      }
    }
  };
</script>
```

:::

## Props

| 属性                 | 说明                                                   | 类型    | 默认值          |
| -------------------- | ------------------------------------------------------ | ------- | --------------- |
| type                 | 类型，日期选择`one`，区间选择`range`                   | String  | `one`           |
| is-visible           | 是否可见                                               | Boolean | `false`         |
| animation            | 日历进入方向，右滑'greeSlideRight'， 上拉'greeSlideUp' | String  | `greeSlideUp`   |
| is-auto-back-fill    | 是否自动回填                                           | Boolean | `false`         |
| is-open-range-select | 是否开启区间选择                                       | Boolean | `false`         |
| title                | 显示标题                                               | String  | `选择日期`      |
| default-value        | 默认值，日期选择 String 格式，区间选择 Array 格式      | String  | \-              |
| start-date           | 开始日期， 如果不限制开始日期传`null`                  | String  | `今天`          |
| end-date             | 结束日期，如果不限制结束日期传`null`                   | String  | `距离今天365天` |

## Events

| 属性   | 说明                         | 回调参数                     |
| ------ | ---------------------------- | ---------------------------- |
| choose | 选择之后或是点击确认按钮触发 | 日期数组（包含年月日和星期） |
| close  | 关闭时触发                   | \-                           |

<script>
Date.prototype.format = function(fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return fmt;
};

export default {
  data() {
    return {
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      date1: null,
      date2: new Date().format('yyyy-MM-dd'),
      date3: ['2019-08-05', '2019-08-25'],
      date4: null,
      dateWeek: null
    };
  },
  methods: {
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue1(param) {
      this.date1 = param[3];
      this.dateWeek = param[4];
    },
    setChooseValue2(param) {
      this.date2 = param[3];
    },
    setChooseValue3(param) {
      this.date3 = [...[param[0][3], param[1][3]]];
    },
    setChooseValue4(param) {
      this.date4 = [...[param[0][3], param[1][3]]];
    }
  }
};
</script>
