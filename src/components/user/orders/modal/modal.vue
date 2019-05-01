<template>
  <transition name="fade">
    <div v-if="modal.open" class="overlay">
      <div class="method-modal">
        <div class="modal-head">
          <span>{{'Order #' + order.orderId}}</span>
          <button @click="close" class="icon-btn">
            <i class="material-icons">clear</i>
          </button>
        </div>
        <div class="modal-content">
            <order-item v-for="(o, index) in order.items" :key="index" :order="o"></order-item>
            <div class="order-meta">
                <div class="detail">
                    <div class="d-row"><span>Subtotal</span><span>{{order.subtotal | currency }}</span></div>
                    <div class="d-row"><span>Taxes</span><span>{{order.taxes | currency}}</span></div>
                    <div class="d-row"><span>Shipping</span><span>{{order.shipping | currency}}</span></div>
                </div>
                <footer class="total">
                    <div class="d-row"><span>Total</span><span>{{order.total | currency}}</span></div>
                </footer>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import orderHistory from '@/assets/data/order-history'
import orderItem from './order-item'
export default {
  name: "order_history_modal",
  components: {
      orderItem
  },
  data() {
    return {
      order: orderHistory
    };
  },
  computed: {
    modal() {
      return this.$store.getters.orderHistoryModal;
    }
  },
  methods: {
    close() {
      this.$store.dispatch("closeOrderHistoryModal");
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
  // min-height: 736px;
  width: 616px;
  max-height: calc(100vh - 50px);
  @media (max-width: 1024px) {
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
    border-bottom: 1px solid rgba(#000, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    padding: 18px 24px 16px 24px;
    overflow-y: auto;
  }

  .foot {
    display: flex;
    justify-content: flex-end;
    padding: 16px 0px;
    margin: 0 24px;
    border-top: 1px solid #e8eaeb;
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

.hero {
  display: flex;
  border-bottom: 1px solid rgba(#000, 0.1);
  padding-bottom: 24px;
  margin-top: 7px;
  .img {
    margin: 0;
    height: 80px;
    width: 80px;
    margin-right: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .detail {
    header {
      h3 {
        font-size: 14px;
        font-weight: 900;
        letter-spacing: 0.1px;
        line-height: 18px;
        margin: 0;
        padding-top: 6px;
        margin-bottom: 3px;
      }
      span {
        opacity: 0.6;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.25px;
        line-height: 12px;
        display: block;
        margin-bottom: 14px;
      }
    }
    .price {
      opacity: 0.8;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.1px;
      line-height: 18px;
    }
  }
}

.group {
  display: flex;
  justify-content: space-between;
  padding: 24px 0 20px 0;
  border-bottom: 1px solid rgba(#000, 0.1);
  &:last-child {
    border-bottom: none;
  }
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.1px;
  line-height: 18px;
  i {
    opacity: 0.4;
  }
}

.fav-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-top: 1px solid rgba(#000, 0.1);
  cursor: pointer;
  .detail {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.1px;
    line-height: 18px;
    i {
      margin-right: 10px;
    }
  }
  .ctrl {
    opacity: 0.4;
  }
}

.form {
  input {
    -webkit-appearance: none;
    padding: 14px 0;
    border: none;
    background: #fff;
    display: block;
    width: 100%;
    border-bottom: 1px solid rgba(#000, 0.1);
    margin-bottom: 24px;
    color: #111215;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 0.23px;
    line-height: 28px;
    &::placeholder {
        opacity: .4;
    }
  }
}

.add-ctrl {
    display: flex;
    justify-content: flex-end;
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

.order-meta {
    padding: 24px 0;
    border-top: 1px solid rgba(#000, .1);
    .d-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 14px;
        > * {
            &:first-child {
                	font-size: 14px;	font-weight: 500;	letter-spacing: 0.1px;	line-height: 18px;
            }
            &:last-child {
                	font-size: 14px;	font-weight: 600;	letter-spacing: 0.1px;	line-height: 18px;
            }
        }
        &:last-child {
            margin-bottom:0;
        }
    }
    .total {
        margin-top: 24px;
        padding-top: 20px;
        border-top: 1px solid rgba(#000, .1);
        .d-row {
        > * {
            &:first-child {
                	font-size: 14px;	font-weight: bold;	letter-spacing: 0.5px;	line-height: 24px; text-transform: uppercase;
            }
            &:last-child {
                font-size: 24px;	font-weight: 500;	letter-spacing: -0.3px;	line-height: 24px;
            }
        }
        }
    }
}
</style>
