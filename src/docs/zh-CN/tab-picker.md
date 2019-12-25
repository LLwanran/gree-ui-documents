# 多级联动选择器

底部级联选择的 Tab 切换面板

## 按需引入

```javascript
import { TabPicker } from 'gree-ui';

Vue.component(TabPicker.name, TabPicker);
```

### 基础

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="warning" scrollable>
  为了更好的体验效果，建议在 iOS 或 Android 设备上体验！
</gree-notice-bar>
<gree-block class="gree-example-child-tab-picker-0">
  <gree-list>
    <gree-list-item
      link
      title="所在地区"
      :after="addressStr"
      @click.native="show = !show"
    ></gree-list-item>
  </gree-list>
  <gree-tab-picker
    title="请选择"
    describe="请选择您所在的省份、城市、区县"
    large-radius
    :data="data"
    v-model="show"
    @change="handleChange"
  ></gree-tab-picker>
</gree-block>

<script>
  import data from '../../configs/data';

  export default {
    data() {
      return {
        show: false,
        placeholder: '选择所在地区',
        address: [],
        data: data
      };
    },
    computed: {
      addressStr() {
        if (this.address.length > 0) {
          return this.address.map(item => item.label).join(' ');
        } else {
          return this.placeholder;
        }
      }
    },
    methods: {
      handleChange({ options }) {
        this.address = options;
      }
    }
  };
</script>
```

:::

<script>
  import data from '../../configs/data';

  export default {
    data() {
      return {
        show: false,
        placeholder: '选择所在地区',
        address: [],
        data: data
      };
    },
    computed: {
      addressStr() {
        if (this.address.length > 0) {
          return this.address.map(item => item.label).join(' ');
        } else {
          return this.placeholder;
        }
      }
    },
    methods: {
      handleChange({ options }) {
        this.address = options;
      }
    }
  };
</script>

<style lang="less">
.gree-example-child-tab-picker-0 {
  .gree-field-item-content {
    min-height: auto;

    &::after {
      display: none;
    }
  }
}
</style>
