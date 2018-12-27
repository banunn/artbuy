<template>
    <div class="auth">
        <transition name="fade">
            <div v-if="open" class="overlay"></div>
        </transition>
        <transition name="scale" mode="out-in">
            <sign-in v-if="type == 'signIn'"></sign-in>
            <sign-up v-if="type == 'signUp'"></sign-up>
            <auth-confirm v-if="type == 'confirm'"></auth-confirm>    
        </transition>
    </div>
</template>

<script>
import signIn from './sign-in'
import signUp from './sign-up'
import authConfirm from './confirm'
export default {
    name: 'auth-modal',
    components: {
        signIn,
        signUp, 
        authConfirm
    },
    computed: {
        type() {
            return this.$store.getters.userAuth.type;
        },
        open() {
            return this.$store.state.user.auth.open;
        },
        close() {
            return this.$store.dispatch('authModalClose');
        }
    },
    created() {
        const vm = this;
        document.onkeydown = function(evt) {
            console.log(evt);
            evt = evt || window.event;
            if (evt.keyCode == 27 && vm.open) {
                vm.close();
            }
        };
    }
}
</script>

<style lang="scss" scoped>
.overlay {
    background: rgba(#000, .5);
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index: 700;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
