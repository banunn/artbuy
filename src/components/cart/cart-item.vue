<template>
    <div class="cart-item" :class="{'checkout-item': checkout}">
        <figure class="cart-img">
            <div class="overlay">
                <button @click="removeItem" class="remove">remove</button>
            </div>
            <img :src="item.art.photoUrl" alt="">
        </figure>
        <footer class="foot">
            <div class="detail">
                <header>{{item.art.name}}</header>
                <span>{{'by ' + item.author.name}}</span>
            </div>
            <div class="price">
                <span>{{item.art.price | currency}}</span>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'cart-item',
    props: {
        item: Object,
        checkout: Boolean
    },
    methods: {
        removeItem() {
            var item = this.item;
            return this.$store.dispatch('removeItemFromCart', item);
        }
    }
}
</script>

<style lang="scss" scoped>
    .cart-item {
        .cart-img {
            height: 288px;	
            width: 288px;
            overflow: hidden;
            position: relative;
            .overlay {
                position: absolute;
                top:0;
                right:0;
                bottom:0;
                left:0;
                background: rgba(#000, .35);
                z-index: 2;
                opacity: 0;
                transition: opacity .23s ease;
                &:hover {
                    opacity: 1;
                }
                button {
                    display: inline-flex;
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    background: rgba(#fff, .6);
                    border: none;
                    border-radius: 15px;
                    padding: 6px 12px;
                    font-size: 9px;	
                    font-weight: bold;	
                    letter-spacing: 0.9px;	
                    line-height: 12px;
                    text-transform: uppercase;
                    transition: opacity .23s ease;
                    &:hover {
                        background: rgba(#fff, .85);
                    }
                }
            }
            img {
                position: relative;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        .foot {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #E8EAEB;
            .detail {
                header {
                    	font-size: 14px;	font-weight: 600;	letter-spacing: 0.1px;	line-height: 18px;
                }
                span {
                    	opacity: 0.8;	color: #111215;	font-size: 12px;	letter-spacing: 0.5px;	line-height: 12px;
                }
            }
            .price {
                display: flex;
                align-items: flex-end;
                	font-size: 14px;	font-weight: 600;	letter-spacing: 0.1px;	line-height: 18px;
            }
        }

        &.checkout-item {
            display: flex;
            padding-bottom: 24px;
            margin-bottom: 24px;
            border-bottom: 1px solid #E8EAEB;
                    .cart-img {
                        height: 144px;	
                        min-width: 144px;
                        max-width: 144px;
                        overflow: hidden;
                        position: relative;
                        margin-right: 14px;
                        .overlay {
                            position: absolute;
                            top:0;
                            right:0;
                            bottom:0;
                            left:0;
                            background: rgba(#000, .35);
                            z-index: 2;
                            opacity: 0;
                            transition: opacity .23s ease;
                            &:hover {
                                opacity: 1;
                            }
                            button {
                                display: inline-flex;
                                position: absolute;
                                top: 12px;
                                right: 12px;
                                background: rgba(#fff, .6);
                                border: none;
                                border-radius: 15px;
                                padding: 6px 12px;
                                font-size: 9px;	
                                font-weight: bold;	
                                letter-spacing: 0.9px;	
                                line-height: 12px;
                                text-transform: uppercase;
                                transition: opacity .23s ease;
                                &:hover {
                                    background: rgba(#fff, .85);
                                }
                            }
                        }
                        img {
                            position: relative;
                            height: 144px;
                            width: 144px;
                            object-fit: cover;
                        }
                    }
                            .foot {
                                width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: none;
            align-items: flex-end;
            .detail {
                header {
                    	font-size: 14px;	font-weight: 600;	letter-spacing: 0.1px;	line-height: 18px;
                }
                span {
                    	opacity: 0.8;	color: #111215;	font-size: 12px;	letter-spacing: 0.5px;	line-height: 12px;
                }
            }
            .price {
                display: flex;
                align-items: flex-end;
                	font-size: 14px;	font-weight: 600;	letter-spacing: 0.1px;	line-height: 18px;
            }
        }
        }
    }
</style>
