<template>
  <div class="donation-wrap">
    <header class="head">Amount</header>
    <div @click="select(a)" v-for="(a, index) in amounts" :key="index" class="amount">
      <i class="material-icons">{{selected === a ? "radio_button_checked" :  "radio_button_unchecked"}}</i>
      <span>{{currencySymbol + a}}</span>
    </div>
    <div @click="select('custom')" class="amount">
        <i class="material-icons">{{selected === 'custom' ? "radio_button_checked" :  "radio_button_unchecked"}}</i>
        <input type="number" placeholder="Custom Amount">
    </div>
  </div>
</template>

<script>
export default {
  name: "payment_amount",
  data() {
    return {
      selected: null,
      amounts: ["25.00", "50.00", "75.00", "100.00"],
      currencySymbol: "$"
    };
  },
  methods: {
      select(arg) {
          this.selected = arg;
      }
  }
};
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

.amount {
  padding: 24px 24px 24px 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.58px;
  line-height: 18px;
  border-bottom: 1px solid rgba(#000,.1);
  i {
      margin-right: 10px;
  }
  input {
      border: none;
  }
}
</style>
