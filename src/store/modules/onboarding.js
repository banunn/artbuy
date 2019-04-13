import Vue from 'vue'
import router from '@/router/router'
import axios from 'axios';

export default {
    state: { 
        modal: {
            open: false,
            subTitle: '',
            heading: ''
        },
        storyModal: {
            open: false,
            page: 1
        }
    },
    mutations: {
        openOnboardingModal(state) {
            state.modal.open = true;
        },
        closeOnboardingModal(state) {
            state.modal.open = false;
        },
        setOnboardingModalText(state, object) {
            // object should be {sub: 'text', head: 'text'}
            state.modal.subTitle = object.sub;
            state.modal.heading = object.head;
        },
        openStoryOnboarding(state, arg) {
            state.storyModal.open = true;
            arg ? state.storyModal.page = arg : 1;
        },
        closeStoryOnboardingModal(state) {
            state.storyModal.open = false;
            state.storyModal.page = 1;
        }

    },
    actions: {
        confirmSubscriptionModal({commit, dispatch}) {
            return new Promise(function(resolve, reject) {
                commit('openOnboardingModal');
                commit('setOnboardingModalText', {sub: 'HANG TIGHT FOR JUST A MINUTE', head: 'We’re creating your ArtBuy experience'});
                setTimeout(function() {
                    router.push({name: 'home'});
                }, 1500);
                setTimeout(function() {
                    commit('setOnboardingModalText', {sub: 'ALL DONE!', head: 'Time to sell some art'});
                }, 2750);
                setTimeout(function() {
                    dispatch('authUserSignIn');
                    commit('closeOnboardingModal');
                }, 3800);
            });
        },
        confirmAccountModal({commit, dispatch}) {
            return new Promise(function(resolve, reject) {
                commit('openOnboardingModal');
                commit('setOnboardingModalText', {sub: 'HANG TIGHT FOR JUST A MINUTE', head: 'We’re optimizing your experience'});
                setTimeout(function() {
                    router.push({name: 'home'});
                }, 1500);
                setTimeout(function() {
                    commit('setOnboardingModalText', {sub: 'ALL DONE!', head: 'Time to find the perfect piece of art'});
                }, 2750);
                setTimeout(function() {
                    dispatch('authUserSignIn');
                    commit('closeOnboardingModal');
                }, 3800);
            });
        }
    },
    getters: {
        onboardingModal(state) {
            return state.modal;
        },
        onboardingStoryModal(state) {
            return state.storyModal;
        }
    }
}