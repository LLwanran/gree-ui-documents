# 扇形区域选择

空调插件专用，用于控制风档

## 按需引入

```javascript
import { SweepSelect } from 'gree-ui';

Vue.component(SweepSelect.name, SweepSelect);
```

### 左右扫风

:::demo

```html
<gree-sweep-select
  :canvas-id="canvasId1"
  :canvas-width="width1"
  :canvas-height="height1"
  :origin="origin1"
  :select-default="selectDefault"
  @change="change1"
></gree-sweep-select>
```

:::

### 上下扫风

:::demo

```html
<gree-sweep-select
  :canvas-id="canvasId2"
  :canvas-width="width2"
  :canvas-height="height2"
  :origin="origin2"
  @change="change2"
></gree-sweep-select>
```

:::

## Props

| 属性           | 说明     | 类型   | 默认值                                                                                                | 备注 |
| -------------- | -------- | ------ | ----------------------------------------------------------------------------------------------------- | ---- |
| canvas-id      | canvasID | String | `canvas`                                                                                              | \-   |
| canvas-width   | 画布宽度 | Number | `300`                                                                                                 | \-   |
| canvas-height  | 画布高度 | Number | `300`                                                                                                 | \-   |
| color-secter   | 颜色设置 | Object | `{bgColor: '#f8f8f8', selectedBg: '#2397f3', borderColor: '#cccccc', selectedBorderColor: '#e4e4e4'}` | \-   |
| origin         | 坐标     | Object | {x: 150, y: 150, r: 100, startdeg: 240, opendeg: 25, count: 5}                                        | \-   |
| select-default | 默认选中 | Array  | `[]`                                                                                                  | \-   |

<script>
export default {
  data() {
    return {
      canvasId1: 'sector1',
      arr1: [],
      width1: 500,
      height1: 500,
      origin1: {
        x: 250,
        y: 100,
        r: 220,
        startdeg: 140,
        opendeg: 20,
        count: 5
      },
      selectDefault: ['3'],
      canvasId2: 'sector2',
      arr2: [],
      width2: 500,
      height2: 500,
      origin2: {
        x: 350,
        y: 250,
        r: 220,
        startdeg: 230,
        opendeg: 20,
        count: 5
      }
    };
  },
  methods: {
    change1(data) {
      this.arr1 = data;
    },
    change2(data) {
      this.arr2 = data;
    }
  }
};
</script>
