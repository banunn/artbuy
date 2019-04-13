import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMasonry from 'vue-masonry-css'
import VueCurrencyFilter from 'vue-currency-filter'
import VueTransmit from "vue-transmit";
import { sync } from 'vuex-router-sync'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import abWidget from '@/components/general/widget'
// Profile Picture Image uploader
import 'vue-croppa/dist/vue-croppa.css'
import Croppa from 'vue-croppa'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

const unsync = sync(store, router) // done. Returns an unsync callback fn
const _ = require('lodash');

Vue.component('abWidget', abWidget);

Vue.use(VueMasonry);
Vue.use(Viewer);
Vue.use(Croppa);
Vue.use(VueAwesomeSwiper);
Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: ',',
    fractionCount:0,
    decimalPlaces: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: false
  });
  Vue.use(require('vue-moment'));
  Vue.use(VueAxios, axios);
  Vue.use(VueTransmit);

  // More info on Axios within the documentation assets/documentation/axios
  

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
