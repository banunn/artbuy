import Vue from 'vue'
import router from '@/router/router'

export default {
    state: { 
        userInfo: {
            uid: 312134,
            firstName: 'Sarah',
            lastName: 'Decker',
            userType: 'Artist',
            photoUrl: 'https://images.unsplash.com/photo-1473700216830-7e08d47f858e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=800&q=1000',
            subscription: 'individual',
            location: {
                city: "Los Angeles",
                state: "CA"
            },
            bio: "Buying the right telescope to take your love of astronomy to the next level is a big next step in the development of your passion for the stars. In many ways, it is a big step from someone who is just fooling around with astronomy to a serious student of science. But you and I both know that there is still another big step after buying a telescope before you really know how to use it.",
            social: {
                followers: 1923,
                following: 842,
                appreciations: 3029
            }
        },
        auth: {
            open: false,
            type: null,
            loggedIn: false
        }
    },
    mutations: {
       setUserInfo(state, payload) {
           state.userInfo = payload;
       },
       setAuthModalState(state, bool) {
           state.auth.open = bool;
       },
       setLoggedIn(state, bool) {
           state.auth.loggedIn = bool;
       },
       setAuthModalType(state, type) {
            state.auth.type = type;
       }
    },
    actions: {
        authUserSignUp({commit, state, getters}) {
            return new Promise(function(resolve, reject) {
                // code to sign user up
            });
        },
        authUserSignIn({commit, state, getters, dispatch}) {
            return new Promise(function(resolve, reject) {
               resolve(
                   commit('setLoggedIn', true),
                   dispatch('authModalClose')
               );
            });
        },
        authUserLogOut({commit, state, getters}) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('setLoggedIn', false),
                );
             });            
        },
        // Use these controls to display the proper sign in / up / confirm modals anywhere throughout the site
        authSignUp({commit, state, getters}) {
            console.log('Sign Up');
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('setAuthModalState', true),
                    commit('setAuthModalType', 'signUp')
                );
            });
        },
        authSignIn({commit, state, getters}) {
            console.log('Sign In');
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('setAuthModalState', true),
                    commit('setAuthModalType', 'signIn')
                );
            });
        },
        authConfirm({commit, state, getters}) {
            console.log('Confirm');
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('setAuthModalState', true),
                    commit('setAuthModalType', 'confirm')
                );
            });
        },
        authModalClose({commit, store, getters}) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('setAuthModalState', false),
                    commit('setAuthModalType', null)
                );
            });
        }
    },
    getters: {
        userInfo(state) {
            return state.userInfo ? state.userInfo : null;
        },
        userAuth(state) {
            return state.auth;
        }
    }
}