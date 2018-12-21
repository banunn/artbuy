<template>
    <div class="auth-modal auth-sign-up-modal">
        <div class="form">
            <header>
                <img src="@/assets/artbuy-white.png" alt="">
            </header>
            <div class="form-content">
                <h1>Join ArtBuy</h1>
                <input type="email" placeholder="you@email.com">
                <input type="password" placeholder="password">
                <input type="password" placeholder="confirm password">
                <button class="btn-block-primary">Sign Up</button>
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
            <img src="https://images.unsplash.com/photo-1528491836309-55b4a140b78a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'auth-confirm-modal',
    methods: {
        goToLogIn() {
            this.$store.dispatch('authSignIn');
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    .form-content {
        margin-top: 56px;
    }
}
</style>
