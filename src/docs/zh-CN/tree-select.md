# 分类选择

类似 Select 的选择控件

## 按需引入

```javascript
import { TreeSelect } from 'gree-ui';

Vue.component(TreeSelect.name, TreeSelect);
```

### 单选模式

#### `item`为分类显示所需的数据，数据格式见下方示例。`main-active-index`表示左侧高亮选项的索引，`active-id`表示右侧高亮选项的 id

:::demo

```html
<div
  class="gree-example-child gree-example-child-tree-select gree-example-child-tree-select-0"
>
  <gree-tree-select
    :items="items"
    :active-id.sync="activeId"
    :main-active-index.sync="activeIndex"
  />
</div>

<script>
  import { treeselect01 } from '../../configs/treeselect01';

  export default {
    data() {
      return {
        activeId: 1,
        activeIndex: 0
      };
    },
    computed: {
      items() {
        return treeselect01;
      }
    }
  };
</script>
```

:::

### 多选模式

#### `active-id`为数组格式时，可以选中多个右侧选项

:::demo

```html
<div
  class="gree-example-child gree-example-child-tree-select gree-example-child-tree-select-1"
>
  <gree-tree-select
    :items="items"
    :active-id.sync="activeIds"
    :main-active-index.sync="activeIndex2"
  />
</div>

<script>
  import { treeselect01 } from '../../configs/treeselect01';

  export default {
    data() {
      return {
        activeIds: [1, 2],
        activeIndex2: 0
      };
    },
    computed: {
      items() {
        return treeselect01;
      }
    }
  };
</script>
```

:::

### 自定义内容

#### 通过`content`插槽可以自定义右侧区域的内容

#### 设置`dot`属性后，会在图标右上角展示一个小红点。设置`info`属性后，会在图标右上角展示相应的徽标

:::demo

```html
<div
  class="gree-example-child gree-example-child-tree-select gree-example-child-tree-select-2"
>
  <gree-tree-select
    height="500px"
    :items="simpleItems"
    :main-active-index.sync="activeIndex3"
  >
    <template slot="content">
      <gree-block v-if="activeIndex3 === 0">
        <h4>热门分类</h4>
        <gree-row>
          <gree-col width="33" v-for="(item, index) in list[0]" :key="index">
            <gree-image :src="item.img"></gree-image>
            <span>{{ item.text }}</span>
          </gree-col>
        </gree-row>
        <h4>家电热搜</h4>
        <gree-row>
          <gree-col width="33" v-for="(item, index) in list[1]" :key="index">
            <gree-image :src="item.img"></gree-image>
            <span>{{ item.text }}</span>
          </gree-col>
        </gree-row>
      </gree-block>
      <gree-block v-if="activeIndex3 === 1">
        <gree-image
          src="https://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/99833/9/8975/95129/5e09cb4eE19a2a2fb/f21d75f4d9b075dc.jpg"
        ></gree-image>
      </gree-block>
    </template>
  </gree-tree-select>
</div>

<script>
  import treeselectlist from '../../configs/treeselectlist';

  export default {
    data() {
      return {
        activeIndex3: 0,
        list: treeselectlist
      };
    },
    computed: {
      simpleItems() {
        return [
          { text: '热门推荐', dot: true },
          { text: '电脑办公', info: 5 },
          { text: '汽车生活', disabled: true }
        ];
      }
    }
  };
</script>

<style lang="scss" scoped>
  .gree-example-child-tree-select-2 {
    h4 {
      &:not(.first-child) {
        margin: 55px 20px 0;
      }
    }
    .row {
      margin-top: 15px;
      padding: 20px 29px 0;
      .col-33 {
        span {
          color: #404657;
          font-size: 35px;
          height: 75px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          word-break: break-all;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
</style>
```

:::

## API

### Props

| 属性              | 说明                          | 类型                                   | 默认值     |
| ----------------- | ----------------------------- | -------------------------------------- | ---------- |
| items             | 分类显示所需的数据            | Item[]                                 | `[]`       |
| height            | 高度，默认单位为`px`          | [String, Number]                       | `300`      |
| main-active-index | 左侧选中项的索引              | Number                                 | `0`        |
| active-id         | 右侧选中项的 id，支持传入数组 | [String, Number, (String, Number)\[\]] | `0`        |
| max               | 右侧项最大选中个数            | Number                                 | `Infinity` |

### Events

| 事件名     | 说明                 | 回调参数                  |
| ---------- | -------------------- | ------------------------- |
| click-nav  | 点击左侧导航时触发   | index：被点击的导航的索引 |
| click-item | 点击右侧选择项时触发 | data: 该点击项的数据      |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| content | 自定义右侧区域内容 |

### Item 数据结构

`items`整体为一个数组，数组内包含一系列描述分类的对象，每个分类里，`text`表示当前分类的名称，`children`表示分类里的可选项。

```javascript
[
  {
    // 导航名称
    text: '推荐',
    // 导航名称右上角徽标
    info: 3,
    // 是否在导航名称右上角显示小红点
    dot: true,
    // 导航节点额外类名
    className: 'my-class',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '智能机',
        // id，作为匹配选中状态的标识符
        id: 1,
        // 禁用选项
        disabled: true
      },
      {
        text: '时尚套装',
        id: 2
      },
      {
        text: '连衣裙',
        id: 3,
        disabled: true
      },
      {
        text: '口红/唇膏',
        id: 4
      }
    ]
  }
];
```

<script>
  import { treeselect01 } from '../../configs/treeselect01';
  import treeselectlist from '../../configs/treeselectlist';

  export default {
    data() {
      return {
        activeId: 1,
        activeIndex: 0,
        activeIds: [1, 2],
        activeIndex2: 0,
        activeIndex3: 0,
        list: treeselectlist
      };
    },
    computed: {
      items() {
        return treeselect01;
      },
      simpleItems() {
        return [
          { text: '热门推荐', dot: true },
          { text: '电脑办公', info: 5 },
          { text: '汽车生活', disabled: true }
        ];
      }
    }
  };
</script>

<style lang="less">
.gree-example-child-tree-select-2 {
  h4 {
    &:not(.first-child) {
      margin: 22px 10px 0;
    }
  }
  .row {
    margin-top: 8px;
    padding: 10px 15px 0;
    .col-33 {
      span {
        color: #404657;
        font-size: 17px;
        height: 37px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        word-break: break-all;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
