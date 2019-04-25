<template>
    <div class="donation-wrap">
        <header class="head">Payment Method</header>
        <div class="methods">
            <div @click="selected = m" v-for="(m, index) in methods" :key="index" class="method">
                <div class="m-icon">
                    <i class="material-icons">{{selected == m ? 'radio_button_checked' : 'radio_button_unchecked'}}</i>
                </div>
                <p-method :method="m" :editable="false"></p-method>
            </div>
            <div @click="openModal" class="foot">
                <div class="icon"><i class="material-icons">credit_card</i></div>
                <div class="detail">
                    <header class="head">Add New Payment Method</header>
                </div>
                <div class="ctrl"><i class="material-icons">keyboard_arrow_right</i></div>
            </div>
        </div>
    </div>
</template>

<script>
import pMethod from '@/components/user/payment/w-payment-methods/payment-item';
export default {
    name: 'payment_method',
    components: {
        pMethod
    },
    data() {
        return {
            selected: null
        }
    },
    computed: {
        methods() {
            return this.$store.getters.userPaymentMethods;
        }
    },
    methods: {
        openModal() {
            this.$store.dispatch('openPaymentModal');
        }
    }
}
</script>

<style lang="scss" scoped>
.head {
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.58px;
  line-height: 18px;
  padding: 10px 24px 24px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(#000, 0.1);
}

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

.method {
    display: flex;
    align-items: center;
    margin: 0 14px;
    border-bottom: 1px solid rgba(#000, .1);
    cursor: pointer;
    &:last-child {
        border-bottom:none;
    }
}

</style>
