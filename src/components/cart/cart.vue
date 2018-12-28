<template>
    <div class="cart-wrap">
    <transition name="fade">  
        <div v-if="open" class="overlay"></div>
    </transition>
    <transition name="slide">  
    <div v-if="open" class="cart">
        <header class="head">
            <span>CART {{'(' + cartItems.length  +')'}}</span>
            <button @click="close" class="icon-btn"><i class="material-icons">clear</i></button>
        </header>
        <div class="cart-body">
            <cart-item v-for="(i, index) in cartItems" :key="index" :item="i"></cart-item>
        </div>
        <div class="foot">
            <header>
                <span class="sub">Subtotal</span>
                <span class="price">{{cartTotal | currency}}</span>
            </header>
            <router-link @click.native="close" tag="button" class="btn-block-primary" :to="{name: 'checkout customer information'}">Checkout</router-link>
        </div>
    </div>
    </transition>
    </div>
</template>

<script>
import cartItem from './cart-item'
export default {
    name: 'cart',
    components: {
        cartItem
    },
    computed: {
        open() {
            return this.$store.getters.userCart.open;
        },
        cartItems() {
            return this.$store.getters.userCart.items;
        },
        cartTotal() {
            return this.$store.getters.cartTotal;
        }
    },
    methods: {
        close() {
            return this.$store.dispatch('closeCart');
        }
    }
}
</script>

<style lang="scss" scoped>
.overlay {
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background: rgba(#111215, .5);
    z-index: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .cart {
        background-color: #F5F7F7;
        position: fixed;
        top:0;
        bottom:0;
        right:0;
        width: 336px;
        z-index: 800;
        display: flex;
        flex-direction: column;
        box-shadow: inset 1px 0 0 0 #E8ECED;

        .head {
            height: 64px;	
            background-color: #FFFFFF;	
            box-shadow: inset 0 -1px 0 0 #E3E7E8;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 24px;
            span {
                font-size: 12px;	font-weight: 500;	letter-spacing: 2px;	line-height: 18px;
            }
        }
        .cart-body {
            flex:1;
            padding: 24px;
            max-height: calc(100vh - 200px);
            overflow-y: auto;
        }
        .foot {
            box-shadow: inset 0 -1px 0 0 #E3E7E8, 0 -2px 4px 0 rgba(17,18,21,0.2);
            padding: 24px;
            header {
                margin-bottom: 16px;
                display: flex;
                justify-content: space-between;
                .sub {
                   	font-size: 14px;	letter-spacing: 0.5px;	line-height: 24px; text-transform: uppercase;
                }
                .price {
                    font-size: 24px;	font-weight: 500;	letter-spacing: -0.3px;	line-height: 24px;
                }
            }
        }
    }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.slide-enter-active,
.slide-leave-active {
  transition: transform 0.55s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: translate3d(0, 0%, 0);
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate3d(100%, 0, 0);
}
</style>
