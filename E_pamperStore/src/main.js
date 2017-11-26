import Vue from 'vue'
import VueResource from 'vue-resource'
import VDistpicker from 'v-distpicker'
import VueScroller from 'vue-scroller'
import { TabContainer, TabContainerItem } from 'mint-ui';

import App from './App.vue'
import router from './router'
import store from './store'

import { Swipe, SwipeItem , Navbar, TabItem  } from 'mint-ui';
import './common/stylus/styles.styl'
import './mock/MockServer.js'

Vue.use(VueResource)
Vue.use(VueScroller)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component('v-distpicker', VDistpicker);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
