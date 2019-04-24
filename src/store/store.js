import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

// Modules
import product from './modules/product'
import user from './modules/user'
import subscription from './modules/subscription'
import onboarding from './modules/onboarding'
import cart from './modules/cart'
import paymentMethods from './modules/payment-methods'
import donationModal from './modules/donations'
Vue.use(Vuex)

export default new Vuex.Store({
//   plugins: [createPersistedState()],
  modules: {
    product,
    user,
    subscription,
    onboarding,
    cart,
    paymentMethods,
    donationModal
  },
  state: {
    
  },
  mutations: {

  },
  actions: {

  }
})
