# 选择器

滚动多列选择

## 按需引入

```javascript
import { Picker } from 'gree-ui';

Vue.component(Picker.name, Picker);
```

### 单列数据

:::demo

```html
<gree-block>
  <gree-row>
    <gree-col width="33">
      <gree-button
        size="small"
        type="positive"
        inline
        @click="$_refreshColumnValues"
        >设置单列数据</gree-button
      >
    </gree-col>
  </gree-row>
</gree-block>
<gree-picker
  class="picker1"
  ref="picker"
  :data="pickerData"
  :cols="1"
  :line-height="90"
  :default-index="pickerDefaultIndex"
  :default-value="pickerDefaultValue"
  is-view
  @initialed="onPickerInitialed"
  @change="onPickerConfirm"
></gree-picker>

<script>
  let Data1 = [];
  for (let i = 1; i < 24; i++) {
    Data1[i - 1] = { text: `${i}`, value: i };
  }
  Data1 = [Data1];

  export default {
    data() {
      return {
        pickerData: Data1,
        pickerDefaultIndex: [2],
        pickerDefaultValue: [3],
        pickerValue: ''
      };
    },
    methods: {
      onPickerInitialed() {
        const columnValues = this.$refs.picker.getColumnValues();
        let value = '';
        columnValues.forEach(item => {
          value += `${item.value}-`;
        });
      },
      onPickerConfirm(columnIndex, itemIndex, value) {
        if (value) {
          this.pickerValue = value.text;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .gree-picker {
    &.picker1 {
      .gree-picker-column {
        padding: 0 27px;
        .gree-picker-column-container {
          .gree-picker-column-list {
            .gree-picker-column-item {
              &::after {
                content: '小时后关机';
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 0;
                color: #00aeff;
                font-size: 16px;
              }
            }
            .column-item {
              color: #00aeff;
              font-size: 50px;
            }
          }
        }
      }
    }
  }
</style>
```

:::

### 联动数据

:::demo

```html
<gree-block>
  <gree-row>
    <gree-col width="33">
      <gree-button
        size="small"
        type="positive"
        inline
        @click="$_setColumnValues"
        >设置某列数据</gree-button
      >
    </gree-col>
  </gree-row>
</gree-block>
<gree-picker
  class="picker2"
  ref="picker2"
  :data="pickerData2"
  :cols="2"
  :line-height="65"
  :default-index="pickerDefaultIndex2"
  is-view
  is-cascade
  @change="onPickerConfirm"
></gree-picker>

<script>
  let Data2 = [
    [
      {
        text: '01',
        value: 1,
        children: [
          {
            text: '30',
            value: 30
          },
          {
            text: '31',
            value: 31
          }
        ]
      },
      {
        text: '02',
        value: 2,
        children: [
          {
            text: '00',
            value: 0
          },
          {
            text: '01',
            value: 1
          }
        ]
      },
      {
        text: '03',
        value: 3,
        children: [
          {
            text: '00',
            value: 0
          }
        ]
      }
    ]
  ];

  export default {
    data() {
      return {
        pickerData2: Data2,
        pickerDefaultIndex2: [1, 0]
      };
    },
    methods: {
      onPickerConfirm(columnIndex, itemIndex, value) {
        if (value) {
          this.pickerValue = value.text;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .gree-picker {
    &.picker2 {
      .gree-picker-column {
        .gree-picker-column-container {
          .gree-picker-column-masker {
            &.top {
              &::before {
                visibility: hidden;
              }
            }
            &.bottom {
              &::after {
                visibility: hidden;
              }
            }
          }
          .gree-picker-column-list {
            .gree-picker-column-item {
              &:nth-of-type(1)::after {
                content: '小时';
              }
              &:nth-of-type(2)::after {
                content: '分钟';
              }
              &:nth-of-type(1),
              &:nth-of-type(2) {
                &::after {
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  right: 0;
                  font-size: 22px;
                }
              }
            }
            .column-list {
              .column-item {
                color: #111a34;
                font-size: 55px;
              }
            }
          }
        }
      }
    }
  }
</style>
```

:::

### 弹出展示

:::demo

```html
<gree-list>
  <gree-list-item
    link
    title="选择年份"
    :text="pickerText3"
    @click.native="isPickerShow3 = true"
  ></gree-list-item>
</gree-list>
<gree-picker
  class="picker3"
  ref="picker3"
  v-model="isPickerShow3"
  :data="pickerData3"
  @confirm="onPickerConfirm3()"
  title="自定义标题"
  ok-text="确认"
  cancel-text="取消"
></gree-picker>

<script>
  import years from '../../configs/years';

  export default {
    data() {
      return {
        pickerText3: '查看',
        pickerValue3: '',
        isPickerShow3: false,
        pickerData3: years
      };
    },
    methods: {
      onPickerConfirm3() {
        const values = this.$refs['picker3'].getColumnValues();
        let res = '';
        values.forEach(value => {
          value && (res += `${value.text || value.label} `);
        });
        this.pickerText3 = this.pickerValue3 = res;
      }
    }
  };
</script>
```

:::

### 3 级联动数据

:::demo

```html
<gree-picker
  class="picker4"
  ref="picker4"
  :data="pickerData4"
  :cols="3"
  :default-index="pickerDefaultIndex4"
  :default-value="pickerDefaultValue4"
  is-view
  is-cascade
  @initialed="onPickerInitialed4"
  @change="onPickerConfirm4"
></gree-picker>

<script>
  import times from '../../configs/times';

  export default {
    data() {
      return {
        pickerData4: [],
        pickerDefaultIndex4: [],
        pickerDefaultValue4: [],
        pickerValue4: ''
      };
    },
    mounted() {
      this.pickerData4 = times;
      this.pickerDefaultIndex4 = [1, 2, 5];
      setTimeout(() => {
        this.$refs.picker4.refresh();
      }, 0);
    },
    methods: {
      onPickerInitialed4() {
        const columnValues = this.$refs.picker4.getColumnValues();
        let value = '';
        columnValues.forEach(item => {
          value += `${item.label}-`;
        });
        console.log(
          `Picker4 getColumnValues: ${value.substr(0, value.length - 1)}`
        );
      },
      onPickerConfirm4(columnIndex, itemIndex, value) {
        if (value) {
          this.pickerValue4 = value.text;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .gree-picker {
    &.picker4 {
      .gree-picker-column {
        .gree-picker-column-container {
          .gree-picker-column-masker {
            &.top {
              &:before {
                visibility: hidden;
              }
            }
            &.bottom {
              &:after {
                visibility: hidden;
              }
            }
          }
          .gree-picker-column-list {
            .gree-picker-column-item {
              &:nth-of-type(1) {
                flex: 0.5;
              }
              &:nth-of-type(2):after {
                content: '时';
              }
              &:nth-of-type(3):after {
                content: '分完成';
              }
              &:nth-of-type(2),
              &:nth-of-type(3) {
                &:after {
                  position: absolute;
                  top: 50%;
                  right: 0;
                  transform: translateY(-50%);
                  font-size: 38px;
                }
              }
            }
            .column-list {
              .column-item {
                color: #111a34;
                font-size: 45px;
              }
            }
          }
          .gree-picker-column-hooks {
            .gree-picker-column-hook {
              &:nth-of-type(1) {
                flex: 0.5;
              }
            }
          }
        }
      }
    }
  }
</style>
```

:::

## Props

| 属性          | 说明                                 | 类型      | 默认值  | 备注                                                   |
| ------------- | ------------------------------------ | --------- | ------- | ------------------------------------------------------ |
| v-model       | 选择器是否可见                       | Boolean   | `false` | \-                                                     |
| data          | 数据源                               | Array\[\] | `[]`    | \-                                                     |
| cols          | 数据列数                             | Number    | `1`     | \-                                                     |
| default-index | 选择器各列初始选中项索引             | Array     | `[]`    | \-                                                     |
| default-value | 选择器各列初始选中项值               | Array     | `[]`    | 可用字段`text/lable/value`                             |
| invalid-index | 选择器各列不可用选项索引             | Array     | `[]`    | 某列多个不可用项使用数组，单个使用数字, 如`[[1,2], 2]` |
| line-height   | 选择器选项行高                       | Number    | `45`    | 单位`px`                                               |
| is-view       | 是否内嵌在页面内展示，否则以弹层形式 | Boolean   | `false` | \-                                                     |
| is-cascade    | 各列数据是否级联                     | Boolean   | `false` | 级联数据格式见 Demo 源码                               |
| title         | 选择器标题                           | String    | \-      | \-                                                     |
| describe      | 选择器描述                           | String    | \-      | \-                                                     |
| ok-text       | 选择器确认文案                       | String    | `确认`  | \-                                                     |
| cancel-text   | 选择器取消文案                       | String    | `取消`  | \-                                                     |
| large-radius  | 选择器标题栏大圆角模式               | Boolean   | `false` | \-                                                     |
| mask-closable | 点击蒙层是否可关闭弹出层             | Boolean   | `true`  | \-                                                     |

## Methods

### refresh(callback, startColumnIndex)

重新初始化选择器，如更新 data、default-index、invalid-index 或调用 setColumnValues

| 参数             | 说明                     | 类型     |
| ---------------- | ------------------------ | -------- |
| callback         | 初始化完成回调           | Function |
| startColumnIndex | 从某列开始重置，默认为 0 | Function |

### getColumnValue(index): activeItemValue

获取某列当前选中项的值，需在`initialed`事件触发之后或异步调用

| 参数  | 说明   | 类型   |
| ----- | ------ | ------ |
| index | 列索引 | Number |

### getColumnValues(): columnsValue

获取所有列选中项的值，需在`initialed`事件触发之后或异步调用

返回

| 属性         | 说明             | 类型  |
| ------------ | ---------------- | ----- |
| columnsValue | 所有列选中项的值 | Array |

### getColumnIndex(index): activeItemIndex

获取某列当前选中项的索引值，需在`initialed`事件触发之后或异步调用

| 参数  | 说明   | 类型   |
| ----- | ------ | ------ |
| index | 列索引 | Number |

### getColumnIndexs(): columnsIndex

获取所有列选中项的索引值，需在`initialed`事件触发之后或异步调用

返回

| 属性         | 说明                 | 类型  |
| ------------ | -------------------- | ----- |
| columnsIndex | 所有列选中项的索引值 | Array |

### setColumnValues(index, values, callback)

设置某列数据

| 参数     | 说明               | 类型     |
| -------- | ------------------ | -------- |
| index    | 列索引             | Number   |
| values   | 列数据             | Array    |
| callback | 列数据设置完成回调 | Function |

## Events

### @initialed()

选择器数据初始化完成事件，可调用`getColumnIndex`,`getColumnIndexs`,`getColumnValue`,`getColumnValues`方法

### @change(columnIndex, itemIndex, value)

选择器选中项更改事件

| 参数        | 说明                 | 类型                        |
| ----------- | -------------------- | --------------------------- |
| columnIndex | 更改列的索引值       | Number                      |
| itemIndex   | 更改列选中项的索引值 | Number                      |
| value       | 更改列选中项的的值   | Object: {value, label, ...} |

### @confirm(columnsValue)

选择器确认选择事件（仅`is-view`为`false`）

| 参数         | 说明             | 类型  |
| ------------ | ---------------- | ----- |
| columnsValue | 所有列选中项的值 | Array |

### @cancel()

选择器取消选择事件（仅`is-view`为`false`）

### @show()

选择器弹层展示事件（仅`is-view`为`false`）

### @hide()

选择器弹层隐藏事件（仅`is-view`为`false`）

<script>
import years from '../../configs/years';
import times from '../../configs/times';

let Data1 = [];
for (let i = 1; i < 24; i++) {
  Data1[i - 1] = { text: `${i}`, value: i };
}
Data1 = [Data1];

let Data2 = [
  [
    {
      text: '01',
      value: 1,
      children: [
        {
          text: '30',
          value: 30
        },
        {
          text: '31',
          value: 31
        }
      ]
    },
    {
      text: '02',
      value: 2,
      children: [
        {
          text: '00',
          value: 0
        },
        {
          text: '01',
          value: 1
        }
      ]
    },
    {
      text: '03',
      value: 3,
      children: [
        {
          text: '00',
          value: 0
        }
      ]
    }
  ]
];

let DataNew = [
  {
    text: '00',
    value: 0
  },
  {
    text: '01',
    value: 1
  },
  {
    text: '02',
    value: 2
  }
];

export default {
  data() {
    return {
      pickerData: Data1,
      pickerData2: Data2,
      pickerDefaultIndex: [2],
      pickerDefaultValue: [3],
      pickerDefaultIndex2: [1, 0],
      pickerValue: '',
      pickerText3: '查看',
      pickerValue3: '',
      isPickerShow3: false,
      pickerData3: years,
      pickerData4: [],
      pickerDefaultIndex4: [],
      pickerDefaultValue4: [],
      pickerValue4: ''
    };
  },
  mounted() {
    this.pickerData4 = times;
    this.pickerDefaultIndex4 = [1, 2, 5];
    setTimeout(() => {
      this.$refs.picker4.refresh();
    }, 0);
  },
  methods: {
    onPickerInitialed() {
      const columnValues = this.$refs.picker.getColumnValues();
      let value = '';
      columnValues.forEach(item => {
        value += `${item.value}-`;
      });
    },
    onPickerConfirm(columnIndex, itemIndex, value) {
      if (value) {
        this.pickerValue = value.text;
      }
    },
    $_refreshColumnValues() {
      this.pickerDefaultIndex = [10];
      this.pickerDefaultValue = [11];
      setTimeout(() => {
        this.$refs.picker.refresh();
      }, 0);
    },
    $_setColumnValues() {
      this.$refs['picker2'].setColumnValues(1, DataNew, vm => {
        // 仅更新列
        vm.refresh(null, 1);
        //   // 全部更新
        //   // this.pickerDefaultIndex2[1] = 2;
        //   // vm.refresh();
      });
    },
    onPickerConfirm3() {
      const values = this.$refs['picker3'].getColumnValues();
      let res = '';
      values.forEach(value => {
        value && (res += `${value.text || value.label} `);
      });
      this.pickerText3 = this.pickerValue3 = res;
    },
    onPickerInitialed4() {
      const columnValues = this.$refs.picker4.getColumnValues();
      let value = '';
      columnValues.forEach(item => {
        value += `${item.label}-`;
      });
      console.log(
        `Picker4 getColumnValues: ${value.substr(0, value.length - 1)}`
      );
    },
    onPickerConfirm4(columnIndex, itemIndex, value) {
      if (value) {
        this.pickerValue4 = value.text;
      }
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .gree-picker {
  &.picker1 {
    .gree-picker-column {
      padding: 0 27px;
      .gree-picker-column-container {
        .gree-picker-column-list {
          .gree-picker-column-item {
            &::after {
              content: '小时后关机';
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 0;
              color: #00aeff;
              font-size: 16px;
            }
          }
          .column-item {
            color: #00aeff;
            font-size: 50px;
          }
        }
      }
    }
  }
  &.picker2 {
    .gree-picker-column {
      .gree-picker-column-container {
        .gree-picker-column-masker {
          &.top {
            &::before {
              visibility: hidden;
            }
          }
          &.bottom {
            &::after {
              visibility: hidden;
            }
          }
        }
        .gree-picker-column-list {
          .gree-picker-column-item {
            &:nth-of-type(1)::after {
              content: '小时';
            }
            &:nth-of-type(2)::after {
              content: '分钟';
            }
            &:nth-of-type(1),
            &:nth-of-type(2) {
              &::after {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 0;
                font-size: 22px;
              }
            }
          }
          .column-list {
            .column-item {
              color: #111a34;
              font-size: 55px;
            }
          }
        }
      }
    }
  }
  &.picker4 {
    .gree-picker-column {
      .gree-picker-column-container {
        .gree-picker-column-masker {
          &.top {
            &:before {
              visibility: hidden;
            }
          }
          &.bottom {
            &:after {
              visibility: hidden;
            }
          }
        }
        .gree-picker-column-list {
          .gree-picker-column-item {
            &:nth-of-type(1) {
              flex: 0.5;
            }
            &:nth-of-type(2):after {
              content: '时';
            }
            &:nth-of-type(3):after {
              content: '分完成';
            }
            &:nth-of-type(2), &:nth-of-type(3) {
              &:after {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                font-size: 19px;
              }
            }
          }
          .column-list {
            .column-item {
              color: #111a34;
              font-size: 22px;
            }
          }
        }
        .gree-picker-column-hooks {
          .gree-picker-column-hook {
            &:nth-of-type(1) {
              flex: 0.5;
            }
          }
        }
      }
    }
  }
}
</style>
