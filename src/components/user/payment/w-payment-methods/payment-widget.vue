<template>
    <ab-widget :title="'Payment Methods'">
        <template slot="body">
            <p-method v-for="(m, index) in methods" :method="m" :key="index"></p-method>
            <div @click="openModal" class="foot">
                <div class="icon"><i class="material-icons">credit_card</i></div>
                <div class="detail">
                    <header class="head">Add New Payment Method</header>
                </div>
                <div class="ctrl"><i class="material-icons">keyboard_arrow_right</i></div>
            </div>
        </template>
    </ab-widget>
</template>

<script>
import pMethod from './payment-item';
export default {
    name: 'payment_methods_widget',
    computed: {
        methods() {
            return this.$store.getters.userPaymentMethods;
        }
    },
    components: {
        pMethod
    },
    methods: {
        openModal() {
            this.$store.dispatch('openPaymentModal');
        }
    }
}
</script>

<style lang="scss" scoped>
.foot {
    display: flex;
    padding: 16px 24px 0 24px;
    align-items: center;
            .icon {
            width: 42px;
            height: 100%;
            margin-right: 24px;
        }

        .head {
    	font-size: 13px;	font-weight: 900;	letter-spacing: 0.54px;	line-height: 18px;
        }
            .ctrl {
        flex:1;
        justify-content: flex-end;
        text-align: right;
        i {
            font-size: 24px;
            color: #B8B8B9;
            cursor: pointer;
            transform: translateX(8px);
        }
    }
}
</style>
