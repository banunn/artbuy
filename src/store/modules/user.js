import Vue from 'vue'
import router from '@/router/router'

export default {
    state: { 
        userInfo: {
            firstName: 'Sarah',
            lastName: 'Decker',
            photoUrl: 'https://images.unsplash.com/photo-1473700216830-7e08d47f858e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&h=80&q=1000',
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
        authUserSignIn({commit, state, getters}) {
            return new Promise(function(resolve, reject) {
               resolve(
                   commit('setLoggedIn', true)
               );
            });
        },
        authUserLogOut({commit, state, getters}) {
            return new Promise(function(resolve, reject) {
                resolve(
                    commit('setLoggedIn', false)
                );
             });            
        },
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