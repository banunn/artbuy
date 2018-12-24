import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import product from './modules/product'
import user from './modules/user'
import subscription from './modules/subscription'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    user,
    subscription
  },
  state: {
    
  },
  mutations: {

  },
  actions: {

  }
})
