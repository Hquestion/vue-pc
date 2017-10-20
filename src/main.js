// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
require('swiper/dist/css/swiper.css');
import ECharts from 'vue-echarts/components/ECharts.vue';
const theme = require('../static/echart-theme/walden.json');
ECharts.registerTheme('walden', theme);

import {Dropdown, DropdownMenu, DropdownItem, Select, Option, Input, Icon, Button, Row, Col,Pagination, Tabs, TabPane,
        Dialog} from 'element-ui'

Vue.component('chart', ECharts);

Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Pagination);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Dialog);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
