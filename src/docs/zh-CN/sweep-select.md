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
<gree-block-title>点击选择定格扫，滑动选择区域扫</gree-block-title>
<gree-tabs>
  <gree-tab-pane name="p1" label="左右扫风">
    <gree-sweep-select
      :canvas-id="canvasId1"
      :canvas-width="width1"
      :canvas-height="height1"
      :origin="origin1"
      :select-default="selectDefault"
      @change="change1"
    ></gree-sweep-select>
    <gree-block>选中回调：{{ arr1 }}</gree-block>
  </gree-tab-pane>
  <gree-tab-pane name="p2" label="上下扫风">
    <gree-sweep-select :canvas-id="canvasId2" :canvas-width="width2" :canvas-height="height2" :origin="origin2" @change="change2"></gree-sweep-select>
    <gree-block>选中回调：{{ arr2 }}</gree-block>
  </gree-tab-pane>
</gree-tabs>

<script>
export default {
  data() {
    return {
      canvasId1: 'sector1',
      arr1: [],
      width1: 540,
      height1: 347,
      origin1: {
        x: 270,
        y: 0,
        r: 347,
        startdeg: 135,
        opendeg: 18,
        count: 5
      },
      selectDefault: ['3'],

      canvasId2: 'sector2',
      arr2: [],
      width2: 348,
      height2: 587,
      origin2: {
        x: 348,
        y: 300,
        r: 348,
        startdeg: 225,
        opendeg: 18,
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

<style lang="scss">
.sweep-select-horizontal {
  margin: 0 auto;
  width: 1080px;
  height: 686px;
  background-image: url('../assets/images/sweep_horizontal.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  canvas {
    opacity: 0;
  }

  .selected {
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    pointer-events: none;

    &-1 {
      top: 14px;
      left: 40px;
      width: 484px;
      height: 611px;
      background-image: url('../assets/images/sweep_horizontal_1.png');
      background-size: 96%;
    }

    &-2 {
      top: 32px;
      left: 217px;
      width: 310px;
      height: 648px;
      background-image: url('../assets/images/sweep_horizontal_2.png');
    }

    &-3 {
      top: 35px;
      left: 421px;
      width: 219px;
      height: 653px;
      background-image: url('../assets/images/sweep_horizontal_3.png');
    }

    &-4 {
      top: 38px;
      left: 540px;
      width: 306px;
      height: 641px;
      background-image: url('../assets/images/sweep_horizontal_4.png');
    }

    &-5 {
      top: 32px;
      left: 554px;
      width: 476px;
      height: 579px;
      background-image: url('../assets/images/sweep_horizontal_5.png');
    }
  }
}

.sweep-select-vertical {
  margin: 0 auto;
  width: 696px;
  height: 1174px;
  background-image: url('../assets/images/sweep_vertical.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  canvas {
    opacity: 0;
  }

  .selected {
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    pointer-events: none;

    &-1 {
      top: 93px;
      left: 78px;
      width: 579px;
      height: 465px;
      background-image: url('../assets/images/sweep_vertical_1.png');
    }

    &-2 {
      top: 263px;
      left: 10px;
      width: 634px;
      height: 311px;
      background-image: url('../assets/images/sweep_vertical_2.png');
    }

    &-3 {
      top: 473px;
      left: 0;
      width: 632px;
      height: 217px;
      background-image: url('../assets/images/sweep_vertical_3.png');
    }

    &-4 {
      top: 592px;
      left: 10px;
      width: 625px;
      height: 305px;
      background-image: url('../assets/images/sweep_vertical_4.png');
    }

    &-5 {
      top: 608px;
      left: 78px;
      width: 576px;
      height: 473px;
      background-image: url('../assets/images/sweep_vertical_5.png');
    }
  }
}
</style>
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
      width1: 540,
      height1: 347,
      origin1: {
        x: 270,
        y: 0,
        r: 347,
        startdeg: 135,
        opendeg: 18,
        count: 5
      },
      selectDefault: ['3'],

      canvasId2: 'sector2',
      arr2: [],
      width2: 348,
      height2: 587,
      origin2: {
        x: 348,
        y: 300,
        r: 348,
        startdeg: 225,
        opendeg: 18,
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

<style lang="less">
.sweep-select-horizontal {
  margin: 0 auto;
  width: 540px;
  height: 343px;
  background-image: url('../../assets/images/sweep_horizontal.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  canvas {
    opacity: 0;
  }

  .selected {
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    pointer-events: none;

    &-1 {
      top: 7px;
      left: 20px;
      width: 242px;
      height: 305px;
      background-image: url('../../assets/images/sweep_horizontal_1.png');
      background-size: 96%;
    }

    &-2 {
      top: 32px;
      left: 217px;
      width: 310px;
      height: 648px;
      background-image: url('../../assets/images/sweep_horizontal_2.png');
    }

    &-3 {
      top: 17px;
      left: 210px;
      width: 109px;
      height: 326px;
      background-image: url('../../assets/images/sweep_horizontal_3.png');
    }

    &-4 {
      top: 19px;
      left: 270px;
      width: 153px;
      height: 320px;
      background-image: url('../../assets/images/sweep_horizontal_4.png');
    }

    &-5 {
      top: 16px;
      left: 227px;
      width: 238px;
      height: 289px;
      background-image: url('../../assets/images/sweep_horizontal_5.png');
    }
  }
}

.sweep-select-vertical {
  margin: 0 auto;
  width: 348px;
  height: 587px;
  background-image: url('../../assets/images/sweep_vertical.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  canvas {
    opacity: 0;
  }

  .selected {
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    pointer-events: none;

    &-1 {
      top: 46px;
      left: 39px;
      width: 289px;
      height: 232px;
      background-image: url('../../assets/images/sweep_vertical_1.png');
    }

    &-2 {
      top: 131px;
      left: 5px;
      width: 317px;
      height: 155px;
      background-image: url('../../assets/images/sweep_vertical_2.png');
    }

    &-3 {
      top: 236px;
      left: 0;
      width: 316px;
      height: 108px;
      background-image: url('../../assets/images/sweep_vertical_3.png');
    }

    &-4 {
      top: 296px;
      left: 5px;
      width: 312px;
      height: 152px;
      background-image: url('../../assets/images/sweep_vertical_4.png');
    }

    &-5 {
      top: 304px;
      left: 39px;
      width: 288px;
      height: 236px;
      background-image: url('../../assets/images/sweep_vertical_5.png');
    }
  }
}
</style>
