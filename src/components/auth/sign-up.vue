<template>
    <div class="auth-modal auth-sign-up-modal">
        <button @click="close" class="icon-btn close"><i class="material-icons">clear</i></button>
        <div class="form">
            <header>
                <img src="@/assets/logo-stamp.png" alt="">
            </header>
            <div class="form-content">
                <h1>SIGN UP</h1>
                <input type="email" placeholder="you@email.com">
                <input type="password" placeholder="password">
                <input type="password" placeholder="confirm password">
                <button class="btn-block-primary" @click="confirm">Sign Up</button>
                <footer class="form-content-foot">
                    Already Have An Account? Log In <a @click="goToLogIn">here</a>
                </footer>
            </div>
            <footer class="foot">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms &amp; Conditions</a>
            </footer>
        </div>
        <div class="media">
            <img src="@/assets/modal_bg.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'auth-confirm-modal',
    methods: {
        goToLogIn() {
            this.$store.dispatch('authSignIn');
        },
        confirm() {
            const vm = this;
            this.$store.dispatch('authConfirm').then(function() {
                setTimeout(function() {
                    vm.$store.dispatch('authModalClose');
                    vm.$router.push({name: 'onboarding welcome'});
                }, 1500);
            });
        },
        close() {
            this.$store.dispatch('authModalClose');
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    .form-content {
        margin-top: 24px;
        h1 {
            text-align: center;
        }
    }
    header {
        text-align: center;
        img {
            max-width: 56px;
            height: auto;
            display: inline;
        }
    }
}
</style>
