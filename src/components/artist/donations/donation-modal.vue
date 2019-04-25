<template>
  <transition name="fade">
    <div v-if="modal.open" class="overlay">
      <div class="donation-modal">
        <div class="modal-head">
            Donate to <span>West Street Studios</span>
        </div>
        <div class="modal-content">
            <p-amount v-if="step === 1"></p-amount>
            <p-info v-if="step === 2"></p-info>
            <p-method v-if="step === 3"></p-method>
        </div>
        <footer class="foot">
            <button @click="close" class="btn btn-light">Cancel</button>
            <button @click="next" class="btn btn-dark">{{step == 3 ? 'Process Donation': 'Next'}}</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import pAmount from './payment-amount';
import pInfo from './payment-details';
import pMethod from './payment-method';
export default {
  name: "payment_method_modal",
  components: {
      pAmount,
      pInfo,
      pMethod
  },
  computed: {
    modal() {
      return this.$store.getters.artistDonationModal;
    },
    method() {
        return this.$store.getters.paymentModal.method;
    },
    methods() {
        return this.$store.getters.userPaymentMethods;
    }
  },
  methods: {
      close() {
          this.$store.dispatch('closeArtistDonationModal');
          this.step = 1;
      },
      next() {
          const vm = this;
          switch (vm.step) {
              case 1:
                vm.step = 2
                break;
              case 2: 
                vm.step = 3
                break;
              case 3: 
                vm.close();
                break;
              default:
                  break;
          }
      }
  },
  data() {
      return {
          step: 1
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

.donation-modal {
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
    span {
        font-weight: 800;
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
    flex: 1;
    padding: 18px 24px 46px 24px;
    overflow-y: auto;
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
        }
    }
}

</style>
