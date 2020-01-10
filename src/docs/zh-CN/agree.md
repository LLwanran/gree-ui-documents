# 勾选按钮

用于标记切换某种状态，如协议勾选

## 按需引入

```javascript
import { Agree } from 'gree-ui';

Vue.component(Agree.name, Agree);
```

### 选中状态

:::demo

```html
<gree-agree
  v-model="agreeConf.checked"
  :disabled="agreeConf.disabled"
  :size="agreeConf.size"
  @change="onChange(agreeConf.name, agreeConf.checked, $event)"
>
  我已阅读并同意格力
  <a>用户注册协议</a>和
  <a>隐私政策</a>
</gree-agree>

<script>
  export default {
    data() {
      return {
        agreeConf: {
          checked: true,
          name: 'agree0',
          size: 'md',
          disabled: false,
          introduction: '选中状态'
        }
      };
    },
    methods: {
      onChange(name, checked) {
        console.log(
          `agree name = ${name} is ${checked ? 'checked' : 'unchecked'}`
        );
      }
    }
  };
</script>
```

:::

### 未选中状态

:::demo

```html
<gree-agree
  v-model="agreeConf2.checked"
  :disabled="agreeConf2.disabled"
  :size="agreeConf2.size"
  @change="onChange(agreeConf2.name, agreeConf2.checked, $event)"
>
  我已阅读并同意格力
  <a>用户注册协议</a>和
  <a>隐私政策</a>
</gree-agree>

<script>
  export default {
    data() {
      return {
        agreeConf2: {
          checked: false,
          name: 'agree1',
          size: 'md',
          disabled: false,
          introduction: '未选中状态'
        }
      };
    },
    methods: {
      onChange(name, checked) {
        console.log(
          `agree name = ${name} is ${checked ? 'checked' : 'unchecked'}`
        );
      }
    }
  };
</script>
```

:::

### 禁止选择状态

:::demo

```html
<gree-agree
  v-model="agreeConf3.checked"
  :disabled="agreeConf3.disabled"
  :size="agreeConf3.size"
  @change="onChange(agreeConf3.name, agreeConf3.checked, $event)"
>
  我已阅读并同意格力
  <a>用户注册协议</a>和
  <a>隐私政策</a>
</gree-agree>

<script>
  export default {
    data() {
      return {
        agreeConf3: {
          checked: true,
          name: 'agree2',
          size: 'md',
          disabled: true,
          introduction: '禁止选择状态'
        }
      };
    },
    methods: {
      onChange(name, checked) {
        console.log(
          `agree name = ${name} is ${checked ? 'checked' : 'unchecked'}`
        );
      }
    }
  };
</script>
```

:::

### Props

| 属性     | 说明     | 类型    | 默认值  | 备注                 |
| -------- | -------- | ------- | ------- | -------------------- |
| v-model  | 是否选中 | Boolean | `false` | \-                   |
| disabled | 是否禁用 | Boolean | `false` | \-                   |
| size     | 按钮大小 | String  | `md`    | 可选值参考组件`Icon` |

### Events

#### @change(name, checked)

勾选状态发生变化事件

| 属性    | 说明                   | 类型          |
| ------- | ---------------------- | ------------- |
| name    | 单选按钮名称，唯一标识 | Number/String |
| checked | 是否选中               | Boolean       |

<script>
export default {
  data() {
    return {
      agreeConf: {
        checked: true,
        name: 'agree0',
        size: 'md',
        disabled: false,
        introduction: '选中状态'
      },
      agreeConf2: {
        checked: false,
        name: 'agree1',
        size: 'md',
        disabled: false,
        introduction: '未选中状态'
      },
      agreeConf3: {
        checked: true,
        name: 'agree2',
        size: 'md',
        disabled: true,
        introduction: '禁止选择状态'
      }
    };
  },
  methods: {
    onChange(name, checked) {
      console.log(
        `agree name = ${name} is ${checked ? 'checked' : 'unchecked'}`
      );
    }
  }
};
</script>

<style lang="less" scoped>
.gree-agree-content {
  color: #858b9c;
  font-size: 18px;
  a {
    color: #00aeff;
  }
}
</style>
