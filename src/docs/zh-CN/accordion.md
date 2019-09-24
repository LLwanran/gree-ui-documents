# 手风琴

将内容展开或折叠

## 按需引入

```javascript
import { Accordion, AccordionItem } from 'gree-ui';

Vue.component(Accordion.name, Accordion);
Vue.component(AccordionItem.name, AccordionItem);
```

### 单个展开

:::demo

```html
<gree-accordion>
  <gree-accordion-item title="冷藏室">
    <gree-block strong no-hairlines>
      <p>冷藏室只能冷藏而不能冷冻</p>
      <p>冷藏是指在低于常温但不低于物品冻结温度条件下的一种保藏方法，保鲜</p>
    </gree-block>
  </gree-accordion-item>
  <gree-accordion-item title="冷冻室">
    <gree-block strong no-hairlines>
      <p>
        冷冻室可寄存新鲜的或已冻结的肉类、鱼类、家禽类，也可寄存已烹调好的食物，寄存期约3个月。
      </p>
      <p>
        冷冻室可以疾速冷冻需保留很长时刻的新鲜鱼、肉类食物，以最大极限保证食物的新鲜风味。
      </p>
    </gree-block>
  </gree-accordion-item>
  <gree-accordion-item title="变温室">
    <gree-block strong no-hairlines>
      <p>变温室可随意调到-18——+8度。</p>
      <p>一般变温室设为0度最省电（也可做冷冻或冷藏用）。</p>
    </gree-block>
  </gree-accordion-item>
</gree-accordion>

<script>
  import { Accordion, AccordionItem } from 'gree-ui';

  export default {
    components: {
      [Accordion.name]: Accordion,
      [AccordionItem.name]: AccordionItem
    }
  };
</script>
```

:::

### 多个展开

:::demo

```html
<gree-accordion accordion>
  <gree-accordion-item title="冷藏室" open>
    <gree-block strong no-hairlines>
      <p>冷藏室只能冷藏而不能冷冻</p>
      <p>冷藏是指在低于常温但不低于物品冻结温度条件下的一种保藏方法，保鲜</p>
    </gree-block>
  </gree-accordion-item>
  <gree-accordion-item title="冷冻室">
    <gree-block strong no-hairlines>
      <p>
        冷冻室可寄存新鲜的或已冻结的肉类、鱼类、家禽类，也可寄存已烹调好的食物，寄存期约3个月。
      </p>
      <p>
        冷冻室可以疾速冷冻需保留很长时刻的新鲜鱼、肉类食物，以最大极限保证食物的新鲜风味。
      </p>
    </gree-block>
  </gree-accordion-item>
  <gree-accordion-item title="变温室">
    <gree-block strong no-hairlines>
      <p>变温室可随意调到-18——+8度。</p>
      <p>一般变温室设为0度最省电（也可做冷冻或冷藏用）。</p>
    </gree-block>
  </gree-accordion-item>
</gree-accordion>
```

:::

## accordion Props

| 属性      | 说明                     | 类型    | 默认值  |
| --------- | ------------------------ | ------- | ------- |
| accordion | 是否可以同时展开多个面板 | Boolean | `false` |

## accordion Slots

| 属性 | 说明 |
| ---- | ---- |
| \-   | 内容 |

## accordion-item Props

| 属性  | 说明                 | 类型    | 默认值  |
| ----- | -------------------- | ------- | ------- |
| title | 标题                 | String  | \-      |
| open  | 是否默认展开面板     | Boolean | `false` |
| auto  | 是否自动展开折叠参数 | Boolean | `true`  |

## accordion-item Slots

| 属性  | 说明                                             |
| ----- | ------------------------------------------------ |
| title | 标题内容（可自定义颜色，放置图标等等）           |
| icon  | 没有事件响应的标题图标内容（位于“标题内容”前面） |
| txt   | 没有事件响应的其他标题内容（位于“标题内容”后面） |

### 提示

#### **展开多个**

- 组件 `gree-accordion` 上添加 `accordion` 或 `:accordion="true"` 即可同时展开多个面板
- 组件 `gree-accordion-item` 上添加 `open` 或 `:open="true"` 即可默认展开面板

#### **设置部分标题内容不触发展开折叠**

- 通过设置 `gree-accordion-item` 的 slot【icon 和 txt】即可

#### **手动展开**

- 设置 `gree-accordion-item` 的参数 `:auto="false"` 将禁用其自动折叠展开
- 通过使用 `this.$refs.accordion.openItem();` 展开面板
- 通过使用 `this.$refs.accordion.closeItem();` 折叠面板
