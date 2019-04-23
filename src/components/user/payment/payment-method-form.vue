<template>
    <div class="p-form">
        <div class="form-row">
            <header class="label">
                Card Number
            </header>
            <div>
                <input v-model="method.cardNumber" type="number" name="" id="" class="card-number input sm">
            </div>
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">Expiration</header>
                <input v-model="method.expiration" type="date" class="input sm" placeholder="12/20">
            </div>
            <div>
                <header class="label">CVV</header>
                <input v-model="method.cvv" type="number" class="input sm" placeholder="cvv">
            </div>
        </div>
        <div class="form-row">
            <div>
                <header class="label">Name On Card</header>
                <input v-model="method.name" type="text" class="input sm" name="" id="">
            </div>
        </div>
        <div class="form-row">
            <header class="label">
                Billing Street Address
            </header>
            <input v-model="method.billingAddress" type="text" placeholder="1111 E. 22nd St" class="input">
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">City</header>
                <input v-model="method.city" type="text" class="input sm" name="" id="">
            </div>
            <div>
                <header class="label">Postal / Zip Code</header>
                <input v-model="method.postalCode" type="text" class="input sm" name="" id="">
            </div>
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">Country</header>
                <select v-model="method.country" class="select">
                    <option value="United States">United States</option>
                </select>
            </div>
            <div>
                <header class="label">State</header>
                <select v-model="method.region" class="select">
                    <option value="California">California</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import Cleave from 'vue-cleave'
export default {
    name: 'payment_method_form',
    props: {
        method: Object
    },
    components: {
        Cleave
    },

}
</script>

<style lang="scss" scoped>
    .label {
        margin-bottom: 12px;
    }
</style>
