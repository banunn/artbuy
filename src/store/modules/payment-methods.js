import Vue from 'vue'
import router from '@/router/router'

// IMPORT PAYMENT METHOD CLASS OR WRITE ONE ( Mitch Note :) ) 


// General Data

import paymentMethods from '@/assets/data/paymentMethods.js'

class pMethod {
    constructor(num, exp, cvv, name, address, city, postal, country, region) {
        this.cardNumber = num ? num : 0;
        this.expiration = exp ? exp : new Date();
        this.cvv = cvv ? cvv : 0;
        this.name = name ? name : '';
        this.billingAddress = address ? address : '';
        this.city = city ? city : '';
        this.postalCode = postal ? postal : 0;
        this.country = country ? country : 'United States';
        this.region = region ? region : '';
    }
};

export default {
    state: { 
        paymentModal: {
            open: false,
            type: 'new',
            method: new pMethod()
        },
        paymentMethods: paymentMethods
    },
    mutations: {
        openModal(state, pl) {
            if(pl) {
                state.paymentModal.method = new pMethod(pl.cardNumber, pl.expiration, pl.cvv, pl.name, pl.billingAddress, pl.city, pl.postalCode, pl.country, pl.region);
                state.paymentModal.open = true;
                state.paymentModal.type = 'edit';
            } else {
                state.paymentModal.open = true;
                state.paymentModal.type = 'add'
            }
        },
        closeModal(state) {
            state.paymentModal.open = false;
            state.paymentModal.method = new pMethod();
        },

    },
    actions: {
        openPaymentModal({getters, state, commit}, method) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('openModal', method)
                );
            });
        },
        closePaymentModal({getters, state, commit}) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('closeModal')
                );
            });
        }
    },
    getters: {
        paymentModal(state) {
            return state.paymentModal;
        },
        userPaymentMethods(state) {
            return state.paymentMethods;
        }
    }
}