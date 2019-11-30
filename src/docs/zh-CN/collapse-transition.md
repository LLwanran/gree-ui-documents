# 折叠展开

元素展开、收起动画效果

## 按需引入

```javascript
import { CollapseTransition } from 'gree-ui';

Vue.component(CollapseTransition.name, CollapseTransition);
```

### 垂直

:::demo

```html
<gree-block>
  <gree-row>
    <gree-col>{{ btnNameVertical }}</gree-col>
    <div class="nav">
      <gree-icon
        name="arrow-down"
        :class="{aniRotate: showVertical}"
        @click.native="showVertical = !showVertical"
      ></gree-icon>
    </div>
  </gree-row>
  <gree-collapse-transition :visible="showVertical">
    <h3>江城子·密州出猎</h3>
    <p>【作者】苏轼 【朝代】宋</p>
    <p>
      老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。为报倾城随太守，亲射虎，看孙郎。
    </p>
    <p>
      酒酣胸胆尚开张。鬓微霜，又何妨！持节云中，何日遣冯唐？会挽雕弓如满月，西北望，射天狼。
    </p>
  </gree-collapse-transition>
</gree-block>

<style lang="scss" scoped>
  .row {
    color: #404657;
    font-size: 30px;

    .col {
      text-align: right;
      flex: 1;
    }
  }

  .nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .aniRotate {
    transform: rotate(180deg);
    transition: transform 0.4s ease;
  }
</style>
```

:::

### 水平

:::demo

```html
<gree-block>
  <gree-row>
    <gree-col
      class="verticle-mode"
      @click.native="showHorizontal = !showHorizontal"
    >
      {{ btnNameHorizontal }}
      <gree-icon :name="getHorizontalIconClass"></gree-icon>
    </gree-col>
    <gree-col width="95">
      <gree-collapse-transition :visible="showHorizontal" :horizontal="true">
        <div class="verticle-mode">
          <h3>咏柳</h3>
          <p>【作者】贺知章 【朝代】唐</p>
          <p>碧玉妆成一树高，万条垂下绿丝绦。</p>
          <p>不知细叶谁裁出，二月春风似剪刀。</p>
        </div>
      </gree-collapse-transition>
    </gree-col>
  </gree-row>
</gree-block>

<style lang="scss" scoped>
  .row {
    color: #404657;
    font-size: 30px;

    .col {
      text-align: right;
      flex: 1;
    }
  }

  .nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .verticle-mode {
    writing-mode: vertical-lr;
  }

  .aniRotate {
    transform: rotate(180deg);
    transition: transform 0.4s ease;
  }
</style>
```

:::

<script>
export default {
  data() {
    return {
      showVertical: false,
      showHorizontal: false
    };
  },
  computed: {
    btnNameVertical() {
      return this.showVertical ? '收起' : '展开';
    },
    btnNameHorizontal() {
      return this.showHorizontal ? '收起' : '展开';
    },
    getHorizontalIconClass() {
      return this.showHorizontal ? 'arrow-left' : 'arrow-right';
    }
  }
};
</script>

<style lang="less" scoped>
.row {
  color: #404657;
  font-size: 15px;

  .col {
    text-align: right;
    flex: 1;
  }
}

.nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.verticle-mode {
  writing-mode: vertical-lr;
}

.aniRotate {
  transform: rotate(180deg);
  transition: transform 0.4s ease;
}
</style>
