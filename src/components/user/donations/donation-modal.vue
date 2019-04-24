<template>
  <transition name="fade">
    <div v-if="modal.open" class="overlay">
      <div class="method-modal">
        <div class="modal-head">
            <i class="icon"><img src="@/assets/icon-heart.svg" alt=""></i>
            <span>Donate to ARTBUY Artist Fund</span>
        </div> 
        <div class="modal-content">
            <div class="donation-input">
                <input type="number" v-model="amount">
            </div>
            <div @click="selected = m" v-for="(m, index) in methods" :key="index" class="method">
                <div class="m-icon">
                    <i class="material-icons">{{selected == m ? 'radio_button_checked' : 'radio_button_unchecked'}}</i>
                </div>
                <p-method :method="m" :editable="false"></p-method>
            </div>
            <div @click="openModal" class="add-foot">
                <div class="icon"><i class="material-icons">credit_card</i></div>
                <div class="detail">
                    <header class="head">Add New Payment Method</header>
                </div>
                <div class="ctrl"><i class="material-icons">keyboard_arrow_right</i></div>
            </div>
        </div>
        <footer class="foot">
            <button @click="close" class="btn btn-light">Cancel</button>
            <button class="btn btn-grad" @click="process">Process Donation</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import pMethod from '@/components/user/payment/w-payment-methods/payment-item';
export default {
  name: "donation_modal",
  data() {
      return {
          amount: 0,
          selected: null
      }
  },
  components: {
      pMethod
  },
  computed: {
    modal() {
      return this.$store.getters.donationModal;
    },
    methods() {
        return this.$store.getters.userPaymentMethods;
    }
  },
  methods: {
      reset() {
          this.selected = null;
          this.amount = 0;
      },
      close() {
          this.$store.dispatch('closeDonationModal');
          this.reset();
      },
      openModal() {
          const vm = this;
          this.$store.dispatch('openPaymentModal', vm.method);
      },
      process() {
          this.$store.dispatch('closeDonationModal');
          this.reset();
      }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(#111215, 0.5);
  z-index: 700;
  display: flex;
  justify-content: center;
  align-items: center;
}

.method-modal {
  min-height: 736px;
  width: 616px;
  max-height: calc(100vh - 50px);
  @media(max-width: 1024px) {
  max-width: calc(100vw - 50px);
  }
  border: 1px solid rgba(17, 18, 21, 0.1);
  border-radius: 2px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  .modal-head {
    font-size: 20px;	
    font-weight: 600;	
    letter-spacing: 0.14px;
    line-height: 28px;
    padding: 16px 24px;
    border-bottom: 1px solid rgba(#000, .1);
    display: flex;
    align-items: center;
    color: #FF006B;
    .icon {
        max-width: 22px;
        margin-right: 10px;
        display:inline-block;
        transform: translateY(3px);
    }
    }
  .super {
    padding: 56px 0 24px 0;
    text-align: center;
    img {
      max-width: 72px;
    }
  }
  .modal-content {
      flex:1;
  }

    .foot {
        display: flex;
        justify-content: flex-end;
        padding: 16px 0px;
        margin: 0 24px;
        border-top: 1px solid #E8EAEB;
        button {
            -webkit-appearance: none;
            border-radius: 0px;
            border-width: 1px;
            border-style: solid;
            height: 24px;
            text-transform: uppercase;
            font-size: 9px;	
            font-weight: bold;	
            letter-spacing: 1px;	
            line-height: 12px;
            background: none;
            margin-left: 10px;
            min-width: 105px;
            &.btn-dark {
                background-color: #111215;
                color: #fff;
                border-color: #111215;
                padding: 0 12px;
            }
            &.btn-light {
                padding: 0 30px;
            }
            &.btn-grad {
                border: none;
                border-radius: 2px;	
                background: linear-gradient(135.2deg, #FF0089 0%, #FF0232 100%);
                height: 24px;
                //width: 100%;
                color: #fff;	
                font-weight: bold;	
                letter-spacing: 1.2px;	
                line-height: 16px;
                min-width:174px;
                max-width: 100%;
            }
        }
    }
}


.donation-input {
    height: 128px;
    display: flex;
    background-color: #F5F7F7;
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
    input {
        display: inline-flex;
        width: inherit;
        font-size: 64px;	font-weight: 900;	line-height: 18px;
        text-align: center;
        width: 100%;
        border: none;
        background: transparent;
        color: #FF006B;
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

.add-foot {
    display: flex;
    padding: 16px 14px 0 14px;
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
