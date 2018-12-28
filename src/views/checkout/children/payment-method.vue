<template>
    <div class="payment-method">
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
        <div class="checkout-foot">
            <button @click="$router.push('/')" class="btn text-btn"><i class="material-icons">chevron_left</i> Continue Shopping</button>
            <button @click="$router.push({name: 'checkout complete'})" class="btn btn-primary">Complete Purchase</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'payment_method'
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
</style>
