import Vue from 'vue';
import 'typeface-roboto';

import './assets/font-icons/material/material-icons.css';
import './assets/font-icons/style.css';
import './assets/github-markdown.css';
import './assets/atom-one-light.css';
import 'gree-ui/lib/gree-ui.css';
import 'muse-ui/dist/muse-ui.css';
import 'iview/dist/styles/iview.css';

import GreeUI from 'gree-ui';
import MuseUI from 'muse-ui';
import iView from 'iview';

import FastClickDefault, { FastClick } from 'fastclick';
import App from './App';
import DemoBlock from './components/demo-block';
import router from './router';
import { changeLocale } from './locale';
import './registerServiceWorker';
import './assets/js/flexible';

Vue.use(GreeUI);
Vue.use(MuseUI);
Vue.use(iView);
Vue.component(DemoBlock.name, DemoBlock);
Vue.config.productionTip = false;

const _attach = FastClickDefault.attach || FastClick.attach;
if ('ontouchstart' in window) {
  _attach(document.body);
}

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.lang) {
    changeLocale(to.meta.lang);
  }
  window.scrollTo(0, 0);
  iView.LoadingBar.start();
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
});

const app = new Vue({
  ...App,
  router
});

app.$mount('#app');
