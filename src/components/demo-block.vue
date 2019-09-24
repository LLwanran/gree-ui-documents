<template>
  <div class="demo-block">
    <div class="demo-block-tools">
      <mu-tooltip :content="visible ? i18n.hidden : i18n.visible">
        <mu-button
          icon
          @click="toggle"
        >
          <Icon type="md-copy" />
        </mu-button>
      </mu-tooltip>
    </div>
    <mu-expand-transition>
      <div
        class="meta"
        v-show="visible"
      >
        <slot name="highlight"></slot>
      </div>
    </mu-expand-transition>
    <div class="demo-block-content">
      <slot name="source"></slot>
    </div>
  </div>
</template>

<script>
import i18n from '../configs/i18n';

export default {
  name: 'demo-block',
  data() {
    return {
      visible: false
    };
  },
  computed: {
    i18n() {
      const locale = this.$route.meta.lang;
      return i18n[locale];
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="less">
.demo-block {
  position: relative;
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 40px;
  .highlight {
    margin-bottom: 0 !important;
  }
  .source {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
.demo-block-content {
  display: flex;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  justify-content: center;
  background-color: #eeeeee;
}
.demo-block-tools {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  .mu-button {
    color: rgba(0, 0, 0, 0.54);
  }
}
@media (min-width: 600px) {
  .demo-block {
    margin-left: 0;
    margin-right: 0;
  }
  .demo-block-content {
    padding-top: 48px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
  }
  .demo-block-tools {
    display: block;
  }
}
</style>
