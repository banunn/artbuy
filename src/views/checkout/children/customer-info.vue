<template>
    <div class="customer-info">
        <div class="form">
            <div class="form-row">
                <div>
                    <header class="label">Contact Information</header>
                    <input type="email" class="input" placeholder="Email" name="" id="">
                </div>
            </div>
            <div class="form-row flex">
                <div>
                    <header class="label">First Name</header>
                    <input type="text" placeholder="John" class="input">
                </div>
                <div>
                    <header class="label">Last Name</header>
                    <input type="text" placeholder="Doe" class="input">
                </div>
            </div>
            <div class="form-row">
                <div>
                    <header class="label">Shipping Street Address</header>
                    <input type="text" name="" id="" class="input">
                </div>
            </div>
            <div class="form-row flex">
                <div>
                    <header class="label">City</header>
                    <input type="text" class="input">
                </div>
                <div>
                    <header class="label">Postal / Zip Code</header>
                    <input type="text" class="input">
                </div>
            </div>
            <div class="form-row flex">
                <div>
                    <header class="label">Country</header>
                    <input type="text" class="input">
                </div>
                <div>
                    <header class="label">Region</header>
                    <input type="text" class="input">
                </div>
            </div>
        </div>
        <div class="checkout-foot">
            <button @click="$router.push('/')" class="btn text-btn"><i class="material-icons">chevron_left</i> Continue Shopping</button>
            <button @click="$router.push({name: 'checkout shipping method'})" class="btn btn-primary">Continue to Shipping Method</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'customer_info'
}
</script>

<style lang="scss" scoped>
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