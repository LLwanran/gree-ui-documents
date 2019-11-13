# 活动指示器

加载时显示动效

## 按需引入

```javascript
import { ActivityIndicator } from "gree-ui";

Vue.component(ActivityIndicator.name, ActivityIndicator);
```

### Roller

:::demo

```html
<gree-block class="gree-example-child-activity-indicator-1">
  <gree-activity-indicator :size="20" :text-size="16"
    >水平加载中...</gree-activity-indicator
  >
  <gree-activity-indicator :size="20" :text-size="16" vertical
    >垂直加载中...</gree-activity-indicator
  >
  <gree-activity-indicator class="gree-activity-indicator-css"
    >大小加载中...</gree-activity-indicator
  >
</gree-block>
```

:::

### Spinner

:::demo

```html
<gree-block class="gree-example-child-activity-indicator-2">
  <gree-activity-indicator type="spinner" :size="30" :text-size="20"
    >加载中...</gree-activity-indicator
  >
  <div class="activity-indicator-container">
    <gree-activity-indicator
      class="gree-activity-indicator-css"
      type="spinner"
      :size="30"
      :text-size="20"
      color="light"
      >加载中...</gree-activity-indicator
    >
  </div>
</gree-block>
```

:::

### Carousel

:::demo

```html
<gree-block class="gree-example-child-activity-indicator-3">
  <gree-activity-indicator type="carousel" :size="15"></gree-activity-indicator>
  <gree-block>
    <gree-button type="positive" @click="doClick">
      <gree-activity-indicator
        v-if="loading"
        class="gree-activity-indicator-css"
        type="carousel"
        :size="15"
        color="#fff"
        text-color="#fff"
      ></gree-activity-indicator>
      <span v-else>确认提交</span>
    </gree-button>
  </gree-block>
</gree-block>

<script>
  export default {
    data() {
      return {
        loading: false
      };
    },
    methods: {
      doClick() {
        if (this.loading) {
          return;
        }
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    }
  };
</script>
```

:::

## Props

| 属性       | 说明                 | 类型    | 默认值         | 备注                                               |
| ---------- | -------------------- | ------- | -------------- | -------------------------------------------------- |
| type       | 类型                 | String  | `roller`       | `roller`,`spinner`,`carousel`                      |
| size       | 图标大小             | Number  | `70`           | 单位`px`                                           |
| width      | 图标宽度             | Number  | \-             | 单位`px`, 仅用于类型`roller`                       |
| color      | 图标颜色             | String  | `#fc9153/dark` | `spinner`无法自定义色值，可选值只有`dark`和`light` |
| text-color | 文字颜色             | String  | `#999`         | \-                                                 |
| text-size  | 文字大小             | String  | `70px`         | \-                                                 |
| vertical   | 图标文字是否垂直排列 | Boolean | `false`        | \-                                                 |

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    doClick() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style lang="less" scoped>
.gree-example-child-activity-indicator-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  .gree-activity-indicator {
    margin-bottom: 30px;
    &.gree-activity-indicator-css {
      .gree-activity-indicator-svg {
        width: 60px !important;
        height: 60px !important;
      }
      .gree-activity-indicator-text {
        font-size: 32px;
      }
    }
  }
}
.gree-example-child-activity-indicator-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  .gree-activity-indicator {
    margin-bottom: 30px;
  }
  .activity-indicator-container {
    margin-bottom: 30px;
    padding: 15px 20px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    .gree-activity-indicator-css {
      margin-bottom: 0;
      .gree-activity-indicator-svg {
        width: 40px !important;
        height: 40px !important;
      }
      .gree-activity-indicator-text {
        font-size: 28px !important;
      }
    }
  }
}
.gree-example-child-activity-indicator-3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  .gree-activity-indicator {
    margin-bottom: 30px;
  }
  /deep/.gree-button {
    width: 100%;
    .gree-button-inner {
      background: #00aeff;
    }
    .gree-activity-indicator-css {
      margin-bottom: 0;
      .gree-activity-indicator-svg {
        height: 15px !important;
      }
    }
  }
}
</style>
