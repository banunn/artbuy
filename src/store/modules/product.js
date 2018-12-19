import Vue from 'vue'
import router from '@/router/router'
import products from '@/assets/data/products'

export default {
    state: { 
        selectedProduct: null,
        productList: products,
        pageProduct: null,
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
       },
       setPageProduct(state, product) {
            state.pageProduct = product;
       },
       clearPageProduct(state, product) {
            state.pageProduct = null;
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
        },
        getPageProduct({getters, state, commit}, id) {
            commit('clearPageProduct');
            let product = _.find(state.productList, function(i) {
                return i.id == id;
            });
            if(product) {
                console.log(product);
                return new Promise(function(resolve) {
                    resolve(commit('setPageProduct', product));
                });
            }
        }
    },
    getters: {
        selectedProduct(state) {
            return state.selectedProduct ? state.selectedProduct : null;
        },
        productModalState(state) {
            return state.productModal.open;
        },
        productPageProduct(state, rootstate) {
            return state.pageProduct ? state.pageProduct : null;
        }
    }
}