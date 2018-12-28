<template>
    <div class="cart">
        <div class="list">
            <cart-item :checkout="true" :item="i" v-for="(i, index) in items" :key="index"></cart-item>
        </div>
        <footer class="details">
            <div class="dl-data">
                <span>Subtotal</span>
                <span>{{subTotal | currency}}</span>
            </div>
            <div class="dl-data">
                <span>Taxes</span>
                <span>{{taxes | currency}}</span>
            </div>
            <div class="dl-data">
                <span>Shipping</span>
                <span>{{shipping | currency}}</span>
            </div>
        </footer>
        <footer class="total">
            <span class="title">Total</span>
            <span class="price">{{subTotal + taxes + shipping | currency}}</span>
        </footer>
    </div>
</template>

<script>
import cartItem from '@/components/cart/cart-item'
export default {
    name: 'checkout-cart',
    components: {
        cartItem
    },
    computed: {
        items() {
            return this.$store.getters.userCart.items;
        },
        subTotal() {
            return this.$store.getters.cartTotal;
        },
        taxes() {
            return this.$store.getters.cartTaxTotal;
        },
        shipping() {
            return this.$store.getters.cartShippingTotal;
        }
    }
}
</script>

<style lang="scss" scoped>

.details {
    padding-top: 24px;
    .dl-data {
        margin-bottom: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;	font-weight: 500;	letter-spacing: 0.1px;	line-height: 18px;
    }
}

.total {
    margin-top: 14px;
    padding-top: 24px;
    border-top: 1px solid #E8EAEB;
    display: flex;
    justify-content: space-between;
    .title {
        font-size: 14px;	
        font-weight: bold;	
        letter-spacing: 0.5px;	
        line-height: 24px;
        text-transform: uppercase;
    }
    .price {
        	font-size: 24px;	font-weight: 500;	letter-spacing: -0.3px;	line-height: 24px;
    }
}

</style>
