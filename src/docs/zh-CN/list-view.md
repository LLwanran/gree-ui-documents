# 列表

网格列表

## 按需引入

```javascript
import { List, Item } from 'gree-ui';

Vue.component(List.name, List);
Vue.component(Item.name, Item);
```

### 基础

:::demo

```html
<gree-list>
  <gree-list-item title="普通栏目"></gree-list-item>
  <gree-list-item link title="链接栏目"></gree-list-item>
  <gree-list-item title="图标栏目" text="查看" media-item>
    <gree-icon name="home" slot="media"></gree-icon>
  </gree-list-item>
  <gree-list-item link title="图标链接栏目" text="查看" media-item>
    <gree-icon name="home" slot="media"></gree-icon>
  </gree-list-item>
</gree-list>
```

:::

### 多栏目

:::demo

```html
<gree-list>
  <gree-list-item
    link
    header="著名篮球运动员"
    title="姚明"
    footer="中国最具影响力的人物之一"
    after="现任中国篮球协会主席"
    media-item
  >
    <gree-icon name="feedback" slot="media"></gree-icon>
  </gree-list-item>
  <gree-list-item
    link
    header="C罗和梅西被媒体、名宿和球迷广泛认定为世界球坛史上最佳球员"
    title="克里斯蒂亚诺·罗纳尔多"
    footer="世界足球先生"
    after="尤文图斯"
    media-item
  >
    <gree-icon name="feedback" slot="media"></gree-icon>
  </gree-list-item>
</gree-list>
```

:::

### 媒体列表

:::demo

```html
<gree-list media-list>
  <gree-list-item
    link
    title="范特西"
    after="主打歌：爱在西元前"
    subtitle="发行日期： 2001 年 9 月 14 日"
    text="《范特西》是台湾歌手周杰伦第二张录音室专辑，由台湾博德曼音乐于2001年9月14日发行。专辑名《范特西》来自英文“Fantasy”音译。"
    media-item
  >
    <img slot="media" src="../../assets/images/fantasy.jpg" width="80" />
  </gree-list-item>
  <gree-list-item
    link
    title="叶惠美"
    after="主打歌：以父之名"
    subtitle="发行日期： 2003 年 7 月 29 日"
    text="《叶惠美》是台湾歌手周杰伦的第四张录音室专辑，由台湾新力音乐于2003年7月31日发行。"
    media-item
  >
    <img slot="media" src="../../assets/images/ukoo.jpg" width="80" />
  </gree-list-item>
  <gree-list-item
    link
    title="七里香"
    after="主打歌：我的地盘"
    subtitle="发行日期： 2004 年 8 月 3 日"
    text="《七里香》是台湾歌手周杰伦发行第五张国语专辑。由台湾新力音乐于2004年8月3日发行。"
    media-item
  >
    <img slot="media" src="../../assets/images/daphne-odera.jpg" width="80" />
  </gree-list-item>
</gree-list>
```

:::

### 嵌入

:::demo

```html
<gree-list inset>
  <gree-list-item title="普通栏目"></gree-list-item>
  <gree-list-item link title="链接栏目"></gree-list-item>
</gree-list>
```

:::

## API

### List Props

| 属性                 | 说明                     | 类型    | 默认值  |
| -------------------- | ------------------------ | ------- | ------- |
| inset                | 嵌入                     | Boolean | `false` |
| media-list           | 媒体列表风格             | Boolean | `false` |
| no-hairlines         | 删除外边线               | Boolean | `false` |
| no-hairlines-between | 删除 item 之间的内部边线 | Boolean | `false` |
| contacts-list        | 是否启用联系人列表       | Boolean | `false` |

### List Item Props

| 属性       | 说明                     | 类型              | 默认值 |
| ---------- | ------------------------ | ----------------- | ------ |
| title      | 左侧文本内容             | [String, Number]  | \-     |
| text       | 右侧文本内容             | [String, Number]  | \-     |
| link       | 链接                     | [Boolean, String] | \-     |
| media-item | 启用媒体列表             | Boolean           | \-     |
| subtitle   | 副标题(仅适用于媒体列表) | [String, Number]  | \-     |
| header     | 标题文本                 | [String, Number]  | \-     |
| footer     | 页脚文本                 | [String, Number]  | \-     |
| after      | 标签                     | [String, Number]  | \-     |
