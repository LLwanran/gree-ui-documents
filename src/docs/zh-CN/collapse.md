# 折叠面板

将内容展开或折叠

## 按需引入

```javascript
import { Collapse, CollapseItem } from 'gree-ui';

Vue.component(Collapse.name, Collapse);
Vue.component(CollapseItem.name, CollapseItem);
```

### 基础

#### 通过`v-model`控制展开的面板列表，`active1`为数组格式

:::demo

```html
<div
  class="gree-example-child gree-example-child-collapse gree-example-child-collapse-0"
>
  <gree-collapse v-model="active1">
    <gree-collapse-item title="标题1" name="1">内容</gree-collapse-item>
    <gree-collapse-item title="标题2" name="2">内容</gree-collapse-item>
    <gree-collapse-item title="标题3" name="3" disabled
      >内容</gree-collapse-item
    >
  </gree-collapse>
</div>

<script>
  export default {
    data() {
      return {
        active1: ['1']
      };
    }
  };
</script>
```

:::

### 手风琴

#### 通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`active2`为字符串格式

:::demo

```html
<div
  class="gree-example-child gree-example-child-collapse gree-example-child-collapse-1"
>
  <gree-collapse v-model="active2" accordion>
    <gree-collapse-item title="标题1" name="1">内容</gree-collapse-item>
    <gree-collapse-item title="标题2" name="2">内容</gree-collapse-item>
    <gree-collapse-item title="标题3" name="3">内容</gree-collapse-item>
  </gree-collapse>
</div>

<script>
  export default {
    data() {
      return {
        active2: '1'
      };
    }
  };
</script>
```

:::

### 自定义标题内容

:::demo

```html
<div
  class="gree-example-child gree-example-child-collapse gree-example-child-collapse-2"
>
  <gree-collapse v-model="active3">
    <gree-collapse-item name="1">
      <div slot="title">
        标题1
        <gree-icon name="question" size="sm" color="#00aeff" />
      </div>
      <div slot="right-icon">
        <gree-icon name="menu" size="sm" color="#44cc00" />
      </div>
      内容
    </gree-collapse-item>
    <gree-collapse-item title="标题2" name="2" icon="question">
      <div slot="icon">
        <gree-icon name="location" size="sm" color="#00aeff" />
      </div>
      内容
    </gree-collapse-item>
  </gree-collapse>
</div>

<script>
  export default {
    data() {
      return {
        active3: ['1']
      };
    }
  };
</script>
```

:::

## API

### Collapse Props

| 属性      | 说明                | 类型                                                               | 默认值  |
| --------- | ------------------- | ------------------------------------------------------------------ | ------- |
| v-model   | 当前展开面板的 name | 手风琴模式：[String, Number] <br> 非手风琴模式：(String, Number)[] | \-      |
| accordion | 是否开启手风琴模式  | Boolean                                                            | `false` |

### Events

| 事件名 | 说明           | 回调参数                                 |
| ------ | -------------- | ---------------------------------------- |
| change | 切换面板时触发 | activeNames: 类型与 v-model 绑定的值一致 |

### CollapseItem Props

| 属性     | 说明                                 | 类型             | 默认值  |
| -------- | ------------------------------------ | ---------------- | ------- |
| name     | 唯一标识符，默认为索引值             | [Number, String] | `index` |
| disabled | 是否禁用面板                         | Boolean          | `false` |
| is-link  | 是否展示标题栏右侧箭头并开启点击反馈 | Boolean          | `true`  |
| title    | 左侧文本内容                         | [String, Number] | \-      |
| text     | 右侧文本内容                         | [String, Number] | \-      |

### CollapseItem Slots

| 名称       | 说明                               |
| ---------- | ---------------------------------- |
| default    | 面板内容                           |
| value      | 自定义显示内容                     |
| icon       | 自定义`icon`                       |
| title      | 自定义`title`                      |
| right-icon | 自定义右侧按钮，默认是`arrow-down` |

<script>
  export default {
    data() {
      return {
        active1: ['1'],
        active2: '1',
        active3: ['1']
      };
    }
  };
</script>

<style lang="less">
.gree-example-child-collapse {
  .list {
    ul {
      margin-bottom: 0;
    }
  }
}
</style>
