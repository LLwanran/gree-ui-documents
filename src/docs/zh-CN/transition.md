# 动画

复用动画切换组件

## 按需引入

```javascript
import { Transition } from 'gree-ui';

Vue.component(Transition.name, Transition);
```

### 基本

:::demo

```html
<gree-list>
  <gree-list-item
    link
    title="Fade"
    @click.native="showPopUp(0)"
  ></gree-list-item>
  <gree-list-item
    link
    title="Fade Up"
    @click.native="showPopUp(1)"
  ></gree-list-item>
  <gree-list-item
    link
    title="Fade Down"
    @click.native="showPopUp(2)"
  ></gree-list-item>
  <gree-list-item
    link
    title="Fade Left"
    @click.native="showPopUp(3)"
  ></gree-list-item>
  <gree-list-item
    link
    title="Fade Right"
    @click.native="showPopUp(4)"
  ></gree-list-item>
  <gree-list-item
    link
    title="Slide Up"
    @click.native="showPopUp(5)"
  ></gree-list-item>
  <gree-list-item
    link
    title="Slide Down"
    @click.native="showPopUp(6)"
  ></gree-list-item>
  <gree-list-item
    link
    title="Slide Left"
    @click.native="showPopUp(7)"
  ></gree-list-item>
  <gree-list-item
    link
    title="Slide Right"
    @click.native="showPopUp(8)"
  ></gree-list-item>
  <gree-list-item
    link
    title="Bounce"
    @click.native="showPopUp(9)"
  ></gree-list-item>
  <gree-list-item
    link
    title="Punch"
    @click.native="showPopUp(10)"
  ></gree-list-item>
  <gree-list-item
    link
    title="Zoom"
    @click.native="showPopUp(11)"
  ></gree-list-item>
</gree-list>
<!-- Fade -->
<gree-popup v-model="isPopupShow[0]" transition="gree-fade">
  <div class="gree-sample-popup gree-sample-popup-center">Fade</div>
</gree-popup>
<!-- Fade Up -->
<gree-popup v-model="isPopupShow[1]" transition="gree-fade-up">
  <div class="gree-sample-popup gree-sample-popup-center">Fade Up</div>
</gree-popup>
<!-- Fade Down -->
<gree-popup v-model="isPopupShow[2]" transition="gree-fade-down">
  <div class="gree-sample-popup gree-sample-popup-center">Fade Down</div>
</gree-popup>
<!-- Fade Left -->
<gree-popup v-model="isPopupShow[3]" transition="gree-fade-left">
  <div class="gree-sample-popup gree-sample-popup-center">Fade Left</div>
</gree-popup>
<!-- Fade Right -->
<gree-popup v-model="isPopupShow[4]" transition="gree-fade-right">
  <div class="gree-sample-popup gree-sample-popup-center">Fade Right</div>
</gree-popup>
<!-- Slide Up -->
<gree-popup v-model="isPopupShow[5]" transition="gree-slide-up">
  <div class="gree-sample-popup gree-sample-popup-center">Slide Up</div>
</gree-popup>
<!-- Slide Down -->
<gree-popup v-model="isPopupShow[6]" transition="gree-slide-down">
  <div class="gree-sample-popup gree-sample-popup-center">Slide Down</div>
</gree-popup>
<!-- Slide Left -->
<gree-popup v-model="isPopupShow[7]" transition="gree-slide-left">
  <div class="gree-sample-popup gree-sample-popup-center">Slide Left</div>
</gree-popup>
<!-- Slide Right -->
<gree-popup v-model="isPopupShow[8]" transition="gree-slide-right">
  <div class="gree-sample-popup gree-sample-popup-center">Slide Right</div>
</gree-popup>
<!-- Bounce -->
<gree-popup v-model="isPopupShow[9]" transition="gree-bounce">
  <div class="gree-sample-popup gree-sample-popup-center">Bounce</div>
</gree-popup>
<!-- Punch -->
<gree-popup v-model="isPopupShow[10]" transition="gree-punch">
  <div class="gree-sample-popup gree-sample-popup-center">Punch</div>
</gree-popup>
<!-- Zoom -->
<gree-popup v-model="isPopupShow[11]" transition="gree-zoom">
  <div class="gree-sample-popup gree-sample-popup-center">Zoom</div>
</gree-popup>

<script>
  export default {
    data() {
      return {
        isPopupShow: []
      };
    },
    methods: {
      showPopUp(type) {
        this.$set(this.isPopupShow, type, true);
      }
    }
  };
</script>
```

:::

## API

`gree-transition`组件为 Vue 内置`transtion`的一层封装，支持所有 Transition 的属性参数。

其中内置动画`name`参数如下：

- `gree-fade`
- `gree-fade-up`
- `gree-fade-down`
- `gree-fade-left`
- `gree-fade-right`
- `gree-slide-up`
- `gree-slide-down`
- `gree-slide-left`
- `gree-slide-right`
- `gree-bounce`
- `gree-punch`
- `gree-zoom`

<script>
export default {
  data() {
    return {
      isPopupShow: []
    };
  },
  methods: {
    showPopUp(type) {
      this.$set(this.isPopupShow, type, true);
    }
  }
};
</script>

<style lang="less" scoped>
.gree-sample-popup {
  position: relative;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  background-color: #fff;
}
.gree-sample-popup-center {
  padding: 25px 50px;
  border-radius: 5px;
}
</style>
