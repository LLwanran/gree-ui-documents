# 回到顶部

用于较长的页面快捷回到顶部

## 按需引入

```javascript
import { Backtop } from 'gree-ui';

Vue.component(Backtop.name, Backtop);
```

### 基础

:::demo

```html
<gree-notice-bar type="activity" mode="closable" icon="warning" scrollable>
  为了更好的体验效果，建议在 iOS 或 Android 设备上体验！
</gree-notice-bar>
<div
  class="gree-example-child gree-example-child-backtop gree-example-child-backtop-0"
>
  <h3>《从前慢》</h3>
  <p>木心</p>
  <p>记得早先少年时</p>
  <p>大家诚诚恳恳</p>
  <p>说一句 是一句</p>
  <p>清早上火车站</p>
  <p>长街黑暗无行人</p>
  <p>卖豆浆的小店冒着热气</p>
  <p>从前的日色变得慢</p>
  <p>车，马，邮件都慢</p>
  <p>一生只够爱一个人</p>
  <p>从前的锁也好看</p>
  <p>钥匙精美有样子</p>
  <p>你锁了 人家就懂了</p>

  <h3>《再别康桥》</h3>
  <p>徐志摩</p>
  <p>轻轻的我走了，正如我轻轻的来；</p>
  <p>我轻轻的招手，作别西天的云彩。</p>
  <p>那河畔的金柳，是夕阳中的新娘；</p>
  <p>波光里的艳影，在我的心头荡漾。</p>
  <p>软泥上的青荇，油油的在水底招摇；</p>
  <p>在康河的柔波里，我甘心做一条水草！</p>
  <p>那榆荫下的一潭，不是清泉，是天上虹；</p>
  <p>揉碎在浮藻间，沉淀着彩虹似的梦。</p>
  <p>寻梦？撑一支长蒿，向青草更青处漫溯；</p>
  <p>满载一船星辉，在星辉斑斓里放歌。</p>
  <p>但我不能放歌，悄悄是别离的笙箫；</p>
  <p>夏虫也为我沉默，沉默是今晚的康桥！</p>
  <p>悄悄的我走了，正如我悄悄的来；</p>
  <p>我挥一挥衣袖，不带走一片云彩。</p>

  <h3>《面朝大海，春暖花开》</h3>
  <p>海子</p>
  <p>从明天起，做一个幸福的人</p>
  <p>喂马，劈柴，周游世界</p>
  <p>从明天起，关心粮食和蔬菜</p>
  <p>我有一所房子，面朝大海，春暖花开</p>
  <p>从明天起，和每一个亲人通信</p>
  <p>告诉他们我的幸福</p>
  <p>那幸福的闪电告诉我的</p>
  <p>我将告诉每一个人</p>
  <p>给每一条河每一座山取一个温暖的名字</p>
  <p>陌生人，我也为你祝福</p>
  <p>愿你有一个灿烂的前程</p>
  <p>愿你有情人终成眷属</p>
  <p>愿你在尘世获得幸福</p>
  <p>我只愿面朝大海，春暖花开</p>

  <h3>《乡愁》</h3>
  <p>余光中</p>
  <p>小时候，</p>
  <p>乡愁是一枚小小的邮票，</p>
  <p>我在这头，</p>
  <p>母亲在那头。</p>
  <p>长大后，</p>
  <p>乡愁是一张窄窄的船票，</p>
  <p>我在这头，</p>
  <p>新娘在那头。</p>
  <p>后来啊，</p>
  <p>乡愁是一方矮矮的坟墓，</p>
  <p>我在外头，</p>
  <p>母亲在里头。</p>
  <p>而现在，</p>
  <p>乡愁是一湾浅浅的海峡，</p>
  <p>我在这头，</p>
  <p>大陆在那头。</p>

  <h3>《断章》</h3>
  <p>卞之琳</p>
  <p>你站在桥上看风景，</p>
  <p>看风景人在楼上看你。</p>
  <p>明月装饰了你的窗子，</p>
  <p>你装饰了别人的梦。</p>
</div>
```

:::

## Props

| 属性              | 说明                             | 类型   | 默认值          |
| ----------------- | -------------------------------- | ------ | --------------- |
| target            | 触发滚动的对象                   | String | `.page-content` |
| visibility-height | 滚动高度达到此参数值才出现       | Number | `200`           |
| right             | 控制其显示位置, 距离页面右边距   | Number | `30`            |
| bottom            | 控制其显示位置, 距离页面底部距离 | Number | `30`            |

## Events

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| click  | 点击按钮触发的事件 | event    |

<style lang="less">
.gree-example-child-backtop-0 {
  line-height: 2;
  text-align: center;
  h3, p {
    color: #404657;
    font-size: 18px;
  }
  h3 {
    font-size: 30px;
  }
}
</style>
