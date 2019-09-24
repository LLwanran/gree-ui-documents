<template>
  <div>
    <div class="banner">
      <div class="logo">
        <img src="../../assets/images/icon_logo.png" />
      </div>
      <h1 class="banner-title">Gree-UI</h1>
      <Divider>{{ i18n.slogan }}</Divider>
      <h2 class="banner-sub-title">{{ i18n.subtitle }}</h2>
      <div class="banner-actions">
        <Button
          type="primary"
          size="large"
          shape="circle"
          :to="`/${locale}/install`"
        >{{ i18n.getStart }}</Button>
        <Button
          size="large"
          shape="circle"
          icon="logo-buffer"
          to="http://gitlab.example.com/iot-4/web/gree-ui"
          target="_blank"
        >GITLAB</Button>
        <Button
          size="large"
          shape="circle"
          icon="md-bug"
          to="http://172.28.4.42:8086"
          target="_blank"
        >在线示例</Button>
      </div>
    </div>
    <Row>
      <i-col
        :lg="8"
        span="12"
        class="feature-item"
      >
        <img src="../../assets/images/img1.png" />
        <h3 class="feature-item-title">{{ i18n.featureTitle1 }}</h3>
        <div class="feature-item-desc">{{ i18n.featureContent1 }}</div>
      </i-col>
      <i-col
        :lg="8"
        span="12"
        class="feature-item"
      >
        <img src="../../assets/images/img2.png" />
        <h3 class="feature-item-title">{{ i18n.featureTitle2 }}</h3>
        <div class="feature-item-desc">{{ i18n.featureContent2 }}</div>
      </i-col>
      <i-col
        :lg="8"
        span="12"
        class="feature-item"
      >
        <img src="../../assets/images/img3.png" />
        <h3 class="feature-item-title">{{ i18n.featureTitle3 }}</h3>
        <div class="feature-item-desc">{{ i18n.featureContent3 }}</div>
      </i-col>
    </Row>
    <div class="footer">
      互联网技术研究罗汉堂 - 插件开发专用组件库
      <br />Copyright (c) 2019 Gree+ IoT Web Team
    </div>
  </div>
</template>
<script>
import i18n from '../../configs/i18n';

export default {
  name: 'home',
  computed: {
    locale() {
      return this.$route && this.$route.meta && this.$route.meta.lang;
    },
    i18n() {
      return i18n[this.locale];
    }
  }
};
</script>

<style lang="less">
.banner {
  z-index: 100;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  background-image: linear-gradient(270deg, #b06ab3, #4568dc);
  .logo {
    width: 120px;
    height: 120px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 120px;
      height: 120px;
    }
  }
  .banner-title {
    margin-top: 32px;
    margin-bottom: 12px;
    color: #00aeff;
    font-weight: 900;
    font-size: 72px;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    background-image: linear-gradient(
      to right,
      tomato,
      gold 40%,
      blueviolet,
      mediumspringgreen 90%
    );
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: -1px -1px 0em #404657, -2px -2px 0em #404657,
      -3px -3px 0em #404657, -4px -4px 0em #404657, -5px -5px 0em #404657,
      -6px -6px 0em #404657, -7px -7px 0em #404657, -8px -8px 0em #404657;
  }
  .ivu-divider-horizontal.ivu-divider-with-text-center {
    color: rgba(255, 10, 200, 0.6);
    text-shadow: -1px 1px 3px rgba(255, 255, 80, 0.8),
      1px -1px 3px rgba(255, 255, 80, 0.8), 0 0 20px rgba(0, 255, 80, 0.8),
      0 0 40px rgba(255, 0, 204, 0.8), 0 0 50px rgba(255, 0, 204, 0.8),
      0 0 60px rgba(255, 0, 204, 0.8);
  }
  .banner-sub-title {
    margin: 0;
    margin-bottom: 16px;
    padding-left: 32px;
    padding-right: 32px;
    font-size: 22px;
    font-weight: 300;
    text-align: center;
  }
  .banner-actions {
    text-align: center;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-btn {
      font-size: 15px;
      margin-left: 12px;
    }
  }
}
.feature-item {
  height: 400px;
  text-align: center;
  background-color: #fff;
  > img {
    width: 300px;
  }
  .feature-item-title {
    font-size: 21px;
    line-height: 24px;
    font-weight: 500;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .feature-item-desc {
    min-width: 375px;
    max-width: 500px;
    font-size: 16px;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
  }
}
.footer {
  background-color: #1b1b1b;
  text-align: center;
  color: #777;
  font-size: 14px;
  padding: 50px 40px;
}
</style>
