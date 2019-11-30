# 步骤条

用于引导用户流程，显示当前步骤

## 按需引入

```javascript
import { Steps } from 'gree-ui';

Vue.component(Steps.name, Steps);
```

## 校园租赁 Demo

:::demo

```html
<gree-block class="gree-example-child-steps-0">
  <gree-steps :steps="steps" :current="1">
    <template slot="reached" slot-scope="props">
      <div class="step-node-default-icon" v-if="props.index === 0"></div>
      <div class="step-node-default" v-else>
        <div class="step-node-default-icon"></div>
      </div>
    </template>
    <template slot="current">
      <div class="step-node-default-icon"></div>
    </template>
    <template slot="unreached">
      <div class="step-node-default-icon"></div>
    </template>
  </gree-steps>
</gree-block>

<style lang="scss" scoped>
  .gree-example-child-steps-0 {
    .gree-steps,
    .step-wrapper {
      margin: 0 !important;

      .step-node-default-icon {
        width: 36px;
        height: 36px;
        border-radius: 50%;

        &:not(.reached):not(.current) {
          .step-node-default-icon {
            width: 35px;
            height: 35px;
            background: none;
            border: 1px solid #777;
          }
        }
      }
      .bar {
        background-color: #aaa;
      }
    }
  }
</style>
```

:::

## 自定义步骤图标

:::demo

```html
<gree-block class="gree-example-child-steps-1">
  <gree-steps :steps="steps2" :current="2">
    <template slot="reached" slot-scope="props">
      <gree-icon name="checked" v-if="props.index === 1"></gree-icon>
      <div class="step-node-default" v-else>
        <div class="step-node-default-icon"></div>
      </div>
    </template>
    <template slot="current">
      <gree-icon name="location"></gree-icon>
    </template>
    <template slot="unreached">
      <gree-icon name="clock"></gree-icon>
    </template>
  </gree-steps>
</gree-block>

<style lang="scss" scoped>
  .gree-example-child-steps-1 {
    .gree-steps,
    .step-wrapper {
      margin: 0 !important;

      .step-node-default-icon {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }
    }
  }
</style>
```

:::

## 纵向展示

:::demo

```html
<gree-block class="gree-example-child-steps-2">
  <gree-steps
    direction="vertical"
    :steps="steps3"
    :current="2"
    vertical-adaptive
  ></gree-steps>
</gree-block>

<style lang="scss" scoped>
  .gree-example-child-steps-2 {
    .gree-steps,
    .step-wrapper {
      margin: 0 !important;
    }
    .gree-steps {
      height: 900px;
    }
  }
</style>
```

:::

## Props

| 属性              | 说明           | 类型    | 默认值       | 备注                    |
| ----------------- | -------------- | ------- | ------------ | ----------------------- |
| steps             | 步骤信息数组   | Array   | \-           | \-                      |
| current           | 当前步骤/进度  | Number  | `0`          | 支持小数                |
| direction         | 展示方向       | String  | `horizontal` | `horizontal`,`vertical` |
| transition        | 进度变化动效   | Boolean | `false`      | \-                      |
| vertical-adaptive | 步骤高度自适应 | Boolean | `false`      | 仅用于`vertical`        |

## Slots

### icon

统一自定义所有步骤图标，支持`scoped slot`如下所示：

```html
<template slot="reached" slot-scope="{ index, currentIndex }">
  <b v-if="props.index === props.currentIndex">{{ props.index }}</b>
  <span v-else>{{ props.index }}</span>
</template>
```

### reached

已完成步骤图标插槽，用于自定义已完成步骤图标，支持`scoped slot`如下所示：

```html
<template slot="reached" slot-scope="{ index }">
  <!-- 如果索引值为1，则自定义 -->
  <gree-icon name="checked" v-if="index === 1"></gree-icon>
  <!-- 默认步骤图标 -->
  <div class="step-node-default" v-else></div>
</template>
```

### current

当前步骤图标插槽，用于自定义当前步骤图标，支持`scoped slot`，用法同`reached`

### unreached

未完成步骤图标插槽，用于自定义未完成步骤图标，支持`scoped slot`，用法同`reached`

### content

步骤内容插槽

```html
<template slot="content" slot-scope="{ index, step }">
  <!-- index 步骤索引 -->
  <!-- step 步骤信息 -->
</template>
```

<script>
  export default {
    data() {
      return {
        steps: [
          {
            name: '已支付'
          },
          {
            name: '待安装'
          },
          {
            name: '已安装'
          }
        ],
        steps2: [
          {
            name: '步骤1'
          },
          {
            name: '步骤2'
          },
          {
            name: '步骤3'
          },
          {
            name: '步骤4'
          }
        ],
        steps3: [
          {
            name: '已完成',
            text: '这里是该步骤的描述信息'
          },
          {
            name: '已完成',
            text: '这里是该步骤的描述信息'
          },
          {
            name: '进行中',
            text: '这里是该步骤的描述信息'
          },
          {
            name: '待进行',
            text: '这里是该步骤的描述信息'
          }
        ]
      };
    }
  };
</script>

<style lang="less">
  .gree-example-child-steps-0 {
    .gree-steps,
    .step-wrapper {
      margin: 0 !important;

      .step-node-default-icon {
        width: 18px;
        height: 18px;
        border-radius: 50%;

        &:not(.reached):not(.current) {
          .step-node-default-icon {
            width: 18px;
            height: 18px;
            background: none;
            border: 1px solid #777;
          }
        }
      }
      .bar {
        background-color: #aaa;
        &.horizontal-bar {
          height: 1px;
        }
      }
    }
  }
  .gree-example-child-steps-1 {
    .gree-steps,
    .step-wrapper {
      margin: 0 !important;

      .step-node-default-icon {
        width: 3px;
        height: 3px;
        border-radius: 50%;
      }
    }
  }
  .gree-example-child-steps-2 {
    .gree-steps,
    .step-wrapper {
      margin: 0 !important;
    }
    .gree-steps {
      height: 450px;
    }
  }
</style>

```

```
