import Vue from 'vue'
import router from '@/router/router'

// IMPORT PAYMENT METHOD CLASS OR WRITE ONE ( Mitch Note :) ) 

export default {
    state: { 
        donationModal: {
            open: false,
            title: ''
        },
    },
    mutations: {
        openDonationModal(state, pl) {
            state.donationModal.open = true;
        },
        closeDonationModal(state) {
            state.donationModal.open = false;
        },

    },
    actions: {
        openDonationModal({getters, state, commit}, method) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('openDonationModal', method)
                );
            });
        },
        closeDonationModal({getters, state, commit}) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('closeDonationModal')
                );
            });
        }
    },
    getters: {
        donationModal(state) {
            return state.donationModal;
        },
    }
}