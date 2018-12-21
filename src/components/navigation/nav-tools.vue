<template>
    <aside class="nav-tools">
        <nav>
            <a href="#" class="link">Find</a>
            <a href="#" class="link">Buy</a>
            <a href="" class="link">Sell</a>
        </nav>
        <div class="action">
            <button @click="login" class="btn-outline">Login</button>
            <button @click="signUp" class="sign-up">Sign Up</button>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'nav-tools',
    methods: {
        login() {
            this.$store.dispatch('authSignIn');
        },
        signUp() {
            this.$store.dispatch('authSignUp');
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav-tools {
        display: flex;
        
        nav {
            margin-right: 20px;
            .link {
                color: #FFFFFF;
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 2px;
                text-align: center;
                text-shadow: 0 1px 1px 0 rgba(17,18,21,0.5);
                text-transform: uppercase;
                text-decoration: none;
                padding: 6px 20px;
            }
        }
        button {
            height: 24px;
            width: 100px;
            border-width: 2px;
            border-style: solid;
            border-color: inherit;
            background: inherit;
            color: inherit;
            border-radius: 2px;
            font-size: 9px;	
            font-weight: bold;	
            letter-spacing: 0.9px;	
            line-height: 12px;	
            text-align: center;
            &.btn-outline {
                border-color: #fff;
                color: #fff;
            }
            &.sign-up {
                margin-left: 8px;
                color: #000;
                background: #fff;
                border-color: #fff;
            }
        }
    }
</style>
