<template>
  <div id="app">
    <app-nav-drawer
      v-if="locale"
      :open.sync="open"
      :docked="docked"
      :home="home"
    />
    <mu-appbar
      v-if="locale"
      :color="home ? 'transparent' : 'primary'"
      class="appbar-header"
      style="z-index: 10001;"
      :class="{'is-open': (!home && open && docked), 'is-only-title': !(home || !docked), 'home-bg': home}"
      :z-depth="home ? 0 : 4"
    >
      <mu-button
        v-if="home || !docked"
        icon
        slot="left"
        @click="toggleMenu"
      >
        <Icon
          type="md-menu"
          size="24"
        />
      </mu-button>
      {{pageName || ''}}
      <mu-search
        v-if="!isMobile"
        slot="right"
      />
      <mu-button
        icon
        v-if="!isMobile"
        slot="right"
        @click="$Message.info({
          content: '你点我干啥？',
          duration: 10,
          closable: true
        })"
      >
        <Icon
          type="logo-github"
          size="24"
        />
      </mu-button>
    </mu-appbar>
    <div
      class="app-content"
      :class="{'is-open': (!home && open && docked)}"
    >
      <router-view></router-view>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
import AppNavDrawer from './components/nav';
import langs from './configs/lang';
import i18n from './configs/i18n';
import Search from './components/search';

export default {
  name: 'App',
  components: {
    'app-nav-drawer': AppNavDrawer,
    'mu-search': Search
  },
  data() {
    return {
      docked: isDesktop(),
      isMobile: isMobile(),
      activeMenu: false,
      langs,
      open: false
    };
  },
  computed: {
    locale() {
      return this.$route.meta && this.$route.meta.lang;
    },
    i18n() {
      return i18n[this.locale];
    },
    lang() {
      return this.langs.filter(item => item.lang === this.locale)[0];
    },
    home() {
      return (
        this.$route && this.$route.meta && this.$route.meta.name === 'home'
      );
    },
    pageName() {
      return (
        this.$route &&
        this.$route.meta &&
        this.$route.meta.name !== 'home' &&
        this.$route.meta.name
      );
    }
  },
  mounted() {
    this.changeNav();
    this.handleResize = () => {
      this.changeNav();
      this.isMobile = isMobile();
    };
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    changeNav() {
      const desktop = isDesktop();
      this.docked = this.home ? false : desktop;
      if (desktop === this.desktop) return;
      if (!desktop && this.desktop && this.open) {
        this.open = false;
      }
      if (desktop && !this.desktop && !this.open && !this.home) {
        this.open = true;
      }
      this.desktop = desktop;
    },
    toggleMenu() {
      this.open = !this.open;
    }
  },
  watch: {
    home(val) {
      this.open = !val;
      this.changeNav();
    },
    pageName() {
      this.activeMenu = false;
    }
  }
};

function isDesktop() {
  return window.innerWidth > 993;
}

function isMobile() {
  return window.innerWidth < 660;
}
</script>

<style lang="less">
.mu-app-drawer {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
.mu-app-drawer-header {
  .mu-appbar-title {
    line-height: 24px;
    display: flex;
    align-items: flex-start;
    font-size: 24px;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.54);
    font-weight: 500;
  }
  .mu-appbar-title-text {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: #2196f3;
    }
  }
  .app-version {
    line-height: 1;
    font-size: 12px;
    margin-top: 4px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: #2196f3;
    }
  }
}
.appbar-header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 101;
  overflow: hidden;
  background-image: linear-gradient(270deg, #b06ab3, #4568dc);
  &.is-open {
    left: 256px;
  }
  &.is-only-title {
    .mu-appbar-title {
      margin-left: 16px;
    }
  }
  &.home-bg {
    background-image: linear-gradient(270deg, #b06ab3, #4568dc);
  }
}
.app-content {
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  padding-top: 56px;
}
.app-content.is-open {
  padding-left: 256px;
}
.toggle-icon {
  color: rgba(0, 0, 0, 0.54);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  .mu-item__open & {
    transform: rotate(180deg);
  }
}
.markdown-body {
  padding-top: 16px;
  margin: 0 auto;
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 100px;
}
.mu-docs-search {
  width: 200px;
  transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  margin-right: 16px;
  &.mu-input__focus {
    width: 250px;
  }
  .mu-input-content {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
  }
  .mu-text-field-input {
    color: #fff;
    font-weight: 300;
  }
  .mu-search-icon {
    width: 56px;
    text-align: center;
  }
}
.algolia-search-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8px;
}

.algolia-search-link {
  height: 20px;
  > img {
    height: 100%;
  }
}

.mu-search-popover {
  max-width: 500px;
  padding-bottom: 36px;
  em {
    font-weight: normal;
    font-style: normal;
    color: #ff4081;
  }
  .search-separator {
    margin: 0 8px;
  }
}
@media (min-width: 600px) {
  .app-content {
    padding-top: 64px;
  }
}

@media (min-width: 600px) {
  .markdown-body {
    padding-left: 24px;
    padding-right: 24px;
  }
}
@media (min-width: 960px) {
  .markdown-body {
    max-width: 960px;
  }
}

.mu-pagination > ul {
  margin-bottom: 0 !important;
}

.mu-ripple-wrapper {
  border-radius: inherit !important;
  contain: strict;
}
.mu-button::before {
  content: none !important;
}
</style>
