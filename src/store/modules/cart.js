import Vue from 'vue'
import router from '@/router/router'
import axios from 'axios';

export default {
    state: { 
        cart: {
            open: false,
            shippingMethod: null,
            items: []
        }
    },
    mutations: {
        openCart(state) {
            state.cart.open = true;
        },
        cartClose(state) {
            state.cart.open = false;
        },
        addItem(state, payload) {
            state.cart.items.push(payload);
        },
        removeItem(state, index) {
            state.cart.items.splice(index, 1);
        },
        setShippingMethod(state, payload) {
            state.cart.shippingMethod = payload;
        },
        clearItems(state) {
            state.cart.items = [];
        }
    },
    actions: {
        showCart({commit}) {
            return new Promise(function(resolve, reject) {
                resolve(commit('openCart'));
            });
        },
        closeCart({commit}) {
            return new Promise(function(resolve, reject) {
                resolve(commit('cartClose'));
            });
        },
        addItemToCart({commit}, payload) {
            return new Promise(function(resolve) {
                resolve(commit('addItem', payload));
            });
        },
        removeItemFromCart({commit, state}, payload) {
            return new Promise(function(resolve) {
                var index = _.findIndex(state.cart.items, function(i) {
                    return i.id == payload.id;
                });
                if(index > -1) {
                    resolve(commit('removeItem', index));
                } else {
                    console.log('could not find item to remove');
                    reject('could not find item to remove');
                } 
            });
        },
        chooseShipping({commit}, payload) {
            return new Promise(function(resolve) {
                commit('setShippingMethod', payload);
            });
        },
        clearCart({commit}) {
            return new Promise(function(resolve) {
                resolve(commit('clearItems'));
            });
        }
    },
    getters: {
        userCart(state) {
            return state.cart;
        },
        cartTotal(state) {
            var cartItems = state.cart.items;
            var total = 0;
            cartItems.forEach(function(i) {
                total += i.art.price;
            });
            return total;
        },
        cartTaxTotal(state, getters) {
            return getters.cartTotal ? getters.cartTotal * .085 : 0;
        },
        cartShippingTotal(state, getters) {
            return state.cart.shippingMethod ? state.cart.shippingMethod.price : 0;
        },
        cartGrandTotal(getters) {
            return getters.cartTotal + getters.cartTaxTotal + getters.cartShippingTotal;
        }
    }
}