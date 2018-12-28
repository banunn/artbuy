<template>
    <div class="auth-modal auth-sign-in-modal">
        <button @click="close" class="icon-btn close"><i class="material-icons">clear</i></button>
        <div class="form">
            <header>
                <img src="@/assets/artbuy_logo.svg" alt="">
            </header>
            <div class="form-content">
                <h1>Welcome back!</h1>
                <input type="email" placeholder="you@email.com">
                <input type="password" placeholder="password">
                <section class="forgot">
                    <span>forgot password</span>
                </section>
                <button @click="logIn" class="btn-block-primary">Log In</button>
                <footer class="form-content-foot">
                    Already have an account? Sign up <a @click="goToSignUp">here</a>
                </footer>
            </div>
            <footer class="foot">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms &amp; Conditions</a>
            </footer>
        </div>
        <div class="media">
            <img src="https://images.unsplash.com/photo-1528491836309-55b4a140b78a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80" alt="">
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
        margin-top: 80px;
    }
    header {
        img {
            max-width: 85px;
            height: auto;
        }
    }
}
</style>
