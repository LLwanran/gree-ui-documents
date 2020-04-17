# 安装 & 更新

推荐使用 Yarn 作为依赖管理工具

```bash
查询当前配置的镜像
yarn config get registry

设置成淘宝镜像
yarn config set registry http://registry.npm.taobao.org/

移除
yarn remove gree-ui

安装稳定版
yarn add 'ssh://git@10.2.11.226:iot-4/web/gree-ui.git#<branch/commit/tag>'

如果想始终拉取最新版，请从个人仓库拉取

yarn add 'ssh://git@10.2.11.226:li/gree-ui.git#<branch/commit/tag>'
```

---

感谢 _@林炳权_ 建议：修改 `package.json` 对应组件库的 `<branch/commit/tag>`，运行 `yarn` 就可以直接覆盖更新了！

## 引入

### 按需加载(推荐)

> 参考`ant-design`，使用[babel-plugin-import](https://github.com/ant-design/babel-plugin-import), 无需配置 style，默认加载目录为 lib

```javascript
{
  "plugins": [
    ["import", {
      "libraryName": "gree-ui",
      "libraryDirectory": "lib"
    }]
  ]
}
```

组件使用：

> 如果没有以上配置，会全量引入，需手动引入全部样式

```javascript
import { Button } from 'gree-ui';
```

### 按需引入

```javascript
import Button from 'gree-ui/lib/button';
```

### 全量引入

```javascript
import Vue from 'vue';
import GreeUI from 'gree-ui';
import 'gree-ui/lib/gree-ui.css';

Vue.use(GreeUI);
```

## 开发

### 模板

#### 参考阅读此项目源码，是学习使用组件库最快的途径 [打开 iotfe-boilerplate](http://gitlab.example.com/li/iotfe-boilerplate)

```bash
git clone git@gitlab.example.com:ipenny861025/iotfe-boilerplate.git
cd activity-lottery-lucky # 格力+兑换码&抽奖活动
cd linkpad # Linkpad
cd smart-curtain # 格力智能窗帘
cd vue-cli3-air-conditioner # 空调
cd vue-cli3-ai-sensor # AI感知器
cd vue-cli3-co-alarm # 一氧化碳报警器
cd vue-cli3-combustible-gas # 可燃气体报警器
cd vue-cli3-danger-button # SOS紧急按钮
cd vue-cli3-dehumidifier # 除湿机
cd vue-cli3-door-sensor # 智能门磁
cd vue-cli3-electric-cooker # 电饭煲
cd vue-cli3-environment-sensor # 环境感知器
cd vue-cli3-human-infrared-sensor # 人体红外感应器
cd vue-cli3-humidifier # 除湿机
cd vue-cli3-humiture-sensor # 温湿度感知器
cd vue-cli3-rgb-box # RGB盒子
cd vue-cli3-smart-curtain # 智能窗帘
cd vue-cli3-smoke-sensor # 烟雾传感器 && 烟雾报警器
cd vue-cli3-steaming-roast # 蒸烤一体|双能机
cd vue-cli3-water-sensor # 水浸感知器
cd tuya_cn-??? #国内涂鸦传感器系列
yarn
yarn serve
```

打开浏览器访问[http://localhost:3000](http://localhost:3000/)。
