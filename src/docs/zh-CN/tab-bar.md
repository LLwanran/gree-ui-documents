# 标签栏

用于创建标签页

## 按需引入

```javascript
import { TabBar } from 'gree-ui';

Vue.component(TabBar.name, TabBar);
```

## 蒸烤一体机 Demo

:::demo

```html
<gree-block>
  <gree-tab-bar
    class="all-in-one"
    v-model="current1"
    :items="items1"
    :hasInk="false"
    @change="onChange"
  ></gree-tab-bar>
</gree-block>

<script>
  export default {
    data() {
      return {
        current1: 1,
        items1: [
          { name: 1, label: '智能菜单' },
          { name: 2, label: '专业烘焙' },
          { name: 3, label: '专业蒸制' },
          { name: 4, label: '辅助功能' }
        ]
      };
    },
    methods: {
      onChange(item, index, prevIndex) {
        console.log(
          `currentIndex: ${index}, prevIndex: ${prevIndex}, label: ${
            item.label
          }`
        );
      }
    }
  };
</script>
```

:::

## 校园租赁 Demo

:::demo

```html
<gree-block>
  <gree-tab-bar v-model="current2" :items="items2"></gree-tab-bar>
</gree-block>

<script>
  export default {
    data() {
      return {
        current2: 1,
        items2: [
          { name: 1, label: '租赁' },
          { name: 2, label: '续租' },
          { name: 3, label: '报修' },
          { name: 4, label: '退租' }
        ]
      };
    }
  };
</script>
```

:::

## 横向滚动

:::demo

```html
<gree-block>
  <gree-tab-bar
    v-model="current3"
    :items="items3"
    :maxLength="5"
  ></gree-tab-bar>
</gree-block>

<script>
  export default {
    data() {
      return {
        current3: 1,
        items3: [
          { name: 1, label: '天猫超市' },
          { name: 2, label: '天猫国际' },
          { name: 3, label: '天猫会员' },
          { name: 4, label: '电器城' },
          { name: 5, label: '喵鲜生' },
          { name: 6, label: '医药馆' },
          { name: 7, label: '营业厅' },
          { name: 8, label: '魅力惠' },
          { name: 9, label: '飞猪旅行' },
          { name: 10, label: '苏宁易购' }
        ]
      };
    }
  };
</script>
```

:::

## 底部 TabBar

:::demo

```html
<gree-toolbar
  position="bottom"
  no-hairline
  class="gree-example-child-tab-bar-4"
>
  <gree-tab-bar v-model="current4" :items="items4" :has-ink="false">
    <template slot="item" slot-scope="{ item }">
      <div class="custom-item">
        <div class="icon">
          <gree-icon :name="item.icon"></gree-icon>
        </div>
        <div class="text">
          <span v-text="item.label"></span>
        </div>
      </div>
    </template>
  </gree-tab-bar>
</gree-toolbar>

<script>
  export default {
    data() {
      return {
        current4: 1,
        items4: [
          { name: 1, label: '首页', icon: 'home' },
          { name: 2, label: '我的', icon: 'voice' }
        ]
      };
    }
  };
</script>
```

:::

## Props

| 属性       | 说明                     | 类型    | 默认值 | 备注                    |
| ---------- | ------------------------ | ------- | ------ | ----------------------- |
| v-model    | 双向绑定的标签对象`name` | String  | \-     | \-                      |
| items      | 标签标题数组             | Array   | \-     | \-                      |
| has-ink    | 是否显示下划线           | Boolean | `true` | \-                      |
| ink-length | 下划线宽度               | Number  | `100`  | 百分比，须在`0-100`之间 |

## Events

### @change(item, index, prevIndex)

标签索引发生变化事件

| 属性      | 说明           | 类型   |
| --------- | -------------- | ------ |
| item      | 选中的标签对象 | Object |
| index     | 选中的标签索引 | Number |
| prevIndex | 上一标签索引   | Number |

<script>
export default {
  data() {
    return {
      current1: 1,
      items1: [
        { name: 1, label: '智能菜单' },
        { name: 2, label: '专业烘焙' },
        { name: 3, label: '专业蒸制' },
        { name: 4, label: '辅助功能' }
      ],
      current2: 1,
      items2: [
        { name: 1, label: '租赁' },
        { name: 2, label: '续租' },
        { name: 3, label: '报修' },
        { name: 4, label: '退租' }
      ],
      current3: 1,
      items3: [
        { name: 1, label: '天猫超市' },
        { name: 2, label: '天猫国际' },
        { name: 3, label: '天猫会员' },
        { name: 4, label: '电器城' },
        { name: 5, label: '喵鲜生' },
        { name: 6, label: '医药馆' },
        { name: 7, label: '营业厅' },
        { name: 8, label: '魅力惠' },
        { name: 9, label: '飞猪旅行' },
        { name: 10, label: '苏宁易购' }
      ],
      current4: 1,
      items4: [
        { name: 1, label: '首页', icon: 'home' },
        { name: 2, label: '我的', icon: 'voice' }
      ]
    };
  },
  methods: {
    onChange(item, index, prevIndex) {
      console.log(
        `currentIndex: ${index}, prevIndex: ${prevIndex}, label: ${item.label}`
      );
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .gree-tab-bar-item.is-active {
  color: #00aeff !important;
}
.block {
  width: 80%;
  color: #666f83;
  /deep/ .gree-tab-bar.all-in-one {
    padding: 0;
    background-color: #212127;
    .gree-tab-bar-list {
      .gree-tab-bar-item {
        color: #bcbcbd;
        font-size: 19px;
        min-height: 65px;
        flex: 1;
        &:not(.is-active):before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: auto;
          bottom: auto;
          width: 200%;
          height: 200%;
          border-left: 1px solid #36363c;
          box-sizing: border-box;
          transform-origin: 0 0;
          transform: scale(0.5);
          z-index: 2;
        }
        &.is-active {
          color: #fff !important;
          background-color: #f1ae26;
        }
      }
    }
  }
}
.gree-example-child-tab-bar-4 {
  /deep/ .gree-tab-bar {
    width: 100%;
    .custom-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex: 1;
      .text {
        font-size: 18px;
      }
    }
  }
}
</style>
