<template>
    <div class="onboarding-payment">
        <div class="payment-head">
            <h1>Excellent Choice</h1>
            <p>Last step, then you’ll be ready to start selling.</p>
        </div>
        <div class="payment-form form">
            <header class="label">Card Number</header>
        <div class="form-row">
            <input type="number" class="input">
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">Expiration</header>
                <input type="date" class="input" placeholder="12/20">
            </div>
            <div>
                <header class="label">CVV</header>
                <input type="number" class="input" placeholder="cvv">
            </div>
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">First Name On Card</header>
                <input type="text" class="input" name="" id="">
            </div>
            <div>
                <header class="label">Last Name On Card</header>
                <input type="text" class="input" name="" id="">
            </div>
        </div>
        <div class="form-row">
            <header class="label">
                Billing Street Address
            </header>
            <input type="text" placeholder="1111 E. 22nd St" class="input">
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">City</header>
                <input type="text" class="input" name="" id="">
            </div>
            <div>
                <header class="label">Postal / Zip Code</header>
                <input type="text" class="input" name="" id="">
            </div>
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">Country</header>
                <select class="select">
                    <option value="United States">United States</option>
                </select>
            </div>
            <div>
                <header class="label">State</header>
                <select class="select">
                    <option value="California">California</option>
                </select>
            </div>
        </div>
        </div>
        <div class="payment-foot">
            <div class="left">
                <button @click="back" class="btn text-btn">
                <i class="material-icons">chevron_left</i>Back
                </button>
            </div>
            <div class="right">
                <button @click="confirm" class="btn btn-primary">Next</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'onboarding_payment',
    methods: {
        back() {
            this.$router.go(-1);
        },
        next() {
            this.$router.push('/');
        },
        confirm() {
            this.$store.dispatch('confirmSubscriptionModal');
        }
    }
}
</script>

<style lang="scss" scoped>
.onboarding-payment {
  border: 1px solid rgba(17, 18, 21, 0.1);
  border-radius: 2px;
  background-color: #ffffff;
  max-width: 905px;
  margin: 72px auto;
}

.payment-head {
  padding: 50px 88px 0 88px;
  text-align: center;
  @media(max-width: 1000px) {
      padding: 16px 24px 0 24px;
  }
  h1 {
    margin: 0;
    font-size: 34px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 38px;
  }
  p {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }
}

.payment-foot {
  display: flex;
  justify-content: space-between;
  padding: 24px 72px 24px 72px;
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
      width: 144px;
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

select {
    height: 48px;
}

.payment-form {
    padding: 80px 72px 0 72px;
    @media(max-width: 1000px) {
        padding: 12px 24px 0 24px;
    }
}
</style>
