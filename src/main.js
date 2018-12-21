import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'
import VueMasonry from 'vue-masonry-css'
import VueCurrencyFilter from 'vue-currency-filter'
import { sync } from 'vuex-router-sync'

const unsync = sync(store, router) // done. Returns an unsync callback fn
const _ = require('lodash');

Vue.use(VueMasonry);
Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: ',',
    fractionCount:0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: false
  });
  Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
