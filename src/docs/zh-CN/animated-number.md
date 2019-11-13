# 动画数字

一般用于数量、金额等动画或格式化展示

## 按需引入

```javascript
import { AnimatedNumber } from 'gree-ui';

Vue.component(AnimatedNumber.name, AnimatedNumber);
```

### 基础

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-animated-number gree-example-child-animated-number-0"
  >
    <p>
      <span class="describe">原始值</span>
      <gree-animated-number :value="1234.123" :precision="3" />
    </p>
    <p>
      <span class="describe">四舍五入</span>
      <gree-animated-number :value="1234.125" :precision="0" />
    </p>
    <p>
      <span class="describe">向下取整</span>
      <gree-animated-number :value="1234.123" :is-round-up="false" />
    </p>
  </div>
</gree-block>

<style lang="scss">
  .gree-example-child-animated-number-0 {
    text-align: center;
    color: #666;
    p {
      font-size: 50px;
      span.describe {
        font-size: 18px;
      }
    }
  }
</style>
```

:::

### 千位分隔符

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-animated-number gree-example-child-animated-number-1"
  >
    <gree-animated-number :value="12699" has-separator />
  </div>
</gree-block>

<style lang="scss">
  .gree-example-child-animated-number-1 {
    text-align: center;
    color: #666;
    font-size: 50px;
  }
</style>
```

:::

### 大写中文

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-animated-number gree-example-child-animated-number-2"
  >
    <gree-animated-number :value="12699" is-capital />
  </div>
</gree-block>

<style lang="scss">
  .gree-example-child-animated-number-2 {
    text-align: center;
    color: #666;
    font-size: 50px;
  }
</style>
```

:::

### 变化动效

:::demo

```html
<gree-block>
  <div
    class="gree-example-child gree-example-child-animated-number gree-example-child-animated-number-3"
  >
    <gree-animated-number
      :value="val"
      :precision="0"
      :duration="800"
      transition
    />
  </div>
</gree-block>

<script>
  export default {
    data() {
      return {
        val: 100
      };
    },
    mounted() {
      setTimeout(() => {
        this.val = 500;
        setTimeout(() => {
          this.val = 250;
        }, 2000);
      }, 2000);
    }
  };
</script>

<style lang="scss">
  .gree-example-child-animated-number-3 {
    text-align: center;
    color: #666;
    font-size: 50px;
  }
</style>
```

:::

## Props

| 属性          | 说明                     | 类型    | 默认值  | 备注             |
| ------------- | ------------------------ | ------- | ------- | ---------------- |
| value         | 数值                     | Number  | `0`     | \-               |
| precision     | 数字精度                 | Number  | `2`     | 小数点后保留几位 |
| is-round-up   | 数字精度取舍是否四舍五入 | Boolean | `true`  | \-               |
| has-separator | 数字是否有千位分隔符     | Boolean | `false` | \-               |
| separator     | 数字千位分隔符           | String  | `,`     | \-               |
| is-capital    | 数字是否转换为大写中文   | Boolean | `false` | \-               |
| transition    | 数字变化是否使用动画     | Boolean | `false` | \-               |
| duration      | 数字变化动画时长         | Number  | `1000`  | 单位`ms`         |

<script>
export default {
  data() {
    return {
      val: 100
    };
  },
  mounted() {
    setTimeout(() => {
      this.val = 500;
      setTimeout(() => {
        this.val = 250;
      }, 2000);
    }, 2000);
  }
};
</script>

<style lang="less">
.gree-example-child-animated-number-0 {
  text-align: center;
  color: #666;
  p {
    font-size: 50px;
    span.describe {
      font-size: 18px;
    }
  }
}
.gree-example-child-animated-number-1,
.gree-example-child-animated-number-2,
.gree-example-child-animated-number-3 {
  text-align: center;
  color: #666;
  font-size: 50px;
}
</style>
