<template>
  <div class="shipping-method">
    <header class="head">Shipping Method</header>
    <div class="method-list">
        <div class="method" @click="selectMethod(m)" v-for="(m ,index) in methods" :key="index">
            <div class="detail">
                <i class="material-icons">{{selectedMethod === m ? "radio_button_checked" : "radio_button_unchecked"}}</i>
                <div class="desc">
                    <header>{{m.name}}</header>
                    <span>{{m.desc}}</span>
                </div>
            </div>
            <div class="price">{{m.price | currency}}</div>
        </div>
    </div>
    <div class="checkout-foot">
            <button @click="$router.push('/')" class="btn text-btn"><i class="material-icons">chevron_left</i> Continue Shopping</button>
            <button @click="$router.push({name: 'checkout payment method'})" class="btn btn-primary">Continue to Payment Method</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "shipping_method",
  data() {
    return {
      methods: [
        {
          name: "USPS First Class",
          desc: "3-5 Business Days",
          price: 74.85
        },
        {
          name: "USPS Priority",
          desc: "2-3 Business Days",
          price: 96.23
        },
        {
          name: "USPS Two-Day",
          desc: "1-2 Business Days",
          price: 112.34
        },
        {
          name: "FedEx Overnight",
          desc: "Next Business Day",
          price: 156.48
        }
      ]
    };
  },
  methods: {
      selectMethod(m) {
          this.$store.dispatch('chooseShipping', m);
      }
  },
  computed: {
      selectedMethod() {
          return this.$store.state.cart.cart.shippingMethod;
      }
  }
};
</script>

<style lang="scss" scoped>

.head {
    	font-size: 12px;	font-weight: bold;	letter-spacing: 0.5px;	line-height: 24px;
        margin-bottom: 24px;
        text-transform: uppercase;
}

.method-list{
	border: 1px solid rgba(17,18,21,0.2);
    border-radius: 2px;

    .method {
        display: flex;
        justify-content: space-between;
        padding: 0 24px 0 12px;
        border-bottom: 1px solid #E8EAEB;
        &:last-child {
            border-bottom:none;
        }
        .detail {
            display: flex;
            align-items: center;
            height: 70px;
            i {
                margin-right: 12px;
            }
            .desc {
                header {
                    	font-size: 14px;	font-weight: 600;	letter-spacing: 0.1px;	line-height: 18px;
                }
                span {
                    	font-size: 12px;	letter-spacing: 0.5px;	line-height: 12px; opacity: .8;
                }
            }
        }
        .price {
            display: flex;
            align-items: center;
        }
    }
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
</style>