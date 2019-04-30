import Vue from 'vue'
import router from '@/router/router'

export default {
    state: { 
        favoritesModal: {
            open: false,
            title: '',
            type: null 
        }, 
    },
    mutations: {
        openFavoritesModal(state, pl) {
            state.favoritesModal.open = true;
        },
        closeFavoritesModal(state) {
            state.favoritesModal.open = false;
        }

    },
    actions: {
        openFavoritesModal({getters, state, commit}, type) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('openFavoritesModal', type)
                );
            });
        },
        closeFavoritesModal({getters, state, commit}) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('closeFavoritesModal')
                );
            });
        }
    },
    getters: {
        favoritesModal(state) {
            return state.favoritesModal;
        }
    }
}