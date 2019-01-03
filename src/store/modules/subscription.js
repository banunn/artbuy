import Vue from 'vue'
import router from '@/router/router'

export default {
    state: { 
        selectedSubscription: null,
        subscriptions: [
            {
                id: 1,
                name: 'FREEMIUM',
                benefits: ["Unlimited Users", "Unlimited Listings per Month", "Unlimited Event Creation", "35% commission fee"],
                price: '0',
                frequency: 'month'
            },
            {
                id: 2,
                name: 'BASIC',
                benefits: ["Unlimited Users", "Unlimited Listings per Month", "Unlimited Event Creation", "25% commission fee"],
                price: '9.95',
                frequency: 'month'
            },
            {
                id: 3,
                name: 'PREMIUM',
                benefits: ["Unlimited Users", "Unlimited Listings per Month", "Unlimited Event Creation", "15% commission fee"],
                price: '49.96',
                frequency: 'month' 
            }
        ],
        subscriptionModal: {
            open: false,
        },
    },
    mutations: {
       setSelectedSubscription(state, payload) {
           state.selectedSubscription = payload;
       },
       clearSelectedSubscription(state) {
           state.selectedSubscription = null;
       },
       subModalState(state, bool) {
           bool == true ? state.subscriptionModal.open = true : state.subscriptionModal.open = false;
       },
    },
    actions: {
        openSubscriptionModal({getters, state, commit}) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('subModalState', true)
                );
            });
        },
        closeSubscriptionModal({getters, state, commit}) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('subModalState', false)
                );
            });
        }
    },
    getters: {
        subscriptionModal(state) {
            return state.subscriptionModal ? state.subscriptionModal : null;
        },
        selectedSubscription(state) {
            return state.selectedSubscription ? state.selectedSubscription : null;
        }
    }
}