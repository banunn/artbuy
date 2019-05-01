import Vue from 'vue'
import router from '@/router/router'

export default {
    state: { 
        orderHistoryModal: {
            open: false,
            type: null 
        }, 
    },
    mutations: {
        openOrderHistoryModal(state, pl) {
            state.orderHistoryModal.open = true;
        },
        closeOrderHistoryModal(state) {
            state.orderHistoryModal.open = false;
        }

    },
    actions: {
        openOrderHistoryModal({getters, state, commit}, type) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('openOrderHistoryModal', type)
                );
            });
        },
        closeOrderHistoryModal({getters, state, commit}) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('closeOrderHistoryModal')
                );
            });
        }
    },
    getters: {
        orderHistoryModal(state) {
            return state.orderHistoryModal;
        }
    }
}