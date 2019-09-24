# 时间选择器

选择日期或者时间，支持年/月/日/时/分和按照范围选择

## 按需引入

```javascript
import { DatePicker } from 'gree-ui';

Vue.component(DatePicker.name, DatePicker);
```

### 示例 1

:::demo

```html
<gree-date-picker
  ref="datePicker"
  today-text="今天"
  :min-date="minDate"
  :max-date="maxDate"
  :default-date="currentDate"
  is-view
  @initialed="onDatePickerInitialed"
></gree-date-picker>

<script>
  export default {
    data() {
      return {
        minDate: new Date('2012/8/8'),
        maxDate: new Date('2020/9/9'),
        currentDate: new Date()
      };
    },
    methods: {
      onDatePickerInitialed() {
        console.log(
          `DatePicker getFormatDate: ${this.$refs.datePicker.getFormatDate(
            'yyyy/MM/dd'
          )}`
        );
      }
    }
  };
</script>
```

:::

### 示例 2

:::demo

```html
<gree-date-picker
  type="time"
  :unit-text="['', '', '', '小时', '分钟']"
  :minute-step="1"
  is-view
></gree-date-picker>
```

:::

### 示例 3

:::demo

```html
<gree-date-picker
  ref="datePicker"
  type="datetime"
  :min-date="currentDate"
  is-view
></gree-date-picker>
```

:::

## Props

| 属性         | 说明                       | 类型    | 默认值                           | 备注                              |
| ------------ | -------------------------- | ------- | -------------------------------- | --------------------------------- |
| type         | 日期选择类型               | String  | `date`                           | `date`,`time`,`datetime`,`custom` |
| min-date     | 最小可选日期（时间）       | Date    | \-                               | \-                                |
| max-date     | 最大可选日期（时间）       | Date    | \-                               | \-                                |
| default-date | 初始选中日期               | Date    | \-                               | \-                                |
| minute-step  | 分钟数递增步长             | Number  | `1`                              | \-                                |
| unit-text    | 元素单位展示文案设置       | Array   | `['年', '月', '日', '时', '分']` | \-                                |
| today-text   | 今天展示文案设置           | String  | `今天`                           | \-                                |
| line-height  | 选择器选项行高             | Number  | `45`                             | 单位`px`                          |
| is-view      | 是否内嵌展示, 否则弹层展示 | Boolean | `false`                          | \-                                |
| title        | 选择器标题                 | String  | \-                               | \-                                |
| describe     | 选择器描述                 | String  | \-                               | \-                                |

## Events

### @initialed()

选择器数据初始化完成事件

### @change(columnIndex, itemIndex, value)

选择器选中项更改事件

| 参数        | 说明                 | 类型                              |
| ----------- | -------------------- | --------------------------------- |
| columnIndex | 更改列的索引值       | Number                            |
| itemIndex   | 更改列选中项的索引值 | Number                            |
| value       | 更改列选中项的的值   | Object: {text, value, typeFormat} |

### @confirm(columnsValue)

选择器确认选择事件（仅`is-view`为`false`）

| 参数         | 说明             | 类型  |
| ------------ | ---------------- | ----- |
| columnsValue | 所有列选中项的值 | Array |

<script>
export default {
  data() {
    return {
      minDate: new Date('2012/8/8'),
      maxDate: new Date('2020/9/9'),
      currentDate: new Date()
    };
  },
  methods: {
    onDatePickerInitialed() {
      console.log(
        `DatePicker getFormatDate: ${this.$refs.datePicker.getFormatDate(
          'yyyy/MM/dd'
        )}`
      );
    }
  }
};
</script>

<style lang="less" scoped>
.gree-date-picker {
  width: 100%;
}
</style>
