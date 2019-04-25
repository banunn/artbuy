<template>
    <div class="payment-method">
        <div class="payments">
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
        <div class="checkout-foot">
            <button @click="$router.push('/')" class="btn text-btn"><i class="material-icons">chevron_left</i> Continue Shopping</button>
            <button @click="$router.push({name: 'checkout complete'})" class="btn btn-primary">Complete Purchase</button>
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
    select {
        height: 48px;
    }
    .checkout-foot {
  display: flex;
  justify-content: space-between;
  padding: 24px 0px 24px 0px;
  margin-top: 64px;
  border-top: 1px solid #e8eaeb;
  > div {
    display: flex;
    align-items: center;
  }

  button {
    height: 48px;
    border-width: 1px;
    border-style: solid;
    border-color: #111215;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.2px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.btn-primary {
      width: 246px;
      border-radius: 2px;
      background: #111215;
      color: #fff;
    }
    &.btn-secondary {
      width: 144px;
      background: none;
      margin-right: 8px;
    }
    &.text-btn {
      background: none;
      border: none;
      text-transform: uppercase;
    }
  }
}


.payments {
    border: 1px solid rgba(#000, .1);
    .foot {
    display: flex;
    padding: 16px 14px 16px 14px;
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
    margin: 0 0px;
    padding: 0 14px;
    border-bottom: 1px solid rgba(#000, .1);
    cursor: pointer;
    &:last-child {
        border-bottom:none;
    }
}
}
</style>
