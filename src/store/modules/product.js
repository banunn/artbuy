import Vue from 'vue'
import router from '@/router/router'


export default {
    state: { 
        selectedProduct: null,
        productModal: {
            open: false,
        }
    },
    mutations: {
       setSelectedProduct(state, payload) {
           state.selectedProduct = payload;
       },
       clearSelectedProduct(state) {
           state.selectedProduct = null;
       },
       modalState(state, bool) {
           bool == true ? state.productModal.open = true : state.productModal.open = false;
       }
    },
    actions: {
        viewProductPreview({getters, state, commit}, product) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('setSelectedProduct', product),
                    commit('modalState', true)
                );
            });
        },
        closeProductPreview({getters, state, commit}, product) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('modalState', false)
                );
                setTimeout(function() {
                    commit('clearSelectedProduct');
                }, 650);
            });
        }
    },
    getters: {
        selectedProduct(state) {
            return state.selectedProduct ? state.selectedProduct : null;
        },
        productModalState(state) {
            return state.productModal.open;
        }
    }
}