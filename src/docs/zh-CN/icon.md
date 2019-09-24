# 图标

IconFont、SVG 图标

## 按需引入

```javascript
import { Icon } from 'gree-ui';

Vue.component(Icon.name, Icon);
```

### 字体图标

:::demo

```html
<gree-block>
  <gree-row>
    <gree-col width="25" v-for="icon in iconList" :key="icon">
      <gree-icon :name="icon" size="lg"></gree-icon>
      <p>{{ icon }}</p>
    </gree-col>
  </gree-row>
</gree-block>
```

:::

### 大小

:::demo

```html
<gree-block>
  <gree-row>
    <gree-col>
      <gree-icon name="power" size="xs"></gree-icon>
      <p>xs</p>
    </gree-col>
    <gree-col>
      <gree-icon name="power" size="sm"></gree-icon>
      <p>sm</p>
    </gree-col>
    <gree-col>
      <gree-icon name="power" size="md"></gree-icon>
      <p>md</p>
    </gree-col>
    <gree-col>
      <gree-icon name="power" size="lg"></gree-icon>
      <p>lg</p>
    </gree-col>
    <gree-col>
      <gree-icon name="power" size="xl"></gree-icon>
      <p>xl</p>
    </gree-col>
  </gree-row>
</gree-block>
```

:::

### 颜色

:::demo

```html
<gree-block>
  <gree-row>
    <gree-col>
      <gree-icon name="power" size="lg" color="aqua"></gree-icon>
      <p>aqua</p>
    </gree-col>
    <gree-col>
      <gree-icon name="power" size="lg" color="blueviolet"></gree-icon>
      <p>blueviolet</p>
    </gree-col>
    <gree-col>
      <gree-icon name="power" size="lg" color="coral"></gree-icon>
      <p>coral</p>
    </gree-col>
    <gree-col>
      <gree-icon name="power" size="lg" color="springgreen"></gree-icon>
      <p>springgreen</p>
    </gree-col>
  </gree-row>
</gree-block>
```

:::

### svg 图标

:::demo

```html
<gree-block>
  <gree-row>
    <gree-col>
      <gree-icon
        name="spinner"
        size="lg"
        svg
        style="-webkit-filter:invert(1)"
      ></gree-icon>
      <p>spinner</p>
    </gree-col>
    <gree-col>
      <gree-icon name="wechat" size="lg" svg></gree-icon>
      <p>wechat</p>
    </gree-col>
    <gree-col>
      <gree-icon name="wechat-timeline" size="lg" svg></gree-icon>
      <p>wechat-timeline</p>
    </gree-col>
    <gree-col>
      <gree-icon name="qq" size="lg" svg></gree-icon>
      <p>qq</p>
    </gree-col>
  </gree-row>
</gree-block>
```

:::

## Props

| 属性  | 说明          | 类型    | 默认值         | 备注                     |
| ----- | ------------- | ------- | -------------- | ------------------------ |
| name  | 图标名称      | String  | \-             | \-                       |
| size  | 图标大小      | String  | `md`           | `xs`,`sm`,`md`,`lg`,`xl` |
| color | 图标颜色      | String  | `currentColor` | \-                       |
| svg   | 使用 svg 图标 | Boolean | `false`        | \-                       |

<script>
export default {
  data() {
    return {
      iconList: [
        'check',
        'close',
        'home',
        'square',
        'squarecheck',
        'warning',
        'question',
        'unchecked',
        'add',
        'move',
        'clock',
        'location',
        'refresh',
        'feedback',
        'checked',
        'voice',
        'back',
        'more',
        'search',
        'share',
        'power',
        'success',
        'fail',
        'menu',
        'check-disabled',
        'arrow-up',
        'arrow-left',
        'arrow-down',
        'arrow-right'
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.block {
  .row {
    padding-top: 20px;
    background: #fff;
    text-align: center;

    .col, .col-25 {
      color: #333;
      padding: 15px 0;
      height: 100px;

      .gree-icon {
        color: #111a34;
      }

      p {
        color: #999;
        font-size: 24px;
        text-align: center;
        padding-top: 5px;
        white-space: nowrap;
      }
    }
  }
}
</style>