import Vue from 'vue'
import router from '@/router/router'

export default {
    state: { 
        selectedSubscription: null,
        subscriptions: [
            {
                id: 1,
                name: 'individual',
                benefits: ["Single User", "10 Listings per Month", "Unlimited Event Creation", "2.9% transaction fee"],
                price: '29',
                frequency: 'month'
            },
            {
                id: 2,
                name: 'team',
                benefits: ["Up to 5 Users", "100 Listings per Month", "Unlimited Event Creation", "2.9% transaction fee"],
                price: '79',
                frequency: 'month'
            },
            {
                id: 3,
                name: 'enterprise',
                benefits: ["Unlimited Users", "Unlimited Listings per Month", "Unlimited Event Creation", "1.49% transaction fee"],
                price: '199',
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