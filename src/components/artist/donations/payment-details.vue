<template>
    <div class="donation-wrap">
        <div class="form-row">
            <div>
                <header class="label">Name</header>
                <input v-model="user.name" type="text" class="input sm" name="" id="">
            </div>
        </div>
        <div class="form-row">
            <header class="label">
                Street Address
            </header>
            <input v-model="user.billingAddress" type="text" placeholder="1111 E. 22nd St" class="input">
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">City</header>
                <input v-model="user.city" type="text" class="input sm" name="" id="">
            </div>
            <div>
                <header class="label">Postal / Zip Code</header>
                <input v-model="user.postalCode" type="text" class="input sm" name="" id="">
            </div>
        </div>
        <div class="form-row flex">
            <div>
                <header class="label">Country</header>
                <select v-model="user.country" class="select">
                    <option value="United States">United States</option>
                </select>
            </div>
            <div>
                <header class="label">State</header>
                <select v-model="user.region" class="select">
                    <option value="California">California</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'payment_method',
    data() {
        return {
            user: {
                name: '',
                billingAddress: '',
                city: '',
                postalCode: '',
                country: '',
                region: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .label {
        margin-bottom: 11px;
    }
</style>
