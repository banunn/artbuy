<template>
    <div class="user-payment-method">
        <header class="label">Payment Method</header>
        <div class="form-row">
            <input type="number" class="input sm">
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">Expiration</header>
                <input type="date" class="input sm" placeholder="12/20">
            </div>
            <div>
                <header class="label">CVV</header>
                <input type="number" class="input sm" placeholder="cvv">
            </div>
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">First Name On Card</header>
                <input type="text" class="input sm" name="" id="">
            </div>
            <div>
                <header class="label">Last Name On Card</header>
                <input type="text" class="input sm" name="" id="">
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
                <input type="text" class="input sm" name="" id="">
            </div>
            <div>
                <header class="label">Postal / Zip Code</header>
                <input type="text" class="input sm" name="" id="">
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
        <footer class="foot">
            <button class="btn btn-light">Remove</button>
            <button class="btn btn-dark">Update Payment Method</button>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'user_payment_method'
}
</script>

<style lang="scss" scoped>
    .user-payment-method {
        background: #fff;
        border-radius: 2px;
        border: 1px solid rgba(17,18,21,0.1);
        padding: 20px 16px;
        margin-bottom: 16px;
        .label {
            margin-bottom: 12px;
        }
    }

    .foot {
        display: flex;
        justify-content: flex-end;
        padding-top: 24px;
        margin-top: 24px;
        border-top: 1px solid #E8EAEB;
        button {
            -webkit-appearance: none;
            border-radius: 2px;
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
</style>
