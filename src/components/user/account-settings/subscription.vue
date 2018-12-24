<template>
    <div class="user-subscription">
        <header class="label">subscription</header>
        <div class="tier-list">
            <div class="tier" :class="{'selected': t.selected}" v-for="(t, index) in tiers" :key="index">
                <div class="detail">
                    <i class="material-icons">{{t.selected ? 'radio_button_checked' : 'radio_button_unchecked'}}</i>
                    <span>{{t.name}}</span>
                </div>
                <div class="meta">
                    <span>{{'$' + t.price + '/' + t.frequency}}</span>
                </div>
            </div>
        </div>
        <footer class="foot">
            <div class="link">
                <a>View Billing History</a>
            </div>
            <div class="ctrl">
                <button class="btn-light">Cancel</button>
                <button @click="viewSubs" class="btn-dark">Change Plan</button>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'user_subscription',
    data() {
        return {
            tiers: [
                {
                    name: 'Individual',
                    price: '29',
                    frequency: 'month',
                    selected: true
                },
                {
                    name: 'Team',
                    price: '79',
                    frequency: 'month',
                    selected: false
                },
                {
                    name: 'Enterprise',
                    price: '199',
                    frequency: 'month',
                    selected: false
                }
            ]
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
            border-radius: 2px;
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
            margin-left: 10px;
            &.btn-dark {
                background-color: #111215;
                color: #fff;
                border-color: #111215;
            }
            &.btn-secondary {

            }
        }
    }
</style>
