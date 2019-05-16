<template>
    <div class="auth-modal auth-sign-in-modal">
        <button @click="close" class="icon-btn close"><i class="material-icons">clear</i></button>
        <div class="form">
            <header>
                <img class="logo" src="@/assets/logo-stamp.png" alt="">
            </header>
            <div class="form-content">
                <h1>Sign In</h1>
                <input type="email" placeholder="you@email.com">
                <input type="password" placeholder="password">
                <section class="forgot">
                    <span @click="goToPassReset">forgot password</span>
                </section>
                <button @click="logIn" class="btn-block-primary">Log In</button>
                <footer class="form-content-foot">
                    Don't have an account? Sign up <a @click="goToSignUp">here</a>
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
    name: 'auth--confirm-modal',
    methods: {
        goToSignUp() {
            this.$store.dispatch('authSignUp');
        },
        goToPassReset() {
            this.$router.push({name: 'password reset request'});
            this.close();
        },
        logIn() {
            this.$store.dispatch('authUserSignIn');
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
        margin-top: 55px;
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

.form-content-foot {}

@media(max-width: 1000px) {
    .media {
        display: none;
    }
}

</style>
