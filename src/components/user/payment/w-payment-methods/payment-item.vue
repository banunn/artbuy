<template>
    <div class="payment-item">
        <div class="icon">
            <img v-if="method.type == 'americanexpress'" src="@/assets/icon-amex.svg" alt="">
            <img v-if="method.type == 'visa'" src="@/assets/icon-visa.svg" alt="">
            <img v-if="method.type == 'mastercard'" src="@/assets/icon-mastercard.svg" alt="">
        </div>
        <div class="detail">
            <header class="number">
                  <cleave placeholder="Enter your credit card number" v-model="method.cardNumber" :options="{ creditCard: true }" class="input-disabled" disabled></cleave>
            </header>
            <span class="exp">Expires: 01/28</span>
        </div>
        <div class="ctrl"><i @click="openModal" class="material-icons">edit</i></div>
    </div>
</template>

<script>
import Cleave from 'vue-cleave'

export default {
    name: 'payment_method_item',
    components: {
        Cleave
    },
    props: {
        method: Object
    },
    methods: {
        openModal() {
            const vm = this;
            this.$store.dispatch('openPaymentModal', vm.method);
        }
    }
}
</script>

<style lang="scss" scoped>
    .payment-item {
        display: flex;
        align-items: center;
        margin: 0 18px;
        padding: 8px 0;
        border-bottom: 1px solid rgba(#000, .1);
        &:last-child {
            border-bottom:none;
        }
        .icon {
            width: 45px;
            height: 100%;
            margin-right: 24px;
        }
    }
    .input-disabled {
        border: none;
        background: none;
        font-size: 14px;	
        font-weight: 900;	
        letter-spacing: .5px;	
        line-height: 18px;
        user-select: none;
        cursor: inherit;
    }
    span.exp {
        	opacity: 0.6;font-size: 12px;	font-weight: 500;	letter-spacing: 0.25px;	line-height: 12px;
    }
    .ctrl {
        flex:1;
        justify-content: flex-end;
        text-align: right;
        i {
            font-size: 18px;
            color: #B8B8B9;
            cursor: pointer;
        }
    }
</style>
