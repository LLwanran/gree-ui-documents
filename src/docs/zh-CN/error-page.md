# 错误页

展示离线页、单故障页、多故障页、新版故障页

## 按需引入

```javascript
import { ErrorPage } from 'gree-ui';

Vue.component(ErrorPage.name, ErrorPage);
```

### 基础

:::demo

```html
<gree-view>
  <gree-header
    theme="transparent"
    :left-options="{preventGoBack: true}"
    @on-click-back="backClick"
    :right-options="{showMore: true}"
    @on-click-more="moreClick"
    >ErrorPage</gree-header
  >
  <gree-tab-bar
    v-model="current"
    :items="items"
    @change="onTabChange"
  ></gree-tab-bar>
  <!-- 离线页 -->
  <gree-error-page
    type="offline"
    :bg-url="BgUrl"
    :img-url="offlineImgUrl"
    text="连接已断开，"
    v-show="current === 0"
  >
    <a href="javascript:;" class="link" @click="clickOffline">查看详情</a>
  </gree-error-page>
  <!-- 单故障 -->
  <gree-error-page
    :bg-url="BgUrl"
    :img-url="errorImgUrl"
    :text="errorSingleText"
    :buttons="buttons"
    v-show="current === 1"
  ></gree-error-page>
  <!-- 多故障 -->
  <gree-error-page
    :bg-url="BgUrl"
    :img-url="errorImgUrl"
    :text="errorMultiText"
    :is-multi="true"
    :buttons="buttons"
    v-show="current === 2"
  ></gree-error-page>
</gree-view>

<script>
  export default {
    data() {
      return {
        current: 0,
        items: [
          { name: 0, label: '离线页' },
          { name: 1, label: '单故障' },
          { name: 2, label: '多故障' }
        ],
        BgUrl: require('../../assets/images/bg_off.png'),
        offlineImgUrl: require('../../assets/images/offline.png'),
        errorImgUrl: require('../../assets/images/error_default.png'),
        errorSingleText: [
          {
            title: '故障名称：',
            text: 'PM2.5 传感器故障'
          },
          {
            title: '解除方法：',
            text: '请联系售后'
          }
        ],
        errorMultiText: [
          {
            title: 'PM2.5 传感器故障',
            subtitle: '解除方法：',
            text: '请联系售后'
          },
          {
            title: '温湿度传感器故障',
            subtitle: '解除方法：',
            text: '请联系售后'
          },
          {
            title: '甲醛传感器故障',
            subtitle: '解除方法：',
            text: '请联系售后'
          },
          {
            title: 'CO2 传感器故障',
            subtitle: '解除方法：',
            text: '请联系售后'·
          },
          {
            title: '与主控板通讯故障',
            subtitle: '解除方法：',
            text: '请联系售后'
          }
        ],
        buttons: [
          {
            text: '服务预约',
            onClick: this.handleClick
          }
        ]
      };
    },
    methods: {
      onTabChange(item, index, prevIndex) {
        this.current = index;
      },
      clickOffline() {
        this.$dialog.alert({
          title: '离线检查',
          content:
            '1.&ensp;家电是否连接电源？<br />2. 设备是否连上家庭WiFi？<br>3. 拔掉电源插头再插上试试看。<br>如果以上仍未恢复连接，您可尝试重置WiFi。',
          confirmText: '取消'
        });
      },
      handleClick() {
        Toast.info('跳转界面');
      }
    }
  };
</script>
```

:::

### 新版故障页

:::demo

```html
<gree-view>
  <gree-header>故障详情</gree-header>
  <gree-page>
    <gree-error-page
      type="malfunction"
      :bg-url="BgUrl2"
      :text="errorMultiText"
    ></gree-error-page>
  </gree-page>
  <gree-toolbar position="bottom">
    <gree-row>
      <gree-col
        v-for="(item, index) in options"
        :key="index"
        @click.native="setFunction(index)"
      >
        <div class="icon">
          <img :src="require('../../assets/images/' + item.ImgName + '.png')" />
        </div>
        <h3>{{ item.Name }}</h3>
      </gree-col>
    </gree-row>
  </gree-toolbar>
</gree-view>

<script>
  export default {
    data() {
      return {
        BgUrl2: require('../../assets/images/bg_error.png'),
        errorMultiText: [
          {
            code: 'F0',
            headtitle: '故障名称：',
            title: 'PM2.5 传感器故障',
            subtitle: '解除办法：',
            text: '请联系指定服务商或服务中心'
          },
          {
            code: 'F1',
            headtitle: '故障名称：',
            title: '温湿度传感器故障',
            subtitle: '解除办法：',
            text: '请联系指定服务商或服务中心'
          },
          {
            code: 'F2',
            headtitle: '故障名称：',
            title: '甲醛传感器故障',
            subtitle: '解除办法：',
            text: '请联系指定服务商或服务中心'
          },
          {
            code: 'F3',
            headtitle: '故障名称：',
            title: 'CO2 传感器故障',
            subtitle: '解除办法：',
            text: '请联系指定服务商或服务中心'
          },
          {
            code: 'F4',
            headtitle: '故障名称：',
            title: '与主控板通讯故障',
            subtitle: '解除办法：',
            text: '请联系指定服务商或服务中心'
          }
        ],
        options: [
          {
            ImgName: 'service',
            Name: '售后电话'
          },
          {
            ImgName: 'subscribe',
            Name: '服务预约'
          },
          {
            ImgName: 'search',
            Name: '进度查询'
          }
        ]
      };
    },
    methods: {
      setFunction(index) {
        console.log(index);
      }
    }
  };
</script>
```

:::

## Props

| 属性     | 说明                                      | 类型            | 默认值  |
| -------- | ----------------------------------------- | --------------- | ------- |
| type     | 类型（`fault`, `offline`, `malfunction`） | String          | `fault` |
| bg-url   | 背景图                                    | String          | \-      |
| img-url  | 提示图                                    | String          | \-      |
| text     | 文本内容                                  | [String, Array] | \-      |
| is-multi | 是否多故障                                | Boolean         | \-      |
| buttons  | 底部按钮                                  | Array           | []      |

<script>
export default {
  data() {
    return {
      current: 0,
      items: [
        { name: 0, label: '离线页' },
        { name: 1, label: '单故障' },
        { name: 2, label: '多故障' }
      ],
      BgUrl: require('../../assets/images/bg_off.png'),
      offlineImgUrl: require('../../assets/images/offline.png'),
      errorImgUrl: require('../../assets/images/error_default.png'),
      errorSingleText: [
        {
          title: '故障名称：',
          text: 'PM2.5 传感器故障'
        },
        {
          title: '解除方法：',
          text: '请联系售后'
        }
      ],
      errorMultiText: [
        {
          title: 'PM2.5 传感器故障',
          subtitle: '解除方法：',
          text: '请联系售后'
        },
        {
          title: '温湿度传感器故障',
          subtitle: '解除方法：',
          text: '请联系售后'
        },
        {
          title: '甲醛传感器故障',
          subtitle: '解除方法：',
          text: '请联系售后'
        },
        {
          title: 'CO2 传感器故障',
          subtitle: '解除方法：',
          text: '请联系售后'
        },
        {
          title: '与主控板通讯故障',
          subtitle: '解除方法：',
          text: '请联系售后'
        }
      ],
      buttons: [
        {
          text: '服务预约',
          onClick: this.handleClick
        }
      ],
      BgUrl2: require('../../assets/images/bg_error.png'),
      errorMultiText: [
        {
          code: 'F0',
          headtitle: '故障名称：',
          title: 'PM2.5 传感器故障',
          subtitle: '解除办法：',
          text: '请联系指定服务商或服务中心'
        },
        {
          code: 'F1',
          headtitle: '故障名称：',
          title: '温湿度传感器故障',
          subtitle: '解除办法：',
          text: '请联系指定服务商或服务中心'
        },
        {
          code: 'F2',
          headtitle: '故障名称：',
          title: '甲醛传感器故障',
          subtitle: '解除办法：',
          text: '请联系指定服务商或服务中心'
        },
        {
          code: 'F3',
          headtitle: '故障名称：',
          title: 'CO2 传感器故障',
          subtitle: '解除办法：',
          text: '请联系指定服务商或服务中心'
        },
        {
          code: 'F4',
          headtitle: '故障名称：',
          title: '与主控板通讯故障',
          subtitle: '解除办法：',
          text: '请联系指定服务商或服务中心'
        }
      ],
      options: [
        {
          ImgName: 'service',
          Name: '售后电话'
        },
        {
          ImgName: 'subscribe',
          Name: '服务预约'
        },
        {
          ImgName: 'search',
          Name: '进度查询'
        }
      ]
    };
  },
  methods: {
    onTabChange(item, index, prevIndex) {
      this.current = index;
    },
    backClick() {
      this.$router.back();
    },
    moreClick() {
      console.log('more');
    },
    clickOffline() {
      this.$dialog.alert({
        title: '离线检查',
        content:
          '1.&ensp;家电是否连接电源？<br>2. 设备是否连上家庭WiFi？<br>3. 拔掉电源插头再插上试试看。<br>如果以上仍未恢复连接，您可尝试重置WiFi。',
        confirmText: '取消'
      });
    },
    handleClick() {
      this.$toast.info('跳转界面');
    },
    setFunction(index) {
      this.$toast.info(`当前索引：${index}`);
    }
  }
};
</script>

<style lang="less" scoped>
.view {
  width: 80%;
  min-height: 960px;
  overflow: visible;
  /deep/ .gree-action-bar {
    position: absolute;
  }
  /deep/ .multi-error {
    top: 140px;
  }
}
/deep/ .gree-tab-bar {
  position: absolute;
  top: 100px;
  width: 100%;
  background-color: transparent;
  z-index: 2;
}
/deep/ .gree-offline-text {
  .link {
    color: #00aeff;
    padding-bottom: 2px;
    position: relative;
    text-decoration: none;
    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      border-bottom: 2px solid #00aeff;
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: 0 0;
    }
  }
}

/deep/ .page-content {
  padding-bottom: 165px !important;
  .gree-new-error {
    width: calc(~"100% - 40px");
    .list ul li .item-content .item-media .logo .divider::after,
    .list ul li .item-content .item-media .logo .divider::before {
      border-left-width: 1px;
      left: 107px;
    }
  }
}
.toolbar {
  height: 165px !important;
  padding-bottom: 35px;
  .row {
    width: 100%;
    text-align: center;
    .col {
      .icon {
        background: none;
        border: none;
        box-shadow: none;
        img {
          width: 81px;
          height: 81px;
        }
      }
      h3 {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }
}
</style>
