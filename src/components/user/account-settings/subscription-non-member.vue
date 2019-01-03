<template>
    <div class="user-subscription">
        <header class="label">subscription</header>
        <div class="us-content">
            <p>{{msg}}</p>
        </div>
        <footer class="foot">
            <button class="btn-primary btn-dark">
                Choose Plan
            </button>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'non_member_subscription',
    data() {
        return {
            msg: "Choose a subscription and start selling your work for as little as $9.95/month!"
        }
    },
    methods: {
        viewSubs() {
            return this.$store.dispatch('openSubscriptionModal');
        }
    }
}
</script>

<style lang="scss" scoped>
    .user-subscription {
        background: #fff;
        border-radius: 2px;
        border: 1px solid rgba(17,18,21,0.1);
        padding: 20px 16px;
        margin-bottom: 16px;

        .tier-list {
            margin-top: 10px;
            .tier {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0;
                border-bottom: 1px solid #E8EAEB;
                opacity: .4;
                &.selected {
                    opacity: 1;
                }
                .detail {
                    display: flex;
                    align-items: center;
                    i {
                        margin-right: 10px;
                    }
                }
            }
        }
    }
    .foot {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        align-items: center;
        .link {
            a {
                font-size: 9px;	
                font-weight: bold;	
                letter-spacing: 1px;	
                line-height: 12px;
                color: rgba(#111215, .8);
                text-transform: uppercase;
                text-decoration: underline;
            }
        }
        button {
            -webkit-appearance: none;
            border-radius: 0px;
            border-width: 1px;
            border-style: solid;
            height: 24px;
            width: 105px;
            text-transform: uppercase;
            font-size: 9px;	
            font-weight: bold;	
            letter-spacing: 1px;	
            line-height: 12px;
            background: none;
            &.btn-dark {
                background-color: #111215;
                color: #fff;
                border-color: #111215;
            }
            &.btn-secondary {

            }
        }
    }

    .us-content {
        font-size: 14px;	
        font-weight: 500;	
        letter-spacing: 0.1px;	
        line-height: 20px;
    }
</style>
