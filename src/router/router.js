import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import routes from './routes'
Vue.use(Router)

export default new Router({
  routes: routes
})
