import FastClickDefault, { FastClick } from 'fastclick';
import GreeUI, { Lazyload } from 'gree-ui';
import 'gree-ui/lib/gree-ui.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'typeface-roboto';
import Vue from 'vue';
import App from './App';
import './assets/atom-one-light.css';
import './assets/font-icons/material/material-icons.css';
import './assets/font-icons/style.css';
import './assets/github-markdown.css';
import './assets/js/flexible';
import DemoBlock from './components/demo-block';
import { changeLocale } from './locale';
import './registerServiceWorker';
import router from './router';

Vue.use(GreeUI);
Vue.use(Lazyload, {
  lazyComponent: true
});
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
