<template>
    <div class="checkout-page">
        <div class="main">
            <header v-if="!completeScreen">
                <h1>Checkout</h1>
                <router-link class="link" :to="{name: 'checkout customer information'}">Customer Information</router-link>
                <router-link class="link" :to="{name: 'checkout shipping method'}">Shipping Method</router-link>
                <router-link class="link" :to="{name: 'checkout payment method'}">Payment Method</router-link>
            </header>
            <header v-else>
                <h1>Purchase Complete</h1>
                <button @click="$router.push('/')" class="text-btn"><i class="material-icons">chevron_left</i> continue shopping</button>
            </header>
            <router-view></router-view>
        </div>
        <div class="sidebar">
            <checkout-cart></checkout-cart>
        </div>
    </div>
</template>

<script>
import checkoutCart from '@/components/checkout/cart'
export default {
    name: 'checkout-page',
    components: {
        checkoutCart
    },
    computed: {
        cartItems() {
            return this.$store.getters.userCart.items;
        },
        completeScreen() {
            return this.$route.name === "checkout complete";
        }
    }
}
</script>

<style lang="scss" scoped>
    .link {
        text-transform: uppercase;
	    font-size: 9px;
        font-weight: 600;	
        letter-spacing: 0.9px;
        line-height: 12px;
        color: rgba(#111215, .6);
        text-decoration: none;
        &:after {
            content: '/';
            margin-left: 4px;
            padding-right: 4px;
            text-decoration: none;
        }
        &:last-child {
            &::after {
                display: none;
            }
        }
        &.router-link-exact-active {
            text-decoration: underline;
            color: #111215;
            &:after {
                text-decoration: none;
            }
        }
    }

    .checkout-page {
        display: flex;
        min-height: calc(100vh - 64px);
        .main {
            flex: 5;
            box-shadow: inset -1px 0 0 0 #E8ECED;
            padding: 42px 42px 42px 96px;
            header {
                margin-bottom: 56px;
                h1 {
                    margin:0;
                    margin-bottom: 8px;
                    font-size: 24px;	
                    font-weight: bold;
                    letter-spacing: 0.17px;	
                    line-height: 28px;
                }
            }
        }
        .sidebar {
            flex:3;
            background-color: #F5F7F7;
            padding: 48px;
        }
    }

    .text-btn {
        display: inline-flex;
        align-items: center;
        background: none;
        border: none;
        -webkit-appearance: none;
        text-transform: uppercase;
        font-size: 9px;	font-weight: 600;	letter-spacing: 0.9px;	line-height: 12px;
        i {
            position: relative;
            top:-1px;
            font-size: 18px;
        }
    }
</style>
