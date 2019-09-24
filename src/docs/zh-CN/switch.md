# 开关

开关按钮，用于表示开关状态/两种状态之间的切换

## 按需引入

```javascript
import { Switch } from 'gree-ui';

Vue.component(Switch.name, Switch);
```

### 基本

:::demo

```html
<gree-list>
  <gree-list-item title="开启状态">
    <gree-switch
      slot="after"
      v-model="isActive"
      @change="handler('switch1', isActive, $event)"
    ></gree-switch>
  </gree-list-item>
  <gree-list-item title="关闭状态">
    <gree-switch slot="after" v-model="isActive2"></gree-switch>
  </gree-list-item>
  <gree-list-item title="开启不可用状态">
    <gree-switch slot="after" v-model="isActive3" disabled></gree-switch>
  </gree-list-item>
  <gree-list-item title="关闭不可用状态">
    <gree-switch slot="after" v-model="isActive4" disabled></gree-switch>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        isActive: true,
        isActive2: false,
        isActive3: true,
        isActive4: false
      };
    },
    methods: {
      handler(name, active) {
        console.log(
          `Status of switch ${name} is ${active ? 'active' : 'inactive'}`
        );
      }
    }
  };
</script>
```

:::

### 自定义颜色

:::demo

```html
<gree-list>
  <gree-list-item title="蓝色">
    <gree-switch class="blue" slot="after" v-model="isActive"></gree-switch>
  </gree-list-item>
  <gree-list-item title="橙色">
    <gree-switch class="orange" slot="after" v-model="isActive"></gree-switch>
  </gree-list-item>
  <gree-list-item title="红色">
    <gree-switch class="red" slot="after" v-model="isActive"></gree-switch>
  </gree-list-item>
</gree-list>

<script>
  export default {
    data() {
      return {
        isActive: true
      };
    }
  };
</script>

<style lang="less" scoped>
  /deep/.gree-switch.active {
    &.blue {
      .switch-icon {
        background: #2196f3;
      }
    }
    &.orange {
      .switch-icon {
        background: #ff9500;
      }
    }
    &.red {
      .switch-icon {
        background: #ff3b30;
      }
    }
  }
</style>
```

:::

## Props

| 属性     | 说明         | 类型    | 默认值  |
| -------- | ------------ | ------- | ------- |
| v-model  | 打开或者关闭 | Boolean | `false` |
| disabled | 是否禁用     | Boolean | `false` |

## Events

### @change(isActive)

事件说明

| 属性     | 说明                   | 类型    |
| -------- | ---------------------- | ------- |
| isActive | 开关状态，打开或者关闭 | Boolean |

<script>
export default {
  data() {
    return {
      isActive: true,
      isActive2: false,
      isActive3: true,
      isActive4: false
    };
  },
  methods: {
    handler(name, active) {
      console.log(
        `Status of switch ${name} is ${active ? 'active' : 'inactive'}`
      );
    }
  }
};
</script>

<style lang="less" scoped>
/deep/.gree-switch.active {
  &.blue {
    .switch-icon {
      background: #2196f3;
    }
  }
  &.orange {
    .switch-icon {
      background: #ff9500;
    }
  }
  &.red {
    .switch-icon {
      background: #ff3b30;
    }
  }
}
</style>
