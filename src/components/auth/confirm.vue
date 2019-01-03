<template>
    <div class="auth-modal modal-confirm">
        <button @click="close" class="icon-btn close"><i class="material-icons">clear</i></button>
        <header class="brand">
            <header>
                <img src="@/assets/artbuy_logo.svg" alt="">
            </header>
        </header>
        <div class="confirm-content">
            <header class="head">
                <h3>Thanks for joining</h3>
                <h2>We’re excited to have you!</h2>
            </header>
            <div class="confirm-content-body">
                <p>To get started, <span class="bold">please check your email</span> and click the account verification link. Once you’ve verified your account, you’ll be able to log in <a @click="goToLogIn" class="inline-link">here</a>.</p>
            </div>
            <footer class="foot">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms &amp; Conditions</a>
            </footer>
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
        close() {
            this.$store.dispatch('authModalClose');
        }
    }
}
</script>

<style lang="scss" scoped>

    .modal-confirm {
        padding: 48px 48px 24px 48px;
        .brand {
            margin-bottom: 60px;
            header {
                text-align: center;
                img {
                    max-width: 85px;
                    height: auto;
                }
            }
        }
        .confirm-content {
            text-align: center;
            h3 {
                margin:0;
                color: #111215;	
                font-size: 18px;	
                font-weight: 600;	
                letter-spacing: 3px;	
                line-height: 25px;
                text-transform: uppercase;
            }
            h2 {
                margin:0;
                color: #111215;
                font-size: 34px;	
                font-weight: bold;	
                letter-spacing: -0.5px;	
                line-height: 38px;
                margin-bottom: 48px;
            }
            p {
                color: #111215;	
                font-size: 16px;	
                font-weight: 500;	
                line-height: 24px;
            }
        }
        .inline-link {
            cursor: pointer;
            text-decoration: underline;
        }
    }

            .foot {
            position: absolute;
            bottom: 24px;
            text-align: center;
            width: calc(100% - 96px);
            font-size: 10px;	
            font-weight: 600;	
            letter-spacing: 0.5px;	
            line-height: 12px;
            text-transform: uppercase;
            a {
                opacity: 0.4;	
                color: #111215;
                text-decoration: none;
                cursor: pointer;
                &:hover {
                    opacity: .85;
                }
                &:first-of-type {
                    &:after {
                        content: "  |";
                        margin-right: 3px;
                    }
                }
            }
        }
</style>
